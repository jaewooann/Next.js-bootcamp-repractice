import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1080px;
  margin: 0 auto;
  box-sizing: border-box;
  box-shadow: 0 2px 4px gray;
  padding: 2em;
`;

export const Header = styled.div`
  border-bottom: 1px solid #999;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ToolTipClick = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

export const Body = styled.div`
  height: 500px;
`;

export const Contents = styled.p``;

export const ImageWrap = styled.div`
  width: 100%;
  height: 200px;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 1em;
`;

export const ButtonWrap = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  cursor: pointer;
  border: 1px solid #999;
  margin: 0 1em;
  background-color: #fff;
  padding: 0.8em 1.4em;
  font-size: 12px;
`;
