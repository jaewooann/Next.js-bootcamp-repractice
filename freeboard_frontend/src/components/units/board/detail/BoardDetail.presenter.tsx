import { Tooltip } from "antd";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import YouTubePlayer from "react-player/youtube";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <div>
            <h2>{props.data?.fetchBoard?.writer}</h2>
            <p>{getDate(props.data?.fetchBoard?.createdAt)}</p>
          </div>
          <div>
            <Tooltip
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <S.ToolTipClick>주소보기</S.ToolTipClick>
            </Tooltip>
          </div>
        </S.Header>
        <S.Body>
          <h1>{props.data?.fetchBoard?.title}</h1>
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
          {props.data?.fetchBoard.youtubeUrl !== "" && (
            <YouTubePlayer
              url={props.data?.fetchBoard.youtubeUrl ?? ""}
              width="350px"
              height="200px"
            />
          )}
          <S.ImageWrap>
            {props.data?.fetchBoard.images
              ?.filter((el) => el)
              .map((el) => (
                <S.Image
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </S.ImageWrap>
        </S.Body>
      </S.Wrapper>
      <S.ButtonWrap>
        <S.Button onClick={props.onClickMoveToBoards}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveToBoardEdit}>수정하기</S.Button>
        <S.Button
          id={props.data?.fetchBoard?._id}
          onClick={props.onClickDeleteBoard}
        >
          삭제하기
        </S.Button>
      </S.ButtonWrap>
    </>
  );
}
