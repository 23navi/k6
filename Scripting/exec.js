import http from "k6/http";
import { sleep } from "k6";
import exec from "k6/execution";

export const options = {
  duration: "5s",
  vus: 10,
  thresholds: {
    http_req_duration: ["p(95)<500"],
    http_req_failed: ["rate<0.01"],
    http_reqs: ["count>5"],
    // this check if for the check assertions in the function
    checks: ["rate>.9"],
  },
};

export default function () {
  http.get("https://test.k6.io");

  // This give the iteration number.
  //   console.log(exec.scenario.iterationInTest);
  sleep(2);
  http.get("https://test.k6.io/contacts.php");
  sleep(1);
}

// Say we want to do something only for certain iteration number, then we can use this.
// Eg: Adding this /foo to the base route when we have iterationInTest number ===1
// http.get(
//   "https://test.k6.io/" + (exec.scenario.iterationInTest === 1 ? "foo" : "")
// );
