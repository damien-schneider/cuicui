import { format } from "date-fns";
import React, { Fragment } from "react";
import { componentCategories } from "#/src/lib/component-categories";
import { CHANGELOGS } from "./changelogs";

export default function ChangelogPage() {
  return (
    <div>
      {CHANGELOGS.map((changelog) => (
        <div key={changelog.title}>
          <h2 className="header-2">{changelog.title}</h2>
          <p className="comment-1">
            {format(changelog.releaseDate, "do MMM yyyy")}
          </p>
          <p>{changelog.description}</p>
          <div className="h-px bg-neutral-500/40 my-2" />
          <h6 className="header-4">New components released</h6>
          <ListOfReleasedComponents releaseDate={changelog.releaseDate} />
        </div>
      ))}
    </div>
  );
}

function ListOfReleasedComponents({
  releaseDate,
}: {
  releaseDate: Date;
}) {
  function checkIfComponentIsFromThisRelease(
    releaseDate: Date,
    componentReleaseDate: Date | undefined,
  ) {
    if (!componentReleaseDate) {
      return false;
    }
    return releaseDate.toISOString() === componentReleaseDate.toISOString();
  }
  return (
    <div>
      {componentCategories.map((component) => (
        <div key={component.name}>
          <h3 className="text-neutral-500 font-medium text-sm uppercase">
            {component.name}
          </h3>
          {component.items.map((item) => (
            <Fragment key={item.slug}>
              {checkIfComponentIsFromThisRelease(
                releaseDate,
                item.releaseDate,
              ) && (
                <div key={item.slug}>
                  <h6 className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                    {item.name}
                  </h6>
                  <p className=" comment-1">{item.description}</p>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}
