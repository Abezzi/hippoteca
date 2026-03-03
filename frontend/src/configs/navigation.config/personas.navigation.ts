import type { NavigationTree } from "@/@types/navigation";
import { NAV_ITEM_TYPE_TITLE } from "@/constants/navigation.constant";
const personasNavigationConfig: NavigationTree[] = [
  {
    key: "personas",
    path: "/personas",
    title: "Personas",
    translateKey: "nav.personas.dashboard",
    icon: "home",
    type: NAV_ITEM_TYPE_TITLE,
    authority: [],
    subMenu: [
      {
        key: "personas.dashboard",
        path: "/personas/dashboard",
        title: "Dashboard",
        translateKey: "nav.personas.dashboard",
        icon: "home",
        type: NAV_ITEM_TYPE_TITLE,
        authority: [],
        subMenu: [],
      },
    ],
  },
];

export default personasNavigationConfig;
