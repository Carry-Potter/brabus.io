import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Supercars from './pages/Supercars';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';
import Main from './pages/Main';
import NewsAndEvents from './pages/NewsAndEvents';
import TurboS from './pages/TurboS';
import Elektro from './pages/Elektro';
import Ships from './pages/Ships';
import Media from './pages/Media';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/supercars' exact component={Supercars} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/team' exact component={Team} />
      </Switch>
      <Main />
      <NewsAndEvents/>
      <TurboS/>
      <Elektro/>
      <Ships/>
      <Media/>
      <Footer/>
    </Router>
  );
}

export default App;
