import type {MarkdownTextProps} from "../types.ts";

export default function MarkdownEditor({markdown, setMarkdown, editorRef, onScroll}: MarkdownTextProps) {
  return (
    <div className="flex min-h-0 min-w-0 flex-1 overflow-hidden rounded-xl bg-[#212830] text-[#d1d7e0] shadow-lg ring-1 ring-black/5">
      <textarea
        ref={editorRef}
        value={markdown}
        placeholder="Write your Markdown here..."
        className="h-full w-full resize-none overflow-auto border-0 bg-transparent p-4 text-left font-mono outline-none"
        onChange={(event) => setMarkdown(event.target.value)}
        onScroll={onScroll}
      />
    </div>
  )
}
