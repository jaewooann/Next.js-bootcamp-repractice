import { Modal } from "antd";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { v4 as uuidv4 } from "uuid";
import { DaumPostcodeEmbed } from "react-daum-postcode";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      {props.isOpen && (
        <Modal
          title="주소"
          open={true}
          onOk={props.onClickSearchAddress}
          onCancel={props.onClickSearchAddress}
        >
          <DaumPostcodeEmbed onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
      <S.Wrapper>
        <S.Title>게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
        <S.SectionWrap>
          <S.SubTitle>작성자</S.SubTitle>
          <S.InputBox
            type="text"
            placeholder="작성자를 입력해주세요."
            onChange={props.onChangeWriter}
            defaultValue={props.data?.fetchBoard?.writer ?? ""}
            readOnly={!!props.data?.fetchBoard?.writer}
          />
          <S.ErrorMessage>{props.writerError}</S.ErrorMessage>
        </S.SectionWrap>
        <S.SectionWrap>
          <S.SubTitle>비밀번호</S.SubTitle>
          <S.InputBox
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={props.onChangePassword}
          />
          <S.ErrorMessage>{props.passwordError}</S.ErrorMessage>
        </S.SectionWrap>
        <S.SectionWrap>
          <S.SubTitle>제목</S.SubTitle>
          <S.InputBox
            type="text"
            placeholder="제목을 입력해주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard?.title}
          />
          <S.ErrorMessage>{props.titleError}</S.ErrorMessage>
        </S.SectionWrap>
        <S.SectionWrap>
          <S.SubTitle>내용</S.SubTitle>
          <S.InputTextArea
            placeholder="내용을 입력해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard?.contents}
          />
          <S.ErrorMessage>{props.contentsError}</S.ErrorMessage>
        </S.SectionWrap>
        <S.SectionWrap>
          <S.SubTitle>주소</S.SubTitle>
          <div>
            <S.InputZipcodeBox
              type="text"
              placeholder="07250"
              readOnly
              value={
                props.zipcode !== ""
                  ? props.zipcode
                  : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
              }
            />
            <S.SearchAddressButton onClick={props.onClickSearchAddress}>
              우편번호 검색
            </S.SearchAddressButton>
          </div>
          {/* 상세주소 */}
          <div>
            <S.InputAddressBox
              type="text"
              readOnly
              value={
                props.address !== ""
                  ? props.address
                  : props.data?.fetchBoard.boardAddress?.address ?? ""
              }
            />
          </div>
          {/* 상세주소(직접 입력) */}
          <div>
            <S.InputBox
              type="text"
              onChange={props.onChangeAddressDetail}
              defaultValue={
                props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
              }
            />
          </div>
        </S.SectionWrap>
        <S.SectionWrap>
          <S.SubTitle>유튜브</S.SubTitle>
          <S.InputBox
            type="text"
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeYoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
          />
        </S.SectionWrap>
        <S.SectionWrap>
          <S.SubTitle>사진첨부</S.SubTitle>
          <S.AddPhotoArea>
            {props.fileUrls.map((el, idx) => (
              <Uploads01
                key={uuidv4()}
                fileUrl={el}
                idx={idx}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </S.AddPhotoArea>
        </S.SectionWrap>
        <S.SectionWrap>
          <S.SubTitle>메인 설정</S.SubTitle>
          <div>
            <input type="radio" id="youtube" name="main" />
            <label htmlFor="youtube">유튜브</label>
            <input type="radio" id="picture" name="main" />
            <label htmlFor="picture">사진</label>
          </div>
        </S.SectionWrap>
        <S.SubmitButtonWrap>
          <S.SubmitButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          >
            {props.isEdit ? "수정" : "등록"}하기
          </S.SubmitButton>
        </S.SubmitButtonWrap>
      </S.Wrapper>
    </>
  );
}
