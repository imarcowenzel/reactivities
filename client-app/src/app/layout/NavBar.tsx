import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
  return (
    <NavigationMenu className="gap-4">
        <h1>Reactivities</h1>
      <NavigationMenuList className="flex">
        <NavigationMenuItem>
          <Link href="/">Activities</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button>Create Activity</Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
