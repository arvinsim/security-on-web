import { Person } from "./_components/Person";

function PersonList() {
  const persons = [
    { id: 1, name: "John" },
    { id: 2, name: "Doe" },
    { id: 3, name: "Smith" },
  ];

  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>
          <Person person={person} />
        </li>
      ))}
    </ul>
  );
}

export default PersonList;
