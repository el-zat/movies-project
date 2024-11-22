
import React from 'react'
import {Header} from './layout/Header'
import {Footer} from './layout/Footer'
import {Main} from './layout/Main'
import { Movies } from './components/Movies'



class App extends React.Component {


  render() {
    return (
      <>
      <Header />
      <Main />
      <Footer />
      </>
    )

  }
}


export default App
