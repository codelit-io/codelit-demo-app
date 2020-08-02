/**
 * Collections is a container that fetches firebase data using hooks and renders a list of all collections
 * @param {Object} authUser - Passed from parent container and has everything about the logged in user
 * @param {Object} collection - Passed from parent with a title and a path of the collection
 * @param {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @returns {<CoursePage/>} - returns CoursePage component which contains the rest of the components
 */

import React, { useState, useCallback } from "react";

import { useForm } from "react-hook-form";
import { createCourse } from "helpers/collectionFirebase";
import { COURSES } from "constants/i18n";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import Footer from "components/shared/Footer";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import MoPage from "components/library/MoPage";

const CoursesForm = ({
  authUser,
  collectionDetails,
  firebase,
  isAdmin,
  match,
  history,
  newItem
}) => {
  const { register, handleSubmit } = useForm();

  const [formData] = useState({
    title: "Master React Course",
    desc: "Learn React best practices",
    id: 0
  });

  const navtoCourse = useCallback(
    doc => {
      history.push(`/courses/${doc}`);
    },
    [history]
  );

  const onSubmit = async formData => {
    if (formData.title) {
      // Create courses and return it's doc
      const doc = await createCourse(authUser, formData, firebase, match);

      await navtoCourse(doc);
    }
  };

  return (
    <MoPage title={collectionDetails?.title}>
      {/* {history.location.pathname === ROUTES.ADMIN_COURSES.path && */}
      {/* userRole.isAdmin && ( */}
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Grid container spacing={4} alignItems="center">
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
          <Grid item md={6}>
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
          <Grid item md={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Type</FormLabel>
              <RadioGroup aria-label="type" name="type">
                <FormControlLabel
                  inputRef={register}
                  value="html"
                  control={<Radio />}
                  label="Html"
                />
                <FormControlLabel
                  inputRef={register}
                  value="js"
                  control={<Radio />}
                  label="JavaScript"
                />
                <FormControlLabel
                  inputRef={register}
                  value="reactJsx"
                  control={<Radio />}
                  label="React"
                />
                <FormControlLabel
                  inputRef={register}
                  value="reactStyle"
                  control={<Radio />}
                  label="CSS in JS"
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
              defaultValue={false}
            />
            <FormHelperText>
              Disabling a course disables the course from being accessed
            </FormHelperText>
          </Grid>
        </Grid>
        <DialogActions>
          <Button type="submit" color="primary" variant="contained">
            {COURSES.CREATE_COURSE}
          </Button>
        </DialogActions>
      </form>
      {/* )} */}
      <Footer />
    </MoPage>
  );
};

export default CoursesForm;
