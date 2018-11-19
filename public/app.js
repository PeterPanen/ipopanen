const todos = [
  {
    uid: 1,
    text: "Kakao",
    quantity: 10
  },
  {
    uid: 2,
    text: "Flødeskum",
    quantity: 25
  },
  {
    uid: 3,
    text: "Pokémon",
    quantity: 6
  },
  {
    uid: 4,
    text: "Test",
    quantity: 7
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        {todos.map(todo => (
          <TodoItem key={todo.uid} text={todo.text} value={todo.quantity} />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
