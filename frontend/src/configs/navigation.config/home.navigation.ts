import type { NavigationTree } from "@/@types/navigation";
import { NAV_ITEM_TYPE_TITLE } from "@/constants/navigation.constant";
const homeNavigationConfig: NavigationTree[] = [
  {
    key: "home",
    path: "/home",
    title: "Home",
    translateKey: "nav.home.index",
    icon: "home",
    type: NAV_ITEM_TYPE_TITLE,
    authority: [],
    subMenu: [
      {
        key: "home.home",
        path: "/home/home",
        title: "Home",
        translateKey: "nav.home.home",
        icon: "home",
        type: NAV_ITEM_TYPE_TITLE,
        authority: [],
        subMenu: [],
      },
    ],
  },
];

export default homeNavigationConfig;
