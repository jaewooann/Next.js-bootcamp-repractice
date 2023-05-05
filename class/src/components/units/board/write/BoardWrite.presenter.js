import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {

  return (
    <>
      작성자: <S.RedInput type="text" onChange={props.onChangeWriter} />
      제목: <input type="text" onChange={props.onChangeTitle} />
      내용: <input type="text" onChange={props.onChangeContents} />
      <S.BlueButton onClick={props.onClickSubmit}>api 요청하기</S.BlueButton>
    </>
  );
}