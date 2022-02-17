import styled from 'styled-components';
import Link from 'next/link';
import { MdCatchingPokemon } from 'react-icons/md';

const HeaderStyles = styled.header`
  width: 100%;
  padding: 30px 0;
  box-shadow: var(--box-shadow);
  h1 {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    display: flex;
    align-items: center;
    span {
      display: flex;
      font-size: 2.2rem;
      padding-right: 10px;
      color: red;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="container">
        <Link href="/" passHref>
          <h1>
            <span>
              <MdCatchingPokemon />
            </span>
            Tom's Pokemon App
          </h1>
        </Link>
      </div>
    </HeaderStyles>
  );
}
