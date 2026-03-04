import { lazy } from "react";
import authRoute from "./authRoute";
import type { Routes } from "@/@types/routes";
import publicRoute from "./publicRoute";
import personasRoute from "./personasRoute";

export const publicRoutes: Routes = [...authRoute, ...publicRoute];

export const protectedRoutes = [
  ...personasRoute,
  {
    key: "protectedHome",
    path: "/home",
    component: lazy(() => import("@/views/Home")),
    authority: [],
  },
];
