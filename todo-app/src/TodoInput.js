import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
//    新しいバージョンでbind使ったらエラー出た。
//    this.handleChange = this.handleChange.bind(this);
//    this.handleClick = this.bandleClick.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleClick = () => {
    // inputValueの初期化
    const inputValue = this.state.inputValue;
    // 入力データをaddTodoメソッドで追加
    this.props.addTodo(inputValue);
  }

  render() {
    return (
      <div>
        <input placeholder="新規TODOを入力してください"  value={this.state.inputValue} onChange={this.handleChange} />
        <button onClick={this.handleClick}>登録</button>
      </div>
    );
  }
}

export default TodoInput;
