import styled from "styled-components" 
import { useState } from "react"
 
//Parent Component CSS

const TabContainer = styled.div`
    width: 500px;
`

const TabList = styled.ul`
    display: flex;
    column-gap: 25px;
    list-style-type: none;
`

const ItemTabList = styled.li`
    padding: 8px 30px;
    font-size: 17px;
    text-transform: uppercase;
    border-radius: 10px 10px 0 0;
    border: 1px solid grey;
    border-bottom: none;
    background-color: ${(props => props.color == props.id ? "orange" : "")};
    cursor: pointer;
`

const ElementSection = styled.div`
    height: 200px;
    padding: 0px 17px;
    border: 2px solid grey;
    border-top: 2px solid orange;
`

//Child Component CSS

const ElementContainer = styled.div`
    line-height: 1.5rem;

    h3 {
        margin: 25px 15px 15px 15px;
    }
`


 function Element({children, title, toggle, dataId}) {
    if(dataId == toggle) {
        return(
            <ElementContainer>
                <h3>{title}</h3>
                {children}
            </ElementContainer>
        )
    } else return null
}


function Tab() {
    const [toggle, setToggle] = useState(1)

    return(
        <TabContainer>
            <TabList>
                <ItemTabList onClick={() => setToggle(1)} color={toggle} id="1">tab 1</ItemTabList>
                <ItemTabList onClick={() => setToggle(2)} color={toggle} id="2">tab 2</ItemTabList>
            </TabList>
            <ElementSection>
                <Element title="Title Tab 1" toggle={toggle} dataId="1">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ratione alias, incidunt nemo consequuntur optio tenetur sequi repellendus enim inventore. Mollitia culpa maiores blanditiis Aperiam, et. neque consequatur qui veniam, vitae ad expedita harum saepe tempora ur adipisicing el ur adipisicing el</p>
                </Element>
                <Element title="Title Tab 2" toggle={toggle} dataId="2">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi accusamus, rem obcaecati esse atque facere amet quia. Aperiam possimus, amet, neque consequatur qui veniam, vitae ad expedita harum saepe tempora?</p>
                </Element>
            </ElementSection>
        </TabContainer>
    )
}

export default Tab