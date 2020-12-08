import React from 'react';
import {
  EventContainer,
  EventInformation,
  EventOrganizer,
  EventStartTime,
  EventTitle,
} from './styles';
import { PlaceholderImage, PlaceholderLine } from '../PlaceholderItems';

const EventLoadingPlaceholder = (): JSX.Element => {
  return (
    <EventContainer>
      <PlaceholderImage
        style={{
          // 16:9 ratio
          height: '9rem',
          width: '16rem',
          display: 'block',
          borderRadius: '0.625rem 0.625rem 0 0',
          boxShadow: '0 3px 10px rgba(0, 0, 0, 0.075)',
        }}
      />
      <EventInformation style={{ height: '10.5rem', padding: '0.75rem 1rem' }}>
        <div>
          <EventTitle>
            <PlaceholderLine big style={{ height: '1.15rem' }} />
            <PlaceholderLine
              big
              style={{
                height: '1.15rem',
                maxWidth: '75%',
                marginTop: '0.25rem',
              }}
            />
          </EventTitle>
          <EventOrganizer>
            <PlaceholderLine style={{ maxWidth: '65%', marginTop: '0.5rem' }} />
          </EventOrganizer>
        </div>
        <EventStartTime>
          <PlaceholderLine style={{ maxWidth: '90%', marginBottom: '0.5rem' }} />
        </EventStartTime>
      </EventInformation>
    </EventContainer>
  );
};

export default EventLoadingPlaceholder;
