import { heroes } from '../data/heros';

export const getHerosByPublisher = (publisher) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];
  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  return heroes.filter((h) => h.publisher === publisher);
};
