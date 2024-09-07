import { query } from "@/infrastructure/repositories/inferenceApi";

export async function GET(request: Request): Promise<Response> {
    const res = await query();
    return Response.json(res);
}