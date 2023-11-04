import http from "k6/http";
import { check } from "k6";

export default function () {
  const res = http.get("https://test.k6.io/");
  check(res, {
    "status is 200": (r) => r.status === 200, // Will pass
    "page is startpage": (r) => r.body.includes("Collection of simple llll"), // Will fail
  });
}
