import Link from 'next/link';
import { useUser } from './User';
import NavStyles from '../styles/NavStyles';
import SignOut from './Signout';

export default function Nav() {
  const user = useUser();

  return (
    <NavStyles>
      {user && (
        <>
          <Link href="/collection">My Collection</Link>
          <SignOut />
        </>
      )}

      {!user && <Link href="/signin">Sign In</Link>}
    </NavStyles>
  );
}
