import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 105px;
  border-bottom: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: center;

  & strong {
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .mb-only {
    display: none;
  }

  @media (max-width: 768px) {
    & section {
      margin-left: 20px;
    }
    height: auto;
  }
`;

export const Search = styled.div`
  flex-grow: 1;
  max-width: 600px;
`;

export const Profile = styled(Link)`
  display: flex;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.PINK};

  > img {
    width: 64px;
    height: 64px;
    margin-left: 9px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > div {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    line-height: 24px;

    > h1 {
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-right: 64px;
    }

    > section {
      width: 250px;
      display: flex;
      flex-direction: column;
      align-items: end;
      line-height: 1;
      justify-content: center;
      margin-left: 64px;
      color: ${({ theme }) => theme.COLORS.WHITE};

      > span {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
      }

      > Link {
        font-size: 18px;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
  }

  @media (max-width: 900px) {
    padding: 8px;

    & Input {
    }

    > img {
      width: 48px;
      height: 48px;
      margin: 0 0 8px 0;
    }

    > div {
      align-items: flex-start;
      width: 100%;

      & h1 {
        font-size: 20px;
        margin-right: 15px;
        .mb-only {
          display: block;
        }
      }

      > section {
        width: 100%;
        margin-left: 0;
        align-items: flex-end;
      }

      

      & strong {
        font-size: 16px;
        
      }
    }
    > img {
      margin-left: 15px;
    }
  }

  @media (max-width: 600px) {
    > img {
      width: 40px;
      height: 40px;
    }
    > div > h1 {
      font-size: 16px;
    }
    > div > section > span,
    > div > section > Link {
      font-size: 14px;
    }
  }
`;
