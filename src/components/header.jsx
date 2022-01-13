import React, { Component } from 'react';

class Header extends Component {
  state = {
    name: '',
  };
  serachbtn = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.value);
  };

  render() {
    return (
      <>
        <header className="header-nav">
          <img src="../logo.png" alt="logo" />
          <h1>Youtube</h1>

          <div className="input-serach">
            <input type="text" placeholder="검색어 입력" />
            <button
              type="button"
              className="header-btn"
              onClick={this.serachbtn}
            >
              검색
            </button>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
