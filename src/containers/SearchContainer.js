import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';
import ReduxThunk from 'redux-thunk';

var SearchContainer = () => {};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchInputChange: (term) => {
      dispatch(handleSearchChange(term));
    }
  };
};

const mapStateToProps = state => {
  return {
    value: state.searchValue
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
