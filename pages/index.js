/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-plusplus */
import pokemon from 'pokemontcgsdk';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import moment from 'moment';
import { useUser } from '../components/User';
import Alert from '../components/Alert';
import SetCard from '../components/SetCard';

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  transition: 0.3s;
  padding: 60px 0;
`;

export default function HomePage({ sets }) {
  const user = useUser();

  console.log(sets);

  const orderedSets = sets.sort(
    (a, b) => moment(b.releaseDate) - moment(a.releaseDate)
  );

  return (
    <div className="container" style={{ padding: '60px 0' }}>
      {!user && (
        <Alert type="primary">
          <Link href="/signin">Sign In</Link> to see your saved collection
        </Alert>
      )}

      <GridStyles>
        {orderedSets.map((set) => (
          <SetCard
            key={set.id}
            image={set.images.logo}
            name={set.name}
            id={set.id}
          />
        ))}
      </GridStyles>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      sets: await pokemon.set.all(),
    },
  };
}

HomePage.propTypes = {
  sets: PropTypes.array,
};
