import TokenService from './token-service';
import config from '../config';

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
  postGrid(templateId, x, y, partial_transect_length, x_partial, y_partial) {
    return fetch(`${config.API_ENDPOINT}/grids`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `basic ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        template_id: templateId,
        x,
        y,
        partial_transect_length,
        x_partial,
        y_partial,
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

export default TemplateApiService;
