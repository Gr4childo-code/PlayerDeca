const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

const Api = async (url = '', method = 'GET', params = null, token = API_TOKEN) => {
  try {
    const resp = await fetch(`${API_URL}/api/${url}`, {
      method,
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: params ? JSON.stringify(params) : null
    })

    console.info("success", { ok: resp.ok, status: resp.status })

    return await resp.json()
  } catch(err) {
    console.error(err)
  }
}

export default Api