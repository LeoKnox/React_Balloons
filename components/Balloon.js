export default Balloon = () => {
  const balloonWidth = 200;
  const balloonHeight = 200 * 1.17;
  const threadHeight = 50;

  return (
    <div>
      <svg viewBox={`0 0 ${balloonWidth} ${balloonHeight + threadHeight}`}>
        <rect
          x={balloonWidth / 2}
          y={balloonHeight}
          width="1"
          height={threadHeight}
          fill="red"
        />
        <polygon
          points={`${balloonWidth / 2},${balloonHeight - 3} ${
            balloonWidth / 2 + 8
          },${balloonHeight + 5} ${balloonWidth / 2 - 8},${balloonHeight + 5}`}
          fill="red"
        />
      </svg>
    </div>
  );
};
