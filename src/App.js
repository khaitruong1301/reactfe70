import { BrowserRouter, Route, Switch,Router} from 'react-router-dom'
import HeaderHome from './Components/HeaderHome/HeaderHome';
import About from './pages/About/About';
import AdminIndex from './pages/Admin/AdminIndex/AdminIndex';
import Contact from './pages/Contact/Contact';
import DemoAntd from './pages/DemoAntd/DemoAntd';
import Detail from './pages/Detail/Detail';
import DemoHOCModal from './pages/HOC/DemoHOCModal/DemoHOCModal';
import ModalHOC from './pages/HOC/DemoHOCModal/ModalHOC';
import Home from './pages/Home/Home';
import HomeMobile from './pages/Home/HomeMobile';
import HookRedux from './pages/HookReact/HookRedux/HookRedux';
import ParentComponent from './pages/HookReact/HookUseCallBack/ParentComponent';
import HookUseEffect from './pages/HookReact/HookUseEffect/HookUseEffect';
import HookUseMemo from './pages/HookReact/HookUseMemo/HookUseMemo';
import HookUseRef from './pages/HookReact/HookUseRef/HookUseRef';
import HookUseState from './pages/HookReact/HookUseState/HookUseState';
import ToDoList from './pages/HookReact/ToDoList/ToDoList';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import { AdminTemplate } from './templates/AdminTemplate';
import { HomeTemplate } from './templates/HomeTemplate';
import { UserTemplate } from './templates/UserTemplate';
import {history} from './util/setting'
function App() {
  return (
    <Router history={history}>
      {/* <HeaderHome /> */}
      {/* <Home /> */}
      <Switch>
        <HomeTemplate path={'/home'} component={Home} />
        <HomeTemplate exact path={'/contact'} component={Contact} />
        <UserTemplate  path={'/login'} component={Login} />
        <UserTemplate  path={'/register'} component={Register} />
        <HomeTemplate exact path={'/about'} component={About} />
        <HomeTemplate exact path={'/detail/:id'} component={Detail} />
        <HomeTemplate exact path={'/admin'} component={AdminIndex} />
        <HomeTemplate exact path={'/hookusestate'} component={HookUseState} />
        <HomeTemplate exact path={'/hookuseeffect'} component={HookUseEffect} />
        <HomeTemplate exact path={'/hookusecallback'} component={ParentComponent} />
        <HomeTemplate exact path={'/hookusememo'} component={HookUseMemo} />
        <HomeTemplate exact path={'/hookuseref'} component={HookUseRef} />
        <HomeTemplate exact path={'/hookredux'} component={HookRedux} />
        <HomeTemplate exact path={'/todolist'} component={ToDoList} />
        <HomeTemplate exact path={'/demohocmodal'} component={DemoHOCModal} />
        <HomeTemplate exact path={'/profile'} component={Profile} />
        <AdminTemplate exact path={'/demoantd'} component={DemoAntd} />

        <HomeTemplate exact path={'/'} component={Home} mobileComponent= {HomeMobile}/>
      </Switch>
      {/* <AdminTemplate /> */}
      <ModalHOC />
    </Router>
  );
}

export default App;
