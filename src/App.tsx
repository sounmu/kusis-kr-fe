import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Navbar />
        <Main />
      </div>
      <Footer />
    </div>
  )
}

export default App
