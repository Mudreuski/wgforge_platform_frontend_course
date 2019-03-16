import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Redbox from 'redbox-react';
import { AppContainer } from 'react-hot-loader';

import Presentation from 'CurrentPresentation/presentation';

const CustomErrorReporter = ({ error }) => <Redbox error={error} />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
};

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <Presentation />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('CurrentPresentation/presentation', () => {
    const NextPresentation = require('CurrentPresentation/presentation').default;

    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <NextPresentation />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
