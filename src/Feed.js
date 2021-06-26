import React from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import './Feed.css';


function Feed() {
  return (

    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post 
        profilePic='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FUKeI9bdB6Qg%2Fmaxresdefault.jpg&f=1&nofb=1'
        message='You are more than enough.'
        timestamp='time to LEVEL UP'
        username='name game'
        image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kjLts0G7wpdA-C4Uq__sOAHaLO%26pid%3DApi&f=1'
      />
      <Post 
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
      />
    </div>
    
  );
}

export default Feed;
