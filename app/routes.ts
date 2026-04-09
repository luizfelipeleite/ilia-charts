import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./components/Layout/Layout.tsx", [
    index("routes/home.tsx"),
    route("dashboard", "./routes/dashboard.tsx", [
      route("realtime", "./routes/realtime.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
