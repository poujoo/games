export function Switcher() {
  return (
    <>
      <button
        type="button"
        className="hs-dark-mode-active:hidden hs-dark-mode group block flex items-center font-medium text-gray-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-neutral-500"
        data-hs-theme-click-value="dark"
      >
        <svg
          className="size-4 flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      </button>
      <button
        type="button"
        className="hs-dark-mode-active:block hs-dark-mode group flex hidden items-center font-medium text-gray-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-neutral-500"
        data-hs-theme-click-value="light"
      >
        <svg
          className="size-4 flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
      </button>
    </>
  );
}
