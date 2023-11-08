import http from "k6/http";
// We don't have to install this k6/http from npm as it is taken care by k6 cli

export const options = {
  vus: 1,
};

export default function () {
  // "https://test.k6.io" is just an endpoint to test given by k6 team
  http.get("http://localhost:4001/healthcheck");
  // http.get("https://test.k6.io");
  // http.get(
  //   "https://run.mocky.io/v3/1e885f08-e094-49c4-952b-b20c978e199f?mocky-delay=5000ms"
  // );
  // http.get(
  //   "https://run.mocky.io/v3/1e885f08-e094-49c4-952b-b20c978e199f?mocky-delay=5000ms"
  // );
}
