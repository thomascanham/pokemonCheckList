import PropTypes from 'prop-types';
import styled from 'styled-components';

const SingleCardStyles = styled.div`
  img {
    max-width: 100%;
  }
`;

export default function SingleCard({ image, name }) {
  return (
    <SingleCardStyles>
      <img src={image} alt={name} />
    </SingleCardStyles>
  );
}

SingleCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
