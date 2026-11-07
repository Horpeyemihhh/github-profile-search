import StatPill from "./StatPill";

function ProfileHeader({user}) {
    return (
    <section className="bg-green">
      <div className="-mt-12 flex flex-wrap items-end gap-4">
        <img
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          className="h-24 w-24 rounded-xl border-4 border-deep ..."
        />
        <ul className="flex flex-wrap gap-3">
          <StatPill label="Followers" value={user.followers.toLocaleString()} />
          <StatPill label="Following" value={user.following.toLocaleString()} />
          <StatPill label="Location" value={user.location || "Not specified"} />
        </ul>
      </div>

      <h1 className="text-2xl text-fg pt-3">{user.name || user.login}</h1>
      {user.bio && <p className="text-[12px] text-fg-muted">{user.bio}</p>}
    </section>
  );
}

export default ProfileHeader;