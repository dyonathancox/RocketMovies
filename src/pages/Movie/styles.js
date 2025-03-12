import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800}; 
  padding: 0px 123px;
  max-height: 65vh;

  margin: 40px auto;

  svg {
      color: ${({theme}) => theme.COLORS.PINK};
      font-size: 16px;     
    }
    
  .back {
      color: ${({theme}) => theme.COLORS.PINK};
      padding: 0 8px;  
  }
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 8px; 
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.PINK};
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5); 
  }    
      
`;

export const Content  = styled.div`
  max-height: 70vh;
  overflow-y: auto;
  p {
    text-align: start;
  }

  ::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 8px; 
  }

::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.PINK};
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5); 
`;

export const Profile = styled(Link)`
  display: flex;
  > img {
    width: 16px;
    height: 16px;
    margin-top: 18px;
  
    border-radius: 35px;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  }

  > div {   
    flex-direction: column;
    line-height: 18px;
    padding: 16px 9px 0 ;

    pre {
      font-size: 14px;
      color: ${({theme}) => theme.COLORS.GRAY_100};
  
    }

    strong {
      font-size: 14px;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
`;

export const Title = styled.div`
  font-size: 36px;
  display: flex;
  gap: 19px;

  div {
    margin-top: 18px;
    height: 20px;

    svg{

    }
  }
`;