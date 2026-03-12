import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import styles from "../legal.module.css";

const title = "Privacy Policy — Sterling Event Rentals";
const BASE = "https://sterlingeventrentals.com";

export const metadata: Metadata = {
  title,
  robots: { index: false, follow: false },
  alternates: { canonical: `${BASE}/legal/privacy-policy` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  isPartOf: { "@type": "WebSite", name: "Sterling Event Rentals" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Script id="ld-legal" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.brand}>Sterling Event Rentals</div>
          <div className={styles.headerRule}>
            <span className={styles.headerRuleSpan} />
            <div className={styles.diamond} />
            <span className={styles.headerRuleSpan} />
          </div>
          <div className={styles.pageTitle}>Privacy Policy</div>
        </header>

        <main className={styles.main}>
          <div className={styles.intro}>
            <p>Last updated: March 2026.</p>
          </div>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🔒</span>
              <div className={styles.sectionTitle}>Overview</div>
            </div>
            <div className={styles.sectionBody}>
              <div className={styles.policyText}>
                <p>
                  Sterling Event Rentals (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This policy describes how we collect, use, and protect information when you use our website or contact us about event rentals.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>📋</span>
              <div className={styles.sectionTitle}>Information We Collect</div>
            </div>
            <div className={styles.sectionBody}>
              <div className={styles.policyText}>
                <p>
                  We may collect your name, email, phone number, event date, venue, and other details you provide when you request a quote, contact us, or use our services.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>📊</span>
              <div className={styles.sectionTitle}>How We Use It</div>
            </div>
            <div className={styles.sectionBody}>
              <div className={styles.policyText}>
                <p>
                  We use this information to respond to inquiries, provide quotes, deliver and manage rentals, and improve our services. We do not sell your information to third parties.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>📱</span>
              <div className={styles.sectionTitle}>Mobile Messaging and SMS</div>
            </div>
            <div className={styles.sectionBody}>
              <div className={styles.policyText}>
                <p>
                  If you provide a mobile number and consent to be contacted by text, we use your number only to send messages you have agreed to (e.g. transactional updates about your inquiry or rental, and if you opted in, promotional messages). We do not share or sell your phone number or SMS opt-in status with third parties for their marketing. Message and data rates may apply. You can opt out of promotional texts at any time by replying STOP. See our{" "}
                  <Link href="/legal/terms-of-service" className={styles.footerLinkHighlight}>
                    Terms of Service
                  </Link>{" "}
                  for full SMS terms.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>✉️</span>
              <div className={styles.sectionTitle}>Contact</div>
            </div>
            <div className={styles.sectionBody}>
              <div className={styles.policyText}>
                <p>
                  For privacy questions, contact us at{" "}
                  <a href="mailto:info@sterlingeventrentals.com" className={styles.footerLinkHighlight}>
                    info@sterlingeventrentals.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <p>
            <strong>Sterling Event Rentals</strong>
            <br />
            Questions? Contact us directly and our team will be happy to assist.
            <br />
            Policy subject to change. The terms in effect at the time of booking apply to your reservation.
          </p>
          <p className={styles.footerLinks}>
            <Link href="/contact" className={styles.footerLinkHighlight}>
              Contact us
            </Link>
            {" · "}
            <Link href="/legal/terms-of-service" className={styles.footerLink}>
              Terms of Service
            </Link>
            {" · "}
            <Link href="/legal/cancellation-policy" className={styles.footerLink}>
              Cancellation Policy
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
