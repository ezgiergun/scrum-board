import { type SVGProps, memo } from 'react';

const DeleteIcon = ({
  width = '1em',
  height = '1em',
  fill = 'currentColor',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Delete Icon"
    width={width}
    height={height}
    fill={fill}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M216 48H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16Zm-24 160H64V64h128ZM80 24a8 8 0 0 1 8-8h80a8 8 0 0 1 0 16H88a8 8 0 0 1-8-8Z" />
  </svg>
);

export default memo(DeleteIcon);
