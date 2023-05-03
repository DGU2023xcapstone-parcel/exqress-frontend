import * as style from "./SubmitBtn.style.js";

interface SubmitBtnProps {
  text: string;
  onClick: () => void;
}
const SubmitBtn = ({ text, onClick }: SubmitBtnProps) => (
  <style.Button onClick={onClick}>{text}</style.Button>
);

export default SubmitBtn;
