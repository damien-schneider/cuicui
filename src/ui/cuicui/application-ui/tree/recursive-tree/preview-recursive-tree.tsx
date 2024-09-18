import { Tree } from "./recursive-tree";

export function PreviewRecursiveTree() {
  return (
    <div className="p-4 w-72 bg-neutral-400/10 rounded-xl">
      <Tree contentTree="Root">
        <Tree contentTree="Child 1" />
        <Tree contentTree="Child 2" />
        <Tree contentTree="Collapsed by default" defaultCollapsed>
          <Tree
            contentTree={
              <ul className=" list-disc list-inside">
                <li>Custom element</li>
                <li>This is a list</li>
              </ul>
            }
          />
          <Tree contentTree="Branch 2">
            <Tree contentTree="Child 4" />
            <Tree contentTree="Child 5" />
          </Tree>
        </Tree>
      </Tree>
    </div>
  );
}
