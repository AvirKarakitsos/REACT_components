import {styled, keyframes} from "styled-components"

const rotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const DivContainer = styled.div`
    width: 35px;
    height: 35px;
    background: radial-gradient(closest-side, #242424 79%, transparent 80% 100%), conic-gradient(orange 65%, #242424 0);
    border-radius: 50%;
    animation: ${rotateAnimation} 2s linear infinite;
`

function Progress() {

    return (
        <DivContainer/>
    )
}
  
export default Progress;