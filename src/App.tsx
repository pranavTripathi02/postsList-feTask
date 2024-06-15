import "./App.scss";
import { useEffect, useState } from "react";
import getPosts from "./api/posts/posts";
import { TPost } from "./types/index.ts";
import PostCard from "./components/postCard";

function App() {
  const [posts, setPosts] = useState<TPost[]>([]);
  useEffect(() => {
    getPosts().then((res) => setPosts(res));
  }, []);

  return (
    <main>
      <div className="posts-container">
        {posts.map((post) => (
          <PostCard
            post={post}
            key={post.id}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
