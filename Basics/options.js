import http from "k6/http";

export const options = {
  vus: 10, // We want 10 parallel request making virtual users
  duration: "30s", // Requests should be made for 10 sec in loop
};

export default function () {
  http.get("https://test.k6.io");
}
