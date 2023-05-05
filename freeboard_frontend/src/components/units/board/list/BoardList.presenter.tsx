import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";

export default function BoardListUI(props: IBoardListUIProps) {

  return (
    <S.Wrapper>
      <S.HeaderRow>
        <S.HeaderColumn>ID</S.HeaderColumn>
        <S.HeaderColumn>제목</S.HeaderColumn>
        <S.HeaderColumn>작성자</S.HeaderColumn>
        <S.HeaderColumn>날짜</S.HeaderColumn>
      </S.HeaderRow>
      {props.data?.fetchBoards.map((el) => (
        <S.Row key={el._id}>
          <S.Column>{String(el._id).slice(-4).toUpperCase()}</S.Column>
          <S.Column id={el._id} onClick={props.onClickMoveToBoardDetail}>{el.title}</S.Column>
          <S.Column>{el.writer}</S.Column>
          <S.Column>{getDate(el.createdAt)}</S.Column>
        </S.Row>
      ))}
      <S.ButtonWrap>
        <S.Button onClick={props.onClickMoveToBoardNew}>게시글 작성하기</S.Button>
      </S.ButtonWrap>
    </S.Wrapper>
  );
}