import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards{
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number){
      _id
      message
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  const onClickDelete = async (e) => {
    const result = await deleteBoard({
      variables: { number: Number(e.target.id) },
      refetchQueries: [{ query: FETCH_BOARDS }]
    });
  }

  return (
    <> {/* 특별한 이유가 없으면? Fragment로 감싸자! div는 1개 더 그려야해서 조금 느려짐 */}
      {data?.fetchBoards.map((el) => (
        <div key={el.number}> {/* index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 기존 index와 동일한 값을 갖게 됨. 즉 유일하지 않음. */}
          <span>
            <input type="checkbox" />
          </span>
          <span style={{margin: '10px'}}>{el.number}</span>
          <span style={{margin: '10px'}}>{el.title}</span>
          <span style={{margin: '10px'}}>{el.writer}</span>
          <span>
            <button id={el.number} onClick={onClickDelete}>삭제</button>
          </span>
        </div>
      ))}
    </>
  );
}