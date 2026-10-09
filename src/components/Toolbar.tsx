import GitHubIcon from "../assets/github.svg";

export default function Toolbar() {
  return (
    <div className="mb-2 flex justify-between item-center p-2 isolate rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5">
      <div className="font-bold">
        Markdown Editor <span className="text-xs"> v1.0.0 </span>
      </div>

      <div>
        <a href="https://github.com/Nigmatulin8/markdown-editor" target="_blank" rel="noopener noreferrer">
          <img src={GitHubIcon} alt="GitHub" className="mr-2 h-6 w-6"/>
        </a>
      </div>
    </div>
  );
}