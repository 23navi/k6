import http from "k6/http";
import { sleep } from "k6";

export const options = {
  stages: [
    {
      duration: "1m",
      target: 10000,
    },
  ],
};

export default function () {
  http.get("http://localhost:4001/healthcheck");
  sleep(0.01);
}
