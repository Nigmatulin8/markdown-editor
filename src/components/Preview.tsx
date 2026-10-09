import Markdown, {type Components} from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type {PreviewTextProps} from "../types.ts";
import '../gh-markdown.css'

const components: Components = {
  input({type, checked, disabled}) {
    if (type !== 'checkbox') {
      return <input type={type} disabled={disabled} />
    }

    return (
      <input
        type="checkbox"
        className="task-list-item-checkbox"
        checked={checked}
        disabled={disabled}
      />
    )
  },
}

export default function MarkdownPreview({markdown, previewRef, onScroll}: PreviewTextProps) {
  return (
    <div className="min-h-0 min-w-0 flex-1 overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5">
      <div
        id="preview-wrapper"
        ref={previewRef}
        className="markdown-body h-full overflow-auto"
        onScroll={onScroll}
      >
        <Markdown
          remarkPlugins={[[remarkGfm, {singleTilde: false}]]}
          components={components}
        >
          {markdown}
        </Markdown>
      </div>
    </div>
  )
}
