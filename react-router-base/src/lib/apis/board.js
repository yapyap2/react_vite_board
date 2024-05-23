import axios from "axios";

async function getBoard() {
  return await axios.get("http://localhost:3000/board");
}

export { getBoard };
