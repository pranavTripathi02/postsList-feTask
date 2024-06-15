import "./App.scss";
import { useEffect, useState } from "react";
import getPosts from "./api/posts/posts";
import { TPost } from "./types/index.ts";

function App() {
  const [posts, setPosts] = useState<TPost[]>([]);
  useEffect(() => {
    getPosts().then((res) => setPosts(res));
  }, []);

  return <div>Hi</div>;
}

export default App;
