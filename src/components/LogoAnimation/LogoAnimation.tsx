// import React from 'react';
// import { gsap } from 'gsap';

const LogoAnimation = () => {
  // const circleRef = React.useRef<SVGCircleElement>(null);
  // const circleRef2 = React.useRef<SVGCircleElement>(null);
  // const pathRef = React.useRef<SVGPathElement>(null);

  // React.useLayoutEffect(() => {
  //   if (circleRef?.current && pathRef?.current) {
  //     const val = { distance: 0 };
  //     gsap.to(val, {
  //       // Animate from distance 0 to the total distance
  //       distance: pathRef.current.getTotalLength(),
  //       // Loop the animation
  //       repeat: 1,
  //       // Make the animation lasts 5 seconds
  //       duration: 3,
  //       // Function call on each frame of the animation
  //       onUpdate: () => {
  //         // Query a point at the new distance value
  //         const point = pathRef.current.getPointAtLength(val.distance);
  //         // Update the circle coordinates
  //         circleRef.current.setAttribute('cx', point.x + 20);
  //         circleRef.current.setAttribute('cy', point.y);

  //         circleRef2.current.setAttribute('cx', point.x);
  //         circleRef2.current.setAttribute('cy', point.y);
  //       },
  //     });
  //   }
  // }, []);

  return (
    <svg viewBox="-10 -10 173 61" width={173} height={61}>
      <path
        d="M153,20.89c0-45.88-74.95,0-74.95,0S.5,66.76.5,20.89s77.54,0,77.54,0S153,66.76,153,20.89Z"
        fill="none"
        stroke="#000"
        vectorEffect="non-scaling-stroke"
        className="infinity"
        // ref={pathRef}
      />
      <circle
        r="5"
        cx="0"
        cy="0"
        fill="purple"
        className="circle"
        // ref={circleRef}
      />
      <circle
        r="5"
        cx="0"
        cy="0"
        fill="purple"
        className="circle"
        // ref={circleRef2}
      />
    </svg>
  );
};

export default LogoAnimation;
