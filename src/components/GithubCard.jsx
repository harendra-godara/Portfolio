import { useEffect, useState } from "react";

export default function GithubCard() {
  const [user, setUser] = useState(null);

  const [username, setUsername] = useState("harendra-godara");

  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("User not found");
        }

        return res.json();
      })

      .then((data) => {
        setUser(data);
        setError("");
      })

      .catch((err) => {
        setError(err.message);
        setUser(null);
      });
  }, [username]);

  return (
    <div className="github-card">
      <h1>GitHub Profile Search</h1>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />
      <br />

      {error && <h2>{error}</h2>}

      {user && (
        <>
          <img src={user.avatar_url} width="150" />

          <h2>{user.login}</h2>

          <p>{user.bio}</p>

          <p>Followers: {user.followers}</p>

          <p>Public Repos: {user.public_repos}</p>
        </>
      )}
    </div>
  );
}
