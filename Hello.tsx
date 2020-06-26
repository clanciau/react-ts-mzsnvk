import React from 'react';

//export default ({ name }) => <h1>Hello {name}!</h1>;
export default ({ name }) =>
  <form>
    <label >name:</label>
    <input type="text" value={name}></input>
    <input type="submit" ></input>
  </form>