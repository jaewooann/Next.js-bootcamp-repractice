import { Modal } from "antd";

export const checkValidationImage = (file?: File): boolean => {
  if (typeof file === "undefined") {
    Modal.error({ content: "파일이 없습니다" });
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    Modal.error({ content: "파일 용량이 너무 큽니다. (제한: 5MB)" });
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    Modal.error({ content: "jpeg 또는 png 파일만 업로드 가능합니다." });
    return false;
  }
  return true;
};
