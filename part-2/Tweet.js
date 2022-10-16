const Tweet = ({ username, name, date, message }) => {
  return (
    <div>
      <h2>{username}</h2>
      <p>{message}</p>
      <h3>
        Posted by: {name} on {date}
      </h3>
    </div>
  );
};
