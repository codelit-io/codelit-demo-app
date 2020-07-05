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

import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './components/shared/Firebase';
import { retry } from 'utils/retryLazyImports';
import MoSpinner from 'components/library/MoSpinner';

const App = lazy(() => retry(() => import('./App')));

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Suspense fallback={<MoSpinner isLoading={true} color="primary" />}>
      <App />
    </Suspense>
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
