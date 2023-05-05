import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 1080px;
  margin: 0 auto;
`;

export const HeaderRow = styled.div`
  height: 40px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #999;

`;

export const Row = styled.div`
  height: 40px;
  border-bottom: 1px solid #999;
`;

export const HeaderColumn = styled.span`
  display: inline-block;
  width: 25%;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
`;

export const Column = styled.span`
  display: inline-block;
  width: 25%;
  height: 40px;
  line-height: 40px;
`;

export const ButtonWrap = styled.div`
  text-align: right;
  margin-top: 1em;
`;

export const Button = styled.button`
  cursor: pointer;
  border: 1px solid #999;
  border-radius: 0.6em;
  background-color: #fff;
  padding: 0.8em 1.4em;
`;