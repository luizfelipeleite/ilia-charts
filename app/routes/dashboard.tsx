import { Outlet } from "react-router";

export function meta() {
  return [
    { title: "ília Charts - Dashboards" },
    {
      name: "description",
      content: "Data visualization dashboards",
    },
  ];
}

export default function Dashboard() {
  return <Outlet />;
}
