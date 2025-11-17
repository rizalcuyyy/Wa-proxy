export default {
  async fetch(request) {
    const url = new URL(request.url);
    url.hostname = "chatproxies.whatsapp.net";
    const newRequest = new Request(url.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });
    return fetch(newRequest);
  }
}
