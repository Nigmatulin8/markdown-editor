import type {Dispatch, Ref, SetStateAction, UIEventHandler} from "react";

export type MarkdownTextProps = {
  markdown: string
  setMarkdown: Dispatch<SetStateAction<string>>
  editorRef: Ref<HTMLTextAreaElement>
  onScroll: UIEventHandler<HTMLTextAreaElement>
}

export type PreviewTextProps = {
  markdown: string
  previewRef: Ref<HTMLDivElement>
  onScroll: UIEventHandler<HTMLDivElement>
}
