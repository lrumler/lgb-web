export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body?.email || !body?.platform) {
      return Response.json({ error: "Email and platform are required" }, { status: 400 });
    }

    const betaRecord = {
      email: body.email,
      name: body.name ?? null,
      platform: body.platform,
      location: body.location ?? null,
      must_keep: body.must_keep ?? null,

      beta_founder: true,
      beta_grant_days: 30,
      granted_at: null, // activated at public launch
      created_at: new Date().toISOString(),
    };

    console.log("BETA_SIGNUP", betaRecord);

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}