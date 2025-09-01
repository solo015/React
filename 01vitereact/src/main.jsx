
import React from 'react'
import ReactDOM from 'react-dom/client'


import App from './App.jsx'


function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}



const anotherUser = 'Chai aur react'



const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'click me to visit google ',
  anotherUser 
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {reactElement}

  </React.StrictMode>
)






