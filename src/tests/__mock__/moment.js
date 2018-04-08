const require = require.requireActual("moment");

export default ( timestamp = 0 ) => {
  return moment(timestamp);
}