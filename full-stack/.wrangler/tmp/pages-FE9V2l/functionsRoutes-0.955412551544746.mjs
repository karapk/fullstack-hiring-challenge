import { onRequestGet as __api_users_ts_onRequestGet } from "/Users/kk/Projects/fullstack-hiring-challenge/full-stack/functions/api/users.ts"

export const routes = [
    {
      routePath: "/api/users",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_users_ts_onRequestGet],
    },
  ]