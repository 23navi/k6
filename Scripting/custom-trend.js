import http from "k6/http";
import { check } from "k6";
import { Counter, Trend } from "k6/metrics";

export const options = {
  vus: 1,
  thresholds: {
    my_counter: ["count>=1", "rate<2"],
    //     my_counter: ["count>=1"],
    //     my_counter: ["rate<2"],
  },
};

const myCounter = new Counter("my_counter");
const contactsPageResponseDuration = new Trend("contacts_page_response");

export default function () {
  myCounter.add(1);
  const res1 = http.get("https://test.k6.io");
  console.log({ res1: res1.timings });
  const res2 = http.get("https://test.k6.io/contacts.php");
  console.log({ res2: res2.timings });
  contactsPageResponseDuration.add(res2.timings.duration); //sending + waiting + receiving
}
