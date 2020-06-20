import React, { useState } from "react";

import * as ROUTES from "constants/routes";
import AddIcon from "@material-ui/icons/Add";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PeopleIcon from "@material-ui/icons/People";
import { Fade } from "@material-ui/core";

const AdminNav = ({ courses, history }) => {
  const [value, setValue] = useState(history.location.pathname);

  return (
    <Fade in={courses.data.length > 1} timeout={{ enter: 800 }}>
      <BottomNavigation
        value={value}
        style={{ height: "72px" }}
        onChange={(event, newValue) => {
          setValue(newValue);
          history.push(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          label="Users"
          value={ROUTES.ADMIN_USERS.path}
          icon={<PeopleIcon />}
        />
        {courses.data.map((course, i) => (
          <BottomNavigationAction
            key={i}
            label={course.title}
            value={`${ROUTES.ADMIN_COLLECTIONS.path}/${course.doc}`}
            icon={<AddIcon />}
          />
        ))}
      </BottomNavigation>
    </Fade>
  );
};

export default AdminNav;
