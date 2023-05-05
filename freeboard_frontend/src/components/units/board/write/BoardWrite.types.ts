import { Address } from "react-daum-postcode";
import { IQuery } from "../../../../commons/types/generated/types";
import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard"> | undefined;
}

export interface IupdateBoardInputProps {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
}

export interface IBoardWriteUIProps {
  fileUrls: string[];
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSearchAddress: () => void;
  onCompleteAddressSearch: (data: Address) => void;
  onChangeAddressDetail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrls: (fileUrl: string, idx: number) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  isOpen: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard"> | undefined;
  zipcode: string;
  address: string;
}
