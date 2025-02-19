import './App.css';
import Main from './components/Main.tsx';
import Footer from './components/Footer/Footer.tsx';
import Title from './components/Title/Title.tsx';
import Apply from './components/Apply/Apply.tsx';
import OT from './components/OT/OT.tsx';
import Organizations from './components/Organizations.tsx';
import SpecialOrganizations from './components/SpecialOrganizations.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react'


function App() {
  return (
    <Router>
      <div className="app">
        <div className="app-content">
          <Title />
            <Routes>
              {/* "/" 엔드포인트 */}
              <Route path="/" element={<Main />} />

              {/* "/2025ot/*" 엔드포인트 */}
              <Route path="/2025ot/*" element={<OT />} />

              {/* "/2025ot/apply" 엔드포인트 */}
              <Route path="/2025ot/apply" element={<Apply />} />

              {/* "/organizaions/" 엔드포인트 */}
              <Route path="/organizations" element={<Organizations />} />

              {/* "/special_organizaions/" 엔드포인트 */}
              <Route path="/special_organizations" element={<SpecialOrganizations />} />
            </Routes>
          </div>
        <Footer />
      </div>
      <Analytics />
    </Router>
  )
}

export default App
