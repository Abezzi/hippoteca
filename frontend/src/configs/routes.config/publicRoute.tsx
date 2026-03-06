import { lazy } from "react";
import type { Routes } from "@/@types/routes";

const publicRoute: Routes = [
  {
    key: "index",
    path: `/index`,
    component: lazy(() => import("@/views/public/Index")),
    authority: [],
    meta: {
      layout: "blank",
    },
  },
];

export default publicRoute;
