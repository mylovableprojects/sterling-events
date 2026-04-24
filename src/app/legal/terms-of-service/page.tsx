import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import styles from "../legal.module.css";

const title = "Terms of Service — Sterling Event Rentals";
const BASE = "https://sterlingevents.com";

export const metadata: Metadata = {
  title,
  robots: { index: false, follow: false },
  alternates: { canonical: `${BASE}/legal/terms-of-service` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  isPartOf: { "@type": "WebSite", name: "Sterling Event Rentals" },
};

export default function TermsOfServicePage() {
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
          <div className={styles.pageTitle}>Terms of Service</div>
        </header>

        <main className={styles.main}>
          <div className={styles.intro}>
            <p>Last updated: March 2026.</p>
          </div>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>📋</span>
              <div className={styles.sectionTitle}>Overview</div>
            </div>
            <div className={styles.sectionBody}>
              <div className={styles.policyText}>
                <p>
                  By using Sterling Event Rentals&apos; website and services, you agree to these terms. Our event rental agreements (quotes, contracts, and invoices) may contain additional terms specific to your rental.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🎪</span>
              <div className={styles.sectionTitle}>Services</div>
            </div>
            <div className={styles.sectionBody}>
              <div className={styles.policyText}>
                <p>
                  We provide event equipment rental, delivery, setup, and teardown in the Greater Chicagoland area. Availability, pricing, and scope are as described in your quote or contract.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>💳</span>
              <div className={styles.sectionTitle}>Payment and Deposits</div>
            </div>
            <div className={styles.sectionBody}>
              <div className={styles.policyText}>
                <p>
                  Deposits and payment terms are set in your rental agreement. Failure to pay as agreed may result in cancellation or additional fees.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🛡️</span>
              <div className={styles.sectionTitle}>Liability</div>
            </div>
            <div className={styles.sectionBody}>
              <div className={styles.policyText}>
                <p>
                  We are licensed and insured. Our liability is limited as set forth in your rental contract. You are responsible for proper use of equipment and site conditions as disclosed to us.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>📱</span>
              <div className={styles.sectionTitle}>SMS and Mobile Messaging</div>
            </div>
            <div className={styles.sectionBody}>
              <div className={styles.policyText}>
                <p>
                  When you provide a mobile number and consent, we may send you transactional texts (e.g. inquiry confirmation, delivery updates, scheduling) and, if you opt in, promotional messages. By opting in to text messages you agree to the following:
                </p>
              </div>
              <div className={styles.policyItem}>
                <div className={styles.policyText}>
                  <h3>Message Frequency</h3>
                  <p>Transactional messages vary by your rental activity. Promotional messages are sent no more than a few times per month.</p>
                </div>
              </div>
              <div className={styles.policyItem}>
                <div className={styles.policyText}>
                  <h3>Message and Data Rates</h3>
                  <p>Your carrier may charge for SMS or data. Check your plan.</p>
                </div>
              </div>
              <div className={styles.policyItem}>
                <div className={styles.policyText}>
                  <h3>STOP — Opt Out</h3>
                  <p>Reply <strong>STOP</strong> at any time to unsubscribe from promotional texts. You will receive a final confirmation message. Transactional messages related to an active rental may still be sent as needed.</p>
                </div>
              </div>
              <div className={styles.policyItem}>
                <div className={styles.policyText}>
                  <h3>HELP — Support</h3>
                  <p>
                    Reply <strong>HELP</strong> for support or contact us at{" "}
                    <a href="mailto:info@sterlingeventrentals.com" className={styles.footerLinkHighlight}>
                      info@sterlingeventrentals.com
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className={styles.policyItem}>
                <div className={styles.policyText}>
                  <h3>Carrier Disclaimer</h3>
                  <p>We are not responsible for delayed or undelivered messages. Supported carriers and availability may change. Consent is not required to purchase.</p>
                </div>
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
                  Questions about these terms:{" "}
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
            Questions about your reservation? Please contact us directly and our team will be happy to assist.
            <br />
            Terms subject to change. The terms in effect at the time of booking apply to your reservation.
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
            <Link href="/legal/cancellation-policy" className={styles.footerLink}>
              Cancellation Policy
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
