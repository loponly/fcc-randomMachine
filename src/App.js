import React from "react";
import "typeface-roboto";
import QuoteMachine from "./components/QuoteMachine";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    alignItems: "center",
    display: "flex",
    height: "100vh",
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    };
    this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);
    this.nextQuoteClickHandler = this.nextQuoteClickHandler.bind(this);
    this.assingNewQuoteIndex = this.assingNewQuoteIndex.bind(this);
  }
  // fetching quotes
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((data) => data.json())
      .then((quotes) => this.setState({ quotes }, this.assingNewQuoteIndex));
  }
  assingNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() });
  }
  // retruns integer representing state
  generateNewQuoteIndex() {
    if (!this.state.quotes.length) {
      return undefined;
    }
    return Math.floor(Math.random() * this.state.quotes.length - 1);
  }

  get selectedQuote() {
    if (
      !this.state.quotes.length ||
      !Number.isInteger(this.state.selectedQuoteIndex)
    ) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  nextQuoteClickHandler() {
    this.assingNewQuoteIndex();
    console.log(this.selectedQuote.quote);
  }

  render() {
    return (
      <Grid
        className={this.props.classes.container}
        id="quote-box"
        justify="center"
        container
      >
        <Grid xs={11} lg={8} item>
          {this.selectedQuote ? (
            <QuoteMachine
              selectedQuote={this.selectedQuote}
              assingNewQuoteIndex={this.assingNewQuoteIndex}
              styles={this.props.classes}
            />
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
