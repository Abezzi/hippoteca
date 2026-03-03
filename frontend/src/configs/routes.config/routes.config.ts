import { lazy } from "react";
import authRoute from "./authRoute";
import type { Routes } from "@/@types/routes";
import publicRoute from "./publicRoute";

export const publicRoutes: Routes = [...authRoute, ...publicRoute];

export const protectedRoutes = [
  {
    key: "protectedHome",
    path: "/home",
    component: lazy(() => import("@/views/Home")),
    authority: [],
  },
];
