import React from 'react';
import FilterLink from '../containers/FilterLink';
import './Footer.css';

const Footer = () => (
  <div className="Footer">
    <FilterLink filter="all">All</FilterLink>
    <FilterLink filter="active">Active</FilterLink>
    <FilterLink filter="completed">Completed</FilterLink>
  </div>
)

export default Footer;