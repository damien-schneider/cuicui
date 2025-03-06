import { SidemenuContent } from "#/src/app/(site)/components/sidemenu/sidemenu-content";
import Button from "#/src/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "#/src/ui/shadcn/drawer";

export default function MobileSidemenu() {
  return (
    <Drawer>
      <DrawerTrigger asChild={true}>
        <Button className="fixed bottom-6 right-2 z-40">Open</Button>
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
