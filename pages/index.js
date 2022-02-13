/* eslint-disable no-plusplus */
import pokemon from 'pokemontcgsdk';
import moment from 'moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SetCard from '../components/SetCard';

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

export default function Home({ sets }) {
  // order the fetched sets by release date, newest to oldest
  const orderedSets = sets.sort(
    (a, b) => moment(b.releaseDate) - moment(a.releaseDate)
  );

  // if no sets are found we need to let the user know they havent set any
  if (!sets.length) {
    return (
      <div className="container">
        <h1>Welcome [username]</h1>
        <p>You are currently not collecting any sets</p>
      </div>
    );
  }

  // if sets are found, loop over them and displayer them
  return (
    <div className="container">
      <h1>Welcome [usename]</h1>
      <p>Below you can add the sets that you are collecting</p>

      <GridStyles>
        {orderedSets.map((set) => (
          <SetCard
            key={set.id}
            name={set.name}
            image={set.images.logo}
            id={set.id}
          />
        ))}
      </GridStyles>
    </div>
  );
}

export async function getServerSideProps() {
  // Sets are currently static entered in the array below
  // TODO - Fetch saved sets from the logged in user from the backend
  const sets = ['swsh1', 'swsh7', 'swsh3', 'swsh2'];
  const setArray = [];

  // loop over provided set IDs and fetch the required data
  for (let i = 0; i < sets.length; i++) {
    const currentSet = await pokemon.set.where({ q: `id:${sets[i]}` });
    setArray.push(currentSet.data[0]);
  }

  return {
    props: {
      sets: setArray,
    },
  };
}

Home.propTypes = {
  sets: PropTypes.array,
};
