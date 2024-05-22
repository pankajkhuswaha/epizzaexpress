import axios, { AxiosRequestConfig } from "axios";

const fetchApi = async <T,>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  endpoint: string,
  body?: any,
  headers?: Record<string, string>
) => {
  const config: AxiosRequestConfig = {
    method,
    url: endpoint,
    data: body,
    headers,
  };
  try {
    const res = await axios<T>(config);
    return res.data;
  } catch (err) {
    const error = err as any;
    throw error.response.data
      ? error.response.data
      : { message: error.message };
  }
};

export default fetchApi;
