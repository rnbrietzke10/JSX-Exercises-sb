const App = () => {
  return (
    <div>
      <Person
        name='Sara'
        age={22}
        hobbies={['hiking', 'spending time with family', 'swimming']}
      />
      <Person
        name='Cooper'
        age={3}
        hobbies={['playing with cars', 'playing baseball']}
      />
      <Person
        name='Peyton'
        age={18}
        hobbies={[
          'Drawing',
          'listening to music',
          'spending time with friends',
        ]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
