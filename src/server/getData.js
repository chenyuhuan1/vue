import fecth from '../config/fetch.js'

export const cityGuess = () => fetch('/v1/cities', {
	type: 'guess'
});

export const hotcity = () => fecth('/v1/cities', {
  type: 'hot'
});

export const allcity = () => fetch('/v1/cities', {
	type: 'group'
});
