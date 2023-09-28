import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./components/Home/Home";
//import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/Contact";
//import Footer from "./components/footer/footer";
import SocialMedia from "./pages/SocialMedia";
import WebDesign from "./pages/WebDesign";
import VideoPhoto from './pages/VideoPhoto';
import Branding from "./pages/Branding";

const httpLink = createHttpLink({
    uri: "/graphql",
  });
  
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("id_token");
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/socialmedia"} element={<SocialMedia />} />
                    <Route path={"/webdesign"} element={<WebDesign />} />
                    <Route path={"/videophoto"} element={<VideoPhoto />} />
                    <Route path={"/branding"} element={<Branding />} />
                    <Route path={"/contact"} element={<Contact />} />
                    <Route path={"*"} element={<h1>No Content Found</h1>} />
                </Routes>
                
            </Router>
            
        </ApolloProvider>
    );
}

export default App;