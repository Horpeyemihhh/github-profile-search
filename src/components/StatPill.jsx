function StatPill({label, value}) {
    return (
      <li className="flex items-center gap-3 rounded-lg bg-deep px-4 py-2 text-[12px]">
        <span className="text-fg-muted">{label}</span>
        <span className="h-4 w-px bg-line"></span>
        <span className="text-fg">{value}</span>
      </li>
    );
}

export default StatPill;