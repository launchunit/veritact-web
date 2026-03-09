import { createFileRoute } from '@tanstack/react-router';
import { GridBand, GridSection } from '@/blocks/GridSection';
import { ExternalLink } from '@/ui/Link';

export const Route = createFileRoute('/_marketing/legal/privacy-policy')({
  component: Page,
});

function Page() {
  return (
    <div className="bg-background min-h-screen px-6 py-16 lg:py-24">
      <GridSection>
        <GridBand columns={9} rows={1} className="border-border border-b border-dashed" />

        {/* Header */}
        <div className="border-border border-b border-dashed px-8 py-10 text-center lg:px-12 lg:py-14">
          <h1 className="text-4xl tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="text-muted-foreground mt-4 text-sm">Last Updated February 25, 2025</p>
        </div>

        {/* Content */}
        <div className="px-8 py-12 lg:px-12 lg:py-16">
          <div className="prose-legal mx-auto max-w-[720px] space-y-8">
            <p>
              At <strong>Veritact Inc.</strong> (&ldquo;Veritact&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo; and/or &ldquo;our&rdquo;), we take your privacy seriously. This
              Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you use our Services.
            </p>

            <p>
              By accessing or using the Services, you agree to the collection and use of information
              in accordance with this Privacy Policy. If you do not agree with the terms of this
              Privacy Policy, please do not access the Services.
            </p>

            <h2>1. Information We Collect</h2>

            <h3>Personal Information</h3>

            <p>
              We may collect personally identifiable information that you voluntarily provide to us
              when you register for an account, make a purchase, or contact us. This includes your
              name, email address, phone number, company name, billing address, and payment
              information.
            </p>

            <h3>Usage Data</h3>

            <p>
              We automatically collect certain information when you visit, use, or navigate the
              Services. This includes your IP address, browser type, operating system, referring
              URLs, device information, pages viewed, links clicked, and the date and time of your
              visit.
            </p>

            <h3>Cookies and Tracking Technologies</h3>

            <p>
              We use cookies and similar tracking technologies to track activity on our Services and
              hold certain information. Cookies are files with a small amount of data which may
              include an anonymous unique identifier. You can instruct your browser to refuse all
              cookies or to indicate when a cookie is being sent.
            </p>

            <h2>2. How We Use Your Information</h2>

            <p>We use the information we collect to:</p>

            <ul>
              <li>Provide, operate, and maintain our Services</li>
              <li>Improve, personalize, and expand our Services</li>
              <li>Understand and analyze how you use our Services</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Process transactions and send related information</li>
              <li>Send you emails, including marketing and promotional communications</li>
              <li>Find and prevent fraud and abuse</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. How We Share Your Information</h2>

            <p>
              We may share your information in the following situations: with service providers who
              assist us in operating our Services; to comply with legal obligations; to protect and
              defend our rights and property; with your consent or at your direction; and in
              connection with a merger, acquisition, or sale of all or a portion of our assets.
            </p>

            <h2>4. Data Retention</h2>

            <p>
              We will retain your personal information only for as long as is necessary for the
              purposes set out in this Privacy Policy. We will retain and use your information to
              the extent necessary to comply with our legal obligations, resolve disputes, and
              enforce our policies.
            </p>

            <h2>5. Data Security</h2>

            <p>
              We use administrative, technical, and physical security measures to help protect your
              personal information. While we have taken reasonable steps to secure the personal
              information you provide to us, please be aware that no security measures are perfect
              or impenetrable, and no method of data transmission can be guaranteed against any
              interception or other type of misuse.
            </p>

            <h2>6. Your Privacy Rights</h2>

            <p>
              Depending on your location, you may have certain rights regarding your personal
              information, including the right to access, correct, or delete your personal data; the
              right to restrict or object to our processing of your personal data; and the right to
              data portability. To exercise these rights, please contact us using the information
              provided below.
            </p>

            <h2>7. Third-Party Services</h2>

            <p>
              Our Services may contain links to third-party websites and services that are not owned
              or controlled by Veritact. We have no control over and assume no responsibility for
              the content, privacy policies, or practices of any third-party websites or services.
              We strongly advise you to read the terms and privacy policy of every site you visit.
            </p>

            <h2>8. Children&apos;s Privacy</h2>

            <p>
              Our Services are not intended for use by children under the age of 16. We do not
              knowingly collect personally identifiable information from anyone under the age of 16.
              If you are a parent or guardian and you are aware that your child has provided us with
              personal data, please contact us.
            </p>

            <h2>9. Changes to This Policy</h2>

            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the &ldquo;Last
              Updated&rdquo; date. You are advised to review this Privacy Policy periodically for
              any changes.
            </p>

            <h2>10. Contact Us</h2>

            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <ExternalLink href="mailto:privacy@veritact.com">privacy@veritact.com</ExternalLink>.
            </p>
          </div>
        </div>

        <GridBand columns={9} rows={1} className="border-border border-t border-dashed" />
      </GridSection>
    </div>
  );
}
