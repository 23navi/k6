import http from "k6/http";

export default function () {
  // BASE_URL=https://test-api.k6.io/
  console.log(__ENV.BASE_URL);
  http.get(`${__ENV.BASE_URL}/public/crocodiles/`);
  //   http.get(`https://test-api.k6.io/public/crocodiles/`);
}
