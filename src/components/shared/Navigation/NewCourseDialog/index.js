/**
 * NewCourseDialog
 *
 * Add course form uses react-hook-form and Material Dialog elements
 * This form shows up in dialogs and it creates new Course
 *
 * @param {Object} authUser - Holds details about the current user
 * @param {Class} firebase - Firebase class provides access to authUser and db
 * @return {<form></form>}
 */

import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import MoFormDialog from "components/library/MoFormDialog";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FormControl, FormLabel, RadioGroup, Radio } from "@material-ui/core";

const NewCourseDialog = ({ authUser, firebase }) => {
  /* TODO: add watch and error
   * const { watch, errors } = useForm();
   */
  const { register, handleSubmit } = useForm();

  const [formData] = useState({
    title: "Master React Course",
    desc:
      "A series of questions to learn advanced courses in react such as React hooks and Context API",
    id: 0,
  });

  const Form = ({ handleDialogState }) => {
    const onSubmit = (formData) => {
      if (formData.title) {
        // Create doc based on title name, doc is lowercase without spaces
        const doc = formData?.title.replace(/\s+/g, "-").toLowerCase();
        const payload = {
          ...formData,
          doc,
          id: 0,
          userId: authUser.uid,
          createdAt: firebase.fieldValue.serverTimestamp(),
        };

        // Create courses in db with doc, then set the payload
        firebase.collection("courses").doc(doc).set(payload, { merge: true });

        // Add a questions array to the collection created above add a placeholder entry
        // TODO: figure a more efficient way to do this with one firebase query
        firebase
          .collection("courses")
          .doc(doc)
          .collection("questions")
          .doc()
          .set({ id: 1 });

        // Set Dialog state back to false to close the Dialog
        handleDialogState(false);
      }
    };
    const handleDialog = () => {
      handleDialogState(false);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <DialogTitle id="form-dialog">New Course</DialogTitle>
        <DialogContent>
          <Grid container spacing={4}>
            <Grid item md={12}>
              <TextField
                label="Title"
                autoFocus
                inputRef={register}
                fullWidth
                margin="dense"
                name="title"
                placeholder={formData.title}
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                label="Subtitle"
                fullWidth
                inputRef={register}
                margin="dense"
                name="subtitle"
                placeholder={formData.desc}
              />
            </Grid>
            <Grid item md={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Difficulty</FormLabel>
                <RadioGroup aria-label="difficulty" name="difficulty">
                  <FormControlLabel
                    inputRef={register}
                    value="easy"
                    control={<Radio />}
                    label="Easy"
                  />
                  <FormControlLabel
                    inputRef={register}
                    value="medium"
                    control={<Radio />}
                    label="Medium"
                  />
                  <FormControlLabel
                    inputRef={register}
                    value="hard"
                    control={<Radio />}
                    label="Hard"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item md={12}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                inputRef={register}
                label="Disable a course"
                name="isDisabled"
              />
              <FormHelperText>
                Disabling a course disables the course from being accessed
              </FormHelperText>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDialog()} color="default">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Create
          </Button>
        </DialogActions>
      </form>
    );
  };

  return <MoFormDialog Component={Form} />;
};

export default NewCourseDialog;
