import { gql, useMutation } from "@apollo/client";

const 나의그래프큐엘셋팅 = gql`
  mutation {
    createBoard(writer: "철수", title: "안녕하세요", contents: "반갑습니다"){
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [qqq] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await qqq();
    console.log(result);
  }

  return (
    <>
      <button onClick={onClickSubmit}>api 요청하기</button>
    </>
  );
}