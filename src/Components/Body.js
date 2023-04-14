import React, {useState} from "react";
import Tweet from "./Tweet.js";


const Body = () => {

  const [tweetHandle, setTweetHandle] = useState("");
  const [tweetAuthor, setTweetAuthor] = useState("");
  const [tweetContent, setTweetContent] = useState("");
  const [tweetInfo, setTweetInfo] = useState([]);

  const submitForm = () => {
    setTweetInfo([...tweetInfo, {tweetHandle: tweetHandle, tweetAuthor: tweetAuthor, tweetContent: tweetContent}]);
    setTweetHandle("");
    setTweetAuthor("");
    setTweetContent("");
  }

  return ( 
    <div>
      <div>
      <h2>Submit a Tweet Here</h2>
      <input value={tweetHandle} onChange={e => setTweetHandle(e.target.value)} placeholder="Tweet Handle"/>
      <br></br>
      <input value={tweetAuthor} onChange={e => setTweetAuthor(e.target.value)} placeholder="Tweet Author"/>
      <br></br>
      <input value={tweetContent} onChange={e => setTweetContent(e.target.value)} placeholder="Tweet Content"/>
      <br></br>
      <button onClick={submitForm}>Submit</button>
      </div>

      <br></br><br></br>
      {tweetInfo.map((tweet, i) => 
          (<Tweet handle={tweet.tweetHandle} author={tweet.tweetAuthor} content={tweet.tweetContent} key={i}/>)
      )}
    </div>
  );
};

export default Body;