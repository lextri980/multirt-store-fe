export const getLocal = (item) => {
  const localItem = localStorage.getItem(item);
  console.log('localItem', localItem)
  return localItem;
};

export const setLocal = (itemName, item) => {
  localStorage.setItem(itemName, item);
};

export const removeLocal = (item) => {
  localStorage.removeItem(item);
};

export const removeManyLocal = (array) => {
  array.forEach((item) => {
    localStorage.removeItem(item);
  });
};
