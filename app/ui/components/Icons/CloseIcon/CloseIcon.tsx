'use client';
import type { SvgProps } from '@/app/ui/components/Icons/types';

export default function CloseIcon({
  width = 24,
  height = 24,
  color = '#000',
  ...props
}: Readonly<SvgProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Close Icon"
      width={width}
      height={height}
      fill={color}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" />
    </svg>
  );
}
