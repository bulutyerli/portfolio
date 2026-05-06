import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-nowrap font-logo text-2xl font-medium tracking-tight leading-none no-underline"
    >
      Bulut Yerli
    </Link>
  );
}
