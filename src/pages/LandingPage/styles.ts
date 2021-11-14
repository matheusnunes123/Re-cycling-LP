import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
`;


export const Section1 = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    background: #4FCD90;
    justify-content: center;
    align-items: center;
    height: 88vh;
    padding-left: 10%;
    padding-right: 10%;
    color: white;
    align-content: center;
`;

export const Title = styled.h1`
    margin-bottom: 12px;
    line-height: 36px;
    width: 500px;
    @media(max-width: 1250px) {
        width: 100%;
        text-align: center;
        margin-bottom: 8px;
    }
`
export const Desc = styled.p`
    width: 500px;
    font-size:16px;
    line-height: 24px;
    margin-bottom: 16px;
    @media(max-width: 1250px) {
        width: 100%;
        text-align: center;
        margin-bottom: 8px;
    }
    
`

export const Img =styled.img`
    width: 500px;

    @media(max-width: 550px) {
        width: 100%;
    }

`

export const Section2 = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap:wrap;
    background: #FEFEFE;
    justify-content: space-around;
    align-items: center;
    height: 88vh;
    padding-left: 10%;
    padding-right: 10%;
    color: #423F3F;
    align-content: center;
    
    @media(max-width: 1000px) {
        
    }
`;

export const Section3 = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   color: white;
   background: #4FCD90;
   padding-left: 10%;
   padding-right: 10%;

   padding-top:64px;
   padding-bottom:64px; 
   height: 88vh;

   @media(max-width: 1200px) {
        height: auto;
    }
`;

export const CardsDiv = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-evenly;
   width: 100%;
   margin-top: 16px;

   @media(max-width: 1200px) {
        flex-direction: column;
        align-items: space-evenly;
        padding:5px;
    }
`;

export const Section4 = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    background: #FEFEFE;
    justify-content: center;
    align-items: center;
    height: 88vh;
    padding-left: 10%;
    padding-right: 10%;
    color: #423F3F;
    align-content: center;
    @media (max-width: 1251px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const AlinharBotao = styled.div`
    display: flex;
    @media (max-width: 1251px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`
