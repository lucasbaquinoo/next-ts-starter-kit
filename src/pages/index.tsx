import Head from 'next/head';

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full h-auto px-20 text-center">
        <div className="w-full min-h-full">
          <h1 className="text-6xl font-bold text-white">
            Next.JS + Typescript + Starter Kit 🪄
          </h1>
        </div>
      </main>
    </div>
  );
}
