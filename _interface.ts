export type id = string;

export interface ById<T> {
  id: id;
  object: T;
}

// interface ApiListResource<T> {}

export interface WorkoutPlan {
  name: string;
  id: string;
}

export interface AppState {
  activeWorkoutPlan?: id;
  workoutPlans: {
    isFetching: boolean;
    didInvalidate: false;
    lastUpdated?: id;
    itemsById: ById<WorkoutPlan>[];
    items: id[];
  },
  workoutLogs: {
    isFetching: boolean;
    didInvalidate: false;
    lastUpdated?: id;
    itemsById: ById<{}>[];
    items: id[];
  };
}