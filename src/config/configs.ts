const configs = {
  port: process.env.PORT,
  dataURL: process.env.LEADERBOARD_DATA_URL,
  userDataURL: process.env.USER_DATA_URL,
  env: process.env.NODE_ENV || "dev",
  corsAllowedOrigin: process.env.CORS_ALLOWED_ORIGIN,
  serverUrl: process.env.SERVER_URL,
  userDataFetchCacheTime: process.env.USER_DATA_FETCH_CACHE_TIME,
  maxSearchResultsCutoff: process.env.MAX_SEARCH_RESULT_CUTOFF,
};

export default configs;
