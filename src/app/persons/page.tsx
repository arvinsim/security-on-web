import { Person } from "./_components/Person";

async function getPersons(): Promise<any[]> {
  const response = await fetch("http://localhost:9999/api/persons", {
    method: "GET",
  });
  const responseJson = await response.json();
  return responseJson.data.persons;
}

async function PersonList() {
  const persons = await getPersons();

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
