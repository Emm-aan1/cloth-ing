import styled from 'styled-components';

const sizes = {
  mobile: '600px',
  tablet: '1000px',
};

const device = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
}

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;


  @media ${device.tablet}{
    flex-direction: column-reverse;
    width: 80vw;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
`;
