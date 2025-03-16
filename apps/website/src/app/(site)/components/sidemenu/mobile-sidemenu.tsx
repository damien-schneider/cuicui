import { SidemenuContent } from "#/src/app/(site)/components/sidemenu/sidemenu-content";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "#/src/ui/shadcn/drawer";
import { MenuIcon } from "lucide-react";

export default function MobileSidemenu() {
  return (
    <Drawer>
      <DrawerTrigger asChild={true}>
        <button
          type="button"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-6 py-3 dark:bg-neutral-300 bg-neutral-700 backdrop-blur-sm  shadow-lg rounded-full text-white dark:text-neutral-800 border border-neutral-400/10 text-lg tracking-tighter"
          aria-label="Open Menu"
        >
          <MenuIcon className="size-5" />
          <span className="font-medium">Menu</span>
        </button>
      </DrawerTrigger>
      <DrawerContent className="min-h-[80dvh] h-[80dvh]" forceMount={true}>
        <DrawerHeader className="hidden">
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <SidemenuContent className="p-4 h-full flex flex-col justify-between" />
        {/* <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
}
