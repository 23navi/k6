import http from "k6/http";
import { check } from "k6";

export default function () {
  const res = http.get("https://test.k6.io");
  check(res, {
    name_of_assertion: (res) => {
      return res.status === 200;
    },
    second_assertion_in_check: (res) => {
      return true;
    },
  });
  check(res, {
    is_startup_page: (res) => {
      return res.body.includes("testing");
    },
  });
}
