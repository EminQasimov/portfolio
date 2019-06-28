import React, { Component } from 'react';
import Intro from './components/Intro';
import Social from './components/Social';
import Blog from './components/Blog';
import Protfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Sticky from 'react-sticky-fill';

const isSmallAndBig = () => {
  if (window.innerWidth < 1024 || window.innerHeight > 1024) {
    return true;
  } else {
    return false;
  }
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      size: isSmallAndBig()
    };
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      this.setState({ loading: false });
      document.body.classList.add('show-bg');
    });
    window.addEventListener('resize', () => {
      this.setState({ size: isSmallAndBig() });
    });
  }
  render() {
    return (
      <>
        {this.state.loading && (
          <div className="spinner-wrapper">
            <div className="spinner" />
          </div>
        )}
        <main className={'main-wrapper ' + (this.state.loading ? '' : 'dance')}>
          <Sticky>
            <Intro />
          </Sticky>

          <Sticky style={{ zIndex: this.state.size ? '999' : '1' }}>
            <Social />
          </Sticky>

          <Sticky style={{ zIndex: '0', pointerEvents: 'none' }}>
            <section className="stuck" />
          </Sticky>

          <Sticky>
            <Blog />
          </Sticky>

          <Sticky style={{ zIndex: '0', pointerEvents: 'none' }}>
            <section className="stuck" />
          </Sticky>

          <Sticky style={{ zIndex: this.state.size ? '999' : '1' }}>
            <Protfolio />
          </Sticky>

          <Sticky style={{ zIndex: '0', pointerEvents: 'none' }}>
            <section className="stuck" />
          </Sticky>

          <Sticky>
            <Skills />
          </Sticky>

          <Sticky style={{ zIndex: '0', pointerEvents: 'none' }}>
            <section className="stuck" />
          </Sticky>

          <Sticky>
            <Contact />
          </Sticky>
        </main>
      </>
    );
  }
}
