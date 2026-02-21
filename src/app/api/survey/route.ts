export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body?.birder_level || !body?.top_priority || !body?.paid_interest) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log("SURVEY_SUBMIT", body);
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}
