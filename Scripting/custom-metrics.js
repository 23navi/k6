import http from "k6/http";
import { check } from "k6";
import { Counter } from "k6/metrics";

export const options = {
  vus: 1,
  thresholds: {
    my_counter: ["count>=1", "rate<2"],
    //     my_counter: ["count>=1"],
    //     my_counter: ["rate<2"],
  },
};

const myCounter = new Counter("my_counter");

export default function () {
  myCounter.add(1);
  http.get("https://test.k6.io");
  http.get("https://test.k6.io/contacts.php");
}
