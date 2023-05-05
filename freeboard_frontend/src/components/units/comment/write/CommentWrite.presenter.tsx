import { Rate } from "antd";
import * as S from "./CommentWrite.styles";
import { ICommentWriteUIProps } from "./CommentWrite.types";

export default function CommentWriteUI(props: ICommentWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Title>댓글</S.Title>
      <div>
        <S.InputBox
          type="text"
          onChange={props.onChangeWriter}
          placeholder="작성자"
          value={props.writer}
        />
        <S.InputBox
          type="password"
          onChange={props.onChangePassword}
          placeholder="비밀번호"
          value={props.password}
        />
        <Rate onChange={props.setStar} value={props.star} />
      </div>
      <S.TextareaWrap>
        <S.TextareaBox
          onChange={props.onChangeContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다"
          value={props.contents}
        ></S.TextareaBox>
        <S.TextareaBoxBottom>
          <S.TextLength>{props.contents.length}/100</S.TextLength>
          <S.Button onClick={props.onClickSubmit}>등록하기</S.Button>
        </S.TextareaBoxBottom>
      </S.TextareaWrap>
    </S.Wrapper>
  );
}
