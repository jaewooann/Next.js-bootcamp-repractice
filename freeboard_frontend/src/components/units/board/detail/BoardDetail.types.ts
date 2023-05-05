import { IQuery } from "../../../../commons/types/generated/types"
import { MouseEvent } from 'react';

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard"> | undefined
  onClickMoveToBoards: () => void
  onClickDeleteBoard: (e: MouseEvent<HTMLButtonElement>) => void
  onClickMoveToBoardEdit: () => void
}