import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from "react";

const heightDescription = '200px';
const speed = "1500ms";

const DetailsCollapse = styled.div`
    width: 250px;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
`
const TitleCollapse = styled.div`
    height: 50px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: orange;
    border-radius: 10px 10px 0 0;

    h2 {
        margin:0;
    }

    svg {
        font-size: 22px;
        transform: ${(props) => (props.$active ? 'rotate(-90deg)' : 'rotate(0deg)')};
        transition: transform ${speed};
    }
`
const DescriptionCollapse = styled.div`
    height: ${(props) => (props.$active ? heightDescription : '0px')};
    position: relative;
    padding: 0 5px;
    background-color: pink;
    border-radius: 0 0 10px 10px;
    transform: ${(props) => (props.$active ? 'translateY(0px)' : `translateY(-${heightDescription})`)};
    transition: all ${speed};
    z-index: -1;
    overflow: hidden;

    p {
        margin: 0;
        padding: 5px 0;
    }
`

function Collapse() {
    const [isRotate, setIsRotate] = useState(false)
    const divRef = useRef(null)

    return (
        <DetailsCollapse className="details">
            <TitleCollapse className="title" $active={isRotate} onClick={() => {
                setIsRotate(value => !value )
            }
            } 
            >
                <h2>Title</h2>
                <FontAwesomeIcon icon="fa-solid fa-chevron-left"/>
            </TitleCollapse>
            <DescriptionCollapse className="description" $active={isRotate} ref={divRef}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus molestias quis aperiam laudantium ipsa neque ducimus consequatur saepe, maiores illo reprehenderit libero, provident atque in, eveniet officia vero labore iure.</p>
            </DescriptionCollapse>
        </DetailsCollapse>
    )
}
  
export default Collapse