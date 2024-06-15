import { TPost } from "../types";
import { forwardRef } from "react";
import "./postModal.scss";

type TProps = {
  post: TPost;
  toggleModal: () => void;
};

const PostModal = forwardRef<HTMLDialogElement, TProps>((props, ref) => {
  const { post, toggleModal } = props;

  return (
    <dialog
      ref={ref}
      className="modal"
    >
      <header className="modal-header">
        <button
          className="modal-closeBtn"
          onClick={toggleModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </header>
      <div className="modal-img-container">
        <img
          srcSet={`${post.thumbnailSmall} 720w, ${post.thumbnailLarge}`}
          alt={`Image for ${post.title}`}
          className="modal-img"
        />
      </div>
      <div className="modal-title">{post.title}</div>
      <div className="modal-desc">{post.content}</div>
      <div className="modal-footer">
        <div className="author-avatar">
          <img
            src={post.authorAvatar}
            alt={`User ${post.authorName} image`}
            className="author-avatar-img"
          />
        </div>
        <div>
          <span>{post.authorName}</span>
          {!!post.authorRole && (
            <>
              <span>-</span>
              <span>{post.authorRole}</span>
            </>
          )}
        </div>
      </div>
    </dialog>
  );
});

export default PostModal;
