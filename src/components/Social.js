import React from "react"
import FacebookMobile from "./FacebookMobile"
import FirefoxBrowserFrame from "./browserMock/FirefoxBrowserFrame"
import Canvas from "./Canvas"

let PostData = [
  {
    video: "https://www.facebook.com/emin.qasimovdia/videos/1267311960099492/",
    time: "April 25, 2019"
  },
  {
    video: "https://www.facebook.com/emin.qasimovdia/videos/1274803902683631/",
    time: "May 6, 2019"
  },
  {
    video: "https://www.facebook.com/emin.qasimovdia/videos/1268757439954944/",
    time: "April 27, 2019"
  },
  {
    video: "https://www.facebook.com/emin.qasimovdia/videos/1277931962370825/",
    time: "May 11, 2019"
  }
]

export default function Social() {
  return (
      <section className="social bg" id="social">
        <div className="container">
          <p>I am on</p>
          <h1>Facebook</h1>
          <div className="right">
            <FirefoxBrowserFrame
              url="facebook.com/emin.qasimovdia"
              style={{
                width: "100%",
                height: "calc(100vh + 4em)",
                borderRadius: 0,
                position: "relative",
                top: "-4em"
              }}
              tabbar={false}
            >
              <FacebookMobile data={PostData} />
            </FirefoxBrowserFrame>
          </div>
        </div>
        <div className="left">
          <Canvas />
          </div>
      </section>
  )
}
