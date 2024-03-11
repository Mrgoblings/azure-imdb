import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function http_get_film(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Hello, ${name}!` };
};

app.http('http_get_film', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: http_get_film
});
