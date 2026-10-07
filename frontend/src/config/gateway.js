/**
 * Base URL for every browser HTTP call in this app.
 * Configure `VITE_API_GATEWAY_URL` to your API gateway; do not point the
 * frontend at Resource_upload, the auth backend, or other services directly.
 */
export function getGatewayBaseUrl() {
  return 'http://13.237.149.64';
}
