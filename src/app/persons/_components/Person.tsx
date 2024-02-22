"use client";

type PersonProps = {
  person: { id: number; name: string };
};

export function Person(props: PersonProps) {
  return <h1>{props.person.name}</h1>;
}
