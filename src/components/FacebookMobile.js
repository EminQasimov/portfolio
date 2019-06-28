import React, { useRef, useEffect, useState } from 'react';
import { FacebookF } from 'styled-icons/fa-brands/FacebookF';
import { Search } from 'styled-icons/evil/Search';
import { Gear } from 'styled-icons/octicons/Gear';
import { Image } from 'styled-icons/typicons/Image';
import { DotsHorizontalRounded } from 'styled-icons/boxicons-regular/DotsHorizontalRounded';

const Post = ({ postDate, video }) => {
  let fbVideo = useRef(null);
  let [isloading, setLoading] = useState(true);

  useEffect(() => {
    let inter = setInterval(() => {
      let elem = fbVideo.current.getAttribute('fb-xfbml-state');
      if (elem === 'rendered') {
        setLoading(false);
        clearInterval(inter);
      }
    }, 3000);
  }, []);

  return (
    <div className="facebook-post">
      <div className="post-head">
        <span />
        <div className="author">
          <div className="name">
            <a href="https://facebook.com/emin.qasimovdia">Emin Qasimov</a>{' '}
            <p>
              shared a video to the group:{' '}
              <a href="https://www.facebook.com/groups/frontenddevelopersazerbaijan">
                Frontend Developers - Azerbaijan
              </a>
              .
            </p>
          </div>
          <div className="time">{postDate}</div>
        </div>
        <div className="dots">
          <DotsHorizontalRounded />
        </div>
      </div>
      <div className={'post-body' + (isloading ? ' preloader' : '')}>
        <div
          className="fb-video"
          ref={fbVideo}
          data-href={video}
          data-show-text="true"
          data-width={window.innerWidth >= 600 ? 'auto' : 350}
          data-autoplay="false"
        />
      </div>
    </div>
  );
};

export default function FacebookMobile({ data = [] }) {
  let posts = data.map((e, i) => {
    return <Post video={e.video} postDate={e.time} key={i} />;
  });

  return (
    <div id="facebook">
      <header>
        <div className="logo-search">
          <span className="logo">
            <FacebookF />
          </span>
          <div className="search-wrapper">
            <span className="search-icon">
              <Search />
            </span>
            <input type="text" placeholder="Search" className="search" />
          </div>
        </div>
        <div className="setting">
          <span>
            <Gear />
          </span>
        </div>
      </header>
      <div className="fb-middle">
        <div className="story-wrapper">
          <h1>Stories</h1>
          <ul className="stories">
            <li className="story" />
            <li className="story" />
            <li className="story" />
            <li className="story" />
            <li className="story" />
            <li className="story" />
            <li className="story" />
            <li className="story" />
          </ul>
        </div>
        <div className="fb-send">
          <div className="post-profile" />
          <div className="send-input">Add a post</div>
          <div className="send-button">
            <Image />
          </div>
        </div>

        <div className="fb-posts">{posts}</div>
      </div>
    </div>
  );
}
