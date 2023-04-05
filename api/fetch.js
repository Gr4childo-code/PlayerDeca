const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

const Api = async (url = '', method = 'GET', params = null, token = API_TOKEN) => {
  try {
    let body = null
    const form = new FormData()

    if ( params ) {
      form.append('data', JSON.stringify(params.data))

      if ('files' in params) {
        for ( const file in params.files ) {
          form.append(`files.${file}`, params.files[file])
        }
      }

      body = form
    }

    const resp = await fetch(`${API_URL}/api/${url}`, {
      method,
      headers: {
        Authorization: `Bearer ${token}`
      },
      body
    })

    console.info("success", { ok: resp.ok, status: resp.status })

    return await resp.json()
  } catch(err) {
    console.error(err)
  }
}

export default Api