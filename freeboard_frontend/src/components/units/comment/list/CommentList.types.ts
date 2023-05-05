import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent, ChangeEvent } from "react";

export interface ICommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments"> | undefined;
  isOpenDeleteModal: boolean;
  onClickToggleModal: () => void;
  onClickOpenDeleteModal: (e: MouseEvent<HTMLButtonElement>) => void;
  onChangeDeletePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteCommentList: (e: MouseEvent<HTMLButtonElement>) => void;
}
