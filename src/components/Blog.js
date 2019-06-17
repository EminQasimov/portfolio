import React, { useState, Component } from 'react';
import Slider from 'react-slick';
import '../scss/slick.css';

const data = [
  {
    img: 'https://i.pravatar.cc/256?img=33',
    title: '1 Is Javascripanguage? Isanguage?Javascript OOP language?',
    desc: 'In this ar is javascript OOlk a I want to taa not'
  },
  {
    img: 'https://i.pravatar.cc/256?img=35',
    title: '2 Is Javascript OOP language? Is Javascript ',
    desc: 'javascript OOP language orclecle I want to talkka not'
  },
  {
    img: 'https://i.pravatar.cc/256?img=37',
    title: '3 Is Javascript OOP languJavascript OOP language?',
    desc: 'to talk about iorclecle I want to talk a I wanot'
  },
  {
    img: 'https://i.pravatar.cc/256?img=22',
    title: '4 Is Javascript OOP languJavascript OOP language?',
    desc: 'Inis article I want to tant to talk a I want to tala not'
  },
  {
    img: 'https://i.pravatar.cc/256?img=44',
    title: '5 Is Javascript OOP languJavascript OOP language?',
    desc: 'In this article I want to talk about ia I alk a not'
  },
  {
    img: 'https://i.pravatar.cc/256?img=24',
    title: '6 Is Javascript OOP languJavascript OOP language?',
    desc: 'In this article I want to talk about ia I alk a not'
  },
  {
    img: 'https://i.pravatar.cc/256?img=4',
    title: '7 Is Javascript OOP languJavascript OOP language?',
    desc: 'In this article I want to talk about ia I alk a not'
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

class Gallery extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
      centerPadding: '60px',
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: 'linear',

      responsive: [
        {
          breakpoint: 1921,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            centerMode: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
    return (
      <Slider {...settings}>
        {data.map(post => (
          <Card {...post} key={post.img} />
        ))}
      </Slider>
    );
  }
}

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
