import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components/macro';
import moment from 'moment';
import clockIcon from 'assets/icons/clock.svg';

const Container = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

const Icon = styled.img`
  width: 2rem;
  margin-right: 0.75rem;
`;

const Text = styled.p`
  margin: 0;
`;

const Time = (props) => {
  const startDate = moment(props.startTime).format('MMMM Do, YYYY');
  const startTime = moment(props.startTime).format('h:mm A');
  const endTime = moment(props.endTime).format('h:mm A');

  return (
    <Container>
      <Icon src={clockIcon} alt="Event time" />
      <div>
        <Text>{startDate}</Text>
        <Text>
          {startTime} – {endTime}
        </Text>
      </div>
    </Container>
  );
};

Time.propTypes = {
  startTime: propTypes.instanceOf(Date),
  endTime: propTypes.instanceOf(Date),
};

export default Time;
