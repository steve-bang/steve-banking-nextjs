"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import SidebarFooter from "@/components/SidebarFooter";

const MobileNavbar = ({ user }: MobileNavProps) => {
  const pathNameUrl = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            alt="Menu"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="bg-white">
          <Link href={`/`} className="cursor-pointer flex items-center gap-1">
            <Image
              src={`/icons/logo.svg`}
              alt="Steve Banking"
              width={30}
              height={30}
            />
            <h1 className="text-26 font-bold text-black1">Steve</h1>
          </Link>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActivePath =
                    item.route === pathNameUrl ||
                    pathNameUrl.startsWith(item.route);

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActivePath,
                        })}
                      >
                        <div className="relative size-6">
                          <Image
                            src={item.imgURL}
                            alt={item.label}
                            width={20}
                            height={20}
                            className={cn({
                              "brightness-[3] invert-0": isActivePath,
                            })}
                          />
                          <p
                            className={cn("text-16 font-semibold text-black-2", {
                              "text-white": isActivePath,
                            })}
                          >
                            {item.label}
                          </p>
                        </div>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>

            <SidebarFooter user={user} type="mobile" />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNavbar;
