import TableOfContent from "#/src/ui/cuicui/application-ui/table-of-contents/modul-inspired/following-headers";

export default function TableOfContentPreview() {
  return (
    <div className="w-full relative flex gap-8 flex-col md:flex-row">
      <TableOfContent
        idOfParentContainer="parent-content"
        className="p-2 rounded-lg md:w-72 w-full"
      />
      <div className="w-full">
        <p className="text-xs text-neutral-500 mb-2">
          Scroll the section below
        </p>
        <div
          id="parent-content"
          className="space-y-20 overflow-scroll h-96 bg-neutral-500/10 p-8 rounded-xl w-full"
        >
          <h1>Table of content preview</h1>
          <LoremIpsum />
          <h2>Here is the first h2</h2>
          <LoremIpsum />
          <h3>Here is the first h3</h3>
          <LoremIpsum />
          <h3>Here is the second h3</h3>
          <LoremIpsum />
          <h2>Here is the second h2</h2>
          <LoremIpsum />
          <h3>Here is the third h3</h3>
          <LoremIpsum />
          <h3>Here is the fourth h3</h3>
          <LoremIpsum />
          <h2>Here is the third h2</h2>
          <LoremIpsum />
          <h3>Here is the fifth h3</h3>
          <LoremIpsum />
          <h3>Here is the sixth h3</h3>
          <LoremIpsum />
        </div>
      </div>
    </div>
  );
}

const LoremIpsum = () => {
  return (
    <p>
      Commodo labore ullamco excepteur. Labore sunt dolore velit et consectetur
      proident minim minim occaecat. Id sit adipisicing aliqua proident nisi
      mollit aute. Duis in dolore incididunt ea. Quis quis in do quis laboris
      veniam ex irure consectetur incididunt in. Est ipsum in nostrud anim ut
      exercitation. Deserunt in consequat Lorem. Id magna culpa anim anim quis
      tempor reprehenderit enim ex fugiat veniam aliqua. Commodo proident
      laboris aute qui. Fugiat non ullamco nulla sunt officia eu cupidatat sit
      id qui id. Aliquip anim elit eu occaecat id pariatur irure labore
      cupidatat aliqua aliquip sunt commodo incididunt officia. Id ea elit
      labore sunt Lorem culpa exercitation. Deserunt pariatur enim in. Aliquip
      fugiat irure labore in consequat ex consequat et esse cupidatat aute in
      esse.
    </p>
  );
};
