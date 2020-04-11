const styles = theme => ({
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  adminAvatar: {
    border: `2px solid ${theme.blue.medium}`,
    overflow: "visible"
  },
  authorAvatar: {
    border: `2px solid ${theme.green.light}`,
    overflow: "visible"
  },
  menu: {
    boxShadow: theme.bigShadow
  }
});

export default styles;
