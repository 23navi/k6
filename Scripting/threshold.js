import http from "k6/http";
import { sleep } from "k6";

export const options = {
  duration: "5s",
  vus: 10,
  thresholds: {
    http_req_duration: ["p(95)<300"],
    http_req_failed: ["rate<0.01"],
  },
};

export default function () {
  http.get("https://test.k6.io");
  sleep(2);
  http.get("https://test.k6.io/contacts.php");
  sleep(1);
}
