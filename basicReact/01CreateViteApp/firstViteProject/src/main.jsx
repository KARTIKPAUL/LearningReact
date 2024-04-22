import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
      <div>
        <h1>Custom React Create</h1>
      </div>
    )
}

const AnotherApp = (
  <a href="https://google.com" target='_blank'>Google</a>
)

const ActualReactElement = React.createElement(
  'a',
  {href: "https://google.com",
  target: "_blank"},
  "Go To Google"
)

ReactDOM.createRoot(document.getElementById('root')).render(

  //AnotherApp
  //ActualReactElement
  //  <>
  //    <MyApp />
  //  </>

  <>
  <App />
  </>
)
