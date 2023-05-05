import { useMutation, useQuery } from "@apollo/client";
import CommentListUI from "./CommentList.presenter";
import {
  DELETE_BOARD_COMMENTS,
  FETCH_BOARD_COMMENTS,
} from "./CommnetList.queries";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";

export default function CommentList() {
  const router = useRouter();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [boardCommentId, setBoardCommentId] = useState("");
  const [password, setPassword] = useState("");

  if (!router || typeof router.query.boardId !== "string") return <></>;

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENTS);

  const onClickToggleModal = () => {
    setIsOpenDeleteModal((prev) => !prev);
  };

  const onClickOpenDeleteModal = (e: MouseEvent<HTMLButtonElement>) => {
    setBoardCommentId(e.currentTarget.id);
    onClickToggleModal();
  };

  const onChangeDeletePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickDeleteCommentList = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
      onClickToggleModal();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <CommentListUI
      data={data}
      isOpenDeleteModal={isOpenDeleteModal}
      onClickToggleModal={onClickToggleModal}
      onClickOpenDeleteModal={onClickOpenDeleteModal}
      onChangeDeletePassword={onChangeDeletePassword}
      onClickDeleteCommentList={onClickDeleteCommentList}
    />
  );
}
