import moment from "moment";

//! Date util
export const formatDate = (date, format) => {
  return moment(date).format(format || "DD/MM/YYYY");
};
