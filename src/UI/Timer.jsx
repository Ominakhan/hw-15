import styled from "styled-components";
import { useTimer } from "../hooks/useTimer";



const  Timer = () => {
const {minutes,seconds,handleStart,handleStop,handleRestart} = useTimer()


  return (
    <Container>
        <TimeContainer>
          <StyleTimer>{minutes}</StyleTimer>
          <span>:</span>
          <StyleTimer>{seconds}</StyleTimer>
        </TimeContainer>
        
        <ButtonStyle onClick={handleStart}>Start</ButtonStyle>
        <ButtonStyle onClick={handleStop}>Stop</ButtonStyle>
        <ButtonStyle onClick={handleRestart}>Restart</ButtonStyle>
    </Container>
   );
}

export default Timer;

const TimeContainer = styled.div`
    display: flex;
    margin: 10px;
    margin-left: 120px;
    font-size: 90px;
`

const StyleTimer = styled.div`
    margin: 5px;
`

const ButtonStyle = styled.button`
    background-color: green;
    color: white;
    font-size: 20px;
    margin: 5px;
    margin-left: 40px;
    border-radius: 5px;
    width: 100px;
    height: 40px;
    :active{
        background-color: violet;
    }
`

const Container = styled.div`
    width: 500px;
    height: 200px;
    background-color: burlywood;
`