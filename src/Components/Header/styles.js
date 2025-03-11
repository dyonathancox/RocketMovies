import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 80px;

    text-align: right;

    > h1{
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.PINK};
        margin-right: 64px;
    }

`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
// > indica que será alterado somente aquele argumento dentro do item, por exemplo > img, é somente a img dentro de PROFILE
    > img{
        width: 56px;
        height: 56px;
        border-radius: 50%;
        margin-left: 9px;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    }
    > div{
        width: 150px;
        display: flex;
        flex-direction: column;

        margin-left: 16px;
        line-height: 24px;

        span{
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong{
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;
