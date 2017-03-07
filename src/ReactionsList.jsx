import React, {Component} from 'react';

class ReactionsList extends Component {
  render() {
    return (
      <ol>
        {this.props.reactions.map((reaction) => {
          return (
            <li key={reaction.start}>{reaction.end} - {reaction.start} = {reaction.end - reaction.start}</li>
          );
        })}
      </ol>
    );
  }
}

export default ReactionsList;
