import React from 'react'
import ReactDom from 'react-dom'
import {createGlobalStyle} from 'styled-components'
import {Provider} from 'react-redux'
import App from './components/App'
import {store} from './redux/store'

const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /* font-family: ; */
  }

  body {
    height: 100vh;
    width: 100%;
  }
`

ReactDom.render(
    <>  
        <Provider store={store}>  
            <Global />
            <App />
        </Provider>
    </>,
document.getElementById('root')
)