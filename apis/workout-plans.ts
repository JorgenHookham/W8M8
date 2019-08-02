import { WorkoutPlan } from "../_interface";
import { ApiResponse } from "./_interface";

export default class WorkoutPlansEndpoint {

  private url = "/workout-plans/";
  
  public create () {
    Error('Not Implemented')
  };

  public read (): Promise<ApiResponse<WorkoutPlan[]>> {
    const fetch = new Promise((resolve: (value: ApiResponse<WorkoutPlan[]>) => void) => {
      setTimeout(() => {
        resolve({
          status: "success",
          json: [
            {name: "Workout #1", id: "1"},
            {name: "Workout #2", id: "2"},
            {name: "Workout #3", id: "3"},
            {name: "Workout #4", id: "4"},
          ]
      });
      }, 1000)
    });
    return fetch;
  };

  public update () {
    Error('Not Implemented')
  };

  public destroy () {
    Error('Not Implemented')
  };

}