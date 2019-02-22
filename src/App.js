import React, { Component } from 'react'

import Header from './components/Header/'
import About from './components/About/'
import Work from './components/Work/'
import Skills from './components/Skills/'
import Contact from './components/Contact/'
import ReactSVG from 'react-svg';

import ReactFullpage from '@fullpage/react-fullpage';

const App = () => (
  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>

          <a target="blank" href="https://github.com/gsvendsen"><ReactSVG src="svg/github-corner.svg"/></a>

          <Header
            name="Gustav Svendsen"
            gitHub="https://www.github.com/gsvendsen"
          />
          <button onClick={() => fullpageApi.moveSectionDown()}>
            <ReactSVG className="down-arrow" src="https://image.flaticon.com/icons/svg/118/118738.svg" />
          </button>

            <About />
            <button onClick={() => fullpageApi.moveSectionDown()}>
              <ReactSVG className="down-arrow" src="https://image.flaticon.com/icons/svg/118/118738.svg" />
            </button>

            <Work />
            <button onClick={() => fullpageApi.moveSectionDown()}>
              <ReactSVG className="down-arrow" src="https://image.flaticon.com/icons/svg/118/118738.svg" />
            </button>

            <Skills />
            <button onClick={() => fullpageApi.moveSectionDown()}>
              <ReactSVG className="down-arrow" src="https://image.flaticon.com/icons/svg/118/118738.svg" />
            </button>

            <Contact />

        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default App;
