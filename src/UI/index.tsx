import { lazy } from "solid-js";
import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';
import { MetaProvider} from '@solidjs/meta';

import '../styles/index.scss';

const Bible = lazy(() => import("./Bible"));
const VersionSelector = lazy(() => import("./VersionSelector"));

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <MetaProvider>
  <Router>
    <Route path={import.meta.env.BASE_URL}>
      <Route path={`:version?/:book?/:chapter?/:verse?/`} component={Bible} />
      <Route path={`:version?/:book?/:chapter?/:verse?/select_version`} component={VersionSelector}/>
    </Route>
  </Router>
  </MetaProvider>
), root!);