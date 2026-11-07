import { useState, lazy, Suspense } from "react";
import { validate } from "../utils/validate";
const ErrorMessage = lazy(() => import('./ErrorMessage'))
//import ErrorMessage from "./ErrorMessage";

function SearchBar({onSearch}) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const err = validate(value);
    setError(err || "");
    if (!err) onSearch(value.trim());
  }

  return (
  <div className="w-full max-w-lg">
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 rounded-xl bg-page px-4 py-3 focus-within:ring-2 focus-within:ring-fg-muted"
    >
      <img src="images/Search.svg" alt="Search-icon"/>
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="username"
        aria-invalid={error ? "true" : "false"}
        className="w-full bg-transparent text-fg outline-none placeholder:text-fg-muted"
      />
    </form>

    <Suspense fallback={<p>Loading...</p>}>
      {error && <ErrorMessage message={error} onClose={() => setError("")} />}
    </Suspense>
  </div>
);
}

export default SearchBar;