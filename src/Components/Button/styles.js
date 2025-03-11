import styled from 'styled-components'

export const Container = styled.button`

    width: 100%;
    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.PURPLE};
    font-weight: 800;

    &:disabled{
        opacity: 0.5;
    }

`;