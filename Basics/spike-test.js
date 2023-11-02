import http from "k6/http";
import { sleep } from "k6";

export const options = {
  stages: [
    {
      duration: "30s",
      target: 10000,
    },
    {
      duration: "1m",
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
