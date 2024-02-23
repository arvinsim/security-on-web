import sql from "../../../db";

export const dynamic = "force-dynamic";

export async function GET() {
  const persons = await sql`
    SELECT
      id,
      first_name,
      last_name
      email
    FROM persons
  `;
  return Response.json({ persons });
}
