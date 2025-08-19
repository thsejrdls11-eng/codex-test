import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import Button from './Button';

export default function Hero() {
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [confettiOn, setConfettiOn] = useState(() => !prefersReduced && localStorage.getItem('confetti') !== 'off');

  useEffect(() => {
    if (confettiOn) {
      confetti({ particleCount: 200, spread: 70, origin: { y: 0.6 } });
    }
  }, [confettiOn]);

  const toggle = () => {
    const next = !confettiOn;
    setConfettiOn(next);
    localStorage.setItem('confetti', next ? 'on' : 'off');
  };

  return (
    <section className="bg-hero text-white text-center py-20" id="hero">
      <h1 className="text-4xl font-bold mb-4">팬 투표 예선 1위! 🎉 이세계아이돌</h1>
      <p className="mb-6">여러분의 한 표가 만든 결과, 본선까지 함께 가요.</p>
      <div className="flex justify-center gap-4 mb-6">
        <Button href="https://example.com/vote" target="_blank" rel="noopener">본선 투표 가이드</Button>
        <Button href="https://example.com/notice" target="_blank" rel="noopener">공식 공지 보기</Button>
        <Button href="https://example.com/community" target="_blank" rel="noopener">커뮤니티</Button>
      </div>
      <Button onClick={toggle} className="bg-white text-primary mt-4">{confettiOn ? '컨페티 끄기' : '컨페티 켜기'}</Button>
    </section>
  );
}
