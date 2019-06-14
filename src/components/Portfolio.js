import React, { Component } from 'react';
import FirefoxBrowserFrame from './browserMock/FirefoxBrowserFrame';
import AliceCarousel from 'react-alice-carousel';
import newFacebookDesignUI from '../assets/newFacebookDesignUI.mp4';
import VisibilitySensor from 'react-visibility-sensor';

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
    url: 'https://eminqasimov.github.io/movies-roller',
    title: 'Rolling Movies Carousel '
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
  // {
  //   url: newFacebookDesignUI,
  //   title: "new Facebook Design",
  //   type: "video"
  // },
  {
    url: 'https://eminqasimov.github.io/pure-css-photo-collage',
    title: 'Responsive Pure CSS Photo Collage'
  }
];

// if (type === "video") {
//   return (
//     <video
//       src={url}
//       onLoadedMetadata={() => {
//         setLoading(false)
//       }}
//       muted
//       loop
//       controls
//       style={{
//         outline: "none",
//         maxHeight: "90%",
//         maxWidth: "100%",
//         display: loading ? "none" : "inline-block"
//       }}
//     ></video>
//   )
// }

const Frame = ({ url, title, type = 'iframe' }) => {
  const [active, setActive] = React.useState(true);
  const [loading, setLoading] = React.useState(true);

  return (
    <VisibilitySensor active={active}>
      {({ isVisible }) => {
        if (isVisible) {
          console.log('i am visible');
          setActive(false);
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
              {/* <div className={loading ? "spinner" : ""} /> */}
              <iframe
                src={url}
                frameBorder="0"
                title={title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  display: loading ? 'none' : 'inline-block'
                }}
                onLoad={() => {
                  setLoading(false);
                }}
              />
            </div>
          );
        }
        return null;
      }}
    </VisibilitySensor>
  );
};

class Sites extends Component {
  state = {
    playing: true,
    currentIndex: 0,
    itemsInSlide: 1,
    responsive: { 0: { items: 1 } },
    galleryItems: this.galleryItems()
  };

  galleryItems() {
    return framesData.map((post, i) => <Frame {...post} key={i} />);
  }

  slidePrevPage = () => {
    const currentIndex = this.state.currentIndex - this.state.itemsInSlide;
    this.setState({ currentIndex });
  };

  slideNextPage = () => {
    const {
      itemsInSlide,
      galleryItems: { length }
    } = this.state;
    let currentIndex = this.state.currentIndex + itemsInSlide;
    if (currentIndex > length) currentIndex = length;
    this.setState({ currentIndex });
  };

  handleOnSlideChange = event => {
    const { itemsInSlide, item } = event;
    this.setState({ itemsInSlide, currentIndex: item });
    this.props.slideChanged(framesData[item].url);
  };
  pause() {
    this.setState({ playing: false });
  }
  play() {
    this.setState({ playing: true });
  }

  render() {
    const { currentIndex, galleryItems, responsive } = this.state;

    return (
      <AliceCarousel
        mouseDragEnabled
        dotsDisabled
        buttonsDisabled
        // autoPlay={this.state.playing}
        duration={600}
        autoPlayInterval={4000}
        items={galleryItems}
        slideToIndex={currentIndex}
        responsive={responsive}
        onInitialized={this.handleOnSlideChange}
        onSlideChanged={this.handleOnSlideChange}
        onResized={this.handleOnSlideChange}
      />
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
    this.child.current.slidePrevPage();
  };
  onNext = () => {
    this.child.current.slideNextPage();
  };
  handleSlideChange = url => {
    this.setState({ url });
  };
  buttonEnter = () => {
    this.child.current.pause();
  };
  buttonLeave = () => {
    this.child.current.play();
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
