import { memo } from 'react';
import type { SvgComponentProps } from '../types';

const AddIcon = ({
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
    aria-label="Add Icon"
    {...restProps}
  >
    <path d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8Zm8 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16Zm104 48H40a8 8 0 0 0 0 16h104a8 8 0 0 0 0-16Zm88 0h-16v-16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 0-16Z" />
  </svg>
);

export default memo(AddIcon);
