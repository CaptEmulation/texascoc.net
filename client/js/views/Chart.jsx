import React from 'react';
import { Chart } from 'react-google-charts'


// 60	50	40	30	20	10
// Shape	49	44	41	38	36	35
// Text	174	156	139	119	114	112
// Simple	45	41	39	36	35	34
// Complex	101	83	71	62	56	51

// Complex	Shape	Simple	Text
// 101	49	45	174
// 83	44	41	156
// 71	41	39	139
// 62	38	36	119
// 56	36	35	114
// 51	35	34	112

export default function({
  data = [
    ['Type', 'Text', 'Complex',	'Shape',	'Simple'	],
    [60, 174, 101,49,	45	],
    [50, 156, 83,	44,	41	],
    [40, 139, 71,	41,	39	],
    [30, 119, 62,	38,	36	],
    [20, 114, 56,	36,	35	],
    [10, 112, 51,	35,	34	]
  ],
  options = {
   	title: 'File Size to Compression Level',
    titleTextStyle: {
      fontSize: 36,
    },
    hAxis: {title: 'JPEG Compression Level (lower is more compression)', minValue: 10, maxValue: 60, titleTextStyle: {
      fontSize: 24,
    }} ,
    vAxis: {title: 'File Size (in kilebytes)', minValue: 0, maxValue: 15, titleTextStyle: {
      fontSize: 24,
    }},
    legend: { position: 'right' },
    series: {
      0: { color: 'black', lineDashStyle: [6, 12] },
      1: { color: 'black', lineDashStyle: [12, 6] },
      2: { color: 'black', lineDashStyle: [24, 4] },
      3: { color: 'black', lineDashStyle: [12, 4, 2, 4, 12] },
    }
  }
}) {
  return (
    <Chart chartType="LineChart" data={data} options={options} graph_id="LineChart"  width={"100%"} height={"1000px"} />
  );
}
