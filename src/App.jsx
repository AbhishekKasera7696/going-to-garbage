import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Checkout from "./checkout/Checkout";
import CheckOut2 from "./checkout/CheckOut2";
import CheckOut3 from "./checkout/CheckOut3";
import Home from "./Home";

function App() {

	return (
	<>
  <Routes>
      <Route path ="/" element ={< Home />} ></Route>
      <Route path="/FirstStep" element={<Checkout />} />
      <Route path="/Secondndstep" element={<CheckOut2 />} />
      <Route path="/ThirdStep" element={<CheckOut3 />} />
    </Routes>
  </>	
	);
}

export default App;
