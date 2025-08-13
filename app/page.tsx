import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts'; // Mengimpor font Lusitana
import Image from 'next/image'; // Mengimpor komponen Image
import styles from '@/app/ui/home.module.css'; // Mengimpor CSS Modules untuk segitiga di atas teks

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo /> {/* Sudah di-uncomment */}
      </div>

      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          {/* Segitiga hitam yang dibuat dengan CSS Modules - Dibiarkan tetap ada */}
          <div className={styles.shape} />

          {/* Perbaikan: Menggunakan template literals (`${}`) untuk className */}
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Selamat datang di Acme.</strong> Ini adalah contoh untuk{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , yang dibangun menggunakan App Router.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Segitiga hitam yang dibuat dengan Tailwind - Dihilangkan (dikomentari) */}
          {/* Ini adalah segitiga yang ada di "tengah-tengah layar" dan telah dihapus sesuai permintaan sebelumnya. */}
          {/*
          <div
            className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
          />
          */}

          {/* Gambar hero untuk desktop */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block" // Tampilkan hanya di desktop
            alt="Screenshots of the dashboard project showing desktop version"
          />
          {/* Gambar hero untuk mobile */}
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden" // Tampilkan hanya di mobile
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
