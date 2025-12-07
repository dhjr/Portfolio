export default function Popup({ message, showPopup }) {
  return (
    <div
      className={`
        w-72 h-16 absolute bottom-10 right-10
        bg-zinc-900 rounded-md flex items-center justify-center border-2
        transition-all duration-300

        ${
          showPopup
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3 pointer-events-none"
        }
      `}
    >
      <p className="font-1spacegrotesk text-lg">{message}</p>
    </div>
  );
}
