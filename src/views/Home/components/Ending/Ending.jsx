import React from 'react';
import Button from 'components/Button';
import './Ending.scss';

const Ending = () => {
  return (
    <section className="Ending">
      <h2 className="Ending-heading">
        Start your journey for virtual events today.
      </h2>
      <Button className="Ending-button-join" to="/join">
        Join Eventure
      </Button>
    </section>
  );
};

export default Ending;
