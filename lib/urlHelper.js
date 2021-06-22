const createCustomUrl = ({ key, Location }) => {
  const cdnUrl = process.env.CDN_URL;

  if (cdnUrl !== undefined) {
    const customUrl = cdnUrl + (cdnUrl.slice(-1) !== '/' && '/') + key;
    return customUrl;
  }

  return Location;
};

module.exports = createCustomUrl;