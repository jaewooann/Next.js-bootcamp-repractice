import { StepForwardOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { MouseEvent } from "react";

const MyIcon = styled(StepForwardOutlined)`
  color: red;
  font-size: 100px;
`;

export default function LibraryIconPage(): JSX.Element {
  const onClickDelete = (e: MouseEvent<HTMLDivElement>): void => {
    console.log(e.currentTarget.id);
  };

  return (
    <div id="삭제할게시글ID" onClick={onClickDelete}>
      <MyIcon />
    </div>
  );
}
