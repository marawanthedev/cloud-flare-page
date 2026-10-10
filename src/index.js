export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === '/api/regsiter-user' && request.method === 'POST') {
      const form = await request.formData()
      const username = form.get('user-name-1')
      const email = form.get('email-2')

      await env.USER_DATA_STORE.put(username, email)

      return new Response(`Received: ${username}, ${email}`)
    }

    return env.ASSETS.fetch(request)
  },
}
