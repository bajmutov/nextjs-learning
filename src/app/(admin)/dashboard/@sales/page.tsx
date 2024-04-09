import React from 'react';
import { getSummarySales } from '@/lib/api';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableHeader from '@/app/components/summary-table-header';
import SummaryTableCell from '@/app/components/summary-table-cell';
import DashboardCard from '@/app/components/dashboard-card';
import MagicButton from '@/app/components/magic-button';

export interface PageProps {}

export interface getSummarySalesProps {
  companyId: number;
  companyTitle: string;
  sold: number;
  income: number;
}

export default async function Page({}: PageProps) {
  const data: any = await new Promise(res => {
    setTimeout(() => {
      res(getSummarySales());
    }, 3000);
  });

  return (
    <DashboardCard
      label={
        <>
          Sales details
          <MagicButton />
        </>
      }
    >
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(
          ({ companyId, companyTitle, sold, income }: getSummarySalesProps) => (
            <tr key={companyId}>
              <SummaryTableCell>{companyTitle}</SummaryTableCell>
              <SummaryTableCell align="center">{sold}</SummaryTableCell>
              <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
            </tr>
          )
        )}
      </SummaryTable>
    </DashboardCard>
  );
}