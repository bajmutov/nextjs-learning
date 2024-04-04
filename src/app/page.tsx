import ActiveLabel from './components/active-label';
import NotActiveLabel from './components/not-active-label';

export default function Home() {
  return (
    <main>
      <h1>Main project Next JS</h1>
      <ActiveLabel>Active</ActiveLabel>
      <NotActiveLabel>Not Active</NotActiveLabel>
    </main>
  );
}
