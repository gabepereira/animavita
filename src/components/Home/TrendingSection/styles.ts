import styled from 'styled-components';

export const OtherTrendingsWrapper = styled.div`
  padding: 24px 12px;

  .title {
    text-align: center;
    color: white;
    font-weight: bold;
  }
`;

export const TrendingList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 12px auto auto;

  &.md,
  &.sm {
    justify-content: space-evenly;
  }

  &.md {
    width: 80vw;
  }

  &.xs {
    justify-content: center;
  }
`;
