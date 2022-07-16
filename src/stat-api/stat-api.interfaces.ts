export interface StatApiResponse<R = unknown> {
  status: string;
  result: R;
}

export interface StatApiExecResponse<R = unknown> {
  status: string;
  return?: R;
  error?: string;
}
