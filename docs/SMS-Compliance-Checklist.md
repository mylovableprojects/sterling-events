# SMS & Mobile Messaging Compliance Checklist

**Sterling Event Rentals** — Last updated: March 2026

---

## 1. Legal copy in place

### Terms of Service (`/legal/terms-of-service`)

- [x] **SMS and mobile messaging** section added
- [x] **STOP** — Reply STOP to unsubscribe from promotional texts; confirmation message noted
- [x] **HELP** — Reply HELP for support; contact email provided
- [x] **Frequency** — Transactional vs promotional (promotional limited to a few times per month)
- [x] **Message and data rates may apply** — Stated
- [x] **Carrier disclaimer** — Not responsible for delayed/undelivered messages; consent not required to purchase

### Privacy Policy (`/legal/privacy-policy`)

- [x] **Mobile messaging and SMS** section added
- [x] Use of phone number only for consented messages (transactional and, if opted in, promotional)
- [x] **SMS opt-in data not shared** — “We do not share or sell your phone number or SMS opt-in status with third parties for their marketing”
- [x] Link to Terms of Service for full SMS terms

---

## 2. Form consent (contact form)

### Checkbox labels (exact)

**Transactional (required when phone provided):**

- **Label:**  
  `I agree to be contacted by call or text at the number above about my inquiry and any rental. Message and data rates may apply.`
- **Field name:** `consentTransactional`
- **Pre-checked:** No
- **Validation:** Required when user enters a phone number; submit blocked and inline error shown if missing

**Marketing (optional, separate):**

- **Label:**  
  `I agree to receive promotional text messages (e.g. offers, event tips) from Sterling Event Rentals. Message and data rates may apply. Reply STOP to unsubscribe.`
- **Field name:** `consentMarketing`
- **Pre-checked:** No

### Consent disclaimer text (above checkboxes)

- **Heading:** `Contact preferences`
- **Body:**  
  `If you provide a phone number, we may contact you by call or text about your inquiry and rental. Message and data rates may apply. See our Terms of Service and Privacy Policy.`
- **Links:** Terms of Service, Privacy Policy (footer already has these; form repeats for context)

---

## 3. Implementation details

- [x] Consent checkboxes are **not** pre-checked
- [x] Transactional consent is **separate** from marketing consent
- [x] Transactional consent is **required** only when a phone number is provided
- [x] Form stores and API persists: `phone`, `consentTransactional`, `consentMarketing`
- [x] Server-side validation: if `phone` present and `consentTransactional` false, API returns 400 with clear error
- [x] No layout changes beyond the new contact-preferences block and footer links (Terms, Privacy, Cancellation already in footer)

---

## 4. Operational checklist (your team)

- [ ] **SMS platform** — When you enable SMS, ensure the platform supports STOP/HELP and honors opt-outs immediately
- [ ] **First message** — Include identity (Sterling Event Rentals) and how to opt out (e.g. “Reply STOP to unsubscribe”)
- [ ] **STOP handling** — Process STOP and send one final confirmation; do not send further promotional texts
- [ ] **HELP** — Respond with support contact (e.g. info@sterlingeventrentals.com) and/or short help copy
- [ ] **Frequency** — Keep promotional sends to a few per month as stated in Terms
- [ ] **Carrier compliance** — If using a provider (Twilio, etc.), confirm TCPA/CTIA and carrier rules are followed
- [ ] **Opt-in records** — Retain proof of consent (form submission with timestamps); Inquiry model stores consent flags

---

## 5. Quick reference — exact strings

| Use case | Exact text |
|----------|------------|
| **Transactional checkbox** | I agree to be contacted by call or text at the number above about my inquiry and any rental. Message and data rates may apply. |
| **Marketing checkbox** | I agree to receive promotional text messages (e.g. offers, event tips) from Sterling Event Rentals. Message and data rates may apply. Reply STOP to unsubscribe. |
| **Disclaimer (form)** | If you provide a phone number, we may contact you by call or text about your inquiry and rental. Message and data rates may apply. See our Terms of Service and Privacy Policy. |
| **STOP (Terms)** | Reply **STOP** at any time to unsubscribe from promotional texts. |
| **HELP (Terms)** | Reply **HELP** for support or contact us at info@sterlingeventrentals.com. |

---

*This checklist is for internal compliance only. Consult legal counsel for jurisdiction-specific SMS/marketing rules (e.g. TCPA, state laws).*
