import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1080px;
  margin: 0 auto;
  box-sizing: border-box;
  box-shadow: 0 2px 4px gray;
  padding: 2em;
`;

export const SectionWrap = styled.div`
  margin: 1.5em 0;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const SubTitle = styled.h2`
  font-size: 12px;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #999;
  border-radius: 0.2em;
  box-sizing: border-box;
  padding-left: 0.4em;
  &:focus {
    outline: 0;
  }
`;

export const InputTextArea = styled.textarea`
  width: 100%;
  height: 400px;
  border: 1px solid #999;
  border-radius: 0.2em;
  resize: none;
  box-sizing: border-box;
  &:focus {
    outline: 0;
  }
`;

export const InputAddressBox = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #999;
  border-radius: 0.2em;
  margin: 0.4em 0;
  padding-left: 0.4em;
  box-sizing: border-box;
  &:focus {
    outline: 0;
  }
`;

export const InputZipcodeBox = styled.input`
  width: 65px;
  height: 45px;
  border: 1px solid #999;
  border-radius: 0.2em;
  text-align: center;
  box-sizing: border-box;
  &:focus {
    outline: 0;
  }
  &::placeholder {
    text-align: center;
  }
`;

export const SearchAddressButton = styled.button`
  width: 100px;
  height: 45px;
  color: #fff;
  background-color: #000;
  text-align: center;
  border: none;
  box-sizing: border-box;
  margin-left: 0.6em;
  cursor: pointer;
`;

export const AddPhotoArea = styled.div`
  display: flex;
`;

export const AddPhoto = styled.div`
  width: 80px;
  height: 80px;
  background-color: #efefef;
  margin-right: 1em;
  text-align: center;
  line-height: 80px;
  cursor: pointer;
`;

export const SubmitButtonWrap = styled.div`
  text-align: center;
  height: 100px;
  line-height: 100px;
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 45px;
  background-color: orange;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

export const ErrorMessage = styled.div`
  margin-top: 0.4em;
  font-size: 12px;
  font-weight: bold;
  color: red;
`;
