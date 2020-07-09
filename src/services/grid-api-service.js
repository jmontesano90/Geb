import TokenService from './token-service';
import config from '../config';

const GridApiService = {
  stringifyData(data){

  },
  getAllGrids(userId) {
    return fetch(`${config.API_ENDPOINT}/grids/user/${userId}`, {
      headers: { authorization: `basic ${TokenService.getAuthToken()}` },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postGrid(
    templateId,
    userId,
    x,
    y,
    partial_transect_length,
    x_partial,
    y_partial,
    direction
  ) {
    return fetch(`${config.API_ENDPOINT}/grids`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `basic ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        template_id: templateId,
        user_id: userId,
        x,
        y,
        partial_transect_length,
        x_partial,
        y_partial,
        direction,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getGrid(gridId) {
    return fetch(`${config.API_ENDPOINT}/grids/${gridId}`, {
      headers: { authorization: `basic ${TokenService.getAuthToken()}` },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default GridApiService;
