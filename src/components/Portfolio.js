import React, { Component } from 'react';
import FirefoxBrowserFrame from './browserMock/FirefoxBrowserFrame';
import newFacebookDesignUI from '../assets/newFacebookDesignUI.mp4';
import MoviesRoller from '../assets/Movies-Roller.mp4';
import Slider from 'react-slick';

const framesData = [
  {
    url: 'https://eminqasimov.github.io/loginsignupform',
    title: 'Login and Sign up Form UI animation'
  },
  {
    url: 'https://eminqasimov.github.io/colorui',
    title: 'Color UI Landing Page'
  },
  {
    url: 'https://eminqasimov.github.io/opening-3d-box-animation',
    title: 'Opening 3D cardboard Box Animation'
  },
  {
    url: 'https://eminqasimov.github.io/3dCarAnimation',
    title: '3D Car Animation'
  },
  {
    url: 'https://eminqasimov.github.io/striped-background',
    title: 'Striped Background Effect With CSS'
  },
  {
    url: 'https://eminqasimov.github.io/flag-animation',
    title: 'Interactive Flag Animation '
  },
  {
    url: 'https://eminqasimov.github.io/pure-css-photo-collage',
    title: 'Responsive Pure CSS Photo Collage'
  },
  {
    url: 'https://codepen.io/eminqasimov/full/yrzZwJ',
    title: 'mask login ui'
  },
  {
    url: 'https://codepen.io/eminqasimov/full/eamvrQ',
    title: 'Pie Image Carousel'
  },
  {
    url: MoviesRoller,
    title: 'Rolling Movies Carousel',
    type: 'video'
  },
  {
    url: newFacebookDesignUI,
    title: 'new Facebook Design',
    type: 'video'
  }
];

const Frame = ({ url, title, type = 'iframe' }) => {
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
      {loading ? <div className="spinner" /> : null}

      {type === 'video' ? (
        <video
          src={url}
          onLoadedMetadata={() => {
            setLoading(false);
          }}
          muted
          controls
          style={{
            outline: 'none',
            maxHeight: '90%',
            maxWidth: '100%',
            display: loading ? 'none' : 'inline-block'
          }}
        ></video>
      ) : type === 'iframe' ? (
        <iframe
          className="myTarget"
          src={url}
          frameBorder="0"
          title={title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            display: loading ? 'none' : 'inline-block'
          }}
          onLoad={() => setLoading(false)}
        />
      ) : null}
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
        this.props.slideChanged(framesData[index].url);
      }
    };
    return (
      <Slider ref={c => (this.slider = c)} {...settings}>
        {framesData.map(frame => (
          <Frame {...frame} key={frame.url} />
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
      url: framesData[0].url
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
  buttonEnter = () => {
    // this.child.current.pause()
  };
  buttonLeave = () => {
    // this.child.current.play()
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
            buttonEnter={this.buttonEnter}
            buttonLeave={this.buttonLeave}
            focusHandler={this.focusHandler}
          >
            <Sites ref={this.child} slideChanged={this.handleSlideChange} />
          </FirefoxBrowserFrame>
        </div>
      </section>
    );
  }
}
