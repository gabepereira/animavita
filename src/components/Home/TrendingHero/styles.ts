import styled from 'styled-components';

export const TrendingHeroWrapper = styled.div`
  position: relative;
`;

export const Cover = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

export const InfoBackdrop = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;

  background: linear-gradient(45deg, black, transparent);
`;

export const InfoPanel = styled.div`
  cursor: default;
  display: flex;
  flex-direction: column;
  margin: auto 0 24px 24px;

  color: white;

  .trending {
    display: flex;
    align-items: center;
  }

  .trending-indicator {
    padding: 4px;
    font-size: 12px;
    font-weight: 500;
    background-color: white;
    color: red;
    border-radius: 4px;
    margin-right: 4px;
  }

  .description {
    width: 500px;
    margin-bottom: 24px;
  }

  button {
    width: 250px;
    font-size: 12px;
  }
`;
