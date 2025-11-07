import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You for Your Purchase! - EffetPro',
  description: 'Your Wedding LUTs Master Collection is ready to download. Start creating stunning cinematic wedding films today.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
