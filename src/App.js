import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Tables from './Tables';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Dashboard';
import User from './User';
import CreateUserform from './CreateUserform';
import Productform from './Productform';

function App() {
  
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Routes>
                <Route path="/Tables" element={<Tables />}/>
                <Route path="/Dashboard" element={<Dashboard />}/>
                <Route path="/User" element={<User />}/>
                <Route path="/Userform" element={<CreateUserform />}/>
                <Route path="/Productform" element={<Productform />}/>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
