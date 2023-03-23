import React from 'react'
import "./Widjet.css"
import Search from "@mui/icons-material/Search";
import {TwitterTimelineEmbed, TwitterShareButton,TwitterTweetEmbed} from "react-twitter-embed";

function Widjet() {
  return (
    <div className='widjets'>
      {/* <h2>widjet</h2> */}
      <div className="widjets__input">
                <Search className="widjets_searchIcon"/>
        <input type="text" placeholder='Search twitter' />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1638909334510772226"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="@suchitra3576"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/suchitra.patra.31?mibextid=ZbWKwL"}
          options={{ text: "#reactjs is awesome", via: "@suchitra3576" }}
        />
      </div></div>
  )
}

export default Widjet