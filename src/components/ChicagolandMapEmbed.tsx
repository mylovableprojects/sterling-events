/**
 * Embedded map centered on Chicago / Chicagoland for the homepage service-area block.
 * Uses Google Maps embed (no API key required for standard place embeds).
 */
export function ChicagolandMapEmbed({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-[var(--navy)]/15 shadow-md ${className}`}
    >
      <iframe
        title="Chicago and Chicagoland — approximate Sterling Event Rentals delivery area"
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380513.2920725702!2d-87.89711489999999!3d41.8333929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0x6890a30983a1d553!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1709938800000!5m2!1sen!2sus"
      />
    </div>
  );
}
