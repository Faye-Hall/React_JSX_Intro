const Person = (props) => {
  let vote = props.age > 18 ? "Please Go Vote" : "Can't Vote Yet";
  let nameLength = props.name.length > 8 ? props.name.slice(0, 6) : props.name;
  let hobbies = props.hobbies.map((h) => <li>{h}</li>);
  return (
    <div>
      <p>Learn Something About This Person</p>
      <p>{vote}</p>
      <p>{nameLength}</p>
      <ul>{hobbies}</ul>
    </div>
  );
};
