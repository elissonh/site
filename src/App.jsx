
import './App.css'
import './Common.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className='container'>
      <Header></Header>
      {/* <Hero></Hero> */}
      <div id='main'></div>
      <Footer></Footer>
    </div>
  )
}

export default App
