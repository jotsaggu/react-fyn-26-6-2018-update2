import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { Index } from './containers';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';
import registerServiceWorker from './registerServiceWorker';
import DevTools from './containers/DevTools';

// FIXME: remove this on production 
const enhancer = compose(
  DevTools.instrument()
);

const store = createStore(
  reducers,
  // FIXME: remove this on production 
  enhancer,
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Index />
        {/* FIXME: remove this on production  */}
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
