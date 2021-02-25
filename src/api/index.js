import config from '../configs';
import queryString from 'query-string';

/**
 * 
 * @param {object} [options]
 * @param {number} [options.page]
 * @param {number} [option.results]
 * @param {string} [options.format]
 * @returns {Promise<*>}
 */

export const getUsers = (options = {}) => {
  const defaultOptions = {
    page: 1,
    format: 'json',
    results: config.DEFAULT_AMOUNT,
    seed: config.API_KEY,
    inc: config.DEFAULT_USER,
  };
  
  const finalOptions = {
    ...defaultOptions,
    ...options,
  };

  const query = queryString.stringify(finalOptions, {arrayFormat: 'comma' });

  return fetch(`${config.BASE_URL}/?${query}`).then(res => res.json());
}