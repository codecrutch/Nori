import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return ({

  });
};

const mapDispatchToProps = dispatch => {
  return ({

  });
};

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h3>This is where the reviews will be</h3>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
