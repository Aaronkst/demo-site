import axios, { AxiosResponse } from "axios";
import { Status } from "../constants";

type ISuccess = {
  status: Status.success;
  data: any;
};

type IError = {
  status: Status.error;
  message: string;
};

export const mockTest = async () => {
  return true;
};

export const privateApi = async (
  path: string,
  payload: any,
  basic: string = ""
): Promise<ISuccess | IError> => {
  try {
    const headers = {
      Authorization: basic
        ? `Bearer ${basic}`
        : `Bearer ${localStorage.get("access_token")}`,
    };
    const resp: AxiosResponse = await axios.post(
      process.env.BASE_URL + path,
      payload,
      {
        headers,
      }
    );
    return {
      status: Status.success,
      data: resp.data,
    };
  } catch (e: any) {
    return {
      status: Status.error,
      message: e.message,
    };
  }
};

export const publicApi = async (
  path: string,
  payload: any
): Promise<ISuccess | IError> => {
  try {
    const resp: AxiosResponse = await axios.post(
      process.env.BASE_URL + path,
      payload
    );
    return {
      status: Status.success,
      data: resp.data,
    };
  } catch (e: any) {
    return {
      status: Status.error,
      message: e.message,
    };
  }
};
