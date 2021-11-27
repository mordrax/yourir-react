import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { Masthead } from './Masthead';
import { Features } from './Features';
import { MyInvestorRelations } from './YourIR';
import { PageWrapper } from 'app/components/PageWrapper';
import { OldInvestor } from './YourIR/oldIndex';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="descriptio"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <Masthead />
        <OldInvestor />
        <MyInvestorRelations />
        <Features />
      </PageWrapper>
    </>
  );
}
