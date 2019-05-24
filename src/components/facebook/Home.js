import React from "react"
import "../scss/browserWindow.scss"
import { Row, Col, Menu, List, Avatar, Card } from "antd"

import { Facebook } from "styled-icons/fa-brands/Facebook"
import { FacebookF } from "styled-icons/fa-brands/FacebookF"
import { PlusSmall } from "styled-icons/octicons/PlusSmall"
import { Close } from "styled-icons/material/Close"
import { ArrowLeft } from "styled-icons/feather/ArrowLeft"
import { ArrowRight } from "styled-icons/feather/ArrowRight"
import { Refresh } from "styled-icons/material/Refresh"
import { DotsVerticalRounded } from "styled-icons/boxicons-regular/DotsVerticalRounded"
import { Home } from "styled-icons/typicons/Home"
import { Bell } from "styled-icons/boxicons-regular/Bell"
import { Airplay } from "styled-icons/material/Airplay"
import { Store } from "styled-icons/boxicons-regular/Store"
import { Messenger } from "styled-icons/boxicons-logos/Messenger"
import { PeopleOutline } from "styled-icons/material/PeopleOutline"
import { Gear } from "styled-icons/octicons/Gear"
import { InsertPhoto } from "styled-icons/material/InsertPhoto"
import { DotsHorizontalRounded } from "styled-icons/boxicons-regular/DotsHorizontalRounded"
import { Like } from "styled-icons/boxicons-regular/Like"
import { CommentAlt as Comment } from "styled-icons/fa-regular/CommentAlt"
import { Share } from "styled-icons/boxicons-regular/Share"

import events from "../assets/calendar.png"
import book from "../assets/book.png"
import game from "../assets/game.png"
import gear from "../assets/gear.png"
import heart from "../assets/heart.png"
import help from "../assets/help.png"
import memories from "../assets/memories.png"
import more from "../assets/more.png"

const Item = Menu.Item
const li = List.Item

export default function BrowserWindow(props) {
  return (
    <div className="browserWindow">
      <div className="bar">
        <div className="bar-tab">
          <div className="bar-tab-buttons">
            <span className="bar-tab-buttons-close" />
            <span className="bar-tab-buttons-min" />
            <span className="bar-tab-buttons-max" />
          </div>
          <div className="bar-tab-head">
            <Facebook size={22} />
            <small>Facebook</small>
            <span>
              <Close size={16} />
            </span>
          </div>
          <div className="bar-tab-plus">
            <PlusSmall size={30} />
          </div>
        </div>
        <div className="bar-search">
          <div>
            <ArrowLeft size={26} />
          </div>
          <div>
            <ArrowRight size={26} />
          </div>
          <div>
            <Refresh size={26} />
          </div>
          <div className="bar-search-input">
            <input type="search" placeholder="facebook.com/@emin.qasimovdia" />
          </div>
          <div>
            <DotsVerticalRounded size={26} />
          </div>
        </div>
      </div>

      <header className="facebook-header">
        <Row>
          <Col span={6} style={{ position: "relative" }}>
            <span className="facebook-logo">
              <FacebookF size={34} />
            </span>
            <input type="text" placeholder="Search Facebook" />
          </Col>
          <Col span={12}>
            <Menu mode="horizontal" selectedKeys={["home"]}>
              <Item key="home">
                <Home size={24} />
              </Item>
              <Item>
                <Bell size={24} />
              </Item>
              <Item>
                <Airplay size={24} />
              </Item>
              <Item>
                <div className="profile-img" />
              </Item>
              <Item>
                <Store size={24} />
              </Item>
              <Item>
                <PeopleOutline size={24} />
              </Item>
              <Item>
                <Messenger size={24} />
              </Item>
            </Menu>
          </Col>
          <Col span={6}>
            <div className="gear">
              <Gear size={24} />
            </div>
          </Col>
        </Row>
      </header>
      <div className="clearfix" />
      <main>
        <div className="fb-left">
          <h2>Home</h2>
          <List className="fb-left-list">
            <li>
              <img src={events} alt="evnt" /> Events
            </li>
            <li>
              <img src={book} alt="evnt" /> Saved
            </li>
            <li>
              <img src={game} alt="evnt" /> Gaming
            </li>
            <li>
              <img src={heart} alt="evnt" /> Fundraiser
            </li>
            <li>
              <img src={memories} alt="evnt" /> Memories
            </li>
            <li>
              <img src={help} alt="evnt" /> Help & Support
            </li>
            <li>
              <img src={gear} alt="evnt" /> Settings and Privacy
            </li>
            <li>
              <img src={more} alt="evnt" /> See more
            </li>
          </List>
        </div>
        <div className="fb-middle">
          <h3>Stories</h3>
          <div className="story-container">
            <ul className="stories">
              <li className="story" />
              <li className="story" />
              <li className="story" />
              <li className="story" />
              <li className="story" />
            </ul>
          </div>
          <div className="fb-post">
            <div>
              <img
                src="https://s.cdpn.io/profiles/user/2961445/512.jpg?1553082357"
                alt="profile"
              />
            </div>
            <span>Add a Post</span>
            <div>
              <InsertPhoto size={38} />
            </div>
          </div>

          <div className="fb-post-1">
            <List.Item actions={[<DotsHorizontalRounded size={24} />]}>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://s.cdpn.io/profiles/user/2961445/512.jpg?1553082357g" />
                }
                title={<a href="http://eminqasimov.xyz">Emin Qasimov</a>}
                description="This is amazing i feel incredible 🤣"
              />
            </List.Item>
            <Card hoverable style={{ width: "100%" }}>
              <img
                width="100%"
                alt="example"
                src="https://images.unsplash.com/photo-1558281050-4c33200099c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&q=80"
              />
              <Row className="fb-reactions">
                <Col span={8}>
                  <Like size={28} /> Like
                </Col>
                <Col span={8}>
                  <Comment size={28} /> Comment
                </Col>
                <Col span={8}>
                  <Share size={28} /> Share
                </Col>
              </Row>
            </Card>
          </div>
          <div className="fb-post-1">
            <List.Item actions={[<DotsHorizontalRounded size={24} />]}>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://s.cdpn.io/profiles/user/2961445/512.jpg?1553082357g" />
                }
                title={<a href="http://eminqasimov.xyz">Emin Qasimov</a>}
                description="This is amazing i feel incredible 🤣"
              />
            </List.Item>
            <Card hoverable style={{ width: "100%" }}>
              <img
                width="100%"
                alt="example"
                src="https://images.unsplash.com/photo-1529653762956-b0a27278529c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=451&q=80"
              />
              <Row className="fb-reactions">
                <Col span={8}>
                  <Like size={28} /> Like
                </Col>
                <Col span={8}>
                  <Comment size={28} /> Comment
                </Col>
                <Col span={8}>
                  <Share size={28} /> Share
                </Col>
              </Row>
            </Card>
          </div>
          <div className="fb-post-1">
            <List.Item actions={[<DotsHorizontalRounded size={24} />]}>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://s.cdpn.io/profiles/user/2961445/512.jpg?1553082357g" />
                }
                title={<a href="http://eminqasimov.xyz">Emin Qasimov</a>}
                description="This is amazing i feel incredible 🤣"
              />
            </List.Item>
            <Card hoverable style={{ width: "100%" }}>
              <img
                width="100%"
                alt="example"
                src="https://images.unsplash.com/photo-1558417942-4aca90f81642?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&q=80"
              />
              <Row className="fb-reactions">
                <Col span={8}>
                  <Like size={28} /> Like
                </Col>
                <Col span={8}>
                  <Comment size={28} /> Comment
                </Col>
                <Col span={8}>
                  <Share size={28} /> Share
                </Col>
              </Row>
            </Card>
          </div>
          <div className="browser-content">{props.children}</div>
        </div>
        <div className="fb-right">
          <h3>Suggested</h3>
          <div className="fb-suggested-card">
            <h2>Groups</h2>
            <p>
              New ways to find friends <br /> Join now
            </p>
          </div>
          <h3>Contacts</h3>
          <List className="fb-left-list right">
            <List.Item>
              <img
                src="https://i.pravatar.cc/150?img=2"
                alt="evnt"
                width="30px"
                height="30px"
              />{" "}
              Emma Watson
            </List.Item>
            <List.Item>
              <img
                src="https://i.pravatar.cc/150?img=11"
                alt="evnt"
                width="30px"
                height="30px"
              />{" "}
              Shakir Husein
            </List.Item>
            <List.Item>
              <img
                src="https://i.pravatar.cc/150?img=4"
                alt="evnt"
                width="30px"
                height="30px"
              />{" "}
              Messio Rodrigez
            </List.Item>
            <List.Item>
              <img
                src="https://i.pravatar.cc/150?img=7"
                alt="evnt"
                width="30px"
                height="30px"
              />{" "}
              Ivan Groznik
            </List.Item>
            <List.Item>
              <img
                src="https://i.pravatar.cc/150?img=9"
                alt="evnt"
                width="30px"
                height="30px"
              />
              Jan Clode
            </List.Item>
            <List.Item>
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="evnt"
                width="30px"
                height="30px"
              />{" "}
              Luis Ferrari
            </List.Item>
            <List.Item>
              <img
                src="https://i.pravatar.cc/150?img=6"
                alt="evnt"
                height="30px"
                width="30px"
              />{" "}
              Eliza Nuri
            </List.Item>
            <List.Item>
              <img
                src="https://i.pravatar.cc/150?img=1"
                alt="evnt"
                width="30px"
                height="30px"
              />{" "}
              Nikolas Cage
            </List.Item>
          </List>
        </div>
        <div className="clearfix" />
      </main>
    </div>
  )
}
