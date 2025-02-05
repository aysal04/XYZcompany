import React from  "react";
import Header from "./Header";
import Footer from "./Footer";
import {Helmet} from "react-helmet";
import  { Toaster } from 'react-hot-toast';

//  import Sidebar from "cdbreact/dist/components/Sidebar";
const Layout=({children,title,description,keywords,author})=>{
    return(
        <div>
        <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
        <meta name="author" content={author}/>
         <title>{title}</title>
     
        </Helmet>
        <Header/>
         {/* <Sidebar/>  */}
            <main style={{minHeight:'80vh'}}>
            <Toaster /> 
            {children}
            
            </main>
            <Footer/>
            
        </div>
    )
}
Layout.defaultProps ={
    title:'Ecommerce app shop-now',
    description:'mern stack project',
    keywords:'mern,react,node,mongodb',
    author:'adarsh'
}
export default Layout;