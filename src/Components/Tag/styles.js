import styled from "styled-components";

export const Container = styled.span`
    
    display: flex;
    align-items: center;
    white-space: nowrap; 
    font-size: 14px;
    padding: 5px 16px;
    border-radius: 10px;
    margin-right: 6px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.PURPLE};
`;