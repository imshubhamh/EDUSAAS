export default function BackgroundLines() {
  return (
    <div className="absolute inset-0 -z-10">
      <svg
        viewBox="0 0 1440 600"
        className="w-full h-full opacity-40"
        fill="none"
      >
        <path
          d="M0 300 C 300 200, 600 400, 900 300 1200 200, 1440 300"
          stroke="#22d3ee"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
