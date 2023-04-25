import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      {/* Main Page */}
      <section className="h-screen bg-green-200 flex items-center">
        <div className="w-1/2 pl-40">
          <p className="font-bold text-4xl">
            Hello World! Marcus plans to change the world and reimagine the
            future of blockchain technology
          </p>
        </div>
      </section>
    </main>
  );
}
