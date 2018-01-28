export const rootPath = location.protocol + '//' + location.host;

export const paths = {
  images: `${rootPath}/assets/img`
};

export const localStorage = {
  idToken: "id_token",
  accessToken: "access_token"
};

export const logos = {
  colour: `${paths.images}/logos/colour.png`,
  blue: `${paths.images}/logos/blue.png`,
  light: `${paths.images}/logos/light.png`
};

export const company = {
  name: "MoxyOne",
  coin: {
    code: "SPEND",
    name: "Spend"
  }
};

export const auth0 = {
  domain: 'moxy.auth0.com',
  client: 'CS5fNg6OQOaQ534JoICCljmijyLpf680',
  connection: 'moxy'
};

export const httpStatus = {
  notFound: 404,
  forbidden: 403,
  unauthorized: 401,
  badRequest: 400
};

export const colours = {
  primary: "#1565C0",
  success: "#0da11d",
  info: "#0da195",
  warning: "#a1750d",
  danger: "#a10d0d"
};
