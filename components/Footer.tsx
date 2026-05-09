'use client';

import Divider from '@/components/ui/Divider';

export default function Footer() {
  return (
    <footer className="text-center md:text-left my-4 md:my-6 flex flex-col gap-4 md:gap-6">
      <div className="space-y-0.5">
        <Divider width="full" />
        <Divider width="full" />
      </div>
      <span>Copyright &copy; {new Date().getFullYear()} Bulut Yerli</span>
    </footer>
  );
}
