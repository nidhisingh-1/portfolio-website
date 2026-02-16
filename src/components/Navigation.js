import React from 'react';
import './Navigation.css';
import { content } from '../content';

const Navigation = () => {
  return (
    <nav className="side-menu">
      <ul>
        {content.navigation.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
