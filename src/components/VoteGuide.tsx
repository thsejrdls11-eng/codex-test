import React from 'react';

export default function VoteGuide() {
  const steps = ['회원가입', '인증', '투표'];
  return (
    <section className="py-12 bg-gray-100" id="vote-guide">
      <h2 className="text-center text-2xl font-bold mb-8">본선 투표 가이드</h2>
      <ol className="max-w-3xl mx-auto list-decimal list-inside space-y-2 mb-6">
        {steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
      <div className="max-w-md mx-auto mb-6">
        <div className="w-full h-48 bg-gray-300 flex items-center justify-center">스크린샷</div>
      </div>
      <ul className="max-w-3xl mx-auto list-disc list-inside text-sm text-gray-600">
        <li>중복 투표는 무효 처리됩니다.</li>
        <li>시간대별 제한을 확인하세요.</li>
      </ul>
    </section>
  );
}
