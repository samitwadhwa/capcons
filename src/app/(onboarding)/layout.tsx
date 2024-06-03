import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capcons: Sign in to explore or create your social Circles",
  description: "Login to your Social Circles directly as a Creator or a member ? Create your own community for free",
};



export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ul className="list-disc">
        <li>This is onboarding screen, define the image here</li>
      </ul>
        {children}
    </div>
  );
}
