import "./App.scss";
import { useEffect, useState, useRef } from "react";
import getPosts from "./api/posts/posts";
import { TPost } from "./types/index.ts";
import PostCard from "./components/postCard";
import PostModal from "./components/postModal";

function App() {
  const [posts, setPosts] = useState<TPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<TPost | null>(null);
  const modalRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    getPosts().then((res) => setPosts(res));
  }, []);

  const toggleModal = () => {
    if (!modalRef.current) {
      return;
    }

    modalRef.current?.hasAttribute("open")
      ? modalRef.current.close()
      : modalRef.current.showModal();
  };

  return (
    <>
      {!!selectedPost && (
        <PostModal
          post={selectedPost}
          toggleModal={toggleModal}
          ref={modalRef}
        />
      )}
      <main>
        <div className="posts-container">
          {posts.map((post) => (
            <PostCard
              post={post}
              key={post.id}
              setSelectedPost={setSelectedPost}
              toggleModal={toggleModal}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
