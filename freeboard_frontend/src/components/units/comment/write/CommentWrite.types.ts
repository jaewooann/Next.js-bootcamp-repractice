import { ChangeEvent } from "react";

export interface ICommentWriteUIProps {
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  writer: string;
  password: string;
  contents: string;
  star: number;
  setStar: () => void;
}
