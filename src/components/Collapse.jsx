import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";

const DetailsCollapse = styled.div`
    width: 250px;
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
        transition: transform 1500ms;
    }
`
const DescriptionCollapse = styled.div`
    height: 150px;
    padding: 5px;
    background-color: pink;
    border-radius: 0 0 10px 10px;

    p {
        margin: 0;
    }
`


function Collapse() {
    const [isRotate, setIsRotate] = useState(false)

    return (
        <DetailsCollapse className="details">
            <TitleCollapse className="title" $active={isRotate} onClick={() => setIsRotate(value => !value )}>
                <h2>Title</h2>
                <FontAwesomeIcon icon="fa-solid fa-chevron-left"/>
            </TitleCollapse>
            <DescriptionCollapse className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus molestias quis aperiam laudantium ipsa neque ducimus consequatur saepe, maiores illo reprehenderit libero, provident atque in, eveniet officia vero labore iure.</p>
            </DescriptionCollapse>
        </DetailsCollapse>
    )
}
  
  export default Collapse