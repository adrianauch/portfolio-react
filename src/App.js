import React from "react";
import Footer from "./components/footer/footer";
import NavBar from "./components/Navbar/Navbar";
import AboutMe from "./components/about/about";
import Work from "./components/work/work";
import ContactMe from "./components/contact/contact";
// import Hero from "./components/hero";

import { Route, Switch, Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
//   useQuery,
//   gql,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
// const client = new ApolloClient({
//   uri: "/graphql",
//   cache: new InMemoryCache(),
// });

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <NavBar />

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Footer />
    </div>
  );
}

export default App;
