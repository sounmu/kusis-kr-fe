import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Join from './components/Join';
import OT from './components/OT';
import Organizations from './components/Organizations';
import SpecialOrganizations from './components/SpecialOrganizations';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="main-content">
          <Title />
          <Navbar />
          <div className="grid-container">
            <div className="col-12 col-md-12 col-sm-12">
              <Routes>
                {/* "/" 엔드포인트 */}
                <Route path="/" element={<Main />} />

                {/* "/2025ot/*" 엔드포인트 */}
                <Route path="/2025ot/*" element={<OT />} />

                {/* "/2025ot/join" 엔드포인트 */}
                <Route path="/2025ot/join" element={<Join />} />

                {/* "/organizaions/" 엔드포인트 */}
                <Route path="/organizations" element={<Organizations />} />

                {/* "/special_organizaions/" 엔드포인트 */}
                <Route path="/special_organizations" element={<SpecialOrganizations />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
