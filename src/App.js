import React from "react";
import Portifolio from "./pages/Portifolio";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App () {
 return (
   <Router>
     <Route exact path ="/" component={Portifolio} />
   </Router>
 )
}


export default App; 