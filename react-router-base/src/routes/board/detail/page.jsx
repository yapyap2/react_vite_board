import React from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function Detailpage(data) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "10vw" }}>{location.state.data.title}</p>
        <Button
          variant="primary"
          style={{ height: "50%" }}
          onClick={(e) => {
            navigate(-1);
          }}
        >
          뒤로가기
        </Button>
      </div>
      <p style={{ alignSelf: "flex-end" }}>
        author: {location.state.data.author}
      </p>
      <hr />
      <p>{location.state.data.content}</p>
    </div>
  );
}

export default Detailpage;
