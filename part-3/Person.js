const Person = ({ name, age, hobbies }) => {
  let ableToVote;
  if (age < 18) {
    ableToVote = <h3>you must be 18</h3>;
  } else {
    ableToVote = <h3>please go vote!</h3>;
  }

  return (
    <div>
      <p>Learn some information about this person</p>
      {ableToVote}
      <ul>
        {hobbies.map(h => (
          <li>{h}</li>
        ))}
      </ul>
    </div>
  );
};
