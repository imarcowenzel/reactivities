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
      <Link href="/" className="uppercase font-bold">
        reactivities
      </Link>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/">Activities</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button>
            <Link href="/activity/create">Create Activity</Link>
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
