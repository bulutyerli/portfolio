import { ReactNode } from 'react';
import cn from '@/utils/cn';

export default function Marker({
  children,
  className,
  group,
}: {
  children: ReactNode;
  className?: string;
  group?: string;
}) {
  return (
    <span className={cn('relative', group ? '' : 'group/marker')}>
      <span
        className={cn(
          'absolute inset-0 w-0 block transition-all duration-500 -skew-y-1 bg-marker',
          group ? `group-hover/highlight:w-full` : 'group-hover/marker:w-full',
          className
        )}
        aria-hidden="true"
      />
      <span className="relative">{children}</span>
    </span>
  );
}
