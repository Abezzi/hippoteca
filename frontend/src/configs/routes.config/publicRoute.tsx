import { lazy } from "react";
import type { Routes } from "@/@types/routes";

const publicRoute: Routes = [
  {
    key: "publicHome",
    path: `/`,
    component: lazy(() => import("@/views/public/Home")),
    authority: [],
  },
];

export default publicRoute;
