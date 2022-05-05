import NavBar from './components/layout/NavBar'
import IndexPage from './components/pages/IndexPage'
import AboutPage from './components/pages/AboutPage'
import CompanyPage from './components/pages/CompanyPage'
import InsightsPage from './components/pages/InsightsPage'
import ComingSoonPage from './components/pages/ComingSoonPage'
import DashboardPage from './components/pages/DashboardPage'
import RegisterPage from './components/pages/RegisterPage'
import Footer from './components/layout/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' exact element={<IndexPage/>}/>
          <Route path='/about' element={<AboutPage />}/>

          <Route path='/company/:ticker' element={<CompanyPage/>}/> 
          <Route path='/insights' element={<InsightsPage/>}/> 
          <Route path='/dashboard' element={<DashboardPage/>}/> 

          <Route path='/coming-soon' element={<ComingSoonPage/>}/>

          <Route path='/register' element={<RegisterPage/>}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
