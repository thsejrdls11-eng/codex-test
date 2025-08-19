import React from 'react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-8" id="footer">
      <p className="mb-2">비공식 팬 페이지</p>
      <p className="mb-4">제작자: 팬</p>
      <div className="flex justify-center gap-4 text-2xl">
        <a href="#" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" aria-label="YouTube"><FaYoutube /></a>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
      </div>
    </footer>
  );
}
