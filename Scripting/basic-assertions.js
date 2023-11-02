import http from "k6/http";
import { check } from "k6";

export default function () {
  http.get("https://test.k6.io");
  const res = true;
  check(res, {
    name_of_assertion: (res) => {
      return res === 1;
    },
  });
}
