export const defaultSortList = (data) =>
  data.sort((item1, item2) => {
    if (item1.priority < item2.priority) return -1;
    if (item1.priority > item2.priority) return 1;

    if (item1.name > item2.name) return 1;
    if (item1.name < item2.name) return -1;
  });

export const filterListByStatus = (data, status) => {
  switch (status) {
    case "have":
      return data.filter((item) => item.completed);
    case "ran-out":
      return data.filter((item) => !item.completed);
    default:
      return data;
  }
};

export const getItemById = (data, id) => data.find((item) => item.id == id);
