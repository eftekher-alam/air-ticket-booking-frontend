import './App.css'
import Banner from './components/bannar/Banner'
import FeaturedDest from './components/featured_dest/FeaturedDest'
import NavBar from './components/nav_bar/NavBar'

function App() {

  return (
    <div className='max-w-screen-2xl mx-auto'>
      <div><NavBar></NavBar></div>
      <div><Banner></Banner></div>
      <div className='mx-28 my-20'><FeaturedDest></FeaturedDest></div>

    </div>
  )
}

export default App
