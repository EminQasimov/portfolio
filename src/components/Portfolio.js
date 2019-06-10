import React, { Component, useState } from 'react';
import FirefoxBrowserFrame from './browserMock/FirefoxBrowserFrame';
import AliceCarousel from 'react-alice-carousel';

const framesData = [
  {
    url: 'https://eminqasimov.github.io/loginsignupform',
    title: 'login form'
  },
  {
    url: 'https://eminqasimov.github.io/colorui',
    title: 'color ui'
  },
  {
    url: 'https://eminqasimov.github.io/movies-roller',
    title: 'movies-roller'
  },
  {
    url: 'https://eminqasimov.github.io/opening-3d-box-animation',
    title: '3d box'
  },
  {
    url: 'https://eminqasimov.github.io/3dCarAnimation',
    title: '3d car'
  },
  {
    url: 'https://eminqasimov.github.io/striped-background',
    title: 'striped-background'
  },
  {
    url: 'https://eminqasimov.github.io/flag-animation',
    title: 'flag'
  }
];

const Frame = ({ url, title }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {loading ? <div className="spinner" /> : null}

      <iframe
        src={url}
        frameBorder="0"
        title={title}
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
        autoPlay={this.state.playing}
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
  render() {
    return (
      <section className="portfolio bg" id="portfolio">
        <div className="container">
          <FirefoxBrowserFrame
            style={{
              width: '100%',
              height: 'calc(104% + 4em)',
              position: 'relative',
              top: '-4.8em',
              left: '0'
            }}
            tabbar={true}
            url={this.state.url}
            leftClickHandler={this.onPrev}
            rightClickHandler={this.onNext}
            buttonEnter={this.buttonEnter}
            buttonLeave={this.buttonLeave}
          >
            <Sites ref={this.child} slideChanged={this.handleSlideChange} />
          </FirefoxBrowserFrame>
        </div>
      </section>
    );
  }
}