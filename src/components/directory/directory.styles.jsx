import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 600px){
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;
