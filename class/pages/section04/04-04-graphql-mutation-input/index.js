import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents){
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [qqq] = useMutation(나의그래프큐엘셋팅);

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
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
      작성자: <input type="text" onChange={onChangeWriter} />
      제목: <input type="text" onChange={onChangeTitle} />
      내용: <input type="text" onChange={onChangeContents} />
      <button onClick={onClickSubmit}>api 요청하기</button>
    </>
  );
}