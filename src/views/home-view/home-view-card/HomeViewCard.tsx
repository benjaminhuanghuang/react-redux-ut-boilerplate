import { Card, H5, Icon, IconName } from '@blueprintjs/core';
import classNames from 'classnames';
import React, { ReactNode } from 'react';

import './HomeViewCard.scss';

export interface HomeViewCardProps {
  className: string;
  onClick?: () => void;
  href?: string;
  icon: IconName;
  title: string;
  loading: boolean;
  error: string | undefined;
  children?: ReactNode;
}

export const HomeViewCard = React.memo(function HomeViewCard(props: HomeViewCardProps) {
  const { className, onClick, href, icon, title, loading, error, children } = props;

  return (
    <a
      className={classNames('home-view-card', className)}
      onClick={onClick}
      href={href}
      target={href && href[0] === '/' ? '_blank' : undefined}
    >
      <Card interactive>
        <H5>
          <Icon color="#bfccd5" icon={icon} />
          &nbsp;{title}
        </H5>
        {loading ? <p>Loading...</p> : error ? `Error: ${error}` : children}
      </Card>
    </a>
  );
});