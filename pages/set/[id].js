import pokemon from 'pokemontcgsdk';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SingleCard from '../../components/SingleCard';

const CardsGrid = styled.div`
  position: relative;
  max-width: 100%;
  margin: 60px auto 60px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 2rem;
  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 2fr));
  }
`;

export default function SetPage({ cards, set }) {
  const orderedCards = cards.data.sort((a, b) => a.number - b.number);
  return (
    <div className="container">
      <h1>{set.name}</h1>

      <CardsGrid>
        {orderedCards.map((card) => (
          <SingleCard
            key={card.id}
            name={card.name}
            image={card.images.large}
          />
        ))}
      </CardsGrid>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const currentSet = await pokemon.set.where({ q: `id:${query.id}` });
  return {
    props: {
      cards: await pokemon.card.where({ q: `set.id:${query.id}` }),
      set: currentSet.data[0],
    },
  };
}

SetPage.propTypes = {
  cards: PropTypes.object.isRequired,
  set: PropTypes.object.isRequired,
};
