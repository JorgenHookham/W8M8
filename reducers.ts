import {
  ACTIVATE_WORKOUT_PLAN,
  FETCH_WORKOUT_PLANS_REQUEST,
  INVALIDATE_WORKOUT_PLANS,
  FETCH_WORKOUT_PLANS_SUCCESS,
  Actions
} from "./actions";
import { AppState, WorkoutPlan, ById } from "./_interface";
import { combineReducers } from "redux";

const initialState: AppState = {
  activeWorkoutPlan: null,
  workoutPlans: {
    isFetching: false,
    didInvalidate: false,
    itemsById: [],
    items: [],
  },
  workoutLogs: {
    isFetching: false,
    didInvalidate: false,
    itemsById: [],
    items: [],
  },
};

function activeWorkoutPlan (state: AppState["activeWorkoutPlan"] = initialState.activeWorkoutPlan, action: Actions): AppState["activeWorkoutPlan"] {
  switch (action.type) {
    case ACTIVATE_WORKOUT_PLAN:
      return Object.assign({}, state, {
        activeWorkoutPlan: action.workoutPlanId
      });
    default:
      return state;
  }
}

function workoutPlans (state: AppState["workoutPlans"] = initialState.workoutPlans, action: Actions): AppState["workoutPlans"] {
  switch (action.type) {
    case INVALIDATE_WORKOUT_PLANS:
      return Object.assign({}, state, {
        didInvalidate: true,
      });
    case FETCH_WORKOUT_PLANS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case FETCH_WORKOUT_PLANS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: action.receivedAt,
        items: action.workoutPlans.map((workoutPlan): WorkoutPlan["id"] => workoutPlan.id),
        itemsById: action.workoutPlans.map((workoutPlan): ById<WorkoutPlan> => {
          return {
            id: workoutPlan.id,
            object: workoutPlan
          }
        }),
      });
    default:
      return state;
  }
}

const appReducer = combineReducers({
  activeWorkoutPlan,
  workoutPlans,
});

export default appReducer;