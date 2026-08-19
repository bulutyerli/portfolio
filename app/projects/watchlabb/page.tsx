import Divider from '@/components/ui/Divider';

export default function Page() {
  return (
    <article className="max-w-prose text-justify space-y-4 md:space-y-6">
      <div className="space-y-2 md:space-y-4">
        <h1 className="text-2xl font-medium">Watchlabb Web & Mobile App</h1>
        <p>Turkey&#39;s first luxury watch marketplace with live auctions and verified listings.</p>
      </div>
      <Divider width="full" />
      <section className="space-y-2 md:space-y-4">
        <h2 className="text-xl font-medium">Overview</h2>
        <p className="not-first-of-type:mt-2">
          In 2025, Vision Ventures approached me to build Turkey&#39;s first luxury watch
          marketplace — a platform with live auctions, verified sellers & bidders, and
          editor-approved listings. As the sole developer, I had four months to design the
          architecture and ship the core features. Then 8 more months to build all of other features
          and React Native mobile application.
        </p>
      </section>
    </article>
  );
}
