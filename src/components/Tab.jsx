
import { useState } from "react"
import styled from "styled-components" 
 
//Parent Component CSS

const TabContainer = styled.div`
    height: 350px;
    width: 500px;
`

const TabList = styled.ul`
    display: flex;
    list-style-type: none;
`

const ItemTabList = styled.li`
    padding: 5px;
    border: 1px solid green;
    cursor: pointer;
`

const ElementSection = styled.div`
    position: relative;
    padding: 10px;
`

//Child Component CSS

const ElementContainer = styled.div`
    position: absolute;
    line-height: 1.5rem;
    border: 1px solid red;

    h3 {
        margin: 10px;
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
                <ItemTabList onClick={() => setToggle(1)}>tab 1</ItemTabList>
                <ItemTabList onClick={() => setToggle(2)}>tab 2</ItemTabList>
            </TabList>
            <ElementSection>
                <Element title="Title Tab 1" toggle={toggle} dataId="1">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ratione alias, incidunt nemo consequuntur optio tenetur sequi repellendus enim inventore. Mollitia culpa maiores blanditiis labore cupiditate perferendis ab. Aperiam, et.</p>
                </Element>
                <Element title="Title Tab 2" toggle={toggle} dataId="2">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi accusamus, rem obcaecati esse atque facere amet quia. Aperiam possimus, amet, neque consequatur qui veniam, vitae ad expedita harum saepe tempora?</p>
                </Element>
            </ElementSection>
        </TabContainer>
    )
}

export default Tab