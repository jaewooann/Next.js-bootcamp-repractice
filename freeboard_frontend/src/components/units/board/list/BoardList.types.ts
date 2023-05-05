import { IQuery } from "../../../../commons/types/generated/types"
import { MouseEvent } from 'react';

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards"> | undefined
  onClickMoveToBoardNew: () => void
  onClickMoveToBoardDetail: (e: MouseEvent<HTMLButtonElement>) => void
}