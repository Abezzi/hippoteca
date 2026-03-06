import type { NavigationTree } from "@/@types/navigation";
import personasNavigationConfig from "./personas.navigation";
import homeNavigationConfig from "./home.navigation";

const navigationConfig: NavigationTree[] = [
  ...homeNavigationConfig,
  ...personasNavigationConfig,
];

export default navigationConfig;
