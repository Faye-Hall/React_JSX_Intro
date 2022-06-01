// const FirstComponent = () => {
//     return <h1>My First Component!!!</h1>;
//   };

const Tweet = (props) => {
  return (
    <div>
      <h2>By {props.username}</h2>
      <p>
        {props.name} says {props.msg}
      </p>
      <p>on {props.date}</p>
    </div>
  );
};
