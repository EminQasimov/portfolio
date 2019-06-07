import React from "react"
import Intro from "./components/Intro"
import Social from "./components/Social"
import Blog from "./components/Blog"
import Protfolio from "./components/Portfolio"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Sticky from "react-sticky-fill"

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

export default function App() {
  return (
    <>
      {/* scroll wrapper for stable fixed bg image, this fixed bug in edge and mobiles create consistency scroll experience */}
      <div className="scroll-wrapper">
        <main className="main-wrapper">
          <Sticky>
            <Intro />
          </Sticky>

          <Sticky>
            <Social />
          </Sticky>

          <Sticky style={{zIndex: '0',pointerEvents: "none"}}>
            <section className="stuck" />
          </Sticky>

          <Sticky>
            <Blog />
          </Sticky>

          <Sticky style={{zIndex: '0',pointerEvents: "none"}}>
            <section className="stuck" />
          </Sticky>

          <Sticky >
            <Protfolio />
          </Sticky>

          <Sticky style={{zIndex: '0',pointerEvents: "none"}}>
            <section className="stuck" />
          </Sticky>

          <Sticky>
            <Skills />
          </Sticky>
          
          <Sticky style={{zIndex: '0',pointerEvents: "none"}}>
            <section className="stuck" />
          </Sticky>
          
          <Sticky>
            <Contact />
          </Sticky>
        </main>
      </div>
    </>
  )
}
