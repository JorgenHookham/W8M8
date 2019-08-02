export interface ApiResponse<T> {
  status: "success" | "failure";
  statusDetail?: string;
  json: T;
}