import Router from 'next/router';
import { useEffect } from 'react';
import { useUser } from '../components/User';

export default function CollectionPage() {
  const user = useUser();

  useEffect(() => {
    if (!user) {
      Router.push({ pathname: '/signin' });
    }
  });

  return (
    <div className="container">
      {!user && <p>Please sign in to see your collection</p>}

      {user && (
        <p>
          Welcome {user.firstName} {user.surName}
        </p>
      )}

      {user?.sets ? '' : <p>You don't have any cards in your collection</p>}
    </div>
  );
}
