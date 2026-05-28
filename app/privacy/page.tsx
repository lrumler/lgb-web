export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "48px 20px 80px", lineHeight: 1.8 }}>
      <h1 style={{ fontSize: "2.25rem", marginBottom: "0.5rem" }}>
        Let's Go Bird Privacy Policy
      </h1>
      <p style={{ color: "#555", marginBottom: "2rem" }}>
        Effective Date: May 28, 2026
      </p>
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "16px",
          padding: "28px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          whiteSpace: "pre-wrap",
        }}
      >
{`Let's Go Bird Privacy Policy

This Privacy Policy describes how Let's Go Bird, LLC, a Maine limited liability company (Charter Number 202611537DC) ("Let's Go Bird," "we," "our," or "us"), collects, uses, and protects information when you use the Let's Go Bird mobile application and the letsgobird.com website (together, the "Services").

By using the Services, you agree to the practices described in this policy. If you do not agree, please do not use the Services.

1. Information We Collect

Account Information
If you create an account, we collect identifiers such as your username, email address, and (if you sign in with Apple) the relay email Apple provides on your behalf.

Audio Recordings
When you use audio identification features, the audio captured during recording sessions is uploaded to our servers. This includes audio from confirmed identifications and from sessions where no bird was identified. Recordings are retained on our servers indefinitely for the purposes described in Section 2.

Recordings may incidentally capture human voices, conversations, or other ambient sounds. We work to minimize retention of non-bird audio when preparing recordings for use in model training. We do not analyze incidentally-captured human speech for any purpose other than identifying and removing it from training datasets. See Section 6 for your options to limit or exclude this collection.

Photographs
When you use photo identification features, the images you submit are uploaded to our servers for inference and may be retained for the purposes described in Section 2.

Location Data
When you submit a sighting or capture for identification, the app may collect location data including approximate GPS coordinates. We use this data for the purposes described in Section 3.

Device Information
We collect basic device and operating-system information, such as device type, OS version, and app version, to diagnose issues and improve compatibility.

Usage Analytics
We collect aggregated usage analytics — such as which features are used and how often — to improve the Services. This data is not linked to your personal identity.

Crash and Error Reports
We use Sentry (a third-party error-tracking service) to collect crash reports and error diagnostics. These reports may include device information, app state at the time of the crash, and limited contextual data. Sentry processes this data on our behalf under their privacy terms (https://sentry.io/privacy/).

Website Analytics
The letsgobird.com website uses Cloudflare Web Analytics, a privacy-respecting analytics service that does not use cookies or fingerprinting. Cloudflare's privacy practices are described at https://www.cloudflare.com/privacypolicy/.

2. How We Use Information

We use collected information to:
• Operate and improve the Let's Go Bird Services
• Provide species identification features
• Train, validate, and improve our species-identification machine-learning models
• Support biodiversity research and conservation initiatives
• Enable gamification features such as collections, badges, and leaderboards
• Maintain security and prevent abuse

Audio recordings, photographs, and associated location data may be used to expand the species coverage of our identification models over time, including adding new species to active model rosters as training data matures.

3. Location Data

When you submit a sighting or capture, the app may collect approximate GPS coordinates. Location data may be used for:
• Improving identification accuracy through regional plausibility filtering
• Species distribution mapping and conservation research
• App features such as location-based challenges or local rarity tiers

For sensitive species (e.g., species at risk of poaching or harassment), Let's Go Bird may obscure or aggregate location data before sharing with third parties.

4. Data Sharing

Let's Go Bird may share aggregated, anonymized, or appropriately approved datasets with:
• Academic researchers
• Conservation organizations
• Government wildlife agencies

We do not sell your personal information. Personal identifying information is not shared with advertisers or third-party data brokers.

We use the following third-party service providers, each of which processes data on our behalf:
• DigitalOcean — hosting and storage infrastructure
• Sentry — error and crash reporting
• Cloudflare — website hosting and privacy-respecting analytics
• Apple — Sign in with Apple authentication, when used

These providers are bound by their own privacy practices and contractual obligations to handle data appropriately.

5. Data Security

We take reasonable administrative, technical, and physical measures to protect user data, including encrypted storage, access controls, and secure transmission. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.

6. Your Rights and Choices

Regardless of where you live, you have the following rights with respect to your data:

Access
You may request a copy of the personal information we hold about you by emailing admin@letsgobird.com.

Deletion
You may request deletion of your account and associated personal data at any time. Once we have built in-app account deletion, you will be able to do this directly in the app. Until then, you may request deletion by emailing admin@letsgobird.com. We will delete your personal data within 90 days of confirmed request.

Exclusion from Training Data
If you do not want your audio recordings or photographs used for model training, you may:
• Delete your account, which removes your contributions from active datasets within 90 days
• Contact us at admin@letsgobird.com to request exclusion without account deletion

Correction
You may request correction of inaccurate personal data by emailing admin@letsgobird.com.

For California residents (CCPA) and EU/UK residents (GDPR), you have additional rights including the right to non-discrimination for exercising privacy rights, and the right to lodge a complaint with a supervisory authority.

7. App Permissions

The Let's Go Bird app requests the following permissions, used only for the stated purposes:
• Microphone — to record audio for bird-call identification
• Camera — to capture video and still images for visual identification
• Photo Library — to select existing photos for identification (only when you choose this feature)
• Location — to associate sightings with geographic context and to apply regional plausibility filtering during identification

You may revoke any of these permissions at any time through your device's system settings. Some app features will not function without their associated permissions.

8. Children's Privacy

The Let's Go Bird Services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13 without verifiable parental consent. If you believe we have collected information from a child under 13 without consent, please contact us at admin@letsgobird.com and we will promptly delete it.

9. Data Retention

• Audio recordings and photographs are retained indefinitely for model training and quality improvement, unless you request deletion or delete your account.
• Location data associated with sightings is retained alongside the sighting record, indefinitely or until account deletion.
• Account information is retained while your account is active, and deleted within 90 days of account deletion or upon your request.
• Crash reports and analytics are retained per the policies of our service providers (typically 30-90 days).

10. International Data Transfers

Let's Go Bird is operated from the United States. If you access the Services from outside the United States, your data will be transferred to and processed in the United States. We rely on appropriate safeguards (such as standard contractual clauses) when required by applicable law.

11. Changes to This Policy

We may update this Privacy Policy periodically. When we make material changes, we will update the Effective Date at the top of this document and, where appropriate, provide notice through the app or website. Continued use of the Services after the Effective Date constitutes acceptance of the updated policy.

12. Contact Us

If you have questions about this Privacy Policy or wish to exercise any of your rights, please contact us:

Let's Go Bird, LLC
A Maine Limited Liability Company · Charter Number 202611537DC
Registered Agent: Lucas Rumler
46 Weston Rd, Mount Vernon, ME 04352, USA
admin@letsgobird.com
`}
      </div>
    </main>
  );
}
