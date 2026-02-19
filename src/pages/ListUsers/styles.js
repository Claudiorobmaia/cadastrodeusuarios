import styled from 'styled-components'

export const TopBackground = styled.div`
    background: linear-gradient(to right, #4b6cb7, #182848 );
    height: 30vh;
    width: 90vw;
    max-width: 800px;
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 100%;
        max-height: 100%;
    }
    `
export const Container = styled.div`
    background-color: #181f36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
`

export const Title = styled.h2`
    color: #ffffff;
    text-align: center;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    margin-top: 20px;
`

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 20px 0;

    @media (max-width: 750px) {
        grid-template-columns: 1fr;
    }
`

export const CardUsers = styled.div`
    background-color: #dddddf;
    border-radius: 32px;
    padding: 16px;
    display: flex;
    justify-content: space-between;  
    align-items: center;
    gap: 20px;
    max-width: 380px;
    min-width: 0;

    h3 {
        color: #131212;
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 3px;
        text-transform: capitalize;
        word-break: break-word;
    }

    p {
        color: #131212;
        font-size: 14px;
        font-weight: 400;
        word-break: break-word;
    }
`


export const TrashIcon = styled.img`
    cursor: pointer;
    padding-left: 30px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`

export const AvatarUser = styled.img`
    height: 80px;
`