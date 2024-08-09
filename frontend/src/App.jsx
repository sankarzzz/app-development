import React from 'react';
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import Login from './Components/Login-Register/Login';
import Register from './Components/Login-Register/Register';
import Home from './Home';
import CorporateEvents from './CorporateEvents';
import EventDetails from './Components/EventDetails/EventDetails';
import EventRegister from './Components/EventRegister/EventRegister';
import Dashboard from './Components/Dashboard/Dashboard'
import PrivateRoute from './PrivateRoute';
import DashEvent from './Components/Dashboard/DashEvent'
import DashEventAdd from './Components/Dashboard/DashEventAdd'
import DashUser from './Components/Dashboard/DashUser'
import DashUserEdit from './Components/Dashboard/DashUserEdit'
import EventRegisterEdit from './Components/Dashboard/EventRegisterEdit';
import EventRegisterDash from './Components/Dashboard/EventRegister';
import DashUserAdd from './Components/Dashboard/DashUserAdd';
import EventEdit from './Components/Dashboard/DashEventEdit'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/corporate-events" element={<CorporateEvents />} />
        <Route path="/corporate-events/:id" element={<EventDetails />} />
        <Route path="/event-register/:eventId" element={<EventRegister />} />
        <Route path="/dashboard" element={ <PrivateRoute> <Dashboard /> </PrivateRoute>}/>
        <Route path="/dashboard/events" element={ <PrivateRoute> <DashEvent /> </PrivateRoute>}/>
        <Route path="/events-edit/:id" element={ <PrivateRoute> <EventEdit /> </PrivateRoute>}/>
        <Route path="/event-add" element={ <PrivateRoute> <DashEventAdd /> </PrivateRoute>}/>
        <Route path="/dashboard/users" element={ <PrivateRoute> <DashUser /> </PrivateRoute>}/>
        <Route path="/users-edit/:id" element={ <PrivateRoute> <DashUserEdit /> </PrivateRoute>}/>
        <Route path="/users-add" element={ <PrivateRoute> <DashUserAdd /> </PrivateRoute>}/>
        <Route path="/dashboard/event-register" element={ <PrivateRoute> <EventRegisterDash /> </PrivateRoute>}/>
        <Route path="/event-register-edit/:id" element={ <PrivateRoute> <EventRegisterEdit /> </PrivateRoute>}/>

      </Routes>
      </BrowserRouter>
  );
}

export default App;
