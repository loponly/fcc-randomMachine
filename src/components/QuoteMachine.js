import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectedQuote, assingNewQuoteIndex, styles } = this.props;
    return (
      <Card>
        <CardContent>
          <Typography id="text">
            {selectedQuote.quote} -
            <span id="author">{selectedQuote.author}</span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className={styles.button}
            onClick={assingNewQuoteIndex}
            size="small"
            id="new-quote"
          >
            Next Quote
          </Button>
          <IconButton
            target="_blank"
            id="tweet-quote"
            href={encodeURI(
              `https://twitter.com/intent/tweet?text=${selectedQuote.quote}-${selectedQuote.author}&hashtags=thewebdevcoach`
            )}
          >
            <FontAwesomeIcon icon={faTwitter} size="sm"></FontAwesomeIcon>
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

QuoteMachine.propTypes = {
  //selectedQuote: PropTypes.object.isRequired,
  assingNewQuoteIndex: PropTypes.func.isRequired,
};

export default QuoteMachine;
