import { useState } from "react";
import RepoCard from "./RepoCard";

function RepoList({repos}) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? repos : repos.slice(0, 4);

  return (
    <section>
      <div className="grid grid-cols-1 pt-3 sm:grid-cols-2 gap-4">
        {visible.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
      </div>
      
      {repos.length > 4 && !showAll && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="text-[12px] text-fg hover:underline"
          >
            View all repositories
          </button>
        </div>
      )}
    </section>
  );
}

export default RepoList;