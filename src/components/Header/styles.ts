import styled from 'styled-components';

export const Container = styled.div`
    height: 12vh;
    background-color: #FEFEFE;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 10%;
    padding-right: 10%;
    border-bottom: solid 1px #B2B2B2;
    -webkit-box-shadow: 0px 10px 16px -9px #B2B2B2; 
    box-shadow: 0px 10px 16px -9px #B2B2B2;
    width: 100%;
    
`;

export const FloatLeft = styled.div`
    float: left;
`;

export const FloatRight = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;


export const Loginbtn = styled.a`
    text-decoration: none;
    text-align: center;
    margin-right: 64px;
    width: 100px;
    padding: 10px;
    border: solid 1px transparent;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 500;

    &:hover{    
        border: solid 1px #4FCD90;
        transition: 0.5s;
    }
`
