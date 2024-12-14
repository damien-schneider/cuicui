import { sectionList } from "@cuicui/ui/new-section-list";
import { createElement } from "react";

export default function Page() {
  return (
    <div>
      {sectionList.map((section) => {
        return (
          <div key={section.meta.slug}>
            <p>{section.meta.description}</p>
            <ul>
              {section.categories.map((category) => {
                return (
                  <li key={category.meta.description}>
                    <p>{category.meta.description}</p>
                    <ul>
                      {category.components.map((component) => {
                        return (
                          <li key={component.meta.description}>
                            <p>{component.meta.description}</p>
                            <ul>
                              {component.variants.map((variant) => {
                                return (
                                  <li key={variant.name}>
                                    <p>{variant.slugPreviewFile}</p>
                                    {/* @ts-ignore */}
                                    {createElement(variant?.component)}
                                  </li>
                                );
                              })}
                            </ul>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
