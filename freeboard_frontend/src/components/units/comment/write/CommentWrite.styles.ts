import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 1080px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 16px;
`;

export const InputBox = styled.input`
  border: 1px solid #999;
  height: 40px;
  margin-right: 1em;
  &:focus {
    outline: 0;
  }
`;

export const TextareaWrap = styled.div`
  border: 1px solid #999;
  margin-top: 1em;
  box-sizing: border-box;
`;

export const TextareaBox = styled.textarea`
  width: 100%;
  height: 100px;
  border: none;
  padding: 0.4em;
  box-sizing: border-box;
  /* border-bottom: 1px solid #999; */
  resize: none;
  &:focus {
    outline: 0;
  }
`;

export const TextLength = styled.span`
  margin-left: 0.5em;
`;

export const TextareaBoxBottom = styled.div`
  display: flex;
  border-top: 1px solid #999;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const Button = styled.button`
  color: #fff;
  cursor: pointer;
  border: none;
  background-color: #000;
  height: 100%;
  width: 100px;
`;