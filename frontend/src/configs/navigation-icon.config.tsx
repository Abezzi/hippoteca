import {
    HiOutlineChartPie,
    HiOutlineCog,
    HiOutlineHome,
    HiOutlineUsers,
} from "react-icons/hi";
import type { JSX } from "react";

export type NavigationIcons = Record<string, JSX.Element>;

const navigationIcon: NavigationIcons = {
    home: <HiOutlineHome />,
    users: <HiOutlineUsers />,
    config: <HiOutlineCog />,
    chartPie: <HiOutlineChartPie />,
};

export default navigationIcon;
