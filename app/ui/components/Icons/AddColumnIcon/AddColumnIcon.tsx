import { memo } from 'react';
import type { SvgComponentProps } from '../types';

const AddColumnIcon = ({
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
    aria-label="Add Column Icon"
    {...restProps}
  >
    <path d="M80 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm0 176H56V48h24Zm72-176h-24a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm0 176h-24V48h24Zm96-80a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8Z" />
  </svg>
);

export default memo(AddColumnIcon);
