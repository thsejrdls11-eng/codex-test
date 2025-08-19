import React from 'react';

export default function Timeline() {
  const steps = [
    '예선 시작',
    '중간 집계',
    '예선 1위 확정 🎉',
    '본선 일정 안내',
  ];
  return (
    <section className="py-12" id="timeline">
      <h2 className="text-center text-2xl font-bold mb-8">타임라인</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {steps.map((s, i) => (
          <React.Fragment key={s}>
            <div className="p-4 bg-white rounded shadow text-center w-40">{s}</div>
            {i < steps.length - 1 && <span className="hidden md:inline-block w-8 border-t-2 border-gray-300" aria-hidden="true"></span>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
