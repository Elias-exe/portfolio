import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
  h1{
    font-size: 32px;
    color: #fff;
    b{
      color: ${({ theme }) => theme.colors.primary[200]};
    }
  }
  span{
    margin-top: 8px;
    font-size: 24px;
    color: #fff;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  margin-top: 32px;
  align-items: center;
  margin: 40px auto;
  justify-content: center;
  gap: 48px;
  flex-wrap:wrap;
`;

export const CardContainer = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 300px;
  width: 100%;

  border-radius: 8px;
  box-shadow: 0 0 .1rem #fff,
            0 0 .1rem #fff,
            0 0 1rem ${({ theme }) => theme.colors.primary[200]},
            0 0 0.1rem ${({ theme }) => theme.colors.primary[200]};

  img{
    max-width: 250px;
    width: 100%;
    height: 180px;
    border-radius: 8px;
  }


  .projectTitle{
    margin-top: 16px;
  }

  .projectDescription{
    margin-top: 8px;
  }
`;
