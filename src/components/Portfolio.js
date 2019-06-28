import React, { Component } from 'react';
import FirefoxBrowserFrame from './browserMock/FirefoxBrowserFrame';
import Slider from 'react-slick';

const framesData = [
  {
    U: 'https://eminqasimov.github.io/loginsignupform',
    T: 'Login and Sign up Form UI animation'
  },
  {
    U: 'https://eminqasimov.github.io/colorui',
    T: 'Color UI Landing Page'
  },
  {
    U: 'https://eminqasimov.github.io/hospital-dashboard-with-antdui',
    T: 'Hospital dashboard UI with Ant Design UI kit'
  },
  {
    U: 'https://eminqasimov.github.io/opening-3d-box-animation',
    T: 'Opening 3D cardboard Box Animation'
  },
  {
    U: 'https://eminqasimov.github.io/3dCarAnimation',
    T: '3D Car Animation'
  },
  {
    U: 'https://eminqasimov.github.io/striped-background',
    T: 'Striped Background Effect With CSS'
  },
  {
    U: 'https://eminqasimov.github.io/flag-animation',
    T: 'Interactive Flag Animation '
  },
  {
    U: 'https://eminqasimov.github.io/pure-css-photo-collage',
    T: 'Responsive Pure CSS Photo Collage'
  },
  {
    U: 'https://codepen.io/eminqasimov/full/yrzZwJ',
    T: 'mask login ui'
  },
  {
    U: 'https://codepen.io/eminqasimov/full/eamvrQ',
    T: 'Pie Image Carousel'
  },
  {
    U: 'https://player.vimeo.com/video/343181095?loop=1',
    T: 'Rolling Movies Carousel'
  },
  {
    U: 'https://player.vimeo.com/video/343177258?loop=1',
    T: 'new Facebook Design'
  }
];

const Frame = ({ U, T }) => {
  const [loading, setLoading] = React.useState(true);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {loading && <div className="spinner" />}

      <iframe
        className="myTarget"
        src={U}
        frameBorder="0"
        title={T}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          display: loading ? 'none' : 'inline-block'
        }}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

class Sites extends Component {
  next = () => {
    this.slider.slickNext();
  };
  prev = () => {
    this.slider.slickPrev();
  };

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      lazyLoad: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: false,
      cssEase: 'linear',
      pauseOnHover: true,
      afterChange: index => {
        this.props.slideChanged(framesData[index].U);
      }
    };
    return (
      <Slider ref={c => (this.slider = c)} {...settings}>
        {framesData.map(frame => (
          <Frame {...frame} key={frame.U} />
        ))}
      </Slider>
    );
  }
}

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state = {
      url: framesData[0].U
    };
  }
  onPrev = () => {
    this.child.current.prev();
  };
  onNext = () => {
    this.child.current.next();
  };
  handleSlideChange = url => {
    this.setState({ url });
  };
  focusHandler = (url = 'eminqasimov.xyz') => {
    window.open(url, '_blank');
  };
  render() {
    return (
      <section className="portfolio" id="portfolio">
        <div className="container">
          <p>My</p>
          <h1>Portfolio</h1>
          <FirefoxBrowserFrame
            style={{
              width: '100%',
              height: '89%',
              position: 'relative',
              left: '0'
            }}
            tabbar={true}
            url={this.state.url}
            leftClickHandler={this.onPrev}
            rightClickHandler={this.onNext}
            focusHandler={this.focusHandler}
          >
            <Sites ref={this.child} slideChanged={this.handleSlideChange} />
          </FirefoxBrowserFrame>
        </div>
      </section>
    );
  }
}
