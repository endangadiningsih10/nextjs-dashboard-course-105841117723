// Import Google Fonts melalui next/font
import { Inter, Lusitana } from 'next/font/google';

// Primary Font: Inter (untuk seluruh aplikasi)
export const inter = Inter({
  subsets: ['latin'], // subset Latin saja
});

// Secondary Font: Lusitana (untuk elemen tertentu)
export const lusitana = Lusitana({
  weight: ['400', '700'], // normal & bold
  subsets: ['latin'],
});