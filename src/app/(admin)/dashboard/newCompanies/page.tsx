// import MagicButton from '@/app/components/magic-button';
import React from 'react';
import Header from '@/app/components/header';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard / New Companies</Header>
      <p>Some additional info about company</p>
    </>
  );
}
