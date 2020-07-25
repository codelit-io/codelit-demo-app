const calculateProgress = (itemsCount, points) => {
  return itemsCount && points
    ? `${Math.round((points / itemsCount) * 100)}% Complete`
    : "0% Complete";
};

export default calculateProgress;
