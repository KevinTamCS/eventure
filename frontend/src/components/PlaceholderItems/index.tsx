import React from 'react';
import { PlaceholderItemStyles } from './styles';

interface PlaceholderProps {
  big?: boolean;
  style?: React.CSSProperties;
}

export const PlaceholderLine = (props: PlaceholderProps): JSX.Element => {
  const { big, style } = props;
  const height = big ? '2.25rem' : '1rem';

  return (
    <PlaceholderItemStyles>
      <div className="ph-item">
        <div className="ph-col-12">
          <div className="ph-row">
            <div className={`ph-col-12`} style={{ height: height, ...style }} />
          </div>
        </div>
      </div>
    </PlaceholderItemStyles>
  );
};

export const PlaceholderText = (): JSX.Element => (
  <PlaceholderItemStyles>
    <div className="ph-item" style={{ height: 'auto', border: 'none' }}>
      <div className="ph-col-12">
        <div className="ph-row">
          <div
            className="ph-col-10"
            style={{ height: '1rem', marginBottom: '0.5rem' }}
          />
          <div
            className="ph-col-12"
            style={{ height: '1rem', marginBottom: '0.5rem' }}
          />
          <div
            className="ph-col-6"
            style={{ height: '1rem', marginBottom: '0.5rem' }}
          />
        </div>
        <div className="ph-row" style={{ width: '100%' }}>
          <div
            className="ph-col-12 empty"
            style={{ height: '2rem', marginBottom: '0.5rem' }}
          />
        </div>
        <PlaceholderLine
          big
          style={{ height: '1.5rem', marginBottom: '0.5rem', maxWidth: '90%' }}
        />
        <div className="ph-row" style={{ width: '100%' }}>
          <div
            className="ph-col-12 empty"
            style={{ height: '0.5rem', marginBottom: '0' }}
          />
        </div>
        <div className="ph-row">
          <div
            className="ph-col-8"
            style={{ height: '1rem', marginBottom: '0.5rem' }}
          />
          <div
            className="ph-col-10"
            style={{ height: '1rem', marginBottom: '0.5rem' }}
          />
          <div
            className="ph-col-12"
            style={{ height: '1rem', marginBottom: '0.5rem' }}
          />
          <div
            className="ph-col-8"
            style={{ height: '1rem', marginBottom: '0.5rem' }}
          />
          <div
            className="ph-col-10"
            style={{ height: '1rem', marginBottom: '0.5rem' }}
          />
          <div
            className="ph-col-4"
            style={{ height: '1rem', marginBottom: '0.5rem' }}
          />
        </div>
      </div>
    </div>
  </PlaceholderItemStyles>
);

export const PlaceholderImage = (props: PlaceholderProps): JSX.Element => {
  const { style } = props;

  return (
    <PlaceholderItemStyles>
      <div className="ph-item">
        <div className="ph-col-12">
          <div className="ph-row">
            <div className='ph-picture' style={{ ...style }} />
          </div>
        </div>
      </div>
    </PlaceholderItemStyles>
  );
};
