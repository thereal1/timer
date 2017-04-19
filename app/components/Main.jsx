const React = require('react');

const Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav />
      <div>
        <p>Main.jsx rendered</p>
        {props.children}
      </div>
    </div>
  )
};

module.exports = Main;
