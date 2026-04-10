import axios, { type AxiosResponse } from "axios";
import type { Locale } from "~/types/common.types";

/**
 * Transforms an object into a query parameters string.
 * @param obj The object to be transformed.
 * @returns The query parameters string.
 */
function objectToQueryString(
  obj: Record<string, string | number | boolean>,
): string {
  return Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join("&");
}

/**
 * Implements a data fetcher using Axios.
 * @param path The URI path to request; may include query string.
 * @param method The HTTP method for the request.
 * @param data Optional data to POST with the request.
 * @returns The Axios response promise.
 */
export function dataFetcher(
  path: string,
  method: string,
  data?: object,
): Promise<AxiosResponse> {
  const config = useRuntimeConfig();
  //const authStore = useAuthStore();
  const globalLocale = useState<Locale>("global-locale");

  const baseUrl = config.public.apiBaseUrl;
  const url = baseUrl + path;
  //const token = authStore.getToken;
  const isFormData =
    typeof FormData !== "undefined" && data instanceof FormData;

  // Sets cookies from browser to server-side requests
  // because of authentication and session management
  const headers: Record<string, string> = {
    Locale: globalLocale.value,
    Auth: config.public.apiHeaderId as string,
  };

  // if (token) {
  //   headers["Authorization"] = `Bearer ${token}`;
  // }

  if (import.meta.server && typeof useRequestHeaders === "function") {
    const requestHeaders: Readonly<Record<string, string>> =
      useRequestHeaders();

    if (!isFormData) {
      headers["Content-Type"] = "application/json";
    }

    if (requestHeaders.Cookie) {
      headers.Cookie = requestHeaders.Cookie;
    }

    if (requestHeaders["User-Agent"]) {
      headers["User-Agent"] = requestHeaders["User-Agent"];
    }

    if (requestHeaders["x-forwarded-for"]) {
      headers["x-forwarded-for"] = requestHeaders["x-forwarded-for"];
    }

    if (requestHeaders["x-real-ip"]) {
      headers["x-real-ip"] = requestHeaders["x-real-ip"];
    }
  }

  return axios({
    url,
    method,
    data,
    headers,
    withCredentials: true,
  });
}

/**
 * Sends a GET request to the API.
 * @param path The URI path to the request.
 * @param data Optional data to include in the request.
 * @returns The Axios response promise.
 */
export function apiGet(path: string, data?: object): Promise<AxiosResponse> {
  let queryParams = data;

  // If there's a params property, use that instead
  if (
    data &&
    "params" in data &&
    typeof data.params === "object" &&
    data.params !== null
  ) {
    queryParams = data.params;
  }

  const queryString = queryParams
    ? "?" +
      objectToQueryString(
        queryParams as Record<string, string | number | boolean>,
      )
    : "";

  return dataFetcher(path + queryString, "GET");
}

/**
 * Sends a POST request to the API.
 * @param path The URI path to the request.
 * @param data Optional data to include in the request body.
 * @returns The Axios response promise.
 */
export function apiPost(path: string, data?: object): Promise<AxiosResponse> {
  return dataFetcher(path, "POST", data);
}

/**
 * Sends a PUT request to the API.
 * @param path The URI path to the request.
 * @param data Optional data to include in the request body.
 * @returns The Axios response promise.
 */
export function apiPut(path: string, data?: object): Promise<AxiosResponse> {
  return dataFetcher(path, "PUT", data);
}

/**
 * Sends a DELETE request to the API.
 * @param path The URI path to the request.
 * @param data Optional data to include in the request body.
 * @returns The Axios response promise.
 */
export function apiDelete(path: string, data?: object): Promise<AxiosResponse> {
  return dataFetcher(path, "DELETE", data);
}
