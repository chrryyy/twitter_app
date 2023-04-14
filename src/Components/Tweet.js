import React, { useState} from "react";
import "../Styles/Tweet.css"; 

const Tweet = props => {
  const [likes, setLikes] = useState(false);

  return (
    <div className="tweet">
        <div id="names">
        <p id="tweet-handle">{props.handle}</p>
        <p>{props.author}</p>
        </div>
      <p class="tweet-text"> {props.content} </p>
      <div class="tweet-footer">
        <div>
          {likes ? <img id="tweet-like" src="https://em-content.zobj.net/thumbs/160/apple/271/red-heart_2764-fe0f.png" onClick={() => setLikes(!likes)}/> : <img id="tweet-like" src="https://em-content.zobj.net/thumbs/160/apple/232/white-heart_1f90d.png" onClick={() => setLikes(!likes)}></img>}
        </div>

      </div>
    </div>
  );
};

export default Tweet;