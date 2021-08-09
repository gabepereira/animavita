import styled from 'styled-components';

export const TrendinSectionWrapper = styled.section`
  background-color: #303030;
`;

export const OtherTrendingsWrapper = styled.div`
  padding: 24px 12px;

  .title {
    text-align: center;
    color: white;
  }
`;

export const TrendingList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 24px auto auto;

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
