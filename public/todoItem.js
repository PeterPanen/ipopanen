class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <span>
          {this.props.value}
          {this.props.text}
        </span>
      </li>
    );
  }
}
