import React from 'react';
import ConnectedTodos from './Todos';
import ConnectedGoals from './Goals';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    //Fetching the data from the database.
    dispatch(handleInitialData());

    //Calling forceUpdate to cause a re-render even though is an antipattern.
    //Typically one call setState to cause a re-render, but
    //we don't have a state in this case.
  }

  render() {
    const { loading } = this.props;
    if (loading === true) {
      return <h3>Loading</h3>;
    }
    return (
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    );
  }
}

export default connect((state) => ({
  loading: state.loading,
}))(App);
