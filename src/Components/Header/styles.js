import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.header`
    grid-area: header;

    width: 100%;
    height: 105px;
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    
    display: flex;
    align-items: center;
    justify-content: center;
        
`;

export const Profile = styled(Link)`
    display: flex;
    width: 1200px;
    align-items: center;
    justify-content: center;
    

    > img{
        width: 64px;
        height: 64px;
        margin-left: 9px;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    }

    > div{
        width: 1200px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        line-height: 24px;

        > h1{
            font-size: 24px;
            color: ${({theme}) => theme.COLORS.PINK};
            margin-right: 64px;
        }


        > section{
            width: 250px;
            display: flex;
            flex-direction: column;
            align-items: end;
            line-height: 1;
            justify-content: center;
            margin-left: 64px;
            
            > span{
                font-size: 14px;
                color: ${({ theme }) => theme.COLORS.GRAY_100};
                }
                
                > strong{
                font-size: 18px;
                color: ${({ theme }) => theme.COLORS.WHITE};
            }
        }
        
        }
        
    }
`;
