export default function ClerkBadgeVariant1() {
  return (
    <span className="relative bg-blue-50 px-[0.1875rem] font-medium text-[0.625rem]/[0.875rem] text-blue-500 dark:bg-blue-950">
      Beta
      <span className="-top-px absolute inset-x-[-0.1875rem] block transform-gpu text-blue-200 dark:text-blue-900">
        <svg
          aria-hidden="true"
          height="1"
          stroke="currentColor"
          strokeDasharray="3.3 1"
          width="100%"
        >
          <line x1="0" x2="100%" y1="0.5" y2="0.5" />
        </svg>
      </span>
      <span className="-bottom-px absolute inset-x-[-0.1875rem] block transform-gpu text-blue-200 dark:text-blue-900">
        <svg
          aria-hidden="true"
          height="1"
          stroke="currentColor"
          strokeDasharray="3.3 1"
          width="100%"
        >
          <line x1="0" x2="100%" y1="0.5" y2="0.5" />
        </svg>
      </span>
      <span className="-left-px absolute inset-y-[-0.1875rem] block transform-gpu text-blue-200 dark:text-blue-900">
        <svg
          aria-hidden="true"
          height="100%"
          stroke="currentColor"
          strokeDasharray="3.3 1"
          width="1"
        >
          <line x1="0.5" x2="0.5" y1="0" y2="100%" />
        </svg>
      </span>
      <span className="-right-px absolute inset-y-[-0.1875rem] block transform-gpu text-blue-200 dark:text-blue-900">
        <svg
          aria-hidden="true"
          height="100%"
          stroke="currentColor"
          strokeDasharray="3.3 1"
          width="1"
        >
          <line x1="0.5" x2="0.5" y1="0" y2="100%" />
        </svg>
      </span>
    </span>
  );
}
