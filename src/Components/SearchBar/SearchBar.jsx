import React from 'react'
import "./SearchBar.scss"
// import PropTypes from 'prop-types'

const SearchBar = () => {
  return (
  <form class="search ">
    <input type="text" id="search-bar" placeholder="Start Searching by Name / Company"/>
    <a href="#"><img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/></a>
  </form>
  );
};
export default SearchBar;