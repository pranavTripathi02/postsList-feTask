import { TPost } from "../types";
import "./postCard.scss";

function PostCard({
  post,
  setSelectedPost,
  toggleModal,
}: {
  post: TPost;
  setSelectedPost: React.Dispatch<React.SetStateAction<TPost | null>>;
  toggleModal: () => void;
}) {
  const handleOpenModal = () => {
    setSelectedPost(post);
    toggleModal();
  };

  const formatDateFromTimestamp = (): string => {
    const date = new Date(post.date * 1000);
    const day = date.toLocaleString("default", { day: "2-digit" });
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return month + " " + day + ", " + year;
  };

  return (
    <div className="post">
      {/* image */}
      <div
        className="post-img-container"
        onClick={handleOpenModal}
      >
        <img
          src={post.thumbnailSmall}
          alt={`Image for ${post.title}`}
          className="post-img"
        />
        <span className="post-img-text">Learn More</span>
      </div>
      {/* content */}
      <div className="post-content">
        {/* icon */}
        <div className="post-icons">
          <span className="icon1" />
          <span className="icon2" />
        </div>
        {/* title */}
        <div
          className="post-title"
          onClick={handleOpenModal}
        >
          {post.title}
        </div>
        {/* description */}
        <div className="post-description">{post.content}</div>
        {/* footer */}
        <div className="post-footer">
          {/* author details */}
          <div className="footer-author-details">
            <span>{post.authorName}</span>
            {!!post.authorRole && (
              <>
                <span>-</span>
                <span>{post.authorRole}</span>
              </>
            )}
          </div>
          {/* date */}
          <div className="footer-date">{formatDateFromTimestamp()}</div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
