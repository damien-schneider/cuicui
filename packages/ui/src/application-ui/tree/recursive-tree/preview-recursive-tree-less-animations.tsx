import { Tree } from "./recursive-tree-less-animations";

export function PreviewRecursiveTreeLessAnimations() {
  return (
    <div className="p-4 w-60 bg-neutral-400/10 rounded-xl">
      <Tree contentTree="Root">
        <Tree contentTree="Child 1" />
        <Tree contentTree="Child 2" />
        <Tree contentTree="Collapsed by default" defaultCollapsed={true}>
          <Tree contentTree="Child 3" defaultCollapsed={true} depth={1} />
          <Tree contentTree="Branch 2">
            <Tree contentTree="Child 4" />
            <Tree contentTree="Child 5" />
          </Tree>
          <Tree contentTree="Branch 3">
            <Tree contentTree="Child 4" />
            <Tree contentTree="Child 5" />
          </Tree>
          <Tree contentTree="Child ?" defaultCollapsed={true} depth={1} />
        </Tree>
      </Tree>
    </div>
  );
}
