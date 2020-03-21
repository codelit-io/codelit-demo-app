const styles = theme => ({
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  adminAvatar: {
    border: `2px solid ${theme.blue.medium}`,
    overflow: "visible"
  },
  menu: {
     boxShadow: theme.bigShadow
  }
});

export default styles;
