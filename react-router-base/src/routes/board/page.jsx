import React, { useEffect, useState, useContext } from "react";
import { getBoard } from "../../lib/apis/board";
import { Container, Row, Col } from "react-bootstrap";
import { Link, redirect, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

function page(props) {
  const [boardData, setBoardData] = useState([]);

  const { isLogin } = useContext(LoginContext);

  const navigate = useNavigate();
  useEffect(() => {
    getBoard().then((res) => {
      setBoardData(res.data);
    });
  }, []);

  return (
    <>
      <h1>boardPage</h1>

      {isLogin ? <p>login</p> : null}

      <div style={{ marginTop: "5%", borderStyle: "solid" }}>
        {boardData.map((b, idx) => {
          return (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "5% 2%",
                borderStyle: "solid",
              }}
              onClick={(e) => {
                navigate("./" + b.id, {
                  state: { data: b },
                });
              }}
            >
              <div>
                <h2>{b.title}</h2>
              </div>
              <div>
                <p>{b.author}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default page;
