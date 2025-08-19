import React from 'react';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Timeline from './components/Timeline';
import VoteGuide from './components/VoteGuide';
import Gallery from './components/Gallery';
import FanBook from './components/FanBook';
import Footer from './components/Footer';

export default function App() {
  const navItems = [
    { href: '#metrics', label: '지표' },
    { href: '#timeline', label: '타임라인' },
    { href: '#vote-guide', label: '투표 가이드' },
    { href: '#gallery', label: '갤러리' },
    { href: '#fanbook', label: '메시지 북' },
  ];
  return (
    <div>
      <nav className="fixed top-0 inset-x-0 bg-white shadow z-10">
        <ul className="flex justify-center gap-4 p-4">
          {navItems.map((n) => (
            <li key={n.href}><a href={n.href} className="text-primary hover:underline">{n.label}</a></li>
          ))}
        </ul>
      </nav>
      <main className="pt-16">
        <Hero />
        <Metrics />
        <section id="why" className="py-12">
          <h2 className="text-center text-2xl font-bold mb-8">왜 예선 1위가 중요할까</h2>
          <ul className="max-w-3xl mx-auto list-disc list-inside space-y-2">
            <li>본선 가산점</li>
            <li>주목도 상승</li>
            <li>팬덤 결집</li>
          </ul>
        </section>
        <Timeline />
        <VoteGuide />
        <Gallery />
        <FanBook />
      </main>
      <Footer />
    </div>
  );
}
