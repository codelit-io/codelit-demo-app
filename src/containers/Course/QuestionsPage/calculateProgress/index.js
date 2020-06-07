const calculateProgress = (authUser, points, itemsCount) => {
  if (!authUser) {
    return false;
  }
  return itemsCount && points
    ? Math.round((points / itemsCount) * 100) + "% Complete"
    : "0% Complete";
};

export default calculateProgress;
