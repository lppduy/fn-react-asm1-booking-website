import './SearchList.css';

import React from 'react';
import SearchItem from '../SearchItem/SearchItem';

const SearchList = ({ searchData }) => {
  return (
    <>
      {searchData.map(data => (
        <SearchItem data={data} />
      ))}
    </>
  );
};
export default SearchList;
