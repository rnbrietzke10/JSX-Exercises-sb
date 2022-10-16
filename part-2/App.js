const App = () => {
  return (
    <div>
      <Tweet
        name='Sara'
        username='sara123'
        message='Best day Ever'
        date='10 / 08 / 2022'
      />
      <Tweet
        name='Katie'
        username='katie123'
        message='I love hiking!!!!'
        date='8 / 13 / 2022'
      />
      <Tweet
        name='John'
        username='john123'
        message='Went fishing and caught a large catfish'
        date='10 / 16 / 2022'
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
