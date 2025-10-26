import reactImg from "../../assets/react.svg";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <h1>Tic-Tac-Toe</h1>
      <img src={reactImg} alt="header" />
    </header>
  );
}
