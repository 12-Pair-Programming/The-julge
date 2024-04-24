import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({});

const Home = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    ></main>
  );
};

export default Home;
