import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <div>
        <h1>About this App</h1>
        <h1>App to search github users</h1>
        <h1>{React.version}</h1>
      </div>
    </Fragment>
  );
};

export default About;
