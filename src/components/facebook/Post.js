import React, { useRef, useEffect, useState } from "react"
import "../../scss/facebook/post.scss"

import myimg from "../../assets/profile.jpg"

export default function Post({ postDate, video }) {
  let fbVideo = useRef(null)
  let [isloading, setLoading] = useState(true)

  useEffect(() => {
    let inter = setInterval(() => {
      let elem = document.querySelectorAll(".fb-video  iframe")[0]
      if (elem) {
        setLoading(false)
        clearInterval(inter)
      }
    }, 2000)
  }, [])

  return (
    <div className="facebook-post">
      <div className="post-head">
        <img src={myimg} alt="emin qasimov profile" />
        <div className="author">
          <div className="name">Emin Qasimov</div>
          <div className="time">{postDate}</div>
        </div>
        <div className="dots" />
      </div>
      <div className={"post-body" + (isloading ? " preloader" : "")}>
        <div
          className="fb-video"
          ref={fbVideo}
          data-href={video}
          data-show-text="true"
          data-width="auto"
          // data-autoplay="false"
          // data-allowfullscreen="false"
        />
      </div>
    </div>
  )
}
