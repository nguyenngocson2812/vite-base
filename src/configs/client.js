import SERVER_API from "./config";

export default class HttpClient {
  constructor(serverApi = SERVER_API) {
    this.serverApi = serverApi;
  }

  async callApi(url, method = "GET", params = {}, body = {}, token = null) {
    url = this.serverApi + url;

    // Handle URL parameters more efficiently
    const urlParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => urlParams.append(key, value));
    if (urlParams.toString()) {
      url += `?${urlParams.toString()}`;
    }

    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Add token header if provided
    if (token) {
      options.headers["X-Api-Key"] = token;
    }

    // Add body if provided
    if (Object.keys(body).length) {
      options.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        return { response, data };
      } else {
        throw new Error(`API request failed with status ${response.status}: ${data.message}`);
      }
    } catch (error) {
      console.error("API request error:", error);
      return { response: null, data: { message: "An error occurred" } };
    }
  }

  get(url, params = {}, token = null) {
    return this.callApi(url, "GET", params, {}, token);
  }
}