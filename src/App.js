import React from "react"
import Intro from "./components/Intro"
import Social from "./components/Social"
import bg from "./assets/bg.png"
// import firebase from "./firebaseConfig"
// const articles = firebase.database().ref("/articles")

// articles.push({
//   title: "how it iw works",
//   author: "men",
//   content: "bla blah blah",
// }).then((data)=>{
//   console.log("datam", data)
// }).catch((err)=>{
//   console.log(err)
// })

// import FirefoxBrowserFrame from "./components/browserMock/FirefoxBrowserFrame"
// import FacebookHome from "./components/facebook/Home"
// import Canvas from "./components/Canvas"

export default function App() {
  return (
    <>
      <img src={bg} className="me-bg" alt="emin qasimov bg" />
      {/* scroll wrapper for stable fixed bg image, this fixed bug in edge and mobiles */}
      <div className="scroll-wrapper">
        <main className="main-wrapper">
          <Intro />
          <Social />
          <section className="three" id="three">
            FINE
          </section>
          <section className="four" id="four">
            IN
          </section>
          <section className="five" id="five">
            END
          </section>
        </main>
      </div>
    </>
  )
}
