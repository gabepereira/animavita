/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Typography } from '@material-ui/core';
import parse from 'html-react-parser';
import { InfoPanel } from 'components/Home/TrendingHero/styles';
import { ResultCardWrapper } from './styles';

export interface ResultItemProps {
  id?: string;
  image: string;
  title: string;
  description?: string;
  otherNames?: string[];
  style?: React.CSSProperties;
}

const DESCRIPTION_CHAR_LIMIT = 100;

const ResultCard: React.FC<ResultItemProps> = ({
  image,
  title,
  description,
  otherNames,
  ...props
}) => {
  const formatedDescription = description?.substring(0, DESCRIPTION_CHAR_LIMIT);

  return (
    <ResultCardWrapper {...props}>
      <img src={image} alt="Tiny Image" />

      <InfoPanel style={{ margin: 0 }}>
        <Typography style={{ fontWeight: 'bold' }} component="h5" variant="h5">
          {title}
        </Typography>

        <Typography variant="h5">
          {parse(`${formatedDescription}...`)}
        </Typography>

        {!!otherNames?.length && (
          <Typography component="h5" variant="h5">
            <span style={{ fontWeight: 'bold' }}>Other names: </span>
            {otherNames.join(', ')}
          </Typography>
        )}
      </InfoPanel>
    </ResultCardWrapper>
  );
};

export default ResultCard;
