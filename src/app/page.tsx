// import StatusLabel, { Status } from './components/status-label';
import AddCompanyButton from '@/app/components/add-company-button';
import MagicButton from './components/magic-button';

export default function Home() {
  return (
    <main>
      <h1 className="text-5xl">Main project Next JS</h1>
      <AddCompanyButton />
      <MagicButton />
      {/* <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */}
    </main>
  );
}
