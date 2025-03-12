import styled from "styled-components";

export const Container = styled.button`
    
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.PINK_DARK};
    border: none;
    border-radius: 20px;
    padding: 25px;
    margin-bottom: 16px;

    > div{
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        text-align: justify;
        
        >.star{
            margin-right: 4px;
            color: ${({theme}) => theme.COLORS.PINK};
            font-size: 12px;
            text-align: left;
        }

        >h1{
            flex: 1;
            text-align: left;
            font-weight: 700;
            font-size: 24px;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }

    > footer{
        width: 10%;
        display: flex;
        margin-top: 24px;
    }

`;