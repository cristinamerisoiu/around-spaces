// export function getAnalytics() {
//   const promise = fetch("http://localhost:3333/analytics");
//   return promise.then(response => response.json());
// }

export function postAnalytics(analytic) {
  return fetch("http://localhost:3333/analytics", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(analytic)
  });
}
