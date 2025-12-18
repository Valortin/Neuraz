import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { polygon } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Neuraz',
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID as string,
  chains: [polygon], // Polygon mainnet only for now – fast & cheap
  ssr: true, // Important for Next.js App Router
});