import { timeAgo } from "../utils/timeAgo";


function Meta({ icon, children }) {
  return (
    <li className="flex items-center gap-1 text-xs text-fg-muted">
      <img src={icon} alt="" className="h-3.5 w-3.5" />
      <span>{children}</span>
    </li>
  );
}

function RepoCard({repo}) {
  const license = repo.license?.spdx_id;
    
  return (
      <a className="rounded-xl bg-linear-to-br from-deep to-violet p-3 hover:border-line border border-transparent"
       href={repo.html_url} target="_blank" rel="noopener noreferrer">
        <h3 className="text-fg">{repo.name}</h3>
        {repo.description && <p className="text-[12px] text-fg-muted">{repo.description}</p>}

        <ul className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          {license && <Meta icon="/images/Chield_alt.svg">{license}</Meta>}
          <Meta icon="/images/Nesting.svg">{repo.forks_count.toLocaleString()}</Meta>
          <Meta icon="/images/Star.svg">{repo.stargazers_count.toLocaleString()}</Meta>
          <li className="text-[10px] text-fg-muted">
            updated {timeAgo(repo.updated_at)}
          </li>
        </ul>
      </a>
    );
}

export default RepoCard;