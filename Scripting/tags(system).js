import http from "k6/http";

import { Counter, Trend } from "k6/metrics";

export const options = {
  vus: 1,
  thresholds: {
    "http_req_duration{status:200}": [],
    "http_req_duration{status:201}": [],
  },
};

export default function () {
  http.get("https://test.k6.io");
}
