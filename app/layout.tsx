import './global.css';

export const metadata = {
  title: 'FitLogic - AI Personal Trainer',
  description: 'Your AI-powered personal trainer for fitness and nutrition.',
    icons: {
    icon:"/assets/fitlogic-logo.png", 
  }
};

import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;