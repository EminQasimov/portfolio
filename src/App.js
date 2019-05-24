import React from "react"
import "./scss/App.scss"
import FirefoxBrowserFrame from "./components/browserMock/FirefoxBrowserFrame"
// import Canvas from "./components/Canvas"

export default function App() {
  return (
   <div style={{padding: "50px",width:"100vw",height: "100vh"}}>
        <FirefoxBrowserFrame />
   </div>
      

    
  )
}
