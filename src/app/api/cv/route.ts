
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FILE_NAME = "CV-Muhammad-Risyad-Rahmadi.pdf";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "cv-risyad-rahmadi.pdf",
    );

    const file = await readFile(filePath);

    return new Response(new Uint8Array(file), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${FILE_NAME}"`,
        "Content-Length": String(file.length),
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new Response("CV tidak ditemukan", {
      status: 404,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}
