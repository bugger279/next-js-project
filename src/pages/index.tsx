import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 p-5 lg:px-24">
      <div className="textBlock-wrapper">
        <h1 className="textBlock-title">
          <span className="font-bold text-yellow">Help</span> Mr. White
        </h1>
        <p className="textBlock-subtitle">My dad is amazing. It's funny, but I didn't know that until I found out he was going to die.</p>
        <button className="w-32 lg:w-48 tracking-wider uppercase p-2 font-medium text-black bg-yellow focus:outline-none">Donate</button>
      </div>
      <div>
        <Image src="/assets/walter.png" height={640} width={670} quality="100" objectFit="contain" />
      </div>
    </div>
  );
}
