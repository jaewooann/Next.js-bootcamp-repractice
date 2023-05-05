import { Modal, Rate } from "antd";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./CommentList.styles";
import { ICommentListUIProps } from "./CommentList.types";

export default function CommentListUI(props: ICommentListUIProps) {
  return (
    <div>
      {props.isOpenDeleteModal && (
        <Modal
          open={true}
          onOk={props.onClickDeleteCommentList}
          onCancel={props.onClickToggleModal}
        >
          <div>비빌번호 입력:</div>
          <input type="password" onChange={props.onChangeDeletePassword} />
        </Modal>
      )}
      <S.Wrapper>
        {props.data?.fetchBoardComments.map((el) => (
          <S.ItemWrap>
            <S.Img src="/user.png" />
            <S.ItemBody>
              <div>
                <S.Writer>{el.writer}</S.Writer>
                <Rate value={el.rating} disabled />
              </div>
              <p>{el.contents}</p>
              <S.Date>{getDate(el?.createdAt)}</S.Date>
            </S.ItemBody>
            <S.ButtonWrap>
              <S.Button>수정</S.Button>
              <S.Button id={el._id} onClick={props.onClickOpenDeleteModal}>
                삭제
              </S.Button>
            </S.ButtonWrap>
          </S.ItemWrap>
        ))}
      </S.Wrapper>
    </div>
  );
}
