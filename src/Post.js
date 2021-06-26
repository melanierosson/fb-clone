import React from 'react';
import { Avatar } from '@material-ui/core';
import './Post.css';


function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
        <div class="post__top">
            <Avatar src={profilePic} className="post__avatar"/>
            <div class="post__topInfo">
                <h3>{username}</h3>
                <p>{timestamp}</p>
            </div>
        </div>

        <div className="post__bottom">
            <p>{message}</p>
        </div>
        <div className="post__image">
            <img src={image} alt="" />
        </div>
    </div>
  );
}

export default Post;