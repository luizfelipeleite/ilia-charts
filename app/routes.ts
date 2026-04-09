import {
  type RouteConfig,
  index,
  layout,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("./components/layout/Layout.tsx", [
    index("routes/Home.tsx"),
    ...prefix("dashboard", [
      route("bar", "./routes/dashboards/Bar.tsx"),
      route("line", "./routes/dashboards/Line.tsx"),
      route("radar", "./routes/dashboards/Radar.tsx"),
      route("realtime", "./routes/dashboards/Realtime.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
