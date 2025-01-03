import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Title from './components/Title'

function App() {
  return (
    <div className="app">
      <div className="main-content">
        <Title />
        <Navbar />
        <div className="grid-container">
          <div className="col-12 col-md-12 col-sm-12">
            <Main />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
