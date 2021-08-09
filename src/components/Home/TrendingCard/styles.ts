import styled from 'styled-components';

export const TrendingCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  padding: 12px;

  h4 {
    cursor: pointer;
    text-align: center;
    color: white;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 250px;
  }
`;

export const Poster = styled.img`
  cursor: pointer;
  width: 250px;
  height: 400px;
  margin-bottom: 12px;
  border-radius: 5px;
  object-fit: cover;
`;
