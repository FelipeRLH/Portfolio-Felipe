import styled from 'styled-components'

export const Button1 = styled.button`
    margin-top: 50px;

& a{
    padding: 15px 20px;
    border: 2px solid #000;
    font-family: var(--primary-font);
    font-weight: bold;
    font-size: 16px;
    color: #fff;
    box-shadow: 4px 4px #000;
    background-color: var(--primary-color);
    text-decoration: none;
    cursor: pointer;
    transition: .3s;
}

& a:hover{
    box-shadow: 7px 7px #000;
}
`
