import Person from "./Person";
const NameList = () => {
    const names = ["Bruce", "Clark", "Diana","Bruce"];
    const nameList = names.map((name, index) => <h1 key={index}>{name}</h1>);// index as a key

    // WHen to use index as a key
    //1.The items in your list do not have unique id
    //2. The list is a static list and do not change
    //3. The List will never be recorded or filtered
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 31,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 32,
      skill: "Vue",
    },
  ];
//   const nameList = persons.map((person) => (
    // <h2>
    //   I am {person.name}. I am {person.age} years old. I know {person.skill}
    // </h2>
//     <Person key={person.id} person={person} />
//   ));
  return (
    <div>
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}

      {
        //   names.map(name => <h2>{name}</h2>)
        nameList
      }
    </div>
  );
};

export default NameList;
