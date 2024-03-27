// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Events from "./component/Events";
// import Groccery from "./component/Groccery";
// // import Home from "./component/Home";
// import MyForm from "./component/MyForm";
// import Header from "./component/Pages/Header";
// import Layout from "./component/Pages/Layout";
// import Home from "./component/Pages/Home/Home";
// import About from "./component/Pages/About/About";
// import Contact from "./component/Pages/Contact";
// import NotFound from "./component/Pages/NotFound";
// import Dashboard from "./component/Dashboard";
// import Component from "./component/Component";
// import { UserContext } from "./Context";
// import { useState } from "react";
// import Navbar from "./Project/Components/Navbar/Navbar";
// import Product from "./Project/Components/Product/Product";

// function App() {
//   const [user, setUser] = useState("Osas");
//   return (
//     <>
//       {/*   <UserContext.Provider value={user}>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Layout />}>
//               <Route
//                 index
//                 element={
//                   localStorage.getItem("auth") ? (
//                     <Navigate to="/dashboard" />
//                   ) : (
//                     <MyForm />
//                   )
//                 }
//               />
//               <Route
//                 path="about"
//                 element={
//                   localStorage.getItem("auth") ? (
//                     <Navigate to="/dashboard" />
//                   ) : (
//                     <MyForm />
//                   )
//                 }
//               />
//               <Route
//                 path="contact"
//                 element={
//                   localStorage.getItem("auth") ? <Contact /> : <MyForm />
//                 }
//               />
//               <Route
//                 path="register"
//                 element={
//                   localStorage.getItem("auth") ? (
//                     <Navigate to="/dashboard" />
//                   ) : (
//                     <MyForm />
//                   )
//                 }
//               />
//               <Route
//                 path="dashboard"
//                 element={
//                   localStorage.getItem("auth") ? <Dashboard /> : <MyForm />
//                 }
//               />
//             </Route>
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </BrowserRouter>
//         <Component />
//       </UserContext.Provider> */}

//       <Navbar />
//       <Product />
      
//     </>
//   );
// }

// export default App;
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Product from '../Components/Product/Product'
import Product1 from '../Components/Product/Product1'
import { FaCaretRight } from 'react-icons/fa'
import Footer from '../Components/Footer/Footer'
import Navbar1 from '../Pages/Navbar1/Navbar1'

function App() {
  return (
    <div>
      <Navbar/>
      <Product/>
      <Product1/>
      <Footer/>






    </div>
  )
}

export default App