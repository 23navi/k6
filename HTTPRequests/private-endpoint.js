import http from "k6/http";
import { check } from "k6";

export default function () {
  const body = JSON.stringify({
    username: "test_" + Date.now(),
    password: "test",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // signup
  http.post("https://test-api.k6.io/user/register/", body, params);
  const res = http.post(
    "https://test-api.k6.io/auth/cookie/login/",
    body,
    params
  );

  const res2 = http.get("https://test-api.k6.io/my/crocodiles/");
  console.log(res2.json());
}
