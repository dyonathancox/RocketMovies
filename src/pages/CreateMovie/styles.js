import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
 
    "header" 
    "content";

    > main{
      grid-area: content;
      overflow-y: auto;
    }

    .trash{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    .tags{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
`;

export const Form = styled.form`
    max-width: 1200px;
    margin: 38px auto;

  > header {
    a {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 20px;
        margin: 40px 0 24px;
        color: ${({ theme }) => theme.COLORS.PINK}
    }
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 40px;

    > textarea {
        grid-column: span 2;
        height: 270px;
    }
  }
`;

export const Section = styled.section`
    margin-top: 40px;

    .marks{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
        padding: 16px;
        display: flex;
        gap: 16px;
        border-radius: 10px;
        margin: 24px 0 40px;
    }
`;