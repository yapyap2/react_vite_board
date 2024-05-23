import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "./routes/MainPage";
import BoardPage from "./routes/board/page";
import BoardLayout from "./routes/board/layout";
import BoardWrite from "./routes/board/write/page";
import Detailpage from "./routes/board/detail/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    index: true,
  },
  {
    path: "/board",
    element: <BoardLayout />,
    children: [
      {
        path: "",
        index: true,
        element: <BoardPage />,
      },
      {
        path: ":boardId",
        index: true,
        element: <Detailpage />,
      },
      {
        path: "write",
        element: <BoardWrite />,
        index: true,
      },
    ],
  },
]);

export default router;
