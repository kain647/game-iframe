import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  flex-direction: column;
  user-select: none;
  font-family: "Roboto", sans-serif;
`;
export const Header = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  height: 55px;
  justify-content: space-between;
  padding: 10px;
  background-color: #131521;
  color: #aeb2bc;
`;
export const Title = styled.h2`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 0;
  margin-right: 10px;
`;
export const Content = styled.div`
  display: flex;
  height: 720px;
  position: relative;
  flex-direction: column;
  border: 10px solid #131521;
  border-width: 0px 10px 10px 10px;
  box-sizing: border-box;
  overflow: hidden;
  .button {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: auto;
    height: 180px;
    opacity: 0.9;
    cursor: pointer;
    margin: auto;
    :hover {
      opacity: 1;
    }
    :active {
      top: 2px;
    }
  }
`;
export const Icon = styled.div`
  display: ${({ showGame }) => (showGame ? "flex" : "none")};
  align-items: center;
  svg {
    width: var(--size);
    height: var(--size);
    --size: 30px;
    cursor: pointer;
  }
`;
export const LikeBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  svg {
    width: var(--size);
    height: var(--size);
    --size: 20px;
    cursor: pointer;
    margin-right: 5px;
  }
`;
export const IconsBox = styled.div`
  display: flex;
`;
export const ButtonLike = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
export const ButtonDislike = styled.div`
  display: flex;
  align-items: center;
`;
