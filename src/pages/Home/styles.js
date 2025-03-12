import styled from 'styled-components'

export const Container = styled.div`
    min-height: 100vh;

  > section {
    width: 1200px;
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
`;

export const Content = styled.div`
  width: 1200px;
  margin: 0 auto;
  flex: 1;
  
`

export const Section = styled.section`
  width: 1200px;
  margin: 0 auto;
  overflow-y: auto;
  max-height: calc(100vh - 400px);
  padding: 20px 0;
`;
