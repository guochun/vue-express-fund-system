
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
module.exports = {
  baseUrl: IS_PRODUCTION ? './' : '/',
  productionSourceMap: !IS_PRODUCTION,
};
