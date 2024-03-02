import styled from "styled-components";
// Create a button variable and add CSS
const TestButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid red;
  color: red;
  font-size: 50px;
`;
//display the HTML
function ButtonComponent() {
  return <TestButton>Test Button</TestButton>;
}

export default ButtonComponent;
