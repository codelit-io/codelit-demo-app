/**
 *
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Index.js 🥇
 *
 *
 * Entry component to the app and provides the App component with Firebase class instance
 */

import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import * as Sentry from "@sentry/browser";

import Firebase, { FirebaseContext } from "./components/shared/Firebase";
import MoSpinner from "components/library/MoSpinner";

// Global state for theme options

const App = lazy(() => import("./App"));
const Theme = lazy(() => import("App/Theme"));

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Suspense fallback={<MoSpinner isLoading={true} color="primary" />}>
      <Theme>
        <App />
      </Theme>
    </Suspense>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: "https://2cb4b0fa634941a69b5bdd868a07a024@sentry.io/1878459"
  });
}

serviceWorker.unregister();
