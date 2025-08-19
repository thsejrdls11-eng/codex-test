import React from 'react';

export default function Metrics() {
  const metrics = [
    { label: '예선 득표수', value: '123,456' },
    { label: '예선 종료일', value: '2024-05-01' },
    { label: '본선 시작일', value: '2024-05-10' },
  ];
  return (
    <section className="py-12 bg-gray-100" id="metrics">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        {metrics.map((m) => (
          <div key={m.label} className="p-4 bg-white rounded shadow">
            <div className="text-sm text-gray-500">{m.label}</div>
            <div className="text-2xl font-bold">{m.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
