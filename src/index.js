export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === '/api/regsiter-user' && request.method === 'POST') {
      const form = await request.formData()
      return new Response(`Received: ${form.get('user-name-1')}, ${form.get('email-2')}`)
    }

    return env.ASSETS.fetch(request)
  },
}
