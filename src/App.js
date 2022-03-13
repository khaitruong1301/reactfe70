import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HeaderHome from './Components/HeaderHome/HeaderHome';
import About from './pages/About/About';
import AdminIndex from './pages/Admin/AdminIndex/AdminIndex';
import Contact from './pages/Contact/Contact';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import HookUseState from './pages/HookReact/HookUseState/HookUseState';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <HeaderHome />
      {/* <Home /> */}
      <Switch>
        <Route exact path={'/home'} component={Home} />
        <Route exact path={'/contact'} component={Contact} />
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/register'} component={Register} />
        <Route exact path={'/about'} component={About} />
        <Route exact path={'/detail/:id'} component={Detail} />
        <Route exact path={'/admin'} component={AdminIndex} />
        <Route exact path={'/hookusestate'} component={HookUseState} />

        
        <Route exact path={'/'} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
