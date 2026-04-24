import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import styles from "../legal.module.css";

const title = "Cancellation Policy — Sterling Event Rentals";
const BASE = "https://sterlingevents.com";

export const metadata: Metadata = {
  title,
  robots: { index: false, follow: false },
  alternates: { canonical: `${BASE}/legal/cancellation-policy` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  isPartOf: { "@type": "WebSite", name: "Sterling Event Rentals" },
};

export default function CancellationPolicyPage() {
  return (
    <>
      <Script
        id="ld-legal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.brand}>Sterling Event Rentals</div>
          <div className={styles.headerRule}>
            <span className={styles.headerRuleSpan} />
            <div className={styles.diamond} />
            <span className={styles.headerRuleSpan} />
          </div>
          <div className={styles.pageTitle}>Cancellation & Refund Policy</div>
        </header>

        <main className={styles.main}>
          <div className={styles.intro}>
            <p>
              We want every event to be seamless and stress-free. Please review our cancellation and weather policies below so you can plan with confidence.
            </p>
          </div>

          {/* Cancellation & Refunds */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>📋</span>
              <div className={styles.sectionTitle}>Cancellation & Refunds</div>
            </div>
            <div className={styles.sectionBody}>
              <div className={styles.policyItem}>
                <div className={`${styles.policyBadge} ${styles.badgeGreen}`}>
                  Full
                  <br />
                  Refund
                </div>
                <div className={styles.policyText}>
                  <h3>Cancellation 21+ Days Before Your Event</h3>
                  <p>
                    If you cancel your reservation <strong>21 or more days</strong> before your scheduled delivery date, you will receive a <strong>full refund</strong> with no cancellation fee.
                  </p>
                </div>
              </div>
              <div className={styles.policyItem}>
                <div className={`${styles.policyBadge} ${styles.badgeRed}`}>
                  No
                  <br />
                  Refund
                </div>
                <div className={styles.policyText}>
                  <h3>Cancellation Within 21 Days of Your Event</h3>
                  <p>
                    Cancellations made <strong>fewer than 21 days</strong> before your scheduled delivery date are <strong>non-refundable</strong>. By this point, resources and logistics have been committed specifically to your event.
                  </p>
                </div>
              </div>
              <div className={styles.policyItem}>
                <div className={`${styles.policyBadge} ${styles.badgeRed}`}>
                  No
                  <br />
                  Refund
                </div>
                <div className={styles.policyText}>
                  <h3>After Delivery & Setup</h3>
                  <p>
                    Once equipment has been delivered and set up at your venue, <strong>no refunds will be issued</strong> for any reason, including changes of plans or weather conditions that develop after setup is complete.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Inclement Weather Policy */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>⛈️</span>
              <div className={styles.sectionTitle}>Inclement Weather Policy</div>
            </div>
            <div className={styles.sectionBody}>
              <div className={styles.policyItem}>
                <div className={`${styles.policyBadge} ${styles.badgeAmber}`}>
                  Safety
                  <br />
                  First
                </div>
                <div className={styles.policyText}>
                  <h3>Forecasted Inclement Weather — No Setup</h3>
                  <p>
                    The safety of our team and your guests is our highest priority. <strong>We will not deliver or set up equipment</strong> if inclement weather is in the forecast at the time of your scheduled delivery. Our team will be in contact with you if this situation applies to your event.
                  </p>
                </div>
              </div>
              <div className={styles.policyItem}>
                <div className={`${styles.policyBadge} ${styles.badgeAmber}`}>
                  Post-
                  <br />
                  Setup
                </div>
                <div className={styles.policyText}>
                  <h3>Weather Changes After Delivery</h3>
                  <p>
                    If weather conditions change or deteriorate after your equipment has already been delivered and set up, <strong>all required safety procedures must be followed immediately</strong>. Our staff will provide guidance. No refunds are issued for weather that develops after setup is complete.
                  </p>
                </div>
              </div>
              <div className={styles.policyItem}>
                <div className={`${styles.policyBadge} ${styles.badgeRed}`}>
                  Right to
                  <br />
                  Cancel
                </div>
                <div className={styles.policyText}>
                  <h3>Sterling&apos;s Right to Cancel</h3>
                  <p>
                    Sterling Event Rentals <strong>reserves the right to cancel any delivery</strong> that we deem unsafe due to weather conditions, at our sole discretion. Your safety — and that of our team — will always take precedence over any event schedule.
                  </p>
                </div>
              </div>
              <div className={styles.highlightBox}>
                <span className="icon">💡</span>
                <p>
                  We strongly recommend monitoring your local weather forecast in the days leading up to your event and reaching out to us early if you have concerns. Early communication allows us to explore all available options together.
                </p>
              </div>
            </div>
          </section>

          {/* Quick Reference Summary */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>📊</span>
              <div className={styles.sectionTitle}>Quick Reference Summary</div>
            </div>
            <div className={`${styles.sectionBody} ${styles.sectionBodyTable}`}>
              <table className={styles.summaryTable}>
                <thead>
                  <tr>
                    <th>Situation</th>
                    <th>Refund Eligible?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cancelled 21+ days before event</td>
                    <td>
                      <span className={`${styles.tag} ${styles.tagYes}`}>Full Refund</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Cancelled within 21 days of event</td>
                    <td>
                      <span className={`${styles.tag} ${styles.tagNo}`}>No Refund</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Cancelled after delivery & setup</td>
                    <td>
                      <span className={`${styles.tag} ${styles.tagNo}`}>No Refund</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Inclement weather forecast — we don&apos;t set up</td>
                    <td>
                      <span className={`${styles.tag} ${styles.tagNa}`}>Case by Case</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Weather changes after setup</td>
                    <td>
                      <span className={`${styles.tag} ${styles.tagNo}`}>No Refund</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Sterling cancels due to unsafe conditions</td>
                    <td>
                      <span className={`${styles.tag} ${styles.tagNa}`}>Case by Case</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <p>
            <strong>Sterling Event Rentals</strong>
            <br />
            Questions about your reservation? Please contact us directly and our team will be happy to assist.
            <br />
            Policy subject to change. The terms in effect at the time of booking apply to your reservation.
          </p>
          <p className={styles.footerLinks}>
            <Link href="/contact" className={styles.footerLinkHighlight}>
              Contact us
            </Link>
            {" · "}
            <Link href="/legal/privacy-policy" className={styles.footerLink}>
              Privacy Policy
            </Link>
            {" · "}
            <Link href="/legal/terms-of-service" className={styles.footerLink}>
              Terms of Service
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
