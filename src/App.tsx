import "./App.scss";
import { useEffect, useState, useRef } from "react";
import getPosts from "./api/posts/posts";
import { TPost } from "./types/index.ts";
import PostCard from "./components/postCard";
import Loading from "./components/loading/loading";
import PostModal from "./components/postModal";

function App() {
  const [posts, setPosts] = useState<TPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPost, setSelectedPost] = useState<TPost | null>(null);
  const modalRef = useRef<HTMLDialogElement>(null);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const fetchedPosts = await getPosts();
      setIsLoading(false);
      setPosts(fetchedPosts);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      throw new Error("Unable to fetch posts.");
    }
  };

  useEffect(() => {
    // getPosts().then((res) => setPosts(res));
    fetchPosts();
  }, []);

  const toggleModal = () => {
    if (!modalRef.current) {
      return;
    }

    modalRef.current?.hasAttribute("open")
      ? modalRef.current.close()
      : modalRef.current.showModal();
  };

  return isLoading ? (
    <Loading />
  ) : (
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
