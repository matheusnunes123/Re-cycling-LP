import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4FCD90;
    padding: 10px;
    border-radius: 20px;
    font-size: 20px;
    color: white;
    border: 0px transparent solid;
    width: 250px;
    cursor: pointer;

    &:hover {
        filter: brightness(0.9);
  }
`;
