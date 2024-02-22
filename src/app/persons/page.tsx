function PersonList() {
  const persons = [
    { id: 1, name: "John" },
    { id: 2, name: "Doe" },
    { id: 3, name: "Smith" },
  ];

  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
}

export default PersonList;
