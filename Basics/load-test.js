import http from "k6/http";
import { sleep } from "k6";

export const options = {
  stages: [
    {
      duration: "30s",
      target: 10000,
    },/// s1
    {
      duration: "5m",
      target: 10000,
    },// s2
    {
      duration: "30s",
      target: 0,
    }, //s3
  ],
};

export default function () {
  http.get("https://test.k6.io");
  sleep(2);
  http.get("https://test.k6.io/contacts.php");
  sleep(1);
}
