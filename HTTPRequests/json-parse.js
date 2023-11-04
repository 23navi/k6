import http from "k6/http";
import { check } from "k6";

export default function () {
  let res = http.get("https://test-api.k6.io/public/crocodiles/");

  res = http.get("https://test-api.k6.io/public/crocodiles/7/");

  console.log(res) // This has whole http response, (body,headers,....)
  console.log(JSON.parse(res)); // Won't work
  console.log(res.json()); 

  check(res, {
    "status is 200": (r) => r.status === 200,
    "Crocodile is Sobek": (r) => r.json().name === "Sobek",
  });
}
