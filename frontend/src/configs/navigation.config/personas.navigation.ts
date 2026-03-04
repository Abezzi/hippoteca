import type { NavigationTree } from "@/@types/navigation";
import { NAV_ITEM_TYPE_TITLE } from "@/constants/navigation.constant";
const personasNavigationConfig: NavigationTree[] = [
  {
    key: "people",
    path: "/people",
    title: "People",
    translateKey: "nav.people.dashboard",
    icon: "home",
    type: NAV_ITEM_TYPE_TITLE,
    authority: [],
    subMenu: [
      {
        key: "people.dashboard",
        path: "/people/dashboard",
        title: "Dashboard",
        translateKey: "nav.personas.dashboard",
        icon: "chartPie",
        type: NAV_ITEM_TYPE_TITLE,
        authority: [],
        subMenu: [],
      },
      {
        key: "people.users",
        path: "/people/users",
        title: "Users",
        translateKey: "nav.personas.Users",
        icon: "users",
        type: NAV_ITEM_TYPE_TITLE,
        authority: [],
        subMenu: [],
      },
    ],
  },
];

export default personasNavigationConfig;
