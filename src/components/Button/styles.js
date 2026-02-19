import styled from "styled-components"


export const Button = styled.button`
    background: ${(props) => props.theme === 'primary'
        ? 'linear-gradient(to right, #4b6cb7, #182848)'
        : 'transparent'};
    border: ${(props) => props.theme === 'primary' ? 'none' : '0.5px solid #26a7da '};
    border-radius: 30px;
    padding: 16px 32px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    width: fit-content;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
        background: ${(props) => props.theme === 'primary'
        ? 'linear-gradient(to right, #4b6cb7, #182848)'
        : 'linear-gradient(to right, #4b6cb7, #182848)'};

         border: ${(props) => props.theme === 'primary' ? 'none' : 'none'};

        }
    
        &:active {
            opacity: 0.5;
        }
`

