import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import styled from 'styled-components';

const FormSearch = styled.form`
    display: inline-flex;
    align-items: center;
    svg {
        position: relative;
        right: 30px;
    }
`

const InputSearch = styled.input`
    width: 205px;
    padding: 9px 30px 9px 17px;
    font-size: 17px;
    border-radius: 20px;
    border: 1px solid orange;
`

function Search() {
    const [request, setRequest] = useState("")
    const [answer, setAnswer] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if(request !== "") {
            setAnswer(request)
            setRequest("")
        }
    }

    return(
        <>
        <FormSearch htmlFor="search"  onSubmit={(e) => handleSubmit(e)}>
            <InputSearch 
                type="text" 
                name="search" 
                id="search" 
                placeholder='Search' 
                autoComplete='off' 
                value={request} 
                onChange={(e) => setRequest(e.target.value)}
               
            />
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </FormSearch>
        <p>Response:{" "+answer}</p>
        </>
    )
}

export default Search