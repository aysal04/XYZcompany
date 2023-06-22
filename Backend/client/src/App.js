import {Routes,Route} from "react-router-dom";
import HomePage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pagenotfound from "./pages/Pagenotfound";
import Dashboard from "./pages/user/Dashboard";
import Home from "./pages/Home";
import Policy from "./pages/Policy";
import Login from "./pages/Auth/login";
import Signup from "./pages/Auth/signup";
import  { Toaster } from 'react-hot-toast';
import Inventry from "./pages/user/Inventry";
import PrivateRoute from "./components/Routes/private";
import ForgotPasssword from "./pages/Auth/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Auth/Admin/AdminDashboard";

import CreateProduct from "./pages/Auth/Admin/CreateProduct";
import Createcategory from "./pages/Auth/Admin/Createcategory";
import Users from "./pages/Auth/Admin/Users";



function App() {
  return (
    <>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/Homepage" element={<HomePage/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route path="/inventry" element={<PrivateRoute/>}>
        <Route  path="user" element={<Inventry/>}/>
       
        
        </Route>
        <Route  path="/inventry"  element={<AdminRoute/>}>
           <Route path="admin" element={<AdminDashboard/>}/>
           <Route path="admin/create-category" element={<Createcategory/>}/>
           <Route path="admin/users" element={<Users/>}/>
           <Route path="admin/create-product" element={<CreateProduct/>}/>
         </Route>
        <Route  path="/dashboard" element={<Dashboard/>}/>
       <Route path="/policy"  element={<Policy/>}/>
       <Route  path="/forgot-password" element={<ForgotPasssword/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/register" element={<Signup/>}/>
        <Route  path="/*" element={<Pagenotfound/>}/>
     
      </Routes>
    </>
    
      
    
  );
}

export default App;
