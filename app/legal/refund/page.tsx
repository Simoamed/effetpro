export const metadata = {
  title: "Refund Policy - EffetPro",
  description: "30-day money-back guarantee and refund policy for EffetPro Wedding LUTs Master Collection"
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-zinc-200">
      <h1 className="text-4xl font-bold text-white">Refund Policy</h1>
      <p className="mt-4 text-sm text-zinc-400">Last Updated: January 2025</p>

      <div className="mt-8 space-y-8">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-semibold text-white">1. Our Commitment to You</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            At EffetPro, we stand behind the quality of our Wedding LUTs Master Collection. We want you to be completely satisfied with your purchase.
            That's why we offer a <strong className="text-amber-400">30-day money-back guarantee</strong> — no questions asked.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            If you're not happy with your purchase for any reason, we'll refund you in full. Your satisfaction is our priority.
          </p>
        </section>

        {/* 30-Day Guarantee */}
        <section>
          <h2 className="text-2xl font-semibold text-white">2. 30-Day Money-Back Guarantee</h2>
          <h3 className="mt-4 text-lg font-semibold text-amber-400">2.1 How It Works</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            You have <strong>30 days from the date of purchase</strong> to request a full refund if:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li>The LUTs don't meet your expectations</li>
            <li>You're not satisfied with the quality or results</li>
            <li>You encounter technical issues that cannot be resolved</li>
            <li>You simply change your mind</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">2.2 No Questions Asked</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            We believe in making refunds simple and hassle-free. You don't need to provide a lengthy explanation or justify your decision.
            If you're not happy, we'll process your refund promptly.
          </p>
        </section>

        {/* How to Request a Refund */}
        <section>
          <h2 className="text-2xl font-semibold text-white">3. How to Request a Refund</h2>
          <h3 className="mt-4 text-lg font-semibold text-amber-400">3.1 Contact Us</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            To request a refund, send an email to:
            <a href="mailto:contact@effetpro.com" className="text-amber-400 hover:text-amber-300 underline ml-1">contact@effetpro.com</a>
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            Please include the following information in your email:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li><strong>Subject line:</strong> "Refund Request"</li>
            <li><strong>Your name</strong> (as it appears on the purchase)</li>
            <li><strong>Email address</strong> used for the purchase</li>
            <li><strong>Purchase date</strong> (if you have it)</li>
            <li><strong>Brief reason</strong> (optional, but helpful for us to improve)</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">3.2 Processing Time</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            Once we receive your refund request, we will:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li><strong>Respond within 24-48 hours</strong> to confirm receipt of your request</li>
            <li><strong>Process the refund within 3-5 business days</strong></li>
            <li><strong>Send you a confirmation email</strong> once the refund is issued</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">3.3 Refund Method</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            Refunds are issued to the original payment method used for the purchase through our payment processor (Stripe, PayPal,
            or other gateway used at checkout). Depending on your bank or credit card provider, it may take an additional 5-10 business
            days for the refund to appear on your statement.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            <strong>Important:</strong> Refund processing times are determined by your payment provider and financial institution.
            While we process refunds within 3-5 business days, we cannot control how long your bank takes to credit your account.
          </p>
        </section>

        {/* Digital Product Policy */}
        <section>
          <h2 className="text-2xl font-semibold text-white">4. Digital Product Considerations</h2>
          <h3 className="mt-4 text-lg font-semibold text-amber-400">4.1 Instant Download</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            Because this is a digital product with instant download, you will receive access to all files immediately after purchase.
            Even if you request a refund, you will have already downloaded the Product.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">4.2 Fair Use Policy</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            We trust our customers to act in good faith. If you download the Product and request a refund, we expect that you will:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li>Delete all downloaded files from your devices</li>
            <li>Not continue to use the LUTs, presets, or music tracks after receiving a refund</li>
            <li>Not redistribute or share the files with others</li>
          </ul>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            We reserve the right to refuse refunds or ban accounts that repeatedly purchase, download, and refund products in a pattern
            that suggests abuse of our refund policy.
          </p>
        </section>

        {/* What Happens After a Refund */}
        <section>
          <h2 className="text-2xl font-semibold text-white">5. What Happens After a Refund</h2>
          <h3 className="mt-4 text-lg font-semibold text-amber-400">5.1 Access Revocation</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            Once a refund is issued, your access to the Product will be revoked. This includes:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li>Download links will be deactivated</li>
            <li>Future product updates will not be sent to you</li>
            <li>Customer support for the Product will no longer be available</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">5.2 License Termination</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            Your commercial and personal usage license for the LUTs, presets, and music tracks will be terminated upon refund.
            You are no longer authorized to use these assets in any projects.
          </p>
        </section>

        {/* Exceptions & Limitations */}
        <section>
          <h2 className="text-2xl font-semibold text-white">6. Exceptions & Limitations</h2>
          <h3 className="mt-4 text-lg font-semibold text-amber-400">6.1 Time Limit</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            Refund requests must be made within <strong>30 days of the original purchase date</strong>. Requests made after this period
            will be evaluated on a case-by-case basis but are generally not eligible for a refund.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">6.2 Chargebacks & Payment Disputes</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            If you initiate a chargeback or payment dispute with your bank or credit card company <strong>without first contacting us</strong>,
            we will not be able to assist you with a resolution.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            <strong>Please contact us first at</strong>
            <a href="mailto:contact@effetpro.com" className="text-amber-400 hover:text-amber-300 underline ml-1">contact@effetpro.com</a>.
            We will work with you to resolve the issue quickly and fairly.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            Chargebacks initiated without prior contact may result in:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li>Immediate revocation of product access and license termination</li>
            <li>Termination of your account</li>
            <li>Restriction from future purchases</li>
            <li>Chargeback fees and legal costs may be pursued</li>
            <li>Reporting to fraud prevention networks</li>
          </ul>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            <strong>Payment Gateway Disputes:</strong> If you see an unfamiliar charge from Stripe, PayPal, or another payment processor
            on your statement, please contact us first. We can verify the transaction and provide receipts to help you identify the charge.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">6.3 Abuse Prevention</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            We reserve the right to refuse refunds in cases of suspected fraud or abuse, including but not limited to:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li>Multiple purchases and refunds of the same product</li>
            <li>Evidence of file sharing or redistribution after purchase</li>
            <li>Fraudulent payment information or stolen credit cards</li>
          </ul>
        </section>

        {/* Technical Issues */}
        <section>
          <h2 className="text-2xl font-semibold text-white">7. Technical Issues & Support</h2>
          <h3 className="mt-4 text-lg font-semibold text-amber-400">7.1 Before Requesting a Refund</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            If you're experiencing technical difficulties with the Product, please contact our support team before requesting a refund.
            We're here to help and can often resolve issues quickly.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            Common issues we can help with:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li>Installation problems (importing LUTs into Premiere, Lightroom, etc.)</li>
            <li>Compatibility questions (software versions, file formats)</li>
            <li>Download link issues or file access</li>
            <li>Best practices for using LUTs with specific cameras or footage</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">7.2 Contact Support</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            Email us at
            <a href="mailto:contact@effetpro.com" className="text-amber-400 hover:text-amber-300 underline ml-1">contact@effetpro.com</a> and
            we'll respond within 24-48 hours with a solution.
          </p>
        </section>

        {/* Partial Refunds */}
        <section>
          <h2 className="text-2xl font-semibold text-white">8. Partial Refunds</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            We do not offer partial refunds for individual components of the Wedding LUTs Master Collection (e.g., just the music tracks or
            just the Lightroom presets). The Product is sold as a complete package.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            If you're only interested in certain parts of the collection, please contact us before purchasing to discuss your needs.
          </p>
        </section>

        {/* Subscription vs One-Time Purchase */}
        <section>
          <h2 className="text-2xl font-semibold text-white">9. One-Time Purchase Clarification</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            The EffetPro Wedding LUTs Master Collection is a <strong>one-time purchase with lifetime access</strong>. There are no
            recurring charges or subscription fees.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            If you see an unexpected charge on your statement, please contact us immediately at
            <a href="mailto:contact@effetpro.com" className="text-amber-400 hover:text-amber-300 underline ml-1">contact@effetpro.com</a>.
          </p>
        </section>

        {/* Currency & Exchange Rates */}
        <section>
          <h2 className="text-2xl font-semibold text-white">10. Currency & Refund Amounts</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            Prices are listed in USD. If you paid in a different currency, the refund amount will be calculated based on the
            exchange rate at the time of the refund, which may differ from the rate at the time of purchase.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            Any currency conversion fees charged by your bank, payment provider (Stripe, PayPal, etc.), or financial institution
            are not refundable and are outside of our control.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            <strong>Payment Gateway Fees:</strong> Payment processing fees charged by Stripe, PayPal, or other payment gateways
            may not be fully recoverable and are subject to the payment processor's refund policies.
          </p>
        </section>

        {/* Changes to This Policy */}
        <section>
          <h2 className="text-2xl font-semibold text-white">11. Changes to This Refund Policy</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            We reserve the right to update this Refund Policy at any time. Changes will be effective immediately upon posting to this page.
            The "Last Updated" date at the top of this page indicates when the policy was last revised.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            Your purchase is subject to the Refund Policy in effect at the time of purchase.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold text-white">12. Contact Us</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            For refund requests, technical support, or questions about this Refund Policy, please contact us:
          </p>
          <div className="mt-4 rounded-lg border border-zinc-700 bg-zinc-800/50 p-4">
            <p className="text-zinc-300"><strong>EffetPro</strong></p>
            <p className="text-zinc-300">Business Name: EffetPro (Sole Proprietorship)</p>
            <p className="text-zinc-300">Email: <a href="mailto:contact@effetpro.com" className="text-amber-400 hover:text-amber-300 underline">contact@effetpro.com</a></p>
            <p className="text-zinc-300">Location: France</p>
          </div>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            We typically respond to all inquiries within 24-48 hours during business days (Monday-Friday).
          </p>
        </section>

        {/* Stripe Payment Processor */}
        <section>
          <h2 className="text-2xl font-semibold text-white">13. Payment Processor Information</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            All payments and refunds are processed through <strong>Stripe</strong>, a secure, PCI-compliant payment processor.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            When you see a charge on your credit card statement, it may appear as:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li>"EffetPro" or "EFFETPRO"</li>
            <li>"Stripe" or "STRIPE*"</li>
          </ul>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            If you have questions about a charge or need help identifying a transaction, please contact us at
            <a href="mailto:contact@effetpro.com" className="text-amber-400 hover:text-amber-300 underline ml-1">contact@effetpro.com</a>.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            <strong>Refund Processing:</strong> When we issue a refund, it is processed through the same payment gateway you used
            for your original purchase. The refund will appear as a credit from Stripe, PayPal, or the respective payment processor.
          </p>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-semibold text-white">14. Summary</h2>
          <div className="mt-4 rounded-lg border border-amber-500/30 bg-amber-950/20 p-6">
            <h3 className="text-lg font-semibold text-amber-400">Our Promise to You</h3>
            <ul className="mt-3 space-y-2 text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">✓</span>
                <span><strong>30-day money-back guarantee</strong> — no questions asked</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">✓</span>
                <span><strong>Fast refund processing</strong> — within 3-5 business days</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">✓</span>
                <span><strong>Friendly customer support</strong> — we're here to help</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-400">✓</span>
                <span><strong>Fair and transparent process</strong> — no hidden fees</span>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Footer Navigation */}
      <div className="mt-12 border-t border-zinc-700 pt-8">
        <p className="text-sm text-zinc-400">
          Related legal pages:
          <a href="/legal/terms" className="ml-2 text-amber-400 hover:text-amber-300 underline">Terms of Service</a> •
          <a href="/legal/privacy" className="ml-2 text-amber-400 hover:text-amber-300 underline">Privacy Policy</a> •
          <a href="/legal/cookies" className="ml-2 text-amber-400 hover:text-amber-300 underline">Cookie Policy</a>
        </p>
        <p className="mt-4 text-sm text-zinc-500">
          Your satisfaction is our priority. If you have any questions or concerns, please don't hesitate to reach out.
        </p>
      </div>
    </main>
  );
}
