import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { cn } from "@/cuicui/utils/cn/cn";

export function Dock() {
  return (
    <div className="relative w-full">
      <div className="-translate-x-1/2 absolute bottom-0 left-1/2 mx-auto max-w-full transform-gpu pt-4">
        <div className="relative ">
          <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-[72px] max-w-full rounded-3xl border border-gray-200/60 bg-gray-200/60 shadow-sm dark:border-gray-600/60 dark:bg-gray-800/60" />
          <div className="flex items-end overflow-x-auto rounded-3xl pl-2">
            <AppIcon
              imgSrc={
                "https://cdn.dribbble.com/users/6569/screenshots/17730687/linear_share_dribbble_4x.png"
              }
            />
            <AppIcon
              imgSrc={
                "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
              }
              withoutBackground={true}
            />
            <Link href="https://www.modul.day" target="_blank">
              <AppIcon
                imgSrc={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVv7zoLmVfsPGPCSZzAH4sU8VY5A1ByzvHQ&s"
                }
              />
            </Link>
            <AppIcon
              imgSrc={
                "https://www.01net.com/app/uploads/2021/01/MEA-firefox-1.jpg"
              }
            />

            <AppIcon
              imgSrc={
                "https://logo-marque.com/wp-content/uploads/2020/12/Discord-Logo.png"
              }
              withoutBackground={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dock;

function AppIcon({
  imgSrc,
  withoutBackground,
}: Readonly<{
  imgSrc: string | StaticImageData;
  withoutBackground?: boolean;
}>) {
  return (
    <div className=" group z-20 grid w-fit cursor-pointer place-items-center p-2 pl-0">
      <div
        className={cn(
          "pointer-events-none z-20 inline size-14 transform-gpu overflow-hidden rounded-2xl bg-white shadow-inner transition-all duration-200 group-hover:size-[4rem] group-hover:shadow-sm dark:bg-gray-800",
          withoutBackground ? "p-2" : "",
        )}
      >
        <Image
          alt="dock"
          className={cn(
            "size-full",
            withoutBackground ? "object-contain" : "object-cover",
          )}
          height={256}
          src={imgSrc}
          width={256}
        />
      </div>
    </div>
  );
}
