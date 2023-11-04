import http from "k6/http";
import exec from "k6/execution";

export function setup() {
  const res = http.get("http://localhost:3000/healthcheck");
  if (res.status !== 200) {
    exec.test.abort("API is down");
  }
}

export default function () {}
