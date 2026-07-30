/**
 * Newsletter provider should be Beehiiv or Buttondown.
 * Set NEXT_PUBLIC_NEWSLETTER_EMBED_URL to an embeddable form action/endpoint when ready.
 * Do not store addresses locally or invent success states without a real provider.
 */
export default function NewsletterSignup() {
  const embedUrl = process.env.NEXT_PUBLIC_NEWSLETTER_EMBED_URL;

  if (embedUrl) {
    return (
      <form action={embedUrl} method="post" className="grid gap-3" target="_blank">
        <label className="sr-only" htmlFor="newsletter-email">
          Email
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="min-h-12 rounded-[10px] border-2 border-black bg-white px-4 text-black"
        />
        <button type="submit" className="min-h-12 rounded-[10px] border-2 border-black bg-[#F45BCF] px-5 font-mono font-bold text-black">
          Send me the good stuff
        </button>
        <p className="text-sm text-neutral-600">Managed by Beehiiv or Buttondown. No custom mailing backend.</p>
      </form>
    );
  }

  return (
    <form className="grid gap-3" aria-describedby="newsletter-note">
      <label className="sr-only" htmlFor="newsletter-email">
        Email
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        placeholder="you@example.com"
        disabled
        className="min-h-12 rounded-[10px] border-2 border-black bg-neutral-100 px-4 text-black"
      />
      <button type="button" disabled className="min-h-12 rounded-[10px] border-2 border-black bg-neutral-300 px-5 font-mono font-bold text-black">
        Send me the good stuff
      </button>
      <p id="newsletter-note" className="text-sm text-neutral-600">
        Newsletter launching soon. Configure Beehiiv or Buttondown with `NEXT_PUBLIC_NEWSLETTER_EMBED_URL` when ready. This form does not store addresses.
      </p>
    </form>
  );
}
