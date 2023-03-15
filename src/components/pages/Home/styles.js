import styled from "styled-components";

export const Container = styled.div`
  margin-top: 150px;
  padding: 0 120px;

  p{
    font-size: 42px;
  }

  span{
    color: ${({ theme }) => theme.colors.primary[400]};
    font-weight: bold;
  }

  .devHome{
    display: flex;
  align-items: center;
  justify-content: space-between;
  }

  .function{
    font-size: 42px;
    margin-top: 35px;
  }

  .photo{
    img{
      border-radius:70%;
      width: 250px;
      height: 250px;
    }
  }

  .introduceMyself{
    margin-top: 150px;
  }

`;
