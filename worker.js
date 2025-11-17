export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Server WhatsApp proxy resmi
    url.hostname = "v.whatsapp.net";

    const headers = new Headers(request.headers);
    headers.set("Host", "v.whatsapp.net");
    headers.set("Connection", "keep-alive");

    return fetch(url.toString(), {
      method: request.method,
      headers,
      body: request.method !== "GET" ? request.body : undefined,
    });
  }
}
