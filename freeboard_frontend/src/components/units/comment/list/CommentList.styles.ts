import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1080px;
  margin: 2em auto;
  box-sizing: border-box;
`;

export const ItemWrap = styled.div`
  height: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid #999;
  margin-top: 1em;
`;

export const Img = styled.img`
  width: 40px;
  margin-top: 0.5em;
`;

export const ItemBody = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-left: 1em;
`;

export const Writer = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-right: 1em;
`;

export const Date = styled.span`
  font-size: 12px;
  color: #999;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  cursor: pointer;
  border: 1px solid #999;
  background-color: #fff;
  margin: 0.6em 0;
  padding: 0.6em 0.8em;
`;
