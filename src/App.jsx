import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div>
      <Header/>
      <div className="min-h-[calc(100vh-604px)]">
        <Outlet></Outlet>
      </div>
      <Footer/>
    </div>
  )
}

export default App
