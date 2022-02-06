import React from "react";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div id="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="dress.jpeg" alt="" />
        <h1 className="singlePostTitle">Lorem ipsum dolor</h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">Chriselle</b>
          </span>
          <span>1.01.2022 r.</span>
        </div>
        <p className="singlePostDesc">
          There`s something very special about stumbling across a brand in the magical woodland that is Instagram. Whether that`s checking a tag on an
          outfit the girl you adore is wearing, spotting a share on stories or by chance noticing their little circle icon stand out in a mist of
          little dots; sometimes it can feel like a total fluke finding a brand that completely sings to you. Thankfully people like Isabel at the
          Daily Dress Edit (and joyful dress aficionado Jess Diner) make discoveries like this all too easy; which is where Seraphina comes in. From
          paisley prairies, seventies inspired blue denims and scalloped cord, they`re the kind of dresses that make transitional seasonal dressing
          streamlined- and make pieces in your wardrobe transcend seasons (which I spoke about a little here, but there`s something special and
          important about having things that don`t need to live under your bed half of the year), and truly feel like dedicated live-in items, which
          is exactly what want to see when you open your wardrobe.
        </p>
      </div>
    </div>
  );
}
