import Logo from '@/components/header/Logo';
import ContactLinks from '@/components/header/ContactLinks';
import Divider from '@/components/ui/Divider';
import ThemeSwitch from '@/components/header/ThemeSwitch';
import { Suspense } from 'react';

export default function Header() {
  return (
    <header className="space-y-4 md:space-y-6 my-4 md:my-6">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-2 md:gap-0">
        <div className="flex items-center gap-1">
          <Divider width="short" className="flex-1 md:flex-none" />
          <ContactLinks />
          <Divider className="flex-1" />
        </div>
        <div className="text-center px-1">
          <Logo />
        </div>
        <div className="flex items-center gap-1">
          <Divider className="flex-1" />
          <Suspense fallback={null}>
            <ThemeSwitch />
          </Suspense>
          <Divider width="short" className="flex-1 md:flex-none" />
        </div>
      </div>
      <div className="space-y-0.5">
        <Divider width="full" />
        <Divider width="full" />
      </div>
    </header>
  );
}
