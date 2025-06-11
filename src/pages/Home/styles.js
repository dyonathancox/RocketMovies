import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    min-height: 100vh;
padding: 0 20px;
    

  > section {
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px auto;

  > Button {
    width: 207px;
    height: 50px;
  }

  > h1 {
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (max-width: 768px) {

  > section{
    padding: 0 20px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 20px auto;

  >h1{
  font-size: 24px;
  }

  > Button {
    width: 100%;
  }
} 	
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex: 1;
  
    ::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 8px; 
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: ${({ theme }) => theme.COLORS.PINK};
      -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5); 
    }    
}

`;

export const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  min-height: 50vh;
  max-height: calc(100vh - 400px);
  padding: 20px 0;
  margin: 0 auto;
  overflow-y: auto;

    @media (max-width: 768px) {
    min-height: 80vh;}

`;

export const Button = styled(Link)`
  background-color: ${(props) => props.theme.COLORS.PINK};
  color: ${(props) => props.theme.COLORS.BACKGROUND_800};
  font-size: 16px;
  border-radius: 8px;
  border: none;
  padding: 12px 32px;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: right;

  > svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 14px;
  }
`;
export const Title = styled.div`
widht: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  padding: 50px 0 40px;
  justify-content: space-between;
  align-items: center;
  > h1 {
    font-size: 32px;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    
    gap: 12px;
    padding: 24px 0 16px;
    > h1 {
      font-size: 24px;
    }
  }
`;
