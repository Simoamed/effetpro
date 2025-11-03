export const metadata = {
  title: "Privacy Policy - EffetPro",
  description: "Privacy policy for EffetPro Wedding LUTs Master Collection"
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-zinc-200">
      <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mt-4 text-sm text-zinc-400">Last Updated: January 2025</p>

      <div className="mt-8 space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            EffetPro ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website and purchase our Wedding LUTs Master Collection.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            By using our website and purchasing our products, you agree to the collection and use of information in accordance with this policy.
            If you do not agree with our policies and practices, please do not use our website or purchase our products.
          </p>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="text-2xl font-semibold text-white">2. Information We Collect</h2>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">2.1 Personal Information You Provide</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            When you make a purchase, we collect the following information:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li><strong>Contact Information:</strong> Name, email address</li>
            <li><strong>Payment Information:</strong> Credit card details, billing address (processed securely through Stripe)</li>
            <li><strong>Transaction Data:</strong> Purchase date, product purchased, transaction amount</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">2.2 Information Automatically Collected</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            When you visit our website, we may automatically collect:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li><strong>Device Information:</strong> IP address, browser type, device type, operating system</li>
            <li><strong>Usage Data:</strong> Pages viewed, time spent on pages, click data, referring website</li>
            <li><strong>Cookies:</strong> Small data files stored on your device (see Section 5 for details)</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">2.3 Information We Do NOT Collect</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            We do not collect:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li>Social Security numbers or government-issued ID numbers</li>
            <li>Sensitive personal data (health information, political beliefs, etc.)</li>
            <li>Information from children under 18 years of age</li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section>
          <h2 className="text-2xl font-semibold text-white">3. How We Use Your Information</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            We use the information we collect for the following purposes:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-2 text-zinc-300">
            <li><strong>Process Transactions:</strong> To process your purchase, send download links, and provide customer support</li>
            <li><strong>Deliver Products:</strong> To email you instant access to the Wedding LUTs Master Collection after purchase</li>
            <li><strong>Send Updates:</strong> To notify you of free product updates, new LUTs, and additional content added to your purchase</li>
            <li><strong>Customer Support:</strong> To respond to your inquiries, troubleshoot issues, and provide technical assistance</li>
            <li><strong>Prevent Fraud:</strong> To detect and prevent fraudulent transactions and protect against unauthorized access</li>
            <li><strong>Improve Our Service:</strong> To analyze website usage and improve our product offerings and user experience</li>
            <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
          </ul>
        </section>

        {/* Payment Processing - Stripe */}
        <section>
          <h2 className="text-2xl font-semibold text-white">4. Payment Processing (Stripe)</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            All payment transactions are processed through <strong>Stripe</strong>, a third-party payment processor that is
            PCI-DSS compliant (Payment Card Industry Data Security Standard).
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            <strong>Important:</strong> We do NOT store your full credit card information on our servers. Stripe handles all payment
            data securely using industry-standard encryption.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            When you make a purchase, Stripe collects:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li>Credit/debit card information</li>
            <li>Billing address</li>
            <li>Payment method details</li>
          </ul>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            For more information on how Stripe handles your data, please review Stripe's Privacy Policy at:
            <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline ml-1">
              https://stripe.com/privacy
            </a>
          </p>
        </section>

        {/* Cookies & Tracking */}
        <section>
          <h2 className="text-2xl font-semibold text-white">5. Cookies & Tracking Technologies</h2>
          <h3 className="mt-4 text-lg font-semibold text-amber-400">5.1 What Are Cookies?</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            Cookies are small text files placed on your device when you visit our website. They help us provide a better user experience
            and analyze website traffic.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">5.2 Types of Cookies We Use</h3>
          <ul className="mt-2 ml-6 list-disc space-y-2 text-zinc-300">
            <li>
              <strong>Essential Cookies:</strong> Required for the website to function properly (e.g., shopping cart, checkout process)
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how visitors use our website (e.g., Google Analytics, if enabled)
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Used to track visitors across websites for advertising purposes (if enabled)
            </li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">5.3 Managing Cookies</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain
            features of our website, including the checkout process.
          </p>
        </section>

        {/* How We Share Your Information */}
        <section>
          <h2 className="text-2xl font-semibold text-white">6. How We Share Your Information</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            We do NOT sell, rent, or trade your personal information to third parties for marketing purposes.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            We may share your information with the following third parties:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-2 text-zinc-300">
            <li>
              <strong>Payment Processors (Stripe):</strong> To process your payment and complete transactions
            </li>
            <li>
              <strong>Email Service Providers:</strong> To send purchase confirmations, download links, and product updates
            </li>
            <li>
              <strong>Cloud Storage Providers:</strong> To host and deliver digital product files securely
            </li>
            <li>
              <strong>Analytics Services:</strong> To analyze website traffic and improve user experience (e.g., Google Analytics)
            </li>
            <li>
              <strong>Legal Authorities:</strong> When required by law or to protect our legal rights
            </li>
          </ul>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            All third-party service providers are contractually required to protect your information and use it only for the purposes
            we specify.
          </p>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-2xl font-semibold text-white">7. Data Security</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            We implement industry-standard security measures to protect your personal information, including:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li><strong>SSL Encryption:</strong> All data transmitted between your browser and our website is encrypted using 256-bit SSL</li>
            <li><strong>Secure Payment Processing:</strong> Payment data is handled by Stripe, a PCI-compliant payment processor</li>
            <li><strong>Access Controls:</strong> Limited access to personal data, restricted to authorized personnel only</li>
            <li><strong>Regular Security Audits:</strong> Ongoing monitoring and security assessments</li>
          </ul>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            <strong>Important:</strong> While we take reasonable measures to protect your information, no method of transmission over
            the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
          </p>
        </section>

        {/* Data Retention */}
        <section>
          <h2 className="text-2xl font-semibold text-white">8. Data Retention</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            We retain your personal information for as long as necessary to:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li>Provide you with lifetime access to product downloads and updates</li>
            <li>Comply with legal obligations (e.g., tax records, transaction history)</li>
            <li>Resolve disputes and enforce our agreements</li>
          </ul>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            If you request deletion of your data, we will delete or anonymize it unless we are legally required to retain it.
          </p>
        </section>

        {/* Your Rights (GDPR & Privacy Laws) */}
        <section>
          <h2 className="text-2xl font-semibold text-white">9. Your Privacy Rights</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            Depending on your location, you may have the following rights regarding your personal information:
          </p>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">9.1 GDPR Rights (European Union)</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            If you are located in the European Union, you have the following rights under the General Data Protection Regulation (GDPR):
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your personal data (with some exceptions)</li>
            <li><strong>Right to Restrict Processing:</strong> Request that we limit how we use your data</li>
            <li><strong>Right to Data Portability:</strong> Request a copy of your data in a machine-readable format</li>
            <li><strong>Right to Object:</strong> Object to our processing of your data for certain purposes</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">9.2 How to Exercise Your Rights</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            To exercise any of these rights, please contact us at
            <a href="mailto:support@effetpro.com" className="text-amber-400 hover:text-amber-300 underline ml-1">support@effetpro.com</a> with
            the subject line "Privacy Request." We will respond within 30 days.
          </p>
        </section>

        {/* International Data Transfers */}
        <section>
          <h2 className="text-2xl font-semibold text-white">10. International Data Transfers</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            Your information may be transferred to and processed in countries other than your own, including the United States and
            other countries where our service providers operate.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            We ensure that such transfers comply with applicable data protection laws and use standard contractual clauses
            or other approved mechanisms to protect your data.
          </p>
        </section>

        {/* Third-Party Links */}
        <section>
          <h2 className="text-2xl font-semibold text-white">11. Third-Party Links</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            Our website may contain links to third-party websites (e.g., Stripe, social media platforms). We are not responsible
            for the privacy practices of these external sites.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            We encourage you to review the privacy policies of any third-party websites you visit.
          </p>
        </section>

        {/* Children's Privacy */}
        <section>
          <h2 className="text-2xl font-semibold text-white">12. Children's Privacy</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            Our website and products are not intended for individuals under the age of 18. We do not knowingly collect personal
            information from children.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            If we become aware that we have collected data from a child under 18, we will take steps to delete that information promptly.
          </p>
        </section>

        {/* Email Communications */}
        <section>
          <h2 className="text-2xl font-semibold text-white">13. Email Communications & Opt-Out</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            When you purchase our product, you will receive:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li><strong>Transactional Emails:</strong> Purchase confirmations, download links, support responses (cannot be opted out)</li>
            <li><strong>Product Update Emails:</strong> Notifications when new LUTs or presets are added to your purchase</li>
          </ul>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            You can opt out of non-essential emails by clicking "Unsubscribe" at the bottom of any email. However, you will
            still receive transactional emails related to your purchase.
          </p>
        </section>

        {/* Changes to This Policy */}
        <section>
          <h2 className="text-2xl font-semibold text-white">14. Changes to This Privacy Policy</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.
            Any changes will be posted on this page with an updated "Last Updated" date.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            We encourage you to review this Privacy Policy periodically. Continued use of our website after changes are posted
            constitutes acceptance of the updated policy.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold text-white">15. Contact Us</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            If you have questions about this Privacy Policy or how we handle your personal information, please contact us:
          </p>
          <div className="mt-4 rounded-lg border border-zinc-700 bg-zinc-800/50 p-4">
            <p className="text-zinc-300"><strong>EffetPro</strong></p>
            <p className="text-zinc-300">Email: <a href="mailto:support@effetpro.com" className="text-amber-400 hover:text-amber-300 underline">support@effetpro.com</a></p>
            <p className="text-zinc-300">Location: France (Remote)</p>
          </div>
        </section>

        {/* GDPR Representative */}
        <section>
          <h2 className="text-2xl font-semibold text-white">16. Data Protection Officer</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            For GDPR-related inquiries or to exercise your privacy rights under GDPR, you may contact our support team at
            <a href="mailto:support@effetpro.com" className="text-amber-400 hover:text-amber-300 underline ml-1">support@effetpro.com</a>.
          </p>
        </section>
      </div>

      {/* Footer Navigation */}
      <div className="mt-12 border-t border-zinc-700 pt-8">
        <p className="text-sm text-zinc-400">
          Related legal pages:
          <a href="/legal/terms" className="ml-2 text-amber-400 hover:text-amber-300 underline">Terms of Service</a> •
          <a href="/legal/refund" className="ml-2 text-amber-400 hover:text-amber-300 underline">Refund Policy</a>
        </p>
        <p className="mt-4 text-sm text-zinc-500">
          Your privacy is important to us. If you have any concerns or questions, please don't hesitate to reach out.
        </p>
      </div>
    </main>
  );
}
