import TokenService from './token-service';
import config from '../config';
import { min } from 'date-fns';

const TemplateApiService = {
  getTemplate(templateId) {
    return fetch(`${config.API_ENDPOINT}/templates/${templateId}`, {
      headers: { authorization: `basic ${TokenService.getAuthToken()}` },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getAllTemplates(userId) {
    return fetch(`${config.API_ENDPOINT}/templates/${userId}`, {
      headers: { authorization: `basic ${TokenService.getAuthToken()}` },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getTemplateGrids(templateId) {
    return fetch(`${config.API_ENDPOINT}/templates/${templateId}/grids`, {
      headers: { authorization: `basic ${TokenService.getAuthToken()}` },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postTemplate(
    minimum,
    name,
    partial_transect_count,
    partial_transect_length,
    transect_count,
    user_id,
    x,
    y
  ) {
    return fetch(`${config.API_ENDPOINT}/templates/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `basic ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        minimum: minimum,
        name: name,
        partial_transect_count: partial_transect_count,
        partial_transect_length: partial_transect_length,
        transect_count: transect_count,
        user_id: user_id,
        x: x,
        y: y,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      );
  },
};

export default TemplateApiService;
