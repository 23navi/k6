import http from "k6/http";
// We don't have to install this k6/http from npm as it is taken care by k6 cli

export default function () {
  // "https://test.k6.io" is just an endpoint to test given by k6 team
  const res= http.get("https://test.k6.io");
}
