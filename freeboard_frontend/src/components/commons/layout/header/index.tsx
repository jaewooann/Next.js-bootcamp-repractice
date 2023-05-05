import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 1080px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h2`
  cursor: pointer;
`;

const Button = styled.button`
  border: none;
  background-color: #fff;
  margin-left: 0.6em;
  color: #422323;
  font-weight: bold;
  cursor: pointer;
`;

export default function LayoutHeader() {
  const router = useRouter();

  const onClickLogo = () => {
    void router.push("/boards");
  };

  return (
    <Wrapper>
      <Logo onClick={onClickLogo}>Ann</Logo>
      <div>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </div>
    </Wrapper>
  );
}
