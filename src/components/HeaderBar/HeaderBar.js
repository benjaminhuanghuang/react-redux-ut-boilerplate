import React, { useState } from 'react';
//
import {
  Alignment,
  AnchorButton,
  Button,
  Intent,
  Menu,
  MenuItem,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  Popover,
  Position,
} from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
// 
import logo from '../../logo.svg';
//
import { AboutDialog } from '../../dialogs/AboutDialog';
import {
  COMMUNITY,
  DEVELOPER_GROUP,
  USER_GROUP,
  WEBSITE,
} from '../../variables';
//
import './HeaderBar.scss';

const HeaderBar = React.memo(function HeaderBar(props) {
  const { active, capabilities } = props;
  const [aboutDialogOpen, setAboutDialogOpen] = useState(false);
  const [doctorDialogOpen, setDoctorDialogOpen] = useState(false);
  const [coordinatorDynamicConfigDialogOpen, setCoordinatorDynamicConfigDialogOpen] = useState(
    false,
  );
  const [overlordDynamicConfigDialogOpen, setOverlordDynamicConfigDialogOpen] = useState(false);
  const loadDataPrimary = false;

  const configMenu = (
    <Menu>
      <MenuItem
        icon={IconNames.PULSE}
        text="Druid Doctor"
        onClick={() => setDoctorDialogOpen(true)}
        disabled={false} //{!capabilities.hasEverything()}
      />
      <MenuItem
        icon={IconNames.SETTINGS}
        text="Coordinator dynamic config"
        onClick={() => setCoordinatorDynamicConfigDialogOpen(true)}
        disabled={false} //{!capabilities.hasCoordinatorAccess()}
      />
      <MenuItem
        icon={IconNames.WRENCH}
        text="Overlord dynamic config"
        onClick={() => setOverlordDynamicConfigDialogOpen(true)}
        disabled={false} //{!capabilities.hasOverlordAccess()}
      />
      <MenuItem
        icon={IconNames.PROPERTIES}
        active={active === 'lookups'}
        text="Lookups"
        href="#lookups"
        disabled={false} //{!capabilities.hasCoordinatorAccess()}
      />
    </Menu>
  );

  const helpMenu = (
    <Menu>
      <MenuItem icon={IconNames.GRAPH} text="About" onClick={() => setAboutDialogOpen(true)} />
      <MenuItem icon={IconNames.TH} text="Docs" href={USER_GROUP} target="_blank" />
      <MenuItem icon={IconNames.USER} text="User group" href={USER_GROUP} target="_blank" />
      <MenuItem icon={IconNames.CHAT} text="ASF Slack channel" href={USER_GROUP} target="_blank"/>
      <MenuItem icon={IconNames.GIT_BRANCH} text="GitHub" href={USER_GROUP} target="_blank" />
    </Menu>
  );

  return (
    <Navbar className="header-bar">
      <NavbarGroup align={Alignment.LEFT}>
        <a href="#"> <img src={logo} className="app-logo"/> </a>
        <NavbarDivider />
        <AnchorButton
          icon={IconNames.USER}
          text="Users"
          active={active === 'users'}
          href="#users"
          minimal={!loadDataPrimary}
          intent={loadDataPrimary ? Intent.PRIMARY : Intent.NONE}
          disabled={false} //{!capabilities.hasEverything()}
        />

        <NavbarDivider />
        <AnchorButton
          minimal
          active={active === 'ingestion'}
          icon={IconNames.GANTT_CHART}
          text="Ingestion"
          href="#ingestion"
          disabled={false} //{!capabilities.hasSqlOrOverlordAccess()}
        />
        <AnchorButton
          minimal
          active={active === 'datasources'}
          icon={IconNames.MULTI_SELECT}
          text="Datasources"
          href="#datasources"
          disabled={false} //{!capabilities.hasSqlOrCoordinatorAccess()}
        />
        <AnchorButton
          minimal
          active={active === 'segments'}
          icon={IconNames.STACKED_CHART}
          text="Segments"
          href="#segments"
          disabled={false} //{!capabilities.hasSqlOrCoordinatorAccess()}
        />
        <AnchorButton
          minimal
          active={active === 'services'}
          icon={IconNames.DATABASE}
          text="Services"
          href="#services"
          disabled={false} //{!capabilities.hasSqlOrCoordinatorAccess()}
        />

        <NavbarDivider />
        <AnchorButton
          minimal
          active={active === 'query'}
          icon={IconNames.APPLICATION}
          text="Query"
          href="#query"
          disabled={false} //{!capabilities.hasQuerying()}
        />
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        {/* <RestrictedMode capabilities={capabilities} /> */}
        <Popover content={configMenu} position={Position.BOTTOM_RIGHT}>
          <Button minimal icon={IconNames.COG} />
        </Popover>
        <Popover content={helpMenu} position={Position.BOTTOM_RIGHT}>
          <Button minimal icon={IconNames.HELP} />
        </Popover>
      </NavbarGroup>
      {aboutDialogOpen && <AboutDialog onClose={() => setAboutDialogOpen(false)} />}
      {/* {doctorDialogOpen && <DoctorDialog onClose={() => setDoctorDialogOpen(false)} />} */}
      {/* {coordinatorDynamicConfigDialogOpen && (
        <CoordinatorDynamicConfigDialog
          onClose={() => setCoordinatorDynamicConfigDialogOpen(false)}
        />
      )}
      {overlordDynamicConfigDialogOpen && (
        <OverlordDynamicConfigDialog onClose={() => setOverlordDynamicConfigDialogOpen(false)} />
      )} */}
    </Navbar>
  );
});


export default HeaderBar;