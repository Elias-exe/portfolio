import styled from "styled-components";

export const Container = styled.div`
  margin-top: 80px;
  margin-bottom: 20px;
  padding: 0 120px;
  img{
    width: 100%;
    max-width: 250px;
    height: 100%;
    max-height: 250px;
  }
`;

export const AboutMeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .aboutMe{
    width: 100%;
    max-width: 450px;
    height: 100%;
    max-height: 450px;
    display: block;
    .title{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 8px;
    }
    span{
      font-size: 24px;
      color: white;
    }
  }

  .imageContainer{
    animation: rocketFlying 2s ease 0s infinite normal forwards;

    @keyframes rocketFlying {
    0% {
      transform: translate(0);
    }

    20% {
      transform: translate(-2px, 2px);
    }

    40% {
      transform: translate(-2px, -2px);
    }

    60% {
      transform: translate(2px, 2px);
    }

    80% {
      transform: translate(2px, -2px);
    }

    100% {
      transform: translate(0);
    }
}
  }

`;

export const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;

  .cardContainer{
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    gap: 16px;
    width: 100%;
    height: 100%;
  }
`;

export const CardSkill = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: 20px;
  width: 100%;
  max-width: 150px;
  height: 100%;
  max-height: 150px;
  border-radius: 8px;
  box-shadow: 0 0 .1rem #fff,
            0 0 .1rem #fff,
            0 0 1rem ${({ theme }) => theme.colors.primary[200]},
            0 0 0.1rem ${({ theme }) => theme.colors.primary[200]};

    :hover{
    transform: scale(1.1);
    transition: 0.8s;
  }
`;
