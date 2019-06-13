import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const data = [
  {
    img:
      'https://images.unsplash.com/photo-1553787762-b5f5721f3270?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    title: 'Is Javascripanguage? Isanguage?Javascript OOP language?',
    desc:
      ' In this article I want to talk about is javascript OOlk a I want to talk acle I want to talk a not'
  },
  {
    img: 'https://picsum.photos/id/237/400/300',
    title:
      'Is Javascript OOP language? Is Javascript OOP language?Javascript OOP language?',
    desc:
      ' In this article I want to talk about is javascript OOP language orclecle I want to talk a I want to talk acle I want to talk a not'
  },
  {
    img: 'https://picsum.photos/id/137/500/300',
    title: 'Is Javascript OOP languJavascript OOP language?',
    desc:
      ' In this article I want to talk about iorclecle I want to talk a I want to talk acle I want to talk a not'
  },
  {
    img: 'https://picsum.photos/id/132/500/300',
    title: 'Is Javascript OOP languJavascript OOP language?',
    desc:
      ' In this article I want to talk about iorclecle I want to talk a I want to talk acle I want to talk a not'
  },
  {
    img: 'https://picsum.photos/id/127/500/300',
    title: 'Is Javascript OOP languJavascript OOP language?',
    desc:
      ' In this article I want to talk about iorclecle I want to talk a I want to talk acle I want to talk a not'
  }
];

const Card = ({ img, title, desc }) => {
  const [down, setDown] = useState(false);

  return (
    <div
      className={'card  ' + (down ? 'grabbing' : 'grab')}
      onMouseDown={() => setDown(true)}
      onMouseUp={() => setDown(false)}
    >
      <div
        className="img__wrapper"
        style={{
          backgroundImage: `url("${img}")`
        }}
      />
      <div className="card__title">
        <a href="#ff">
          <h3>{title}</h3>
          <p>{desc}</p>
        </a>
      </div>
    </div>
  );
};

const Gallery = () => {
  const handleOnDragStart = e => e.preventDefault();

  const Cards = data.map((post, i) => (
    <Card {...post} onDragStart={handleOnDragStart} key={i} />
  ));

  return (
    <AliceCarousel
      mouseDragEnabled
      dotsDisabled
      buttonsDisabled
      items={Cards}
      responsive={{
        0: { items: 1 },
        767: { items: 2 },
        1025: { items: 3 }
      }}
    />
  );
};

export default function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <p>I am on</p>
        <h1>Medium</h1>
        <div className="articles">
          <Gallery />
        </div>
      </div>
    </section>
  );
}
