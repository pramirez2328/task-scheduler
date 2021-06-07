import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      author: "",
    };
    this.quote = this.quote.bind(this);
  }

  componentDidMount() {
    this.quote();
  }

  quote() {
    let randomQuote = Math.floor(Math.random() * 1643);
    var dailyQuote;
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        dailyQuote = data[randomQuote];
        this.setState({ message: dailyQuote.text, author: dailyQuote.author });
      });
  }

  render() {
    const { message, author } = this.state;

    return (
      <div className="nav p-3 border border-dark rounded">
        <nav className="navbar w-100">
          <div className=" w-100">
            <h4 className="font-weight-light">{message}</h4>
            <div className=" w-100 d-flex justify-content-between">
              <p className="text-capitalize font-weight-bold">{author}</p>
              <p className="h1 mr-3">
                <FontAwesomeIcon icon={faBookReader} />
              </p>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
