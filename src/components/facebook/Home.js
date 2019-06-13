import React from 'react';
import '../../scss/facebook/home.scss';
import Post from './Post';

import { FacebookF } from 'styled-icons/fa-brands/FacebookF';
import { Home } from 'styled-icons/typicons/Home';
import { Bell } from 'styled-icons/boxicons-regular/Bell';
import { Airplay } from 'styled-icons/material/Airplay';
import { Store } from 'styled-icons/boxicons-regular/Store';
import { Messenger } from 'styled-icons/boxicons-logos/Messenger';
import { PeopleOutline } from 'styled-icons/material/PeopleOutline';
import { Gear } from 'styled-icons/octicons/Gear';

export default function FacebookHome({ data = [] }) {
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
            <input type="text" placeholder="Search" className="search" />
          </div>
        </div>
        <div className="menu">
          <ul className="menu-wrapper">
            <li>
              <Home />
            </li>
            <li>
              <Bell />
            </li>
            <li>
              <Airplay />
            </li>
            <li />
            <li>
              <Store />
            </li>
            <li>
              <PeopleOutline />
            </li>
            <li>
              <Messenger />
            </li>
          </ul>
        </div>
        <div className="setting">
          <span>
            <Gear />
          </span>
        </div>
      </header>
      <main>
        <div className="fb-left">
          <h1>Home</h1>
          <ul className="list-wrapper">
            <li>Events</li>
            <li>Saved</li>
            <li>Gaming</li>
            <li>Fundraiser</li>
            <li>Memories</li>
            <li>Help & Support</li>
            <li>See More</li>
            <li>Settings</li>
          </ul>
        </div>
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
            </ul>
          </div>
          <div className="fb-send">
            <div className="post-profile" />
            <div className="send-input">Add a post</div>
            <div className="send-butto" />
          </div>
          <div className="fb-posts">{posts}</div>
        </div>
        <div className="fb-right">
          <div className="suggest-wrapper">
            <h1>Suggested</h1>
            <div className="suggest-card">
              <h2>Groups</h2>
              <p>
                New ways to find Friends and <br /> Join communities
              </p>
              <button>Find Your Groups</button>
            </div>
            <div className="suggest-footer">
              <span className="circles" />
              <span className="circles" />
              <span className="circles" />
              <div className="suggest-info">
                <b>Henri</b> and 9 friends joined Groups
              </div>
            </div>
          </div>

          <h1>Contacts</h1>
          <ul className="list-wrapper">
            <li>Denis Han</li>
            <li>Eric Jones</li>
            <li>Jenni Lopez</li>
            <li>Anna Camelli</li>
            <li>Aidan Safriov</li>
            <li>Betti Cingiz</li>
            <li>Dan Brown</li>
            <li>Emin Qasimov</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
