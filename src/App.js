import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import classNames from 'classnames';
import { IconNames } from '@blueprintjs/icons';
import { Intent } from '@blueprintjs/core';
//
import './App.scss';
//
import HeaderBar from "./components/HeaderBar";
import { AppToaster } from './components/singletons/Toaster';

import HomeView from "./views/HomeView";
import UserView from "./views/UserView";

export class App extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
  }

  static shownNotifications() {
    AppToaster.show({
      icon: IconNames.ERROR,
      intent: Intent.DANGER,
      timeout: 120000,
      message: (
        <>
          It appears that the the service serving this console is not responding. The console will
          not function at the moment
        </>
      ),
    });
  }

  wrappedHomeView = () => {
    // const { capabilities } = this.state;
    return this.wrapInViewContainer(
      null, 
      <HomeView />); //capabilities={capabilities} 
  };

  wrappedUserView = () => {
    // const { capabilities } = this.state;
    return this.wrapInViewContainer(
      'users',
      <UserView /> //capabilities={capabilities}
    );
  };

  wrapInViewContainer = (active, el, classType) => {
    // const { capabilities } = this.state;
    return (
      <>
        <HeaderBar active={active} />
        <div className={classNames('view-container', classType)}>{el}</div>
      </>
    );
  }
  
  render() {
    return (
      <HashRouter>
        <div className="app-container">
          <Switch>
            <Route path="/users" component={this.wrappedUserView} />
            <Route component={this.wrappedHomeView} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
