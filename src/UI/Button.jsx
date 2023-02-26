import { useCounter } from '../hooks/useCounter';
import styled from 'styled-components';

const Button = () => {
  const {count, increment, decrement, reset} = useCounter();

  return (
    <ContainerButton>
    <CountStyle>{count}</CountStyle>
    <ButtonStyle onClick={increment}>Increment</ButtonStyle>
    <ButtonStyle onClick={decrement}>Decrement</ButtonStyle>
    <ResetStyle  onClick={reset}>Reset</ResetStyle>
    </ContainerButton>
  );
}

export default Button ;

const ButtonStyle = styled.button `
background-color: brown;
width: 100px;
height: 40px;
border-radius: 10px;
color: white;
font-size: 19px;
margin: 5px;
:active {
  background-color: purple;
};
`

const CountStyle = styled.h2`
margin-left: 100px;
color: purple;
`
const ResetStyle = styled.button`
display: flex;
font-size: 29px;
margin: 5px;
width: 90px;
height: 40px;
color: white;
background-color: black;
border-radius: 10px;
margin-left:70px;
text-align: center;
:active{
  background-color: red;
};
`

const ContainerButton = styled.div`
    width: 500px;
    height: 200px;
    background-color: violet;
    padding-left: 130px;
    padding-top: 40px;
    margin-top: 10px;
`





 
