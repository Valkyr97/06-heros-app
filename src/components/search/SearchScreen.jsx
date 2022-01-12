import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import queryString from 'query-string';

import { getHerosByName } from '../../helpers/getHerosByName';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const { handleInputChange, reset, searchText } = useForm({
    searchText: q,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  const heros = useMemo(() => getHerosByName(q), [q]);

  return (
    <>
      <h1>Search Results</h1>
      <hr />

      <div className='row'>
        <div className='col-5'>
          <h4>Search</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Search a Hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}
            />

            <button
              type='submit'
              className='btn btn-outline-primary mt-1'
            >
              Search...
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          {q === '' ? (
            <div className='alert alert-info'>Search a Hero</div>
          ) : (
            heros.length === 0 && (
              <div className='alert alert-danger'>
                There is no coincidences
              </div>
            )
          )}

          {heros.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
