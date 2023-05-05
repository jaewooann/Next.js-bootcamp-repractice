import styled from "@emotion/styled";
import { ChangeEvent } from "react";

const UploadImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 1em;
  cursor: pointer;
`;

const UploadButton = styled.div`
  width: 80px;
  height: 80px;
  background-color: #efefef;
  margin-right: 1em;
  text-align: center;
  line-height: 80px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const UploadHiddenInput = styled.input`
  display: none;
`;

interface IUploads01UIProps {
  fileRef: any;
  fileUrl: string;
  onClickUpload: () => void;
  onChangeFile: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Uploads01UI(props: IUploads01UIProps) {
  return (
    <>
      {props.fileUrl !== "" ? (
        <UploadImage
          src={`https://storage.googleapis.com/${props.fileUrl}`}
          onClick={props.onClickUpload}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <>+</>
          <>Upload</>
        </UploadButton>
      )}
      <UploadHiddenInput
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
