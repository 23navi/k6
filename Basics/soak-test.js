import http from "k6/http";
import { sleep } from "k6";

export const options = {
  stages: [
    {
      duration: "1h",
      target: 100,
    },
    {
      duration: "24h",
      target: 100,
    },
    {
      duration: "1h",
      target: 0,
    },
  ],
};

export default function () {
  http.get("https://test.k6.io");
  sleep(2);
  http.get("https://test.k6.io/contacts.php");
  sleep(1);
}
