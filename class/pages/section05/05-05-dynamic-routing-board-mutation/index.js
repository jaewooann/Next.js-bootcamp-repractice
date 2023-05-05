import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents){
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    try {
      const result = await createBoard({
        variables: {
          writer: "철수",
          title: "안녕하세요",
          contents: "반갑습니다"
        }
      });
      console.log(result);
      console.log(result.data.createBoard.number);
      router.push(`/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`)
    } catch(error) {
      alert(error.message);
    }


  }

  return (
    <>
      <button onClick={onClickSubmit}>api 요청하기</button>
    </>
  );
}