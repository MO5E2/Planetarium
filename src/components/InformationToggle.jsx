export default function InformationToggle({ isInformationOn, setInformationToggle }) {
  return (
    <div class="flex items-center gap-0 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm p-1">
      <button
        onClick={() => {
          setInformationToggle(!isInformationOn);
        }}
        className="px-4 py-1.5 text-[8px] uppercase tracking-[0.2em] font-medium text-white bg-black/20 hover:bg-white/5 active:bg-white/30 rounded-full transition-all"
      >
        {isInformationOn ? "Hide Information" : "Show Information"}
      </button>
    </div>
  );
}
