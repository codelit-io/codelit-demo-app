/**
 * 🚧 Still Work in Progress 🚧
 * Dialog shell with state to handle open and closing the Dialog
 * It takes an input of a component and renders it inside the Dialog
 *
 * @param {<Component handleDialogState={(isOpen) => setIsOpenState(isOpen)} />}
 * @return {<Dialog></Dialog>}
 */

import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import PostAddIcon from '@material-ui/icons/PostAdd';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';

const MoFormDialog = ({ Component }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [isOpenState, setIsOpenState] = useState(false);
  return (
    <>
      <Button
        aria-label="New Course"
        aria-haspopup="true"
        startIcon={<PostAddIcon />}
        onClick={() => setIsOpenState(true)}>
        New Course
      </Button>
      <Dialog
        aria-labelledby="form-dialog"
        fullScreen={fullScreen}
        open={isOpenState}
        onClose={() => setIsOpenState(false)}>
        {Component && (
          <Component handleDialogState={isOpen => setIsOpenState(isOpen)} />
        )}
      </Dialog>
    </>
  );
};

export default MoFormDialog;
