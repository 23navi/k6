import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 2,
  duration: "5s",
};

console.log("--This is init stage--");

export function setup() {
  console.log("--This is setup stage--");
}

export default function () {
  console.log("--VU Stage--");
}

export function teardown() {
  console.log("--Teardown stage--");
}
