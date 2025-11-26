// app/api/storage/route.ts   (or pages/api/storage.ts)
import { ZgFile } from '@0glabs/0g-ts-sdk/lib.esm/file';

export async function GET() {
  const file = new ZgFile(/* … */);
  // …do work
  return Response.json({ ok: true });
}