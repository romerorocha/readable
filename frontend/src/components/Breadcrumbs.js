import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';

const Breadcrumbs = ({ category, post }) => {
  return (
    <Breadcrumb size="big">
      <Breadcrumb.Section content="home" />
      <Breadcrumb.Divider icon="right chevron" />
      <Breadcrumb.Section content={category} active={!post} />
      {post && [
        <Breadcrumb.Divider key="0" icon="right chevron" />,
        <Breadcrumb.Section key="1" content="post" active />
      ]}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
