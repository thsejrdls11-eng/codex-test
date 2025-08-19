import React, { useEffect, useState } from 'react';

type Entry = { name: string; message: string };

const sanitize = (s: string) => s.replace(/</g, '&lt;').replace(/>/g, '&gt;');

export default function FanBook() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('fanbook');
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  const add = () => {
    if (!name || !message) return;
    const entry = { name: sanitize(name), message: sanitize(message) };
    const newEntries = [entry, ...entries];
    setEntries(newEntries);
    localStorage.setItem('fanbook', JSON.stringify(newEntries));
    setName('');
    setMessage('');
  };

  return (
    <section className="py-12 bg-gray-100" id="fanbook">
      <h2 className="text-center text-2xl font-bold mb-8">팬 메시지 북</h2>
      <div className="max-w-xl mx-auto space-y-4">
        <input
          aria-label="이름"
          className="w-full border p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
        />
        <textarea
          aria-label="메시지"
          className="w-full border p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="메시지"
        />
        <button onClick={add} className="px-4 py-2 bg-primary text-white rounded">남기기</button>
        <ul className="space-y-2">
          {entries.map((e, i) => (
            <li key={i} className="bg-white p-2 rounded shadow">
              <strong>{e.name}</strong>
              <p>{e.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
