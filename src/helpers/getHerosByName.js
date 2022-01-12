import { heroes } from '../data/heros';

export const getHerosByName = (name) => {
  if (!name) return [];

  return heroes.filter((h) =>
    h.superhero.toLowerCase().includes(name.toLowerCase())
  );
};
