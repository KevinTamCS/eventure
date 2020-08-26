import React from 'react';
import moment from 'moment';
import { TimeDiv, Icon, Text } from './styles';
import clockIcon from 'assets/icons/clock.svg';

interface Props {
  startTime: Date;
  endTime: Date;
}

const Time: React.FC<Props> = (props) => {
  const { startTime, endTime } = props;

  const formattedStartDate = moment(startTime).format('MMMM Do, YYYY');
  const formattedStartTime = moment(startTime).format('h:mm A');
  const formattedEndTime = moment(endTime).format('h:mm A');

  return (
    <TimeDiv>
      <Icon src={clockIcon} alt="Event time" />
      <div>
        <Text>{formattedStartDate}</Text>
        <Text>
          {formattedStartTime} – {formattedEndTime}
        </Text>
      </div>
    </TimeDiv>
  );
};

export default Time;
