const styles = (theme) => ({
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  adminAvatar: {
    border: `2px solid ${theme.palette.primary.main}`,
    overflow: "visible",
  },
  authorAvatar: {
    border: `2px solid ${theme.green?.medium}`,
    overflow: "visible",
  },
});

export default styles;
