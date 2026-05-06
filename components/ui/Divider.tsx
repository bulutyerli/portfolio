import cn from '@/utils/cn';

type DividerProps = {
  width?: 'full' | 'short';
  direction?: 'horizontal' | 'vertical';
  className?: string;
};

export default function Divider({
  width = 'full',
  direction = 'horizontal',
  className,
}: DividerProps) {
  if (direction === 'vertical') {
    return <div className={cn('w-px h-full bg-black/60 dark:bg-zinc-600', className)} />;
  }

  return (
    <div
      className={cn(
        'h-px bg-zinc-900 dark:bg-zinc-300',
        width === 'full' ? 'w-full' : 'w-2',
        className
      )}
    />
  );
}
