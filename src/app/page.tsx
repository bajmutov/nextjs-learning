import Sidebar from './components/sidebar';

export default function Home() {
  return (
    <main>
      <Sidebar />
      <h1 className="text-center text-5xl py-10 bg-gray-100">
        Home page Next JS
      </h1>
      {/* <AddCompanyButton />
      <MagicButton /> */}
      {/* <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */}
    </main>
  );
}
