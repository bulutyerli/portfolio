import cn from '@/utils/cn';

export default function Badge({ text, className }: { text: string; className?: string }) {
  return (
    <span
      className={cn(
        'uppercase text-xs tracking-widest border border-current px-1 md:px-2 py-0.5 text-foreground/80',
        className
      )}
    >
      {text}
    </span>
  );
}
