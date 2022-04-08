import React from "react";
import Checkout from "./Checkout";
import CheckOut2 from "./CheckOut2";
import CheckOut3 from "./CheckOut3";
import Static from "./Static";
import styled from "styled-components";

const CheckOutmain = () => {
    // const {id} = React.useContext(AuthContext)
    // console.log(id)
  return (
 
      <Div>
        
        <Checkout />
        <Static />
      </Div>

  );
};

export default CheckOutmain;

const Div = styled.div`
  display: flex;
`;