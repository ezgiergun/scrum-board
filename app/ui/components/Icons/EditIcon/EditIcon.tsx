import { memo } from 'react';
import type { SvgComponentProps } from '../types';

const EditIcon = ({
  size = 20,
  fill = 'currentColor',
  stroke = 'currentColor',
  strokeWidth = 0,
  className = '',
  style,
  ...restProps
}: SvgComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 256 256"
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    className={className}
    style={style}
    aria-label="Edit Icon"
    {...restProps}
  >
    <path d="m227.31 73.37-44.68-44.69a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69L227.31 96a16 16 0 0 0 0-22.63ZM51.31 160 136 75.31 152.69 92 68 176.68ZM48 179.31 76.69 208H48Zm48 25.38L79.31 188 164 103.31 180.69 120Zm96-96L147.31 64l24-24L216 84.68Z" />
  </svg>
);

export default memo(EditIcon);
