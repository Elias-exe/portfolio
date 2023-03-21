import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 70px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 120px;
  align-items: center;
  font-weight: bold;

  a{
    color: ${({ theme }) => theme.colors.primary[300]};
    font-size: 22px;
    text-decoration: none;

    :hover{
      color: ${({ theme }) => theme.colors.primary[200]};
      transition: 0.2s;
    }
  }

  .projectsContainer{
    display: flex;
    gap:25px;

    a{
      display: flex;
      justify-content: center;
      padding: 10px;
    }

    .icon{
      margin-right: 8px;
    }

  }
`;
