import * as React from "react";

const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-11.5 -10.23174 23 20.46348"
        width="1em"
        height="1em"
        {...props}
    >
        <circle r="2.05" fill="currentColor" />
        <g stroke="currentColor" fill="none" strokeWidth="1">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
    </svg>
);

export default ReactIcon;
