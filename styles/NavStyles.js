import styled from 'styled-components';

const NavStyles = styled.nav`
  a,
  button {
    font-size: 14px;
    text-decoration: none;
    background: none;
    outline: none;
    border: none;
    color: var(--font-color);
    padding: 16px 14px;

    &:hover {
      color: var(--primary-color);
      cursor: pointer;
    }
  }
`;

export default NavStyles;
