import React from 'react';
import moment from 'moment';
import { Container, Icon, Text } from './styles';
import clockIcon from 'assets/icons/clock.svg';

interface Props {
  startTime: Date;
  endTime: Date;
}

const Time: React.FC<Props> = ({ startTime, endTime }) => {
  const formattedStartDate = moment(startTime).format('MMMM Do, YYYY');
  const formattedStartTime = moment(startTime).format('h:mm A');
  const formattedEndTime = moment(endTime).format('h:mm A');

  return (
    <Container>
      <Icon src={clockIcon} alt="Event time" />
      <div>
        <Text>{formattedStartDate}</Text>
        <Text>
          {formattedStartTime} – {formattedEndTime}
        </Text>
      </div>
    </Container>
  );
};

export default Time;
