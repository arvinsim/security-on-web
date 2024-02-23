import { randFullName } from "@ngneat/falso";

export function GET() {
  const persons = [
    { id: 1, name: randFullName() },
    { id: 2, name: randFullName() },
    { id: 3, name: randFullName() },
  ];
  return Response.json({ persons });
}
