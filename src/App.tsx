import './App.css'
import Toolbar from './components/Toolbar'
import MarkdownEditor from './components/Markdown'
import MarkdownPreview from './components/Preview'
import {useEffect, useRef, useState, type UIEvent} from "react";

function scrollRatio(element: HTMLElement) {
  const range = element.scrollHeight - element.clientHeight
  return range > 0 ? element.scrollTop / range : 0
}

function App() {
  const [markdown, setMarkdown] = useState(localStorage.getItem('markdown') ?? '');
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const activeScroll = useRef<HTMLElement | null>(null);

  useEffect(() => {
    localStorage.setItem('markdown', markdown);
  }, [markdown])

  function syncScroll(source: HTMLElement, target: HTMLElement | null) {
    if (!target || activeScroll.current === target) return

    activeScroll.current = source
    const range = target.scrollHeight - target.clientHeight
    target.scrollTop = scrollRatio(source) * range

    requestAnimationFrame(() => {
      if (activeScroll.current === source) activeScroll.current = null
    })
  }

  function onEditorScroll(event: UIEvent<HTMLTextAreaElement>) {
    syncScroll(event.currentTarget, previewRef.current)
  }

  function onPreviewScroll(event: UIEvent<HTMLDivElement>) {
    syncScroll(event.currentTarget, editorRef.current)
  }

  return (
    <div className="background flex h-screen flex-col p-2">
      <Toolbar/>

      <div className="main-wrapper flex min-h-0 flex-1 rounded-xl border border-zinc-600 p-2">
        <MarkdownEditor
          markdown={markdown}
          setMarkdown={setMarkdown}
          editorRef={editorRef}
          onScroll={onEditorScroll}
        />

        <MarkdownPreview
          markdown={markdown}
          previewRef={previewRef}
          onScroll={onPreviewScroll}
        />
      </div>
    </div>
  )
}

export default App
