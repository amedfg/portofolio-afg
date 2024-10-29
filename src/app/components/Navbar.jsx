"use client";

import * as React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isFixed, setIsFixed] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isFixed ? "navbar-fixed" : ""
      } bg-white w-full flex items-center z-10`}
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link
              href="#"
              className="font-bold text-lg text-primary block py-6"
            >
              <span className="bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">
                AFG
              </span>
            </Link>
          </div>
          <div className="flex items-center px-4">
            <NavigationMenu>
              <NavigationMenuList className="hidden lg:flex">
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className="group text-primary inline-flex h-9 w-max items-center justify-center rounded-md bg-color px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className="group text-primary inline-flex h-9 w-max items-center justify-center rounded-md bg-color px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className="group text-primary inline-flex h-9 w-max items-center justify-center rounded-md bg-color px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground">
                      Experiences
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className="group text-primary inline-flex h-9 w-max items-center justify-center rounded-md bg-color px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground">
                      Portofolio
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
              {/* Mobile Sidebar */}
              <NavigationMenuList className="flex justify-end lg:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <HamburgerMenuIcon className="w-4 h-4 text-primary" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="max-w-[300px]">
                    <DropdownMenuItem>
                      <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors text-primary">
                          Home
                        </NavigationMenuLink>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors text-primary">
                          About
                        </NavigationMenuLink>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors text-primary">
                          Experiences
                        </NavigationMenuLink>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors text-primary">
                          Portofolio
                        </NavigationMenuLink>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
