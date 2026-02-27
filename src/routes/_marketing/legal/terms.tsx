import { createFileRoute } from '@tanstack/react-router';
import { GridBand, GridSection } from '@/blocks/GridSection';
import { ExternalLink } from '@/ui/Link';

export const Route = createFileRoute('/_marketing/legal/terms')({
  component: Page,
});

function Page() {
  return (
    <div className="bg-background min-h-screen px-6 py-16 lg:py-24">
      <GridSection>
        <GridBand columns={9} rows={1} className="border-border border-b border-dashed" />

        {/* Header */}
        <div className="border-border border-b border-dashed px-8 py-10 text-center lg:px-12 lg:py-14">
          <h1 className="text-4xl tracking-tight sm:text-5xl">Terms of Service</h1>
          <p className="text-muted-foreground mt-4 text-sm">Last Updated February 25, 2025</p>
        </div>

        {/* Content */}
        <div className="px-8 py-12 lg:px-12 lg:py-16">
          <div className="prose-legal mx-auto max-w-[720px] space-y-8">
            <p>
              Subject to these Terms of Service (this &ldquo;Agreement&rdquo;),{' '}
              <strong>Veritact Inc.</strong> (&ldquo;Veritact&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo; and/or &ldquo;our&rdquo;) provides access to Veritact&apos;s
              Services. &ldquo;Services&rdquo; means, collectively, any products or services made
              available by Veritact or its affiliates; provided that, your use of certain Services
              requires acceptance of additional terms as set forth in Schedule I hereto.
            </p>

            <p>
              If you are entering into this Agreement on behalf of a company, business or other
              legal entity, you represent that you have the authority to bind such entity to this
              Agreement, in which case the term &ldquo;you&rdquo; shall refer to such entity. If you
              do not have such authority, or if you do not agree with this Agreement, you must not
              accept this Agreement and may not use the Services.
            </p>

            <p>
              IMPORTANT: PLEASE READ THE MUTUAL ARBITRATION CLAUSE SET FORTH BELOW CAREFULLY, AS IT
              WILL REQUIRE YOU TO RESOLVE DISPUTES WITH VERITACT THROUGH FINAL AND BINDING
              ARBITRATION. BY ENTERING INTO THIS AGREEMENT, YOU EXPRESSLY ACKNOWLEDGE THAT YOU HAVE
              READ AND UNDERSTAND ALL OF THE TERMS OF THIS MUTUAL ARBITRATION CLAUSE.
            </p>

            <h2>1. Age and Eligibility</h2>

            <p>
              You certify that you are a person at least 16 years of age. Services may only be used
              or accessed through an electronic device controlled by you at all times. A valid
              Veritact account may only be created and maintained if you provide valid information
              in the signup process, and you regularly update such information to assure its
              accuracy. You shall be responsible for maintaining the confidentiality of login
              information associated with your account. Each user must have unique login credentials
              that must not be shared by multiple users. You are responsible for all activities that
              occur under your account.
            </p>

            <h2>2. Acceptable Use</h2>

            <p>
              You agree not to misuse the Services or help anyone else to do so. You must not and
              must not attempt to do any of the following in connection with the Services: probe,
              scan, or test the vulnerability of any system or network; breach or otherwise
              circumvent any security or authentication measures; access, tamper with, or use
              non-public areas or parts of the Services; interfere with or disrupt any user, host,
              or network; access or search the Services by any means other than our publicly
              supported interfaces.
            </p>

            <h2>3. Intellectual Property Rights</h2>

            <p>
              Veritact and its licensors exclusively own all right, title and interest in and to the
              Services, including all associated intellectual property rights. You acknowledge that
              the Services are protected by copyright, trademark, and other laws. You agree not to
              remove, alter, or obscure any copyright, trademark, service mark, or other proprietary
              rights notices incorporated in or accompanying the Services.
            </p>

            <h2>4. Payment Terms</h2>

            <p>
              Certain Services are offered under different pricing plans. You agree to pay all fees
              associated with your selected plan. All fees are non-refundable except as expressly
              set forth in this Agreement. We reserve the right to change our prices. If we do
              change prices, we will provide notice of the change on our website or via email, at
              our discretion, at least 30 days before the change takes effect.
            </p>

            <h2>5. Termination</h2>

            <p>
              You may terminate your account at any time by contacting us. We may also terminate or
              suspend your access to the Services at any time, with or without cause, and with or
              without notice. Upon termination, your right to use the Services will immediately
              cease. All provisions of this Agreement that by their nature should survive
              termination shall survive, including ownership provisions, warranty disclaimers,
              indemnity, and limitations of liability.
            </p>

            <h2>6. Disclaimer of Warranties</h2>

            <p>
              THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
              IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
              NON-INFRINGEMENT. VERITACT DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED,
              SECURE, OR ERROR-FREE.
            </p>

            <h2>7. Limitation of Liability</h2>

            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, VERITACT SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR
              REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL,
              OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OR INABILITY TO USE THE SERVICES.
            </p>

            <h2>8. Governing Law</h2>

            <p>
              This Agreement shall be governed by the laws of the State of Delaware, without regard
              to its conflict of laws principles. Any disputes arising under this Agreement shall be
              resolved through binding arbitration in accordance with the rules of the American
              Arbitration Association.
            </p>

            <h2>9. Contact</h2>

            <p>
              If you have any questions about these Terms, please contact us at{' '}
              <ExternalLink href="mailto:legal@veritact.com">legal@veritact.com</ExternalLink>.
            </p>
          </div>
        </div>

        <GridBand columns={9} rows={1} className="border-border border-t border-dashed" />
      </GridSection>
    </div>
  );
}
