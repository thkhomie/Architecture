import './App.css'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import Home from './components/Home'
import NavBar from './components/NavBar'
import OurServices from './components/OurServices'
import OurWork from './components/OurWork'
import Stats from './components/Stats'
import Testimonals from './components/Testimonals'

function App() {
  

  return (
    <div className='bg-background'>
      <NavBar />
      <Home />
      <Stats />
      <OurServices />
      <OurWork />
      <Testimonals />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
