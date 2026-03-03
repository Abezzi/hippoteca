import { lazy } from "react";
import type { Routes } from "@/@types/routes";

const personasRoute: Routes = [
  {
    key: "signIn",
    path: `/sign-in`,
    component: lazy(() => import("@/views/auth/SignIn")),
    authority: [],
  },
];

export default personasRoute;
