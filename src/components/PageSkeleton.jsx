function SkeletonBlock({ className = '' }) {
  return <div className={`skeleton-block ${className}`} aria-hidden="true" />;
}

function HeroSkeleton() {
  return (
    <section className="skeleton-hero" aria-hidden="true">
      <div className="container skeleton-hero-grid">
        <div className="skeleton-hero-copy">
          <SkeletonBlock className="skeleton-eyebrow" />
          <SkeletonBlock className="skeleton-title" />
          <SkeletonBlock className="skeleton-title second" />
          <SkeletonBlock className="skeleton-line wide" />
          <SkeletonBlock className="skeleton-line medium" />
          <div className="skeleton-actions">
            <SkeletonBlock className="skeleton-button" />
            <SkeletonBlock className="skeleton-button soft" />
            <SkeletonBlock className="skeleton-button soft" />
          </div>
        </div>
        <div className="skeleton-hero-media">
          <SkeletonBlock className="skeleton-image-main" />
          <SkeletonBlock className="skeleton-image-small" />
          <SkeletonBlock className="skeleton-float top" />
          <SkeletonBlock className="skeleton-float bottom" />
        </div>
      </div>
    </section>
  );
}

export default function PageSkeleton() {
  return (
    <div className="page-skeleton" role="status" aria-label="Loading clinic website">
      <div className="skeleton-navbar" aria-hidden="true">
        <div className="container skeleton-nav-inner">
          <SkeletonBlock className="skeleton-logo" />
          <SkeletonBlock className="skeleton-nav-links" />
          <SkeletonBlock className="skeleton-nav-cta" />
        </div>
      </div>
      <HeroSkeleton />
      <section className="skeleton-trust">
        <div className="container skeleton-dashboard">
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonBlock className="skeleton-metric" key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
