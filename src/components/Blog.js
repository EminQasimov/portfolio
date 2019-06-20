import React, { useState, Component } from 'react';
import Slider from 'react-slick';
import '../scss/slick.css';
import oopjs from '../assets/oopjs-min.jpg';
import reactfirebase from '../assets/reactfirebase-min.png';
import es8 from '../assets/es8-min.png';
import antipattern from '../assets/antipattern.jpeg';

const data = [
  {
    img: es8,
    title: 'ES2017 (ES8) ilə Javascript-ə gələn yeniliklər nələrdir?',
    date: 'Jun 19',
    link:
      '/es2017-es8-il%C9%99-javascript-%C9%99-g%C9%99l%C9%99n-yenilikl%C9%99r-n%C9%99l%C9%99rdir-a8b58c5cf52f'
  },
  {
    img: reactfirebase,
    title: 'React app-ı Firebase-ə necə yükləmək (deploy) olar? ',
    date: 'Jun 18',
    link:
      '/react-js-app-%C4%B1-firebase-%C9%99-y%C3%BCkl%C9%99m%C9%99k-deploy-cc32d173d6fa'
  },
  {
    img: oopjs,
    title: 'Javascript-də OOP prinsipləri',
    date: 'Jun 17',
    link: '/javascript-d%C9%99-oop-prinsipl%C9%99ri-5d4484a8a981'
  },
  {
    img: antipattern,
    title: 'React.js -də etdiyimiz səhvlər — Anti-pattern-lər',
    date: 'Jun 20',
    link: '/react-js-də-etdiyimiz-səhvlər-anti-pattern-lər-fb9eabe5c2a0'
  }
];

const Card = ({ img, title, date, link }) => {
  const [down, setDown] = useState(false);

  return (
    <div
      className={'card  ' + (down ? 'grabbing' : 'grab')}
      onMouseDown={() => setDown(true)}
      onMouseUp={() => setDown(false)}
    >
      <div className="img__wrapper">
        <img src={img} loading="lazy" alt={title} />
      </div>
      <div className="card__title">
        <a href={'https://medium.com/@eminqasimov' + link}>
          <h3>{title}</h3>
        </a>
        <div className="paragraf">
          <div className="author-image" />
          <div className="author-data">
            <h4>Emin Qasimov</h4>
            <span>{date + ', 2019'}</span>
          </div>
        </div>
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
