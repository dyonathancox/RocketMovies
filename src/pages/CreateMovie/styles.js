import styled from 'styled-components'

export const Container = styled.div`

  > div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 0;
  }

  >h1{
    color: ${({theme}) => theme.COLORS.WHITE};
  }
`;
