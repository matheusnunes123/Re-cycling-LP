import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 300px;
    height: auto;
    border: #B9B9B9, solid, 1px;
    padding: 16px;
    border-radius: 20px;
    margin: 10px;
    -webkit-box-shadow: 15px 17px 50px -6px rgba(0,0,0,0.42); 
box-shadow: 15px 17px 50px -6px rgba(0,0,0,0.42);
`;

export const CardImg = styled.img`
    width: 99px;
    margin-top: 16px;
`;

export const Title = styled.div`
    width: 100%;
    text-align: center;
    color: #4FCD90;
    margin-top: 16px;
    font-size: 24px;
`
export const Desc = styled.div`
    text-align: center;
    color: #423F3F;
    width: 90%;
    margin-top: 16px;
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 32px;
`