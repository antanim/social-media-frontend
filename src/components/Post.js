import { MoreVert } from "@material-ui/icons";
import React from "react";
import img4 from "../assets/heart.png";
import img3 from "../assets/like.png";
import { Users } from "../fakeData";
import "../styles/post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={
                Users.filter((user) => user.id === post.userId)[0]
                  .profilePicture
              }
              alt="profile"
            />
            <span className="postUsername">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src={post.photo} alt="post-img" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={img3} alt="" />
            <img className="likeIcon" src={img4} alt="" />
            <span className="postLikeCounter">{post.like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
