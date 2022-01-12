import { heroes } from '../data/heros';

export const getHeroById = (id = '') => {
  return heroes.find((h) => h.id === id);
};
