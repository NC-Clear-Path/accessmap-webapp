import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AppActions from 'actions';

import Button from 'react-md/lib/Buttons';
import Card, { CardActions, CardText } from 'react-md/lib/Cards';

const AnalyticsDialog = (props) => {
  const {
    actions,
    analytics,
  } = props;

  if (analytics !== null) {
    return null;
  }

  return (
    <div className='analytics-dialog-container'>
      <Card>
        <CardText>
          {'AccessMap uses your anonymized behavior for research and site improvemens.'}
        </CardText>
        <CardActions>
          <Button
            flat
            primary
            onClick={actions.enableAnalytics}
          >
            {'Yes, this is fine'}
          </Button>
          <Button
            flat
            secondary
            onClick={actions.disableAnalytics}
          >
            {'No, don\'t do that'}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

AnalyticsDialog.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  analytics: PropTypes.bool,
};

AnalyticsDialog.defaultProps = {
  analytics: null,
};

const mapStateToProps = state => ({
  analytics: state.analytics,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AnalyticsDialog);