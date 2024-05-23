import React, { useContext } from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <h1>MainPage</h1>
      <p>hello world</p>

      <Link to="/board">게시판으로</Link>
      <hr />
      <a href="/board">게시판으로 anchor</a>
    </div>
  );
}
