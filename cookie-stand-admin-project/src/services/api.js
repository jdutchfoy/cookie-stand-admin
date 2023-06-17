const BASE_URL = process.env.REACT_APP_API_URL;

async function fetchCookieStands() {
  const response = await fetch(`${BASE_URL}/cookie-stands/`);
  if (!response.ok) {
    throw new Error('Failed to fetch cookie stands.');
  }
  return response.json();
}

export { fetchCookieStands };
