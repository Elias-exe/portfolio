import styled from "styled-components";

export const Container = styled.footer`
  color: #fff;
  width: 100%;
  bottom: 0;
  position: fixed;

  span{
    font-size:14px;
  }

  .details{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 125px;


    .copyrightText{
      margin-right: 120px;
    }
    .socialMedias{
      a{
        text-decoration: none;
        color: #fff;
        padding: 8px;
        font-size: 24px;
      }
  }
}

`;
