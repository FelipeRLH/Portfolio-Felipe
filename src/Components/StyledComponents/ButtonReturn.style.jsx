import styled from 'styled-components'

export const ButtonReturn = styled.button`
    margin: 15px 0 0 50px;
    display: flex;
    border: none;
    font-size: 20px;

& a{
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 14px;
    background-color: #000;
    padding: 15px 20px;
    font-family: var(--primary-font);
    color: var(--secondary-color);
    transition: .3s;
    text-decoration: none;
    font-weight: bold;
}

& a:hover{
    color: var(--secondary-color);
    background-color: var(--primary-color);
}
`
