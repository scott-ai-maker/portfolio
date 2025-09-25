import { AzureFunction, Context, HttpRequest } from '@azure/functions';

function sanitize(str: any) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const { name, email, message } = req.body || {};
  if (!email || !message) {
    context.res = {
      status: 400,
      body: { error: 'Missing email or message' }
    };
    return;
  }

  context.res = {
    status: 200,
    body: {
      ok: true,
      name: sanitize(name),
      email: sanitize(email),
      message: sanitize(message).slice(0, 2000)
    }
  };
};

export default httpTrigger;
