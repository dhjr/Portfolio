const Button = ({ text }) => {
  return (
    <button className="my-2 group relative w-auto cursor-pointer overflow-hidden rounded-full 
      bg-zinc-50 border border-zinc-300 text-zinc-900 shadow-sm transition-all duration-500 hover:shadow-md 
      dark:bg-zinc-900 dark:border-zinc-700 dark:text-zinc-100
      px-5 py-2 text-center font-medium">
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-zinc-900 transition-all duration-500 group-hover:scale-[100.8] dark:bg-zinc-100" />
        <span className="font-1spaceGrotesk inline-block transition-all duration-500 group-hover:translate-x-12 group-hover:opacity-0">
          {text}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-3 
        bg-zinc-900 text-zinc-50 opacity-0 transition-all duration-500 group-hover:-translate-x-5 group-hover:opacity-100 
        dark:bg-zinc-100 dark:text-zinc-900">
        <div className="flex items-center gap-3 whitespace-nowrap">
          <span className="leading-none font-medium font-1spaceGrotesk">
            {text}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 leading-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h14" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 6l6 6-6 6"
            />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default Button;
