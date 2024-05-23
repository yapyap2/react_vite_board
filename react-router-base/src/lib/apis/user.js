import axios from "axios";

const instance = axios.create({
  withCredentials: true,
});

function signUpApi(email, pw) {
  return instance.post("/api/user/signup", {
    email: email,
    password: pw,
  });
}

function loginApi(email, pw) {
  return instance.post("/api/user/login", {
    email: email,
    password: pw,
  });
}

function logOutApi() {
  return instance.get("/api/user/logout");
}

export { signUpApi, loginApi, logOutApi };
