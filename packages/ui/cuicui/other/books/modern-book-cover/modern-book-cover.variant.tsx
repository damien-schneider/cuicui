import {
  ModernBookCover,
  BookHeader,
  BookTitle,
  BookDescription,
} from "@/cuicui/other/books/modern-book-cover/modern-book-cover";
import { BookIcon } from "lucide-react";

export function ModernBookCoverPreview() {
  return (
    <div className="flex flex-col gap-8 p-12">
      <ModernBookCover size="sm" color="neutral">
        <BookHeader>
          <BookIcon size={20} />
        </BookHeader>
        <BookTitle>Cuicui</BookTitle>
        <BookDescription>
          Learn CSS, by the creator of the language.
        </BookDescription>
      </ModernBookCover>
      <ModernBookCover size="md" color="amber">
        <BookHeader>
          <BookIcon size={20} />
        </BookHeader>
        <BookTitle>Cuicui</BookTitle>
        <BookDescription>
          Learn CSS, by the creator of the language.
        </BookDescription>
      </ModernBookCover>
      <ModernBookCover size="lg" color="blue">
        <BookHeader>
          <BookIcon size={20} />
        </BookHeader>
        <BookTitle>Modul</BookTitle>
        <BookDescription>The best all in one productivity tool</BookDescription>
      </ModernBookCover>
    </div>
  );
}

export default ModernBookCoverPreview;
