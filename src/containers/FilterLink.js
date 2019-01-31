import React from 'react';
import { NavLink } from 'react-router-dom';
import './FilterLink.css';

const FilterLink = ({ filter, children }) => (
  <NavLink 
    className="filter-link"
    to={filter === '/all' ? '' : `/${filter}`}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}  
  >
    {children}
  </NavLink>
);

export default FilterLink;