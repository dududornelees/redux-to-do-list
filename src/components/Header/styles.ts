import styled from "styled-components";

export const HeaderStyle = styled.div`
  background-color: ${(props) => props.theme.colors.primary};

  .header__container {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .header__container__title {
      h1 {
        font-size: 26px;
        font-weight: normal;
      }
    }

    .header__container__switch {
      position: absolute;
      top: 25px;
      right: 0px;

      .header__container__switch--icon {
        color: ${(props) => props.theme.colors.text};
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        color: black;
      }
    }
  }
`;
