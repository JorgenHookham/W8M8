import { WorkoutPlan } from "./_interface";
import WorkoutPlansEndpoint from "./apis/workout-plans";
import { Dispatch, Action } from "redux";

// UI Actions

export interface ActivateWorkoutPlanAction {
  type: typeof ACTIVATE_WORKOUT_PLAN;
  workoutPlanId: WorkoutPlan["id"]
}

export const ACTIVATE_WORKOUT_PLAN = "ACTIVATE_WORKOUT_PLAN";
export function activateWorkoutPlan (workoutPlanId: WorkoutPlan["id"]): ActivateWorkoutPlanAction {
  return {
    type: ACTIVATE_WORKOUT_PLAN,
    workoutPlanId
  }
}

// API Actions

export interface FetchWorkoutPlansRequestAction {
  type: typeof FETCH_WORKOUT_PLANS_REQUEST;
}

export const FETCH_WORKOUT_PLANS_REQUEST = "FETCH_WORKOUT_PLANS_REQUEST";
export function fetchWorkoutPlansRequest () {
  return {
    type: FETCH_WORKOUT_PLANS_REQUEST
  }
}

// -

export interface FetchWorkoutPlansSuccessAction {
  type: typeof FETCH_WORKOUT_PLANS_SUCCESS;
  workoutPlans: WorkoutPlan[];
  receivedAt: number;
}

export const FETCH_WORKOUT_PLANS_SUCCESS = "FETCH_WORKOUT_PLANS_SUCCESS";
export function fetchWorkoutPlansSuccess (response: WorkoutPlan[]): FetchWorkoutPlansSuccessAction {
  return {
    type: FETCH_WORKOUT_PLANS_SUCCESS,
    workoutPlans: response,
    receivedAt: Date.now(),
  }
}

// -

export interface FetchWorkoutPlansFailureAction {
  type: typeof FETCH_WORKOUT_PLANS_FAILURE;
}

export const FETCH_WORKOUT_PLANS_FAILURE = "FETCH_WORKOUT_PLANS_FAILURE";
export function fetchWorkoutPlansFailure () {
  return {
    type: FETCH_WORKOUT_PLANS_FAILURE
  }
}

// -

export interface InvalidateWorkoutPlansAction {
  type: typeof INVALIDATE_WORKOUT_PLANS;
}

export const INVALIDATE_WORKOUT_PLANS = "INVALIDATE_WORKOUT_PLANS";
export function invalidateWorkoutPlans () {
  return {
    type: INVALIDATE_WORKOUT_PLANS
  }
}

export function fetchWorkoutPlans () {
  return function (dispatch: Dispatch): Promise<Action> {
    dispatch(fetchWorkoutPlansRequest());
    const api = new WorkoutPlansEndpoint();
    return api.read()
      .then(response => dispatch(fetchWorkoutPlansSuccess(response.json)))
  }
}

// All Actions

export type Actions = ActivateWorkoutPlanAction | FetchWorkoutPlansSuccessAction | FetchWorkoutPlansRequestAction | FetchWorkoutPlansFailureAction | InvalidateWorkoutPlansAction;