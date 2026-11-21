import { NextResponse } from "next/server";
import { contactSchema } from "@/schemas/contact";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        issues: parsed.error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        })),
      },
      { status: 422 },
    );
  }

  // DEV ONLY: include "#fail" in the message to preview the error modal.
  if (process.env.NODE_ENV !== "production" && parsed.data.message.includes("#fail")) {
    return NextResponse.json({ ok: false, message: "Simulated failure" }, { status: 500 });
  }

  // TODO: plug in your provider here (Resend, Nodemailer, Formspree, a DB, etc.)
  console.log("[contact] new message", parsed.data);

  return NextResponse.json({ ok: true });
}
