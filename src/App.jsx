import { useState, lazy, Suspense } from 'react';
import './App.css'
import useGithubUser from './hooks/useGithubUser';
import SearchBar from './components/SearchBar';
import ProfileHeader from './components/ProfileHeader';
import RepoList from './components/RepoList';
import Loader from './components/Loader';
const ErrorMessage = lazy(() => import('./components/ErrorMessage'))
//import ErrorMessage from './components/ErrorMessage';


function App() {
  const [username, setUsername] = useState("github");   // default profile on load
  const { status, user, repos, error } = useGithubUser(username);

  return (
    <main className="min-h-screen bg-page text-fg">
      <header
        className="flex h-40 items-start justify-center bg-cover bg-center px-4 pt-6 sm:h-50 sm:pt-8"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/hero-image-github-profile.jpg')` }}
      >
        <SearchBar onSearch={setUsername} />
      </header>
      
      <Suspense fallback={<p>Loading...</p>}>
        {status === "error" && <ErrorMessage message={error} />}
      </Suspense>
      
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-5">
        {status === "loading" && <Loader />}
        {status === "success" && (
          <>
            <ProfileHeader user={user} />
            <RepoList repos={repos} />
          </>
        )}
      </div>
    </main>
  );
}

export default App
