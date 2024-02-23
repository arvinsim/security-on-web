"use client";

type PersonProps = {
  person: { id: number; first_name: string; last_name: string };
};

export function Person(props: PersonProps) {
  return (
    <h1>
      {props.person.first_name} {props.person.last_name}
    </h1>
  );
}
