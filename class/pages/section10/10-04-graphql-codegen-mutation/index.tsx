import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationCreateBoardArgs } from "../../../src/commons/types/generated/types";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput){
      _id
      writer
      title
      contents
    }
  }
`;

export default function GraphqlMutationPage() {
  // const [writer, setWriter] = useState<number>(0);

  // <결과타입, 변수타입>
  const [createBoard] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: "철수",
          title: "안녕하세요",
          contents: "반갑습니다"
        }
      }
    });
    console.log(result);
  }

  return (
    <>
      <button onClick={onClickSubmit}>api 요청하기</button>
    </>
  );
}