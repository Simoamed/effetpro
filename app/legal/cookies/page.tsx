export const metadata = {
  title: "Cookie Policy - EffetPro",
  description: "Cookie policy and tracking technologies used by EffetPro"
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-zinc-200">
      <h1 className="text-4xl font-bold text-white">Cookie Policy</h1>
      <p className="mt-4 text-sm text-zinc-400">Last Updated: January 2025</p>

      <div className="mt-8 space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold text-white">1. What Are Cookies?</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit our website.
            They help us provide a better user experience by remembering your preferences and enabling essential website functionality.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            This Cookie Policy explains what cookies are, how we use them, and how you can manage your cookie preferences.
          </p>
        </section>

        {/* Why We Use Cookies */}
        <section>
          <h2 className="text-2xl font-semibold text-white">2. Why We Use Cookies</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            We use cookies for the following purposes:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li><strong>Essential Website Function:</strong> To enable core features like checkout and secure login</li>
            <li><strong>Payment Processing:</strong> To securely process transactions through Stripe, PayPal, and other payment gateways</li>
            <li><strong>Security & Fraud Prevention:</strong> To protect against fraudulent transactions and unauthorized access</li>
            <li><strong>Analytics & Performance:</strong> To understand how visitors use our website and improve user experience</li>
            <li><strong>Marketing & Advertising:</strong> To show relevant ads and measure campaign effectiveness (if enabled)</li>
          </ul>
        </section>

        {/* Types of Cookies We Use */}
        <section>
          <h2 className="text-2xl font-semibold text-white">3. Types of Cookies We Use</h2>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">3.1 Essential Cookies (Required)</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            These cookies are necessary for the website to function properly. You cannot opt out of these cookies as they are
            required for basic website operations.
          </p>
          <div className="mt-3 rounded-lg border border-zinc-700 bg-zinc-800/30 p-4">
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><strong>Session Cookies:</strong> Maintain your session as you navigate the site</li>
              <li><strong>Shopping Cart Cookies:</strong> Remember items in your cart during checkout</li>
              <li><strong>Payment Processor Cookies:</strong> Stripe, PayPal cookies for secure transaction processing</li>
              <li><strong>Security Cookies:</strong> Authenticate users and prevent fraudulent use</li>
              <li><strong>CSRF Tokens:</strong> Protect against cross-site request forgery attacks</li>
            </ul>
          </div>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">3.2 Analytics & Performance Cookies (Optional)</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            These cookies help us understand how visitors interact with our website by collecting anonymous information.
          </p>
          <div className="mt-3 rounded-lg border border-zinc-700 bg-zinc-800/30 p-4">
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><strong>Google Analytics:</strong> Tracks page views, traffic sources, and user behavior (if enabled)</li>
              <li><strong>Performance Monitoring:</strong> Identifies slow-loading pages and technical issues</li>
              <li><strong>A/B Testing:</strong> Tests different versions of pages to improve user experience</li>
            </ul>
          </div>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">3.3 Marketing & Advertising Cookies (Optional)</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            These cookies track your browsing activity to show relevant advertisements and measure campaign performance.
          </p>
          <div className="mt-3 rounded-lg border border-zinc-700 bg-zinc-800/30 p-4">
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><strong>Facebook Pixel:</strong> Tracks conversions and shows retargeting ads (if enabled)</li>
              <li><strong>Google Ads:</strong> Measures ad performance and shows targeted ads (if enabled)</li>
              <li><strong>Affiliate Tracking:</strong> Tracks referrals for affiliate commission purposes</li>
            </ul>
          </div>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">3.4 Third-Party Cookies</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            Some cookies are placed by third-party services that appear on our pages:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li><strong>Stripe:</strong> Payment processing and fraud detection</li>
            <li><strong>PayPal:</strong> Payment processing</li>
            <li><strong>Google Analytics:</strong> Website analytics (if enabled)</li>
            <li><strong>Social Media Platforms:</strong> Facebook, Instagram, YouTube embeds (if present)</li>
          </ul>
        </section>

        {/* Cookie Duration */}
        <section>
          <h2 className="text-2xl font-semibold text-white">4. How Long Do Cookies Last?</h2>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">4.1 Session Cookies</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            These are temporary cookies that expire when you close your browser. They are used for essential functions like
            maintaining your shopping cart during checkout.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">4.2 Persistent Cookies</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            These cookies remain on your device for a set period (typically 30 days to 2 years) or until you delete them.
            They remember your preferences across multiple visits.
          </p>
        </section>

        {/* Payment Gateway Cookies */}
        <section>
          <h2 className="text-2xl font-semibold text-white">5. Payment Gateway Cookies</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            When you make a purchase, our payment processors (Stripe, PayPal, Payoneer, Mercury, Relay, or others) use cookies to:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-2 text-zinc-300">
            <li>
              <strong>Process Secure Payments:</strong> Encrypt payment data and authenticate transactions using PCI-DSS compliant security
            </li>
            <li>
              <strong>Prevent Fraud:</strong> Detect suspicious activity, verify card validity, and block fraudulent transactions
            </li>
            <li>
              <strong>Store Payment Methods:</strong> Securely tokenize and store payment methods for faster future checkouts (optional)
            </li>
            <li>
              <strong>Comply with Regulations:</strong> Meet PCI-DSS, PSD2, and other payment industry security standards
            </li>
          </ul>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            These payment gateway cookies are <strong>essential</strong> and cannot be disabled. They are necessary for secure
            transaction processing and regulatory compliance.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            For more information on how payment processors use cookies:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li>Stripe Cookie Policy: <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline">https://stripe.com/privacy</a></li>
            <li>PayPal Cookie Policy: <a href="https://www.paypal.com/webapps/mpp/ua/cookie-full" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline">https://www.paypal.com/webapps/mpp/ua/cookie-full</a></li>
          </ul>
        </section>

        {/* Managing Cookies */}
        <section>
          <h2 className="text-2xl font-semibold text-white">6. How to Manage Cookies</h2>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">6.1 Browser Settings</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            Most web browsers allow you to control cookies through their settings. You can:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li>View and delete cookies stored on your device</li>
            <li>Block all cookies from all websites</li>
            <li>Block third-party cookies only</li>
            <li>Clear all cookies when closing your browser</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">6.2 Browser-Specific Instructions</h3>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li>
              <strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data
            </li>
            <li>
              <strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data
            </li>
            <li>
              <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
            </li>
            <li>
              <strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and site data
            </li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">6.3 Impact of Disabling Cookies</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            <strong className="text-amber-400">Important:</strong> If you disable cookies, some features of our website may not work properly:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li>You may not be able to complete the checkout process</li>
            <li>Your shopping cart may not save items</li>
            <li>Payment processing may fail or be delayed</li>
            <li>You may need to re-enter information on every page</li>
          </ul>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            Essential cookies are required for the website to function. Disabling them will prevent you from making purchases.
          </p>
        </section>

        {/* Do Not Track */}
        <section>
          <h2 className="text-2xl font-semibold text-white">7. Do Not Track (DNT) Signals</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want your online
            activity tracked. Our website does not currently respond to DNT signals because there is no universal standard
            for how DNT signals should be interpreted.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            However, you can control cookies and tracking through your browser settings as described in Section 6.
          </p>
        </section>

        {/* GDPR & Cookie Consent */}
        <section>
          <h2 className="text-2xl font-semibold text-white">8. GDPR & Cookie Consent (EU Users)</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            If you are located in the European Union, we comply with the General Data Protection Regulation (GDPR) and
            the ePrivacy Directive (Cookie Law).
          </p>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">8.1 Consent for Non-Essential Cookies</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            We will only use non-essential cookies (analytics, marketing) with your explicit consent. You can:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li>Accept all cookies</li>
            <li>Reject non-essential cookies</li>
            <li>Customize your cookie preferences</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">8.2 Essential Cookies (No Consent Required)</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            Under GDPR, essential cookies do not require consent as they are strictly necessary for the website to function.
            This includes cookies for payment processing, security, and basic website operations.
          </p>
        </section>

        {/* Changes to This Policy */}
        <section>
          <h2 className="text-2xl font-semibold text-white">9. Changes to This Cookie Policy</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements,
            or our business practices. Any changes will be posted on this page with an updated "Last Updated" date.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold text-white">10. Contact Us</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            If you have questions about this Cookie Policy or how we use cookies, please contact us:
          </p>
          <div className="mt-4 rounded-lg border border-zinc-700 bg-zinc-800/50 p-4">
            <p className="text-zinc-300"><strong>EffetPro</strong></p>
            <p className="text-zinc-300">Business Name: EffetPro (Sole Proprietorship)</p>
            <p className="text-zinc-300">Email: <a href="mailto:contact@effetpro.com" className="text-amber-400 hover:text-amber-300 underline">contact@effetpro.com</a></p>
            <p className="text-zinc-300">Location: France</p>
          </div>
        </section>
      </div>

      {/* Footer Navigation */}
      <div className="mt-12 border-t border-zinc-700 pt-8">
        <p className="text-sm text-zinc-400">
          Related legal pages:
          <a href="/legal/privacy" className="ml-2 text-amber-400 hover:text-amber-300 underline">Privacy Policy</a> •
          <a href="/legal/terms" className="ml-2 text-amber-400 hover:text-amber-300 underline">Terms of Service</a> •
          <a href="/legal/refund" className="ml-2 text-amber-400 hover:text-amber-300 underline">Refund Policy</a>
        </p>
        <p className="mt-4 text-sm text-zinc-500">
          For more information about how we handle your data, please see our Privacy Policy.
        </p>
      </div>
    </main>
  );
}
