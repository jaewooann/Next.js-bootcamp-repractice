import { gql, useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProductInput: $createProductInput){
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: '훈이',
        createProductInput: {
          name: '마우스',
          detail: '정말 좋은 마우스',
          price: 3000,
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