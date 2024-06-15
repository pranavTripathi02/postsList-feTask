import { TPost } from "../types";
import "./postCard.scss";

function PostCard({ post }: { post: TPost }) {
  return (
    <div className="post">
      {/* image */}
      <div className="post-image-container">
        <img
          src={post.thumbnailSmall}
          alt={`Image for ${post.title}`}
          className="post-img"
        />
        <span className="post-image-text">Learn More</span>
      </div>
      {/* content */}
      <div className="post-content">
        {/* icon */}
        <div className="post-icons">
          <span className="icon1" />
          <span className="icon2" />
        </div>
        {/* title */}
        <div className="post-title">{post.title}</div>
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
          <div className="footer-date">{post.date}</div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;