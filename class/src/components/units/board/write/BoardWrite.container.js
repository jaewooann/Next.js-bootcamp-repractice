import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";



export default function BoardWrite() {
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [qqq] = useMutation(CREATE_BOARD);

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value);RedInput
  }

  const onChangeContents = (e) => {
    setContents(e.target.value);
  }

  const onClickSubmit = async () => {
    const result = await qqq({
      variables: {
        writer,
        title,
        contents,
      }
    });
    console.log(result);
  }

  return (
    <>
      <BoardWriteUI
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onClickSubmit={onClickSubmit}
      />
    </>
  );
}