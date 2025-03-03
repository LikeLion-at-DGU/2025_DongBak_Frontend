export const getInstagramId = (url) => {
  const regex = /instagram\.com\/([^/?]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};
