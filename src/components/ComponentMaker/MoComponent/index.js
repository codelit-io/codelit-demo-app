import React, { Suspense } from "react";
import Components from "../Components";
import Spinner from "../../shared/Spinner";

/*  MoComponent is awesome because
 *	Just feed it props.element with
 *	a component name like "button" or
 *	"input". These are defined in Components
 */

const MoComponent = props => {
  const Component = Components[props.element];
  return (
    <Suspense fallback={<Spinner loading={true} color="primary" />}>
      <Component>{props.element}</Component>
    </Suspense>
  );
};

export default MoComponent;
