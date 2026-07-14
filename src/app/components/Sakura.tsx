export function Sakura({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      {[0, 72, 144, 216, 288].map((deg) => (
        <path
          key={deg}
          transform={`rotate(${deg} 50 50)`}
          d="M50 50 C44 34 44 20 50 10 C56 20 56 34 50 50 Z"
        />
      ))}
      <circle cx="50" cy="50" r="6" className="text-sakura" fill="currentColor" />
    </svg>
  );
}
