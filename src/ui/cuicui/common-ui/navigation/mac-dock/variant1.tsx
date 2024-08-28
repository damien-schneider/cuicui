import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { cn } from "#/src/utils/cn";

export function Dock() {
  return (
    <div className="relative w-full">
      <div className="max-w-full pt-4 mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 transform-gpu">
        <div className="relative ">
          <div className="absolute bottom-0 left-0 right-0 h-[72px] max-w-full rounded-3xl border dark:border-gray-600/60 dark:bg-gray-800/60 bg-gray-200/60 border-gray-200/60 z-10 pointer-events-none shadow-sm" />
          <div className="rounded-3xl flex items-end pl-2 overflow-x-auto">
            <AppIcon
              imgSrc={
                "https://cdn.dribbble.com/users/6569/screenshots/17730687/linear_share_dribbble_4x.png"
              }
            />
            <AppIcon
              imgSrc={
                "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
              }
              withoutBackground
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
              withoutBackground
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function AppIcon({
  imgSrc,
  withoutBackground,
}: Readonly<{
  imgSrc: string | StaticImageData;
  withoutBackground?: boolean;
}>) {
  return (
    <div className=" p-2 pl-0 grid place-items-center cursor-pointer group z-20 w-fit">
      <div
        className={cn(
          "size-14 group-hover:size-[4rem] transition-all duration-200 rounded-2xl inline pointer-events-none z-20 overflow-hidden group-hover:shadow-sm  shadow-inner bg-white dark:bg-gray-800 transform-gpu",
          withoutBackground ? "p-2" : "",
        )}
      >
        <Image
          src={imgSrc}
          alt="dock"
          className={cn(
            "size-full",
            withoutBackground ? "object-contain" : "object-cover",
          )}
          width={256}
          height={256}
        />
      </div>
    </div>
  );
}
