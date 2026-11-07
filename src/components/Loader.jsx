function Bone({ className = "" }) {
  return <div className={`animate-pulse rounded-lg bg-line/60 ${className}`} />;
}

export default function Loader() {
    return (
    <div role="status" aria-label="Loading profile">
      {/* avatar + three stat pills */}
      <div className="-mt-12 flex flex-wrap items-end gap-4">
        <Bone className="h-24 w-24 rounded-xl border-4 border-deep" />
        <div className="flex flex-wrap gap-3">
          <Bone className="h-10 w-40" />
          <Bone className="h-10 w-32" />
          <Bone className="h-10 w-52" />
        </div>
      </div>

      {/* name and bio */}
      <Bone className="mt-4 h-8 w-48" />
      <Bone className="mt-3 h-4 w-72 max-w-full" />

      {/* four repo cards */}
      <div className="mt-8 grid grid-cols-1 items-start gap-4 sm:grid-cols-2">
        {[1, 2, 3, 4].map((n) => (
          <Bone key={n} className="h-28" />
        ))}
      </div>

      <span className="sr-only">Loading</span>
    </div>
  );
}