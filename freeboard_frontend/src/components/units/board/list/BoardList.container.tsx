import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";
import { MouseEvent } from 'react';
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  console.log(data);

  const onClickMoveToBoardNew = () => {
    router.push('/boards/new');
  }

  const onClickMoveToBoardDetail = (e: MouseEvent<HTMLSpanElement>) => {
    router.push(`/boards/${e.currentTarget.id}`)
  }

  return (
    <BoardListUI 
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}