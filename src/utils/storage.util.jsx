export const getLocal = (item) => {
  const localItem = localStorage.getItem(item);
  return localItem;
};

export const setLocal = (itemName, item) => {
  localStorage.setItem(itemName, item);
};

export const getCookie = (item) => {
  let name = item + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let splitedCookie = decodedCookie.split(";");
  for (let i = 0; i < splitedCookie.length; i++) {
    let cookie = splitedCookie[i];
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
};

export const setCookie = (itemName, item) => {
  document.cookie = `${itemName}=${item}`;
};

export const removeStorage = (item) => {
  localStorage.removeItem(item);
  document.cookie = `${item}=`;
};

export const removeManyStorage = (array) => {
  array.forEach((item) => {
    localStorage.removeItem(item);
    document.cookie = `${item}=`;
  });
};
