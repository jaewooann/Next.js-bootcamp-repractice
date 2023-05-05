import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries";
import { MouseEvent } from 'react';
import { IMutation, IMutationDeleteBoardArgs, IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();

  const [deleteBoard] = useMutation<Pick<IMutation, "deleteBoard">, IMutationDeleteBoardArgs>(DELETE_BOARD);
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) }
  });

  const onClickMoveToBoards = () => {
    void router.push('/boards');
  }

  const onClickMoveToBoardEdit = () => {
    void router.push(`/boards/${router.query.boardId}/edit`);
  }

  const onClickDeleteBoard = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      await deleteBoard({
        variables: { boardId: e.currentTarget.id }
      });
      alert('게시글이 삭제되었습니다.');
      router.push('/boards');
    } catch(error) {
      if(error instanceof Error) alert(error.message);
    }
  }

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoards={onClickMoveToBoards}
      onClickDeleteBoard={onClickDeleteBoard}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
    />
  );
}