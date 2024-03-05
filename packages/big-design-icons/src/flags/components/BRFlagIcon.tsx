// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo, useId } from 'react';

import { createStyledFlagIcon, FlagIconProps, PrivateIconProps } from '../base';

const FlagIcon: React.FC<FlagIconProps & PrivateIconProps> = ({
  svgRef,
  title = 'BR flag',
  theme,
  ...props
}) => {
  const uniqueTitleId = useId();
  const titleId = title ? props.titleId || uniqueTitleId : undefined;
  const ariaHidden = titleId ? undefined : true;

  return (
    <svg
      aria-hidden={ariaHidden}
      aria-labelledby={titleId}
      ref={svgRef}
      viewBox="0 0 640 480"
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g strokeWidth="1pt">
        <path d="M0 0h640v480H0z" fill="#229e45" fillRule="evenodd" />
        <path d="m321.4 436 301.5-195.7L319.6 44 17.1 240.7z" fill="#f8e509" fillRule="evenodd" />
        <path
          d="M452.8 240c0 70.3-57.1 127.3-127.6 127.3A127.4 127.4 0 1 1 452.8 240"
          fill="#2b49a3"
          fillRule="evenodd"
        />
        <path
          d="m283.3 316.3-4-2.3-4 2 .9-4.5-3.2-3.4 4.5-.5 2.2-4 1.9 4.2 4.4.8-3.3 3m86 26.3-3.9-2.3-4 2 .8-4.5-3.1-3.3 4.5-.5 2.1-4.1 2 4.2 4.4.8-3.4 3.1m-36.2-30-3.4-2-3.5 1.8.8-3.9-2.8-2.9 4-.4 1.8-3.6 1.6 3.7 3.9.7-3 2.7m87-8.5-3.4-2-3.5 1.8.8-3.9-2.7-2.8 3.9-.4 1.8-3.5 1.6 3.6 3.8.7-2.9 2.6m-87.3-22-4-2.2-4 2 .8-4.6-3.1-3.3 4.5-.5 2.1-4.1 2 4.2 4.4.8-3.4 3.2m-104.6-35-4-2.2-4 2 1-4.6-3.3-3.3 4.6-.5 2-4.1 2 4.2 4.4.8-3.3 3.1m13.3 57.2-4-2.3-4 2 .9-4.5-3.2-3.3 4.5-.6 2.1-4 2 4.2 4.4.8-3.3 3.1m132-67.3-3.6-2-3.6 1.8.8-4-2.8-3 4-.5 1.9-3.6 1.7 3.8 4 .7-3 2.7m-6.7 38.3-2.7-1.6-2.9 1.4.6-3.2-2.2-2.3 3.2-.4 1.5-2.8 1.3 3 3 .5-2.2 2.2m-142.2 50.4-2.7-1.5-2.7 1.3.6-3-2.1-2.2 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2M419 299.8l-2.2-1.1-2.2 1 .5-2.3-1.7-1.6 2.4-.3 1.2-2 1 2 2.5.5-1.9 1.5"
          fill="#ffffef"
          fillRule="evenodd"
        />
        <path
          d="m219.3 287.6-2.7-1.5-2.7 1.3.6-3-2.1-2.2 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2"
          fill="#ffffef"
          fillRule="evenodd"
        />
        <path
          d="m219.3 287.6-2.7-1.5-2.7 1.3.6-3-2.1-2.2 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2m42.3 3-2.6-1.4-2.7 1.3.6-3-2.1-2.2 3-.4 1.4-2.7 1.3 2.8 3 .5-2.3 2.1m-4.8 17-2.6-1.5-2.7 1.4.6-3-2.1-2.3 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2m87.4-22.2-2.6-1.6-2.8 1.4.6-3-2-2.3 3-.3 1.4-2.7 1.2 2.8 3 .5-2.2 2.1m-25.1 3-2.7-1.5-2.7 1.4.6-3-2-2.3 3-.3 1.4-2.8 1.2 2.9 3 .5-2.2 2.1m-68.8-5.8-1.7-1-1.7.8.4-1.9-1.3-1.4 1.9-.2.8-1.7.8 1.8 1.9.3-1.4 1.3m167.8 45.4-2.6-1.5-2.7 1.4.6-3-2.1-2.3 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2m-20.8 6-2.2-1.4-2.3 1.2.5-2.6-1.7-1.8 2.5-.3 1.2-2.3 1 2.4 2.5.4-1.9 1.8m10.4 2.3-2-1.2-2.1 1 .4-2.3-1.6-1.7 2.3-.3 1.1-2 1 2 2.3.5-1.7 1.6m29.1-22.8-2-1-2 1 .5-2.3-1.6-1.7 2.3-.3 1-2 1 2.1 2.1.4-1.6 1.6m-38.8 41.8-2.5-1.4-2.7 1.2.6-2.8-2-2 3-.3 1.3-2.5 1.2 2.6 3 .5-2.3 1.9m.6 14.2-2.4-1.4-2.4 1.3.6-2.8-1.9-2 2.7-.4 1.2-2.5 1.1 2.6 2.7.5-2 2m-19-23.1-1.9-1.2-2 1 .4-2.2-1.5-1.7 2.2-.2 1-2 1 2 2.2.4-1.6 1.6m-17.8 2.3-2-1.2-2 1 .5-2.2-1.6-1.7 2.3-.2 1-2 1 2 2.1.4-1.6 1.6m-30.4-24.6-2-1.1-2 1 .5-2.3-1.6-1.6 2.2-.3 1-2 1 2 2.2.5-1.6 1.5m3.7 57-1.6-.9-1.8.9.4-2-1.3-1.4 1.9-.2.9-1.7.8 1.8 1.9.3-1.4 1.3m-46.2-86.6-4-2.3-4 2 .9-4.5-3.2-3.3 4.5-.6 2.2-4 1.9 4.2 4.4.8-3.3 3.1"
          fill="#ffffef"
          fillRule="evenodd"
        />
        <path
          d="M444.4 285.8a124.6 124.6 0 0 0 5.8-19.8c-67.8-59.5-143.3-90-238.7-83.7a124.5 124.5 0 0 0-8.5 20.9c113-10.8 196 39.2 241.4 82.6"
          fill="#fff"
          fillRule="evenodd"
        />
        <path
          d="m414 252.4 2.3 1.3a3.4 3.4 0 0 0-.3 2.2 3 3 0 0 0 1.4 1.7c.7.5 1.4.8 2 .7.6 0 1-.3 1.3-.7a1.3 1.3 0 0 0 .2-.9 2.3 2.3 0 0 0-.5-1c-.2-.3-.7-1-1.5-1.8a7.7 7.7 0 0 1-1.8-3 3.7 3.7 0 0 1 2-4.4 3.8 3.8 0 0 1 2.3-.2 7 7 0 0 1 2.6 1.2c1.4 1 2.3 2 2.6 3.2a4.1 4.1 0 0 1-.6 3.3l-2.4-1.5c.3-.6.4-1.2.2-1.7-.1-.5-.5-1-1.2-1.4a3.2 3.2 0 0 0-1.8-.7 1 1 0 0 0-.9.5c-.2.3-.2.6-.1 1s.6 1.2 1.6 2.2 1.6 1.9 2 2.5a3.9 3.9 0 0 1-.3 4.2 4.1 4.1 0 0 1-1.9 1.5 4 4 0 0 1-2.4.3c-.9-.2-1.8-.6-2.8-1.3q-2.25-1.5-2.7-3.3a5.4 5.4 0 0 1 .6-4zm-11.6-7.6 2.5 1.3a3.4 3.4 0 0 0-.2 2.2 3 3 0 0 0 1.4 1.6c.8.5 1.4.7 2 .6.6 0 1-.3 1.3-.8a1.3 1.3 0 0 0 .2-.8c0-.3-.2-.7-.5-1a35 35 0 0 0-1.6-1.8c-1.1-1.1-1.8-2-2-2.8a3.7 3.7 0 0 1 .4-3.1 3.6 3.6 0 0 1 1.6-1.4 3.8 3.8 0 0 1 2.2-.3 7 7 0 0 1 2.6 1c1.5 1 2.4 2 2.7 3.1a4.1 4.1 0 0 1-.4 3.4l-2.5-1.4c.3-.7.4-1.2.2-1.7s-.6-1-1.3-1.4a3.2 3.2 0 0 0-1.9-.6 1 1 0 0 0-.8.5c-.2.3-.2.6-.1 1s.7 1.2 1.7 2.2 1.7 1.8 2 2.4a3.9 3.9 0 0 1 0 4.2 4.2 4.2 0 0 1-1.8 1.6 4 4 0 0 1-2.4.3 8 8 0 0 1-2.9-1.1 6 6 0 0 1-2.8-3.2 5.4 5.4 0 0 1 .4-4m-14.2-3.8 7.3-12 8.8 5.5-1.2 2-6.4-4-1.6 2.7 6 3.7-1.3 2-6-3.7-2 3.3 6.7 4-1.2 2-9-5.5zm-20.7-17 1.1-2 5.4 2.7-2.5 5c-.8.2-1.8.3-3 .2a9.4 9.4 0 0 1-3.3-1 7.7 7.7 0 0 1-3-2.6 6 6 0 0 1-1-3.5 8.6 8.6 0 0 1 1-3.7 8 8 0 0 1 2.6-3 6.2 6.2 0 0 1 3.6-1.1c1 0 2 .3 3.2 1 1.6.7 2.6 1.7 3.1 2.8a5 5 0 0 1 .3 3.5l-2.7-.8a3 3 0 0 0-.2-2c-.3-.6-.8-1-1.6-1.4a3.8 3.8 0 0 0-3.1-.3c-1 .3-1.9 1.2-2.6 2.6s-1 2.7-.7 3.8a3.7 3.7 0 0 0 2 2.4c.5.3 1.1.5 1.7.5a6 6 0 0 0 1.8 0l.8-1.6zm-90.2-22.3 2-14 4.2.7 1.1 9.8 3.9-9 4.2.6-2 13.8-2.7-.4 1.7-10.9-4.4 10.5-2.7-.4-1.1-11.3-1.6 11zm-14.1-1.7 1.3-14 10.3 1-.2 2.4-7.5-.7-.3 3 7 .7-.3 2.4-7-.7-.3 3.8 7.8.7-.2 2.4z"
          fill="#309e3a"
        />
        <g strokeOpacity={0.5}>
          <path
            d="M216.5 191.3c0-1.5.3-2.6.7-3.6a6.7 6.7 0 0 1 1.4-1.9 5.4 5.4 0 0 1 1.8-1.2c1-.3 2-.5 3-.5 2.1 0 3.7.8 5 2a7.4 7.4 0 0 1 1.6 5.5c0 2.2-.7 4-2 5.3a6.5 6.5 0 0 1-5 1.7 6.6 6.6 0 0 1-4.8-2 7.3 7.3 0 0 1-1.7-5.3"
            fill="#309e3a"
          />
          <path
            d="M219.4 191.3c0 1.5.3 2.7 1 3.6.7.8 1.6 1.3 2.8 1.3a3.5 3.5 0 0 0 2.8-1.1c.7-.8 1-2 1.1-3.7 0-1.6-.2-2.8-1-3.6a3.5 3.5 0 0 0-2.7-1.3 3.6 3.6 0 0 0-2.8 1.2c-.8.8-1.1 2-1.2 3.6"
            fill="#f7ffff"
          />
        </g>
        <g strokeOpacity={0.5}>
          <path
            d="m233 198.5.2-14h6c1.5 0 2.5.2 3.2.5.7.2 1.2.7 1.6 1.3s.6 1.4.6 2.3a3.8 3.8 0 0 1-1 2.6 4.5 4.5 0 0 1-2.7 1.2l1.5 1.2c.4.4.9 1.2 1.5 2.3l1.7 2.8h-3.4l-2-3.2-1.4-2a2.1 2.1 0 0 0-.9-.6 5 5 0 0 0-1.4-.2h-.6v5.8z"
            fill="#309e3a"
          />
          <path
            d="M236 190.5h2c1.4 0 2.3 0 2.6-.2.3 0 .6-.3.8-.5s.3-.7.3-1c0-.6-.1-1-.4-1.2-.2-.3-.6-.5-1-.6h-2l-2.3-.1z"
            fill="#fff"
          />
        </g>
        <g strokeOpacity={0.5}>
          <path
            d="m249 185.2 5.2.3c1.1 0 2 .1 2.6.3a4.7 4.7 0 0 1 2 1.4 6 6 0 0 1 1.2 2.4q.45 1.35.3 3.3a9.3 9.3 0 0 1-.5 3c-.4 1-1 1.8-1.7 2.4a5 5 0 0 1-2 1c-.6.2-1.5.2-2.5.2l-5.3-.3z"
            fill="#309e3a"
          />
          <path
            d="m251.7 187.7-.5 9.3h3.8c.5 0 .9-.2 1.2-.5s.6-.7.8-1.3.4-1.5.4-2.6l-.1-2.5a3.2 3.2 0 0 0-.8-1.4 2.7 2.7 0 0 0-1.2-.7 13 13 0 0 0-2.3-.3z"
            fill="#fff"
          />
        </g>
        <g strokeOpacity={0.5}>
          <path
            d="m317.6 210.2 3.3-13.6 4.4 1 3.2 1c.7.4 1.3 1 1.6 1.9.4.8.4 1.7.2 2.8-.2.8-.5 1.5-1 2a3.9 3.9 0 0 1-3 1.4c-.7 0-1.7-.2-3-.5l-1.7-.5-1.2 5.2z"
            fill="#309e3a"
          />
          <path
            d="m323 199.6-.8 3.8 1.5.4c1 .2 1.8.4 2.2.3a1.9 1.9 0 0 0 1.6-1.5c0-.5 0-.9-.2-1.3a2 2 0 0 0-1-.9l-1.9-.5-1.3-.3z"
            fill="#fff"
          />
        </g>
        <g strokeOpacity={0.5}>
          <path
            d="m330.6 214.1 4.7-13.2 5.5 2c1.5.5 2.4 1 3 1.4.5.5.9 1 1 1.8s.2 1.5 0 2.3c-.4 1-1 1.7-1.8 2.2q-1.2.6-3 .3c.4.5.8 1 1 1.6l.8 2.7.6 3.1-3.1-1.1-1-3.6a19.5 19.5 0 0 0-.7-2.4 2.1 2.1 0 0 0-.6-.8c-.2-.3-.6-.5-1.3-.7l-.5-.2-2 5.6z"
            fill="#309e3a"
          />
          <path
            d="m336 207.4 1.9.7c1.3.5 2.1.7 2.5.7.3 0 .6 0 .9-.3q.45-.3.6-.9.3-.6 0-1.2a1.7 1.7 0 0 0-.8-.9l-2-.7-2-.7-1.2 3.3z"
            fill="#fff"
          />
        </g>
        <g strokeOpacity={0.5}>
          <path
            d="M347 213.6a9 9 0 0 1 1.7-3.2 6.6 6.6 0 0 1 1.8-1.5 6 6 0 0 1 2-.7c1 0 2 0 3.1.4a6.5 6.5 0 0 1 4.2 3.3c.8 1.6.8 3.5.2 5.7a7.4 7.4 0 0 1-3.4 4.5c-1.5.9-3.3 1-5.2.4a6.6 6.6 0 0 1-4.2-3.3 7.3 7.3 0 0 1-.2-5.6"
            fill="#309e3a"
          />
          <path
            d="M349.8 214.4c-.4 1.5-.5 2.8 0 3.8s1.2 1.6 2.3 2c1 .3 2 .2 3-.4 1-.5 1.6-1.6 2.1-3.2.5-1.5.5-2.7 0-3.7a3.5 3.5 0 0 0-2.2-2 3.6 3.6 0 0 0-3 .3c-1 .6-1.7 1.6-2.2 3.2"
            fill="#fff"
          />
        </g>
        <g strokeOpacity={0.5}>
          <path
            d="m374.3 233.1 6.4-12.4 5.3 2.7a10 10 0 0 1 2.7 1.9c.5.5.8 1.1.8 1.9s0 1.5-.4 2.2a3.8 3.8 0 0 1-2 2c-1 .2-2 .2-3.1-.2.4.6.6 1.2.8 1.7.2.6.3 1.5.4 2.8l.2 3.2-3-1.5-.4-3.7a20 20 0 0 0-.3-2.5 2 2 0 0 0-.5-1l-1.2-.7-.5-.3-2.7 5.2z"
            fill="#309e3a"
          />
          <path
            d="m380.5 227.2 1.9 1c1.2.6 2 1 2.3 1s.7 0 1-.2c.3-.1.5-.4.7-.8s.3-.8.2-1.2a2 2 0 0 0-.7-1 24 24 0 0 0-1.8-1l-2-1z"
            fill="#fff"
          />
        </g>
        <g strokeOpacity={0.5}>
          <path
            d="M426.1 258.7a8.9 8.9 0 0 1 2.5-2.6 6.6 6.6 0 0 1 2.2-.9 5.5 5.5 0 0 1 2.2 0c1 .2 1.9.6 2.8 1.2a6.6 6.6 0 0 1 3 4.4c.3 1.7-.2 3.6-1.4 5.5a7.3 7.3 0 0 1-4.5 3.3 6.5 6.5 0 0 1-5.2-1.1 6.6 6.6 0 0 1-3-4.4c-.3-1.8.2-3.6 1.4-5.4"
            fill="#309e3a"
          />
          <path
            d="M428.6 260.3c-1 1.3-1.3 2.5-1.1 3.6a3.6 3.6 0 0 0 1.6 2.5q1.5 1.05 3 .6c1-.3 2-1 2.9-2.4s1.3-2.6 1.1-3.6c-.1-1-.7-1.9-1.6-2.6s-2-.8-3-.5q-1.5.3-3 2.4z"
            fill="#fff"
          />
        </g>
        <path
          d="m301.8 204.5 2.3-9.8 7.2 1.7-.3 1.6-5.3-1.2-.5 2.2 4.9 1.1-.4 1.7-4.9-1.2-.6 2.7 5.5 1.3-.4 1.6z"
          fill="#309e3a"
        />
      </g>
    </svg>
  );
};
const FlagIconWithForwardedRef = forwardRef<SVGSVGElement, FlagIconProps>((iconProps, ref) => (
  <FlagIcon {...iconProps} svgRef={ref} />
));

export const BRFlagIcon = memo(createStyledFlagIcon(FlagIconWithForwardedRef));
BRFlagIcon.displayName = 'BRFlagIcon';
