import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../helpers/getHeroById';

export const HeroScreen = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();
  const hero = getHeroById(heroId);

  if (!hero) {
    return <Navigate to='/' />;
  }

  const {
    superhero,
    id,
    alter_ego,
    characters,
    first_appearance,
    publisher,
  } = hero;

  const imgPath = `/assets/${id}.jpg`;

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          src={imgPath}
          alt={superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>

      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush animate__animated animate__fadeIn'>
          <li className='list-group-item'>
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className='list-group-item'>
            <b>First Aooarence: </b>
            {first_appearance}
          </li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{characters}</p>

        <button
          className='btn btn-outline-info'
          onClick={handleReturn}
        >
          Return
        </button>
      </div>
    </div>
  );
};
