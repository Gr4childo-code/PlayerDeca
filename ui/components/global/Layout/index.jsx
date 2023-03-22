import Header from '@/ui/components/global/Header';

export default function Layout({ menu, children }) {
  return (
    <main>
      <Header menu={menu} />
      {children}
    </main>
  );
}
