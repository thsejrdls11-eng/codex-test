import React, { useState } from 'react';

const images = Array.from({ length: 6 }).map((_, i) => `https://via.placeholder.com/300?text=Image+${i + 1}`);

export default function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section className="py-12" id="gallery">
      <h2 className="text-center text-2xl font-bold mb-8">갤러리</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`갤러리 이미지 ${i + 1}`} className="cursor-pointer" onClick={() => setOpen(src)} />
        ))}
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <img src={open} alt="확대 이미지" className="max-h-full max-w-full" />
        </div>
      )}
    </section>
  );
}
