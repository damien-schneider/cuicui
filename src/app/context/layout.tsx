import type React from "react";
import { getCategories } from "#/src/app/api/categories/getCategories";
import { CounterProvider } from "#/src/app/context/counter-context";
import { Boundary } from "#/src/ui/boundary";
import { TabGroup } from "#/src/ui/tab-group";
import ContextClickCounter from "./context-click-counter";

const title = "Client Context";

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();
  return (
    <Boundary
      labels={["Server Component Boundary"]}
      size="small"
      animateRerendering={false}
    >
      <Boundary
        labels={["Counter Context Provider [Client Component]"]}
        color="blue"
        size="small"
        animateRerendering={false}
      >
        <CounterProvider>
          <Boundary
            labels={["Server Component Boundary"]}
            size="small"
            animateRerendering={false}
          >
            <div className="space-y-9">
              <div className="flex justify-between">
                <TabGroup
                  path="/context"
                  items={[
                    {
                      text: "Home",
                    },
                    ...categories.map((x) => ({
                      text: x.name,
                      slug: x.slug,
                    })),
                  ]}
                />
              </div>

              <ContextClickCounter />
              <div>{children}</div>
            </div>
          </Boundary>
        </CounterProvider>
      </Boundary>
    </Boundary>
  );
}
