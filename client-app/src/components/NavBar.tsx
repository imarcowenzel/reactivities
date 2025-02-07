import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <NavigationMenu className="space-x-4">
      <h1 className="uppercase font-bold">reactivities</h1>
      <NavigationMenuList>
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

export default Navbar;
