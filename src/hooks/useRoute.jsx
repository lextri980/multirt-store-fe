import { useLocation } from "react-router";

//@ http://localhost:3000/user-list/user/:id?name=a&age=1
//? Path name:  /user-list/user    (use useParams() to take params)
//? Params:     /:id               (use useParams() to take params)
//? Query:      ?name=a&age=1

//! Using for get path name in URL
export function useRoute() {
  const location = useLocation();
  const pathname = location.pathname;
  const query = location.search;
  return {
    pathname,
    query,
  };
}

//! Using for add params in URL
export function useCreateQuery(props) {
  //* Props type: Object
  const params = new URLSearchParams(props).toString();
  const query = `?${params}`;
  return query;
}

//! Using for get query in URL
export function useQuery() {
  const location = useLocation();
  if (location.search) {
    const removeMark = location.search.split("?")[1].split("&");
    const query = removeMark.reduce((obj, str) => {
      let strParts = str.split("=");
      if (strParts[0] && strParts[1]) {
        obj[strParts[0].replace(/\s+/g, "")] = strParts[1].trim();
      }
      return obj;
    }, {});
    return query;
  } else {
    return {};
  }
}
