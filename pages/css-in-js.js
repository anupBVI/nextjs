import React from "react";
import styled from "styled-components";

const Title = styled.h4`
  font-size: 40px;
  color:${({theme})=>theme.colors.secondary};
`;
function CSSINJS() {
  return (
    <div>
      <h1 style={{ color: "red" }}>Hello World</h1>
      <Title>Styled Component</Title>
    </div>
  );
}

export default CSSINJS;
