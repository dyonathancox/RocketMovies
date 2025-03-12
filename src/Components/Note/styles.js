import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.PINK_DARK};

  border: none;
  border-radius: 10px;
  margin-top: 0;
  padding: 22px;
  margin-bottom: 24px;


  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  > p {
    text-align: left;
    color: #999591;
    line-height: 18.75px;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`;