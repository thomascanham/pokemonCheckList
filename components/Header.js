import styled from 'styled-components';
import Link from 'next/link';

const HeaderStyles = styled.header`
  width: 100%;
  padding: 15px 0;
  border-bottom: 10px solid var(--heading-color);
  h1:hover {
    cursor: pointer;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="container">
        <Link href="/">
          <h1>Pokemon App</h1>
        </Link>
      </div>
    </HeaderStyles>
  );
}
