// import { requestRefresh } from "./utils.js";
//HTTP CLIENT
let isRequestRefresh = false;
export const client = {
  serverApi: null,
  headers: {},
  token: null,
  create: function ({ serverApi, token = null, headers = {} }) {
    this.serverApi = serverApi ?? this.serverApi;
    if (token) {
      this.token = token;
    }
    if (Object.keys(headers)) {
      this.headers = { "Content-Type": "application/json", ...headers };
    } else {
      this.headers = { "Content-Type": "application/json" };
    }
  },
  send: async function (path, method = "GET", body = null) {
    const url = `${this.serverApi}${path}`;

    if (this.token) {
      this.headers["Authorization"] = `Bearer ${this.token}`;
    }
    const options = {
      method,
      headers: this.headers,
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);
    //Cấp lại accessToken mới chỉ xử lý khi
    //1. Có sử dụng token
    //2. Khi token hết hạn
    console.log(path);

    if (this.token && response.status === 401) {
      if (!isRequestRefresh) {
        const newToken = await this.requestRefresh(); //new accessToken, new refreshToken
        if (newToken) {
          //Lưu token vào localStorage
          localStorage.setItem("login_token", JSON.stringify(newToken));
          //Gọi lại request bị miss --> Unauthorize
          this.token = newToken.access_token; //Gửi lại request với token mới
          return this.send(path, method, body);
        }
      }
      return false;
    }
    const data = await response.json();
    return { response, data };
  },
  get: function (url) {
    return this.send(url);
  },
  post: function (url, body) {
    return this.send(url, "POST", body);
  },
  put: function (url, body) {
    return this.send(url, "PUT", body);
  },
  patch: function (url, body) {
    return this.send(url, "PATCH", body);
  },
  delete: function (url) {
    return this.send(url, "DELETE", body);
  },
  requestRefresh: async function () {
    const token = localStorage.getItem("login_token");
    try {
      const { refresh_token: refreshToken } = JSON.parse(token);
      isRequestRefresh = true;
      const { response, data } = await this.post("/auth/refresh-token", {
        refreshToken,
      });
      if (!response.ok) {
        throw new Error("Unauthorize");
      }

      return data;
    } catch (e) {
      return false;
    }
  },
};
