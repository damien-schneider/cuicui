"use client";

import { useLocation } from "@/cuicui/hooks/use-location";

import {
  Home,
  Search,
  Hash,
  Globe,
  Link2,
  Server,
  Phone,
  Lock,
  Info,
  Clock,
} from "lucide-react";
import type { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
  pathname: <Home className="size-5 text-blue-500" />,
  search: <Search className="size-5 text-green-500" />,
  hash: <Hash className="size-5 text-purple-500" />,
  host: <Globe className="size-5 text-yellow-500" />,
  href: <Link2 className="size-5 text-red-500" />,
  hostname: <Link2 className="size-5 text-red-500" />,
  origin: <Server className="size-5 text-indigo-500" />,
  port: <Phone className="size-5 text-pink-500" />,
  protocol: <Lock className="size-5 text-teal-500" />,
  state: <Info className="size-5 text-gray-500" />,
  length: <Clock className="size-5 text-orange-500" />,
};

export const PreviewUseLocation = () => {
  const location = useLocation();
  if (!location) {
    return (
      <p className="p-8 text-neutral-700 dark:text-neutral-200 w-full">
        Loading...
      </p>
    );
  }

  return (
    <div className="p-8 text-neutral-700 dark:text-neutral-200 w-full">
      <header className="text-center mb-8">
        <h2 className="text-2xl tracking-tighter mb-2">
          📍 useLocation Hook Preview
        </h2>
        <p className="text-gray-neutral">
          Observe changes in the browser's location state in real-time.
        </p>
      </header>

      <div className="mb-4">
        <span className="inline-block bg-neutral-400/15 text-xs px-2 py-1 rounded-full">
          Triggered by: {location.trigger}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(location).map(([key, value]) => {
          if (key === "trigger") {
            return null;
          }

          return (
            <div
              key={key}
              className="flex p-4 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-400/10"
            >
              <div className="mr-4">{iconMap[key]}</div>
              <div>
                <h3 className="font-medium text-sm tracking-tight  capitalize">
                  {key}
                </h3>
                <pre className="text-xs leading-4">
                  {typeof value === "object"
                    ? JSON.stringify(value, null, 2)
                    : String(value)}
                </pre>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PreviewUseLocation;
