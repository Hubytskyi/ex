import React from 'react';
import { Layout } from '@layout';
import Divider from '@components/Divider';
import Seo from '@widgets/Seo';
import HowItWork from '@elegantstack/gatsby-starter-flexiblog-agency/src/components/HowItWorks';

const PageContact = props => (
  <Layout {...props}>
    <Seo title="Rewy"/>
    <Divider/>
    <HowItWork />
  </Layout>
);

export default PageContact;
