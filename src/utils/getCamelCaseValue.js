import { getInstagramId } from "./getInstagramId";

export const getCamelCaseValue = (data) => {
  if (Array.isArray(data)) {
    return data.map((object) => getCamelCaseValue(object));
  } else if (data !== null && typeof data === "object") {
    return Object.keys(data).reduce((resultData, field) => {
      let camelField = field.replace(/_([a-z])/g, (_, backWord) =>
        backWord.toUpperCase()
      );

      let value = getCamelCaseValue(data[field]);

      if (camelField === "instaUrl") {
        camelField = "instagramId";
        value = getInstagramId(value);
      }

      resultData[camelField] = value;
      return resultData;
    }, {});
  }
  return data;
};
