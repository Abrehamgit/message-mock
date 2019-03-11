import styled from 'styled-components';

export const Centered = styled.div`
  padding-top: 1rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Inner = styled.div`
  max-width: 1099px;
  padding-left: 95px;
  padding-right: 104px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 300px 570px;

  @media (max-width: 815px) {
    display: flex;
    flex-direction: column;
    padding-right: 10px;
    padding-left: 10px;
  }
`;
