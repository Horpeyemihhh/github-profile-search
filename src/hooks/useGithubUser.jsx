import { useState, useEffect } from "react";

function useGithubUser(username) {
  const [state, setState] = useState({ status: "idle", user: null, repos: [], error: "" });

  useEffect(() => {
    if (!username) return;
    const controller = new AbortController();

    async function load() {
      setState((prev) => ({ ...prev, status: "loading", error: "" }));

      try {
        const [uRes, rRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, { signal: controller.signal }),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, { signal: controller.signal }),
        ]);
        if (uRes.status === 404) throw new Error("User not found");
        if (uRes.status === 403) throw new Error("Rate limit exceeded");
        if (!uRes.ok || !rRes.ok) throw new Error("Something went wrong");

        setState({ status: "success", user: await uRes.json(), repos: await rRes.json(), error: "" });
      } catch (err) {
        if (err.name === "AbortError") return;   // ignore cancelled requests
        setState((prev) => ({ ...prev, status: "error", error: err.message }));
      }
    }

    
    load();
    return () => controller.abort();   // cleanup: cancel if username changes
  }, [username]);

  return state;
}

export default useGithubUser;