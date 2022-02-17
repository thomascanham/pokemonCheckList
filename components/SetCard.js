import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

const SetCardStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  img {
    max-width: 100%;
    cursor: pointer;
  }
`;

// TODO
// Would like to get this using next image component, But i cant seem to get it working right now

export default function SetCard({ image, name, id }) {
  return (
    <SetCardStyles>
      <Link href={`/set/${id}`} passHref>
        <img src={image} alt={name} />
      </Link>
    </SetCardStyles>
  );
}

SetCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
