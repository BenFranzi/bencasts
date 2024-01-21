import { Outlet } from 'react-router-dom';
import ReloadPrompt from '@/components/ReloadPrompt';

export default function Layout() {
  return (
    <main>
      <h1>Layout</h1>
      <Outlet />
      <ReloadPrompt />
    </main>
  );
}