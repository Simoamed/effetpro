export const metadata = {
  title: "Terms of Service - EffetPro",
  description: "Terms and conditions for EffetPro Wedding LUTs Master Collection"
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-zinc-200">
      <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
      <p className="mt-4 text-sm text-zinc-400">Last Updated: January 2025</p>

      <div className="mt-8 space-y-8">
        {/* Agreement */}
        <section>
          <h2 className="text-2xl font-semibold text-white">1. Agreement to Terms</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            By purchasing and downloading the EffetPro Wedding LUTs Master Collection ("Product"), you agree to be bound by these Terms of Service.
            If you do not agree to these terms, please do not purchase or use our Product.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            EffetPro operates as a digital product provider offering professional color grading LUTs, presets, music tracks, and educational content
            for wedding editors, filmmakers, and content creators.
          </p>
        </section>

        {/* Product License */}
        <section>
          <h2 className="text-2xl font-semibold text-white">2. Product License & Usage Rights</h2>
          <h3 className="mt-4 text-lg font-semibold text-amber-400">2.1 What You Receive</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">Your purchase includes:</p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li>500+ Wedding LUTs (.cube and .3dl formats)</li>
            <li>30 Drone LUTs (aerial-optimized)</li>
            <li>120 Emotional Music Tracks (royalty-free)</li>
            <li>Golden Love Lightroom Presets (30 presets)</li>
            <li>Mini Cinematic Color Class (10-minute tutorial video)</li>
            <li>Lifetime access to all current files</li>
            <li>Free updates when new LUTs or presets are added</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">2.2 Commercial License Granted</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            You are granted a <strong>personal and commercial license</strong> to use these assets, which means you can:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li>Use the LUTs and presets in unlimited client projects (weddings, films, YouTube videos, commercials, etc.)</li>
            <li>Apply them to footage for paying clients without additional fees</li>
            <li>Use the music tracks in wedding films, YouTube videos, and commercial projects (royalty-free)</li>
            <li>Create and sell final video deliverables that incorporate our LUTs/presets</li>
          </ul>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">2.3 Prohibited Uses</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">You may NOT:</p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li>Resell, redistribute, or share the LUT files, presets, or music tracks themselves</li>
            <li>Include the files in any template, toolkit, or bundle offered for sale or free download</li>
            <li>Claim the LUTs or presets as your own creation</li>
            <li>Upload the raw files to torrent sites, file-sharing platforms, or online forums</li>
            <li>Share your account login credentials with others</li>
          </ul>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            <strong>Important:</strong> This is a single-user license. Each editor/filmmaker must purchase their own license.
          </p>
        </section>

        {/* Digital Product Delivery */}
        <section>
          <h2 className="text-2xl font-semibold text-white">3. Digital Product & Delivery</h2>
          <h3 className="mt-4 text-lg font-semibold text-amber-400">3.1 Instant Access</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            Upon successful payment, you will receive instant access to download the Product via email. Download links are typically sent within
            60 seconds of purchase completion.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">3.2 File Format & Compatibility</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            LUTs are provided in .cube and .3dl formats, compatible with Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro, CapCut, Lightroom,
            and other industry-standard editing software. Music tracks are provided in MP3/WAV format. Lightroom presets are in .xmp format.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">3.3 Technical Requirements</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            It is your responsibility to ensure your editing software and computer meet the technical requirements to use these files.
            We provide installation guides and tutorials to assist with setup.
          </p>
        </section>

        {/* Payment & Pricing */}
        <section>
          <h2 className="text-2xl font-semibold text-white">4. Payment & Pricing</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            All payments are processed securely through Stripe, a PCI-compliant payment processor. We accept major credit cards, debit cards,
            and other payment methods supported by Stripe.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            Prices are listed in USD and are subject to change without notice. The price you pay at checkout is the final price.
            No recurring fees or subscriptions — this is a one-time purchase with lifetime access.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            <strong>Promotional Pricing:</strong> Limited-time discounts may be offered. Once purchased at a promotional price,
            you retain full access regardless of future price changes.
          </p>
        </section>

        {/* Refund Policy Reference */}
        <section>
          <h2 className="text-2xl font-semibold text-white">5. Refunds & Satisfaction Guarantee</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            We offer a <strong>30-day money-back guarantee</strong>. If you are not satisfied with your purchase for any reason,
            contact us at <a href="mailto:support@effetpro.com" className="text-amber-400 hover:text-amber-300 underline">support@effetpro.com</a> within
            30 days of purchase for a full refund.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            For complete details, please see our <a href="/legal/refund" className="text-amber-400 hover:text-amber-300 underline">Refund Policy</a>.
          </p>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-2xl font-semibold text-white">6. Intellectual Property Rights</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            All LUTs, presets, music tracks, tutorial videos, and associated content included in the Product are the intellectual property of
            EffetPro and are protected by copyright laws.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            The license granted to you does not transfer ownership or copyright of the files themselves — only the right to use them
            according to the terms outlined in Section 2.
          </p>
        </section>

        {/* Warranties & Disclaimers */}
        <section>
          <h2 className="text-2xl font-semibold text-white">7. Warranties & Disclaimers</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            <strong>Product Quality:</strong> We have carefully crafted these LUTs and presets for professional use. However, results may vary
            depending on your footage, camera settings, lighting conditions, and editing software.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            <strong>No Guarantee of Results:</strong> While our LUTs are designed to enhance wedding footage, we do not guarantee specific
            outcomes, client satisfaction, or business results from using our Product.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            <strong>As-Is Basis:</strong> The Product is provided "as is" without warranties of any kind, either express or implied,
            including but not limited to warranties of merchantability or fitness for a particular purpose.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-semibold text-white">8. Limitation of Liability</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            To the maximum extent permitted by law, EffetPro shall not be liable for any indirect, incidental, special, consequential,
            or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data,
            use, goodwill, or other intangible losses resulting from:
          </p>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-zinc-300">
            <li>Your use or inability to use the Product</li>
            <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
            <li>Any technical malfunctions or interruptions of service</li>
            <li>Any errors, mistakes, or inaccuracies of content</li>
          </ul>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            Our total liability for any claim arising from your purchase shall not exceed the amount you paid for the Product.
          </p>
        </section>

        {/* Updates & Support */}
        <section>
          <h2 className="text-2xl font-semibold text-white">9. Updates & Customer Support</h2>
          <h3 className="mt-4 text-lg font-semibold text-amber-400">9.1 Lifetime Updates</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            You will receive free access to all future updates, new LUTs, and additional presets added to the collection.
            We will notify you via email when updates are available.
          </p>

          <h3 className="mt-4 text-lg font-semibold text-amber-400">9.2 Customer Support</h3>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            We provide email support for technical issues, installation questions, and general inquiries. Support is available at
            <a href="mailto:support@effetpro.com" className="text-amber-400 hover:text-amber-300 underline ml-1">support@effetpro.com</a>.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            We strive to respond within 24-48 hours during business days. Support does not include custom color grading services or
            one-on-one editing tutorials beyond the included mini class.
          </p>
        </section>

        {/* Account & Access */}
        <section>
          <h2 className="text-2xl font-semibold text-white">10. Account Access & Re-downloads</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            You have lifetime access to re-download the Product. If you lose your files, contact support with your purchase email to
            receive a new download link.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            We reserve the right to suspend or terminate access to accounts that violate these Terms of Service, including but not limited
            to unauthorized sharing or redistribution of files.
          </p>
        </section>

        {/* Modifications to Terms */}
        <section>
          <h2 className="text-2xl font-semibold text-white">11. Changes to These Terms</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page.
            Your continued use of the Product after changes constitutes acceptance of the updated terms.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            Material changes will be communicated via email to customers when possible.
          </p>
        </section>

        {/* Governing Law */}
        <section>
          <h2 className="text-2xl font-semibold text-white">12. Governing Law & Jurisdiction</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            These Terms of Service shall be governed by and construed in accordance with the laws of France, without regard to its
            conflict of law provisions.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            Any disputes arising from these terms or your use of the Product shall be resolved in the courts of France.
          </p>
        </section>

        {/* Severability */}
        <section>
          <h2 className="text-2xl font-semibold text-white">13. Severability</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the
            minimum extent necessary so that these Terms will otherwise remain in full force and effect.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold text-white">14. Contact Information</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            For questions about these Terms of Service, please contact us:
          </p>
          <div className="mt-4 rounded-lg border border-zinc-700 bg-zinc-800/50 p-4">
            <p className="text-zinc-300"><strong>EffetPro</strong></p>
            <p className="text-zinc-300">Email: <a href="mailto:support@effetpro.com" className="text-amber-400 hover:text-amber-300 underline">support@effetpro.com</a></p>
            <p className="text-zinc-300">Location: France (Remote)</p>
          </div>
        </section>

        {/* Disclaimer */}
        <section id="disclaimer">
          <h2 className="text-2xl font-semibold text-white">15. General Disclaimer</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            The information and materials provided by EffetPro are for general informational and educational purposes only.
            All content is provided in good faith, however we make no representation or warranty of any kind regarding the accuracy,
            adequacy, validity, reliability, or completeness of any information.
          </p>
          <p className="mt-2 text-zinc-300 leading-relaxed">
            EffetPro is not affiliated with Adobe, DaVinci Resolve, Final Cut Pro, Canon, Sony, DJI, or any other software or
            hardware manufacturers mentioned on our website. Product names and trademarks are the property of their respective owners.
          </p>
        </section>
      </div>

      {/* Footer Navigation */}
      <div className="mt-12 border-t border-zinc-700 pt-8">
        <p className="text-sm text-zinc-400">
          Related legal pages:
          <a href="/legal/privacy" className="ml-2 text-amber-400 hover:text-amber-300 underline">Privacy Policy</a> •
          <a href="/legal/refund" className="ml-2 text-amber-400 hover:text-amber-300 underline">Refund Policy</a>
        </p>
        <p className="mt-4 text-sm text-zinc-500">
          By purchasing from EffetPro, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
        </p>
      </div>
    </main>
  );
}
