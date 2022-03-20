import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HeaderHome from './Components/HeaderHome/HeaderHome';
import About from './pages/About/About';
import AdminIndex from './pages/Admin/AdminIndex/AdminIndex';
import Contact from './pages/Contact/Contact';
import Detail from './pages/Detail/Detail';
import DemoHOCModal from './pages/HOC/DemoHOCModal/DemoHOCModal';
import ModalHOC from './pages/HOC/DemoHOCModal/ModalHOC';
import Home from './pages/Home/Home';
import HookRedux from './pages/HookReact/HookRedux/HookRedux';
import ParentComponent from './pages/HookReact/HookUseCallBack/ParentComponent';
import HookUseEffect from './pages/HookReact/HookUseEffect/HookUseEffect';
import HookUseMemo from './pages/HookReact/HookUseMemo/HookUseMemo';
import HookUseRef from './pages/HookReact/HookUseRef/HookUseRef';
import HookUseState from './pages/HookReact/HookUseState/HookUseState';
import ToDoList from './pages/HookReact/ToDoList/ToDoList';
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
        <Route exact path={'/hookuseeffect'} component={HookUseEffect} />
        <Route exact path={'/hookusecallback'} component={ParentComponent} />
        <Route exact path={'/hookusememo'} component={HookUseMemo} />
        <Route exact path={'/hookuseref'} component={HookUseRef} />
        <Route exact path={'/hookredux'} component={HookRedux} />
        <Route exact path={'/todolist'} component={ToDoList} />
        <Route exact path={'/demohocmodal'} component={DemoHOCModal} />

        <Route exact path={'/'} component={Home} />
      </Switch>

      <ModalHOC />
    </BrowserRouter>
  );
}

export default App;
