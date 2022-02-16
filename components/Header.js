import styled from 'styled-components';

const HeaderStyles = styled.header`
  width: 100%;
  padding: 15px 0;
  border-bottom: 10px solid var(--heading-color);
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="container">
        <h1>My Pokemon App</h1>
      </div>
    </HeaderStyles>
  );
}
