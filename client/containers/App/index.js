import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AccessMap from 'containers/AccessMap';
import AnalyticsBar from 'containers/AnalyticsBar';
import AppDrawer from 'containers/AppDrawer';
import FeatureCard from 'containers/FeatureCard';
import FloatingButtons from 'containers/FloatingButtons';
import LinkOverlay from 'containers/LinkOverlay';
import Login from 'containers/Login';
import MapInfoButton from 'containers/MapInfoButton';
import MapOverlay from 'containers/MapOverlay';
import OmniCard from 'containers/OmniCard';
import RouteBottomCard from 'containers/RouteBottomCard';
import RouteBottomSheet from 'containers/RouteBottomSheet';
import SettingsCard from 'containers/SettingsCard';
import Toast from 'containers/Toast';

import * as AppActions from 'actions';


class App extends PureComponent {
  componentDidMount = () => {
    this.props.actions.loadApp();
    window.addEventListener('resize', this.props.actions.resizeWindow);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.props.actions.resizeWindow);
  };

  render = () => (
    <React.Fragment>
      <Toast />
      <AnalyticsBar />
      <MapOverlay>
        <OmniCard />
        <Login />
        <SettingsCard />
        <MapInfoButton />
        <FloatingButtons />
        <LinkOverlay />
        <RouteBottomCard />
        <FeatureCard />
      </MapOverlay>
      <AccessMap />
      <RouteBottomSheet />
      <AppDrawer />
    </React.Fragment>
  );
}

App.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
