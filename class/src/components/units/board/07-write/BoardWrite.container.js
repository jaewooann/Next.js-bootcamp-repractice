import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [isActive, setIsActive] = useState(false);

  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
    if(e.target.value && title && contents) {
      setIsActive(true);
    }
  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    if(writer && e.target.value && contents) {
      setIsActive(true);
    }
  }

  const onChangeContents = (e) => {
    setContents(e.target.value);
    if(writer && title && e.target.value) {
      setIsActive(true);
    }
  }

  const onClickSubmit = async () => {
    const result = await createBoard({
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
        isActive={isActive}
      />
    </>
  );
}