import { Outlet, createFileRoute } from '@tanstack/react-router';
import Footer from '@/blocks/Footer';
import Header from '@/blocks/Header';

export const Route = createFileRoute('/_marketing')({
  component: MarketingLayout,
});

function MarketingLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
