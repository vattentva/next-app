// export type SampleResponse = {
//     request: string,
//     user: string,
// }

export async function GET(request: Request): Promise<Response> {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY || 'aaa',
        }
    })
    const product = await res.json()
    
    return Response.json('data')
}
  