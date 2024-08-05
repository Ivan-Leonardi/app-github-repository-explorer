import styled from "styled-components";

export const Title = styled.h1`
    max-width: 450px;
    color: #3a3a3a;
    font-size: 48px;
    margin-top: 80px;
    line-height: 56px;
`;

export const Form = styled.form` 
    margin-top: 40px;
    max-width: 700px;
    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0px 0px 5px;
        color: #3a3a3a;

        &::placeholder {
            color: #A8A8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        background: #04d361;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: #FFFFFF;
        font-weight: bold;
        transition: background-color 0.3s;

        &:hover {
            background: #19CA16;
        }
    }
` 

export const Repositories = styled.div``
