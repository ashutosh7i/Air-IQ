import React from 'react'
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';


export default function Dashboard() {

  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 },
  ];

  const [hovered, setHovered] = React.useState(false);
  const handleMouseOver = () => setHovered(true);
  const handleMouseOut = () => setHovered(false);
  return(
    <div className='w-2/5 m-auto'>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine
          data={data}
          style={{
            data: {
              stroke: hovered ? 'tomato' : 'blue',
              strokeWidth: hovered ? 5 : 3,
            },
          }}
          events={[
            {
              target: 'data',
              onMouseOver: handleMouseOver,
              onMouseOut: handleMouseOut,
            },
          ]}
        />
      </VictoryChart>
    </div>
  );
}
