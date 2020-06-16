import TokenService from '../services/token-service';
import config from '../config';

const OutlineApiService = {
  getOutline(outlineId) {
    return fetch(`${config.API_ENDPOINT}/outlines/${outlineId}`, {
      headers: { authorization: `basic ${TokenService.getAuthToken()}` },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getOutlineGrids(outlineId) {
    return fetch(`${config.API_ENDPOINT}/outlines/${outlineId}/grids`, {
      headers: { authorization: `basic ${TokenService.getAuthToken()}` },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postGrid(outlineId, text) {
    return fetch(`${config.API_ENDPOINT}/grids`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `basic ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        outline_id: outlineId,
        text,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default OutlineApiService;
