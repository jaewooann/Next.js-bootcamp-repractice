import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const router = useRouter();

  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  const onChangeContents = (e) => {
    setContents(e.target.value);
  }

  // 등록하기
  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        writer,
        title,
        contents,
      }
    });
    console.log(result);
    router.push(`/section09/09-04-boards/${result.data.createBoard.number}`)
  }

  // 수정하기
  const onClickUpdate = async () => {
    const myvariables = { number: Number(router.query.number) }
    if(writer) myvariables.writer = writer;
    if(title) myvariables.title = title;
    if(contents) myvariables.contents = contents;

    const result = await updateBoard({
      variables: myvariables,
    });
    console.log(result);
    router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`);
  }

  return (
    <>
      <BoardWriteUI
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        isEdit={props.isEdit}
        data={props.data} // undefined 이거나, data 이거나 둘 중 하나!
      />
    </>
  );
}