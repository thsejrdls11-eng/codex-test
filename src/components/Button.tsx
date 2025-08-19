import React from 'react';

type Props = React.PropsWithChildren<{
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  className?: string;
}>;

export default function Button({ href, children, onClick, target, rel, className }: Props) {
  const base = 'px-4 py-2 rounded bg-primary text-white hover:bg-secondary transition-colors';
  if (href) {
    return (
      <a href={href} onClick={onClick} target={target} rel={rel} className={`${base} ${className || ''}`.trim()}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={`${base} ${className || ''}`.trim()}>
      {children}
    </button>
  );
}
