import { lazy } from "react";
import type { Routes } from "@/@types/routes";

const personasRoute: Routes = [
  {
    key: "people",
    path: `/people/dashboard`,
    component: lazy(() => import("@/views/people/Dashboard")),
    authority: [],
  },
  {
    key: "people",
    path: `/people/users`,
    component: lazy(() => import("@/views/people/Users")),
    authority: [],
  },
];

export default personasRoute;
