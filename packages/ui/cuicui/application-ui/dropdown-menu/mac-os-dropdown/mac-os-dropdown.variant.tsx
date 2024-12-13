import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/cuicui/application-ui/dropdown-menu/mac-os-dropdown/mac-os-dropdown";

export const PreviewMacOSDropdownMenu = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://static1.squarespace.com/static/5e949a92e17d55230cd1d44f/t/6667b379b716e7212d986a57/1718072191450/Seq3x2.png?format=1500w')",
      }}
      className="w-full h-full p-10 bg-cover grid place-items-center"
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild={true}>
          <button
            type="button"
            className="rounded-[6px] min-w-32 text-sm p-1 bg-[rgba(30,30,31,0.5)] backdrop-blur-xl shadow-[0px_20px_30px_0px_rgba(0,0,0,0.25),0px_0px_15px_0px_rgba(0,0,0,0.1),inset_0px_0px_0px_1px_rgba(255,255,255,0.075),0px_0px_0px_1px_rgba(0,0,0,0.5)] w-fit hover:opacity-80 text-white focus:outline-none focus:ring-0"
          >
            Open Menu
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Refresh</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PreviewMacOSDropdownMenu;
