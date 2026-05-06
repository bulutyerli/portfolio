import Image from 'next/image';

export default function MainProject() {
  return (
    <article className="flex">
      <div>
        <h2>Watchlabb Web & Mobile</h2>
        <div className="aspect-video w-64 h-auto relative">
          <Image alt="watchlabb" fill src="/watchlabb/watchlabb1.webp" />
        </div>
      </div>
    </article>
  );
}
