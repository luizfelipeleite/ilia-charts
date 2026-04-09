import React from "react";
import RealtimePreviewPath from "~/assets/images/realtime.svg";
import BarPreviewPath from "~/assets/images/bar.svg";
import LinePreviewPath from "~/assets/images/line.svg";
import RadarPreviewPath from "~/assets/images/radar.svg";

export const chartItems = [
  {
    label: "Realtime",
    preview: <img src={RealtimePreviewPath} className="w-full h-full" alt="Realtime Preview" />,
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-200 dark:border-amber-800",
    route: "/dashboard/realtime",
  },
  {
    label: "Bar",
    preview: <img src={BarPreviewPath} className="w-full h-full" alt="Bar Preview" />,
    color: "from-indigo-500/20 to-indigo-500/5",
    border: "border-indigo-200 dark:border-indigo-800",
    route: "/dashboard/bar",
  },
  {
    label: "Line / Area",
    preview: <img src={LinePreviewPath} className="w-full h-full" alt="Line Preview" />,
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-200 dark:border-cyan-800",
    route: "/dashboard/line",
  },
  {
    label: "Radar",
    preview: <img src={RadarPreviewPath} className="w-full h-full" alt="Radar Preview" />,
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-200 dark:border-emerald-800",
    route: "/dashboard/radar",
  },
];
