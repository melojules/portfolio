export default function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span className="arrow" aria-hidden="true">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {diagonal ? (
          <path d="M6 18 18 6M6 6h12v12" />
        ) : (
          <path d="M5 12h14m-6-6 6 6-6 6" />
        )}
      </svg>
    </span>
  );
}
