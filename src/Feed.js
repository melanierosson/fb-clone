import React, { useState, useEffect } from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';
import './Feed.css';


function Feed() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) => (
      setPost(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    ))
  }, [])

  return (

    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map(post => (
        <Post 
          key={post.id}
          profilePic={post.profilePic}
          message={post.message}
          timestamp={post.timestamp}
          username={post.username}
          image={post.image}
        />
      ))}
      {/* <Post 
        profilePic='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._IuDx0yR6HEyAiP7w-pVKQHaEK%26pid%3DApi&f=1'
        message='You can do anything you put your mind to.'
        timestamp='and flex time'
        username='name blame'
      />
      <Post 
        profilePic='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.buntINTHFLyDODyMKXNYcgHaEK%26pid%3DApi&f=1'
        message='Reach beyond the limits you know.'
        timestamp='booom time'
        username='name shame'
      /> */}
    </div>
    
  );
}

export default Feed;
