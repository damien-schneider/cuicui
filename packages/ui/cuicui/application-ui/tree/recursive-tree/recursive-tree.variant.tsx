import { Tree } from "./recursive-tree";

export function PreviewRecursiveTree() {
  return (
    <div className="w-72 rounded-xl bg-neutral-400/10 p-4">
      <Tree contentTree="Root">
        <Tree contentTree="Child 1" />
        <Tree contentTree="Child 2" />
        <Tree contentTree="Collapsed by default" defaultCollapsed={true}>
          <Tree
            contentTree={
              <ul className=" list-inside list-disc">
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

export default PreviewRecursiveTree;
