/**
 * Dessine une voiture vu de dessus.
 * @param {object} ctx - Contexte canvas 2D
 * @param {string} color - car color (defaults to blue, #1243A5)
 */
export function draw_car_top(ctx, color = "#1243A5") {
  ctx.save();
  ctx.strokeStyle = "rgba(0,0,0,0)";
  ctx.scale(0.25641025641025644, 0.25641025641025644);
  ctx.translate(-156, -338);

  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.translate(1, 0);
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(155.413239, 0);
  ctx.bezierCurveTo(
    181.584006,
    0.0696340713,
    206.676788,
    3.09196444,
    228.918138,
    11,
  );
  ctx.bezierCurveTo(251.418138, 19, 270.918138, 35.5, 273.918138, 40);
  ctx.bezierCurveTo(276.918138, 44.5, 283.418138, 65.5, 283.418138, 73);
  ctx.bezierCurveTo(
    284.467703,
    77.693689,
    284.967703,
    82.8603557,
    284.918138,
    88.5,
  );
  ctx.bezierCurveTo(
    284.661657,
    117.683186,
    283.855611,
    147.33935,
    282.5,
    177.468492,
  );
  ctx.lineTo(282.5, 177.468492);
  ctx.lineTo(283.5, 219.968492);
  ctx.bezierCurveTo(
    284.445426,
    298.696963,
    284.918138,
    357.540799,
    284.918138,
    396.5,
  );
  ctx.bezierCurveTo(
    284.918138,
    454.938802,
    284.474513,
    443.997951,
    284.5,
    491.468492,
  );
  ctx.bezierCurveTo(284.5, 507.468492, 286.163723, 530.438435, 285, 548.968492);
  ctx.bezierCurveTo(
    284.224184,
    561.321864,
    282.03023,
    578.499033,
    278.418138,
    600.5,
  );
  ctx.bezierCurveTo(
    273.751472,
    624.5,
    270.584805,
    638.166667,
    268.918138,
    641.5,
  );
  ctx.bezierCurveTo(266.418138, 646.5, 245.752123, 663.555339, 223.418138, 669);
  ctx.bezierCurveTo(
    208.528815,
    672.629774,
    185.556103,
    674.952605,
    154.5,
    675.968492,
  );
  ctx.lineTo(155.413, 675.938);
  ctx.lineTo(155.413239, 675.968492);
  ctx.lineTo(154.956, 675.953);
  ctx.lineTo(154.5, 675.968492);
  ctx.lineTo(154.5, 675.938);
  ctx.lineTo(154.357639, 675.933353);
  ctx.bezierCurveTo(
    123.836073,
    674.899645,
    101.215227,
    672.588527,
    86.4951005,
    669,
  );
  ctx.bezierCurveTo(
    64.1611161,
    663.555339,
    43.4951005,
    646.5,
    40.9951005,
    641.5,
  );
  ctx.bezierCurveTo(
    39.3284338,
    638.166667,
    36.1617671,
    624.5,
    31.4951005,
    600.5,
  );
  ctx.bezierCurveTo(
    27.8830083,
    578.499033,
    25.6890544,
    561.321864,
    24.9132388,
    548.968492,
  );
  ctx.bezierCurveTo(
    23.7495154,
    530.438435,
    25.4132388,
    507.468492,
    25.4132388,
    491.468492,
  );
  ctx.bezierCurveTo(
    25.4382164,
    444.947362,
    25.0126579,
    454.524533,
    24.9956255,
    399.924095,
  );
  ctx.lineTo(24.9956677, 394.138586);
  ctx.bezierCurveTo(
    25.0141981,
    355.179091,
    25.4867217,
    297.122393,
    26.4132388,
    219.968492,
  );
  ctx.lineTo(27.4132388, 177.468492);
  ctx.bezierCurveTo(
    26.0576277,
    147.33935,
    25.2515816,
    117.683186,
    24.9951005,
    88.5,
  );
  ctx.bezierCurveTo(
    24.9455355,
    82.8603557,
    25.4455355,
    77.693689,
    26.4951005,
    73,
  );
  ctx.bezierCurveTo(26.4951005, 65.5, 32.9951005, 44.5, 35.9951005, 40);
  ctx.bezierCurveTo(38.9951005, 35.5, 58.4951005, 19, 80.9951005, 11);
  ctx.bezierCurveTo(
    103.236649,
    3.09189386,
    128.329681,
    0.0695801232,
    154.500475,
    0.00119053655,
  );
  ctx.bezierCurveTo(
    154.652149,
    0,
    154.804263,
    0.0000988938539,
    154.95634,
    0.000297060093,
  );
  ctx.lineTo(155.413239, 0);
  ctx.lineTo(155.413239, 0);
  ctx.closePath();
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#030303";
  ctx.fillStyle = "rgba(3, 3, 3, 0.801)";
  ctx.beginPath();
  ctx.moveTo(64.1791468, 297.531508);
  ctx.lineTo(42.5818617, 214.531508);
  ctx.bezierCurveTo(
    53.6316355,
    194.531508,
    91.7149321,
    179.031508,
    155,
    179.031508,
  );
  ctx.lineTo(156.89099, 179.036147);
  ctx.bezierCurveTo(
    219.04403,
    179.341958,
    256.478862,
    194.731508,
    267.418138,
    214.531508,
  );
  ctx.lineTo(267.418138, 214.531508);
  ctx.lineTo(245.820853, 297.531508);
  ctx.bezierCurveTo(
    216.413889,
    290.198175,
    186.140271,
    286.531508,
    155,
    286.531508,
  );
  ctx.lineTo(155, 286.531508);
  ctx.bezierCurveTo(
    123.859729,
    286.531508,
    93.5861108,
    290.198175,
    64.1791468,
    297.531508,
  );
  ctx.closePath();
  ctx.moveTo(49.0818617, 545.531508);
  ctx.bezierCurveTo(
    65.5818617,
    466.531508,
    60.0818617,
    385.531508,
    58.5818617,
    315.031508,
  );
  ctx.bezierCurveTo(
    55.915195,
    297.698175,
    48.915195,
    266.031508,
    37.5818617,
    220.031508,
  );
  ctx.lineTo(37.5818617, 409.531508);
  ctx.lineTo(39.0818617, 528.531508);
  ctx.bezierCurveTo(
    42.8615984,
    563.871943,
    46.1949318,
    569.53861,
    49.0818617,
    545.531508,
  );
  ctx.closePath();
  ctx.moveTo(260.588435, 545.5);
  ctx.bezierCurveTo(244.088435, 466.5, 249.588435, 385.5, 251.088435, 315);
  ctx.bezierCurveTo(253.755101, 297.666667, 260.755101, 266, 272.088435, 220);
  ctx.lineTo(272.088435, 409.5);
  ctx.lineTo(270.588435, 528.5);
  ctx.bezierCurveTo(
    266.808698,
    563.840435,
    263.475365,
    569.507102,
    260.588435,
    545.5,
  );
  ctx.closePath();
  ctx.moveTo(153.54325, 615.996436);
  ctx.bezierCurveTo(
    120.553046,
    615.834865,
    89.565916,
    610.179889,
    60.5818617,
    599.031508,
  );
  ctx.lineTo(60.5818617, 599.031508);
  ctx.lineTo(69.2196995, 512.531508);
  ctx.bezierCurveTo(93.2101701, 521.510503, 121.803604, 526, 155, 526);
  ctx.lineTo(155, 526);
  ctx.bezierCurveTo(
    188.196396,
    525.312328,
    216.78983,
    520.822831,
    240.7803,
    512.531508,
  );
  ctx.lineTo(249.418138, 599.031508);
  ctx.bezierCurveTo(220.007848, 610.343836, 188.535135, 616, 155, 616);
  ctx.closePath();
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.moveTo(38, 239);
  ctx.lineTo(30, 242);
  ctx.lineTo(30.5, 251.5);
  ctx.lineTo(38, 254.5);
  ctx.lineTo(38, 239);
  ctx.closePath();
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#000";
  ctx.transform(-1, 0, 0, 1, 550, 0);
  ctx.beginPath();
  ctx.moveTo(279, 239);
  ctx.lineTo(271, 242);
  ctx.lineTo(271.5, 251.5);
  ctx.lineTo(279, 254.5);
  ctx.lineTo(279, 239);
  ctx.closePath();
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = "#000";
  ctx.strokeStyle = "rgba(0, 0, 0, 0.237)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(33.5, 241.5);
  ctx.bezierCurveTo(34.5, 242.5, 34, 246.333333, 34, 249);
  ctx.bezierCurveTo(34, 250.777778, 33.5, 253.111111, 32.5, 256);
  ctx.lineTo(0.5, 265.5);
  ctx.bezierCurveTo(0.5, 261.833333, 0.833333333, 259.166667, 1.5, 257.5);
  ctx.bezierCurveTo(2.62191577, 254.695211, 4.55968578, 251.866492, 7.5, 250);
  ctx.bezierCurveTo(
    11.7551385,
    247.298866,
    19.4113334,
    244.179723,
    30.4685849,
    240.642572,
  );
  ctx.bezierCurveTo(31.1334275, 240.429892, 32.5, 240.5, 33.5, 241.5);
  ctx.closePath();
  ctx.moveTo(276.5, 241.5);
  ctx.bezierCurveTo(
    277.5,
    240.5,
    278.866573,
    240.429892,
    279.531415,
    240.642572,
  );
  ctx.bezierCurveTo(290.588667, 244.179723, 298.244862, 247.298866, 302.5, 250);
  ctx.bezierCurveTo(
    305.440314,
    251.866492,
    307.378084,
    254.695211,
    308.5,
    257.5,
  );
  ctx.bezierCurveTo(309.166667, 259.166667, 309.5, 261.833333, 309.5, 265.5);
  ctx.lineTo(309.5, 265.5);
  ctx.lineTo(277.5, 256);
  ctx.bezierCurveTo(276.5, 253.111111, 276, 250.777778, 276, 249);
  ctx.bezierCurveTo(276, 246.333333, 275.5, 242.5, 276.5, 241.5);
  ctx.closePath();
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#AE0000";
  ctx.strokeStyle = "#000";
  ctx.strokeStyle = "rgba(0, 0, 0, 0.42)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(39.5, 612.5);
  ctx.bezierCurveTo(40.1666667, 612.5, 40.8333333, 615, 41.5, 620);
  ctx.bezierCurveTo(42.5, 628.666667, 44, 634.833333, 46, 638.5);
  ctx.bezierCurveTo(48, 642.166667, 52.1666667, 646.833333, 58.5, 652.5);
  ctx.bezierCurveTo(50.5, 648.833333, 45.5, 645.833333, 43.5, 643.5);
  ctx.bezierCurveTo(41.5, 641.166667, 39.5, 636, 37.5, 628);
  ctx.lineTo(37.5, 618);
  ctx.bezierCurveTo(38.1666667, 614.333333, 38.8333333, 612.5, 39.5, 612.5);
  ctx.closePath();
  ctx.moveTo(269.5, 612.5);
  ctx.bezierCurveTo(270.166667, 612.5, 270.833333, 614.333333, 271.5, 618);
  ctx.lineTo(271.5, 618);
  ctx.lineTo(271.5, 628);
  ctx.bezierCurveTo(269.5, 636, 267.5, 641.166667, 265.5, 643.5);
  ctx.bezierCurveTo(263.5, 645.833333, 258.5, 648.833333, 250.5, 652.5);
  ctx.bezierCurveTo(256.833333, 646.833333, 261, 642.166667, 263, 638.5);
  ctx.bezierCurveTo(265, 634.833333, 266.5, 628.666667, 267.5, 620);
  ctx.bezierCurveTo(268.166667, 615, 268.833333, 612.5, 269.5, 612.5);
  ctx.closePath();
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#181818";
  ctx.strokeStyle = "#000";
  ctx.strokeStyle = "rgba(0, 0, 0, 0.26)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(97.5, 8.81854455);
  ctx.bezierCurveTo(108.978412, 4.99240719, 152, 1.31854455, 154.5, 3.81854455);
  ctx.bezierCurveTo(
    156.166667,
    5.48521121,
    153.5,
    6.98521121,
    146.5,
    8.31854455,
  );
  ctx.lineTo(146.5, 8.31854455);
  ctx.lineTo(93, 13.8185445);
  ctx.bezierCurveTo(93, 11.4852112, 94.5, 9.81854455, 97.5, 8.81854455);
  ctx.closePath();
  ctx.moveTo(213.480769, 8.81854455);
  ctx.bezierCurveTo(
    216.480769,
    9.81854455,
    217.980769,
    11.4852112,
    217.980769,
    13.8185445,
  );
  ctx.lineTo(164.480769, 8.31854455);
  ctx.bezierCurveTo(
    157.480769,
    6.98521121,
    154.814103,
    5.48521121,
    156.480769,
    3.81854455,
  );
  ctx.bezierCurveTo(
    158.980769,
    1.31854455,
    202.002357,
    4.99240719,
    213.480769,
    8.81854455,
  );
  ctx.closePath();
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#AFAFAF";
  ctx.fillStyle = "rgba(175, 175, 175, 0.534)";
  ctx.strokeStyle = "#000";
  ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
  ctx.beginPath();
  ctx.moveTo(80, 18);
  ctx.bezierCurveTo(57, 32.5, 45, 43, 43, 45.5);
  ctx.bezierCurveTo(41.6666667, 47.1666667, 37.6666667, 55.5, 31, 70.5);
  ctx.bezierCurveTo(31.6666667, 63.8333333, 32.6666667, 58.8333333, 34, 55.5);
  ctx.bezierCurveTo(36, 50.5, 43, 41, 48.5, 37);
  ctx.bezierCurveTo(54, 33, 67.5, 24, 80, 18);
  ctx.closePath();
  ctx.moveTo(230, 18);
  ctx.bezierCurveTo(242.5, 24, 256, 33, 261.5, 37);
  ctx.bezierCurveTo(267, 41, 274, 50.5, 276, 55.5);
  ctx.bezierCurveTo(277.333333, 58.8333333, 278.333333, 63.8333333, 279, 70.5);
  ctx.bezierCurveTo(272.333333, 55.5, 268.333333, 47.1666667, 267, 45.5);
  ctx.bezierCurveTo(265, 43, 253, 32.5, 230, 18);
  ctx.closePath();
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.strokeStyle = "#2657BA";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(26.5, 384);
  ctx.bezierCurveTo(25.5, 390.833333, 25, 396.666667, 25, 401.5);
  ctx.bezierCurveTo(25, 406.333333, 25.5, 410.166667, 26.5, 413);
  ctx.moveTo(29.5, 525);
  ctx.bezierCurveTo(28.5, 532.333333, 28, 538.5, 28, 543.5);
  ctx.bezierCurveTo(28, 548.5, 28.8333333, 552.333333, 30.5, 555);
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.strokeStyle = "#2657BA";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.transform(-1, 0, 0, 1, 569.5, 0);
  ctx.beginPath();
  ctx.moveTo(285.5, 384);
  ctx.bezierCurveTo(284.5, 390.833333, 284, 396.666667, 284, 401.5);
  ctx.bezierCurveTo(284, 406.333333, 284.5, 410.166667, 285.5, 413);
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.strokeStyle = "#2657BA";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.transform(-1, 0, 0, 1, 560.5, 0);
  ctx.beginPath();
  ctx.moveTo(280.5, 525);
  ctx.bezierCurveTo(279.5, 532.333333, 279, 538.5, 279, 543.5);
  ctx.bezierCurveTo(279, 548.5, 279.833333, 552.333333, 281.5, 555);
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.strokeStyle = "#000";
  ctx.strokeStyle = "rgba(0, 0, 0, 0.08)";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.translate(0, -45);
  ctx.moveTo(46.5, 263.5);
  ctx.bezierCurveTo(46.5, 263.5, 49, 200.5, 53.5, 170);
  ctx.bezierCurveTo(58, 139.5, 66.5, 99.5, 94, 71);
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.strokeStyle = "#000";
  ctx.strokeStyle = "rgba(0, 0, 0, 0.08)";
  ctx.lineWidth = 4;
  ctx.transform(-1, 0, 0, 1, 482.5, 0);
  ctx.beginPath();
  ctx.translate(0, -45);
  ctx.moveTo(217.5, 263.5);
  ctx.bezierCurveTo(217.5, 263.5, 220, 200.5, 224.5, 170);
  ctx.bezierCurveTo(229, 139.5, 237.5, 99.5, 265, 71);
  ctx.stroke();
  ctx.restore();
  ctx.restore();
  ctx.restore();
}

/**
 * Dessine une voiture vu de coté.
 * @param {object} ctx - Context canvas 2D
 * @param {float} angle - Angle de rotation des roues (en radians)
 * @param {boolean} flash - Rear lights On/Off
 * @param {string} color - Car color (defaults to blue, #1243A5)
 */
export function draw_car_side(ctx, angle = 0, flash = false, color = '#1243A5') {
  ctx.save();

  ctx.translate(-90, -380);
  ctx.scale( 1.8, 1.8);

  /// Main car background
  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = "#434343";
  ctx.lineWidth = 0.13229167;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.bezierCurveTo(
    42.532791,
    227.23314,
    54.974666,
    228.34295,
    54.790252,
    228.57899999999998,
  );
  ctx.lineTo(74.835466, 229.45908999999997);
  ctx.lineTo(139.52006, 229.64807999999996);
  ctx.lineTo(163.16804, 230.04897999999997);
  ctx.bezierCurveTo(
    166.95082,
    229.38433999999998,
    173.36766,
    228.67481999999998,
    174.37666,
    228.04445999999996,
  );
  ctx.bezierCurveTo(
    174.91047999999998,
    227.76865999999995,
    174.91447,
    216.95358999999996,
    173.70848999999998,
    215.08188999999996,
  );
  ctx.bezierCurveTo(
    172.50576999999998,
    213.21099999999996,
    166.51966,
    210.67193999999995,
    160.63973,
    209.46922999999995,
  );
  ctx.bezierCurveTo(
    154.75979999999998,
    208.26650999999995,
    130.02661999999998,
    205.05927999999994,
    130.02661999999998,
    205.05927999999994,
  );
  ctx.bezierCurveTo(
    130.02661999999998,
    205.05927999999994,
    119.20220999999998,
    198.64480999999995,
    109.31323999999998,
    196.10574999999994,
  );
  ctx.bezierCurveTo(
    99.42426399999998,
    193.56668999999994,
    86.11067399999997,
    193.57752999999994,
    77.25163899999998,
    195.16493999999994,
  );
  ctx.bezierCurveTo(
    68.24812899999998,
    196.77822999999995,
    51.98392199999998,
    204.38035999999994,
    51.98392199999998,
    204.38035999999994,
  );
  ctx.bezierCurveTo(
    47.50536699999998,
    204.96123999999995,
    38.906115999999976,
    205.17442999999994,
    38.54825599999998,
    206.12298999999993,
  );
  ctx.lineTo(37.55136699999998, 208.12212999999994);
  ctx.bezierCurveTo(
    37.52177699999998,
    209.59210999999993,
    37.74655999999998,
    211.06209999999993,
    37.33267799999998,
    212.53207999999995,
  );
  ctx.bezierCurveTo(
    36.19966499999998,
    213.31221999999994,
    34.97500999999998,
    214.19973999999996,
    34.47776799999998,
    215.47203999999996,
  );
  ctx.bezierCurveTo(
    34.405577999999984,
    217.15014999999997,
    34.336711999999984,
    219.08696999999995,
    34.61140099999999,
    220.69454999999996,
  );
  ctx.bezierCurveTo(
    35.11816299999999,
    222.24788999999996,
    36.18972699999998,
    224.55139999999997,
    37.21727999999999,
    225.60562999999996,
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.strokeStyle = "#434343";
  ctx.strokeStyle = "rgba(67, 67, 67, 1)";
  ctx.lineWidth = 0.13229167;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.moveTo(158.51376, 215.9241);
  ctx.lineTo(167.01823, 215.19178000000002);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.strokeStyle = "#434343";
  ctx.strokeStyle = "rgba(67, 67, 67, 1)";
  ctx.lineWidth = 0.13229167;
  ctx.lineCap = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.moveTo(43.502696, 208.64806);
  ctx.bezierCurveTo(
    77.291328,
    209.08982999999998,
    110.36103,
    210.02349999999998,
    141.76469,
    212.09709999999998,
  );
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.strokeStyle = "#434343";
  ctx.strokeStyle = "rgba(67, 67, 67, 1)";
  ctx.lineWidth = 0.13229167;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.moveTo(42.394756, 210.35841);
  ctx.bezierCurveTo(
    42.394756,
    210.35841,
    44.299922,
    213.6119,
    45.70309,
    213.87917,
  );
  ctx.bezierCurveTo(
    47.106255000000004,
    214.14643999999998,
    58.465209,
    214.31349,
    58.465209,
    214.31349,
  );
  ctx.fill();
  ctx.stroke();
  ctx.restore();


  /// REAR BRAKE

  ctx.save();
  ctx.fillStyle = "#ae0000";
  ctx.fillStyle = "rgba(174, 0, 0, 1)";
  ctx.strokeStyle = "#434343";
  ctx.strokeStyle = "rgba(67, 67, 67, 1)";
  ctx.lineWidth = 0.13229167;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.moveTo(37.380097, 208.34065);
  ctx.lineTo(38.270088, 206.66369);
  ctx.lineTo(42.191593, 206.64009000000001);
  ctx.bezierCurveTo(
    42.191593,
    206.64009000000001,
    42.475072999999995,
    206.59279,
    42.947544,
    207.23068,
  );
  ctx.bezierCurveTo(
    43.420014,
    207.86851000000001,
    43.585378,
    208.31736,
    43.585378,
    208.31736,
  );
  ctx.lineTo(42.654046, 208.31136);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  /// Reverse light
  ctx.save();
  ctx.fillStyle = flash ? "#DDDDDD" : "#666666";
  ctx.strokeStyle = "#434343";
  ctx.lineWidth = 0.13229167;
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.moveTo(37.386003, 208.31112);
  ctx.lineTo(37.447993000000004, 210.36785999999998);
  ctx.bezierCurveTo(
    38.764659,
    210.49438999999998,
    38.839811000000005,
    210.39005999999998,
    42.418381000000004,
    210.40565999999998,
  );
  ctx.bezierCurveTo(
    42.418381000000004,
    210.40565999999998,
    43.744564000000004,
    208.52957999999998,
    43.585382,
    208.31733999999997,
  );
  ctx.lineTo(37.386007000000006, 208.31133999999997);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  /// Blinkers
  ctx.save();
  ctx.fillStyle = "#fd911c";
  ctx.fillStyle = "rgba(253, 145, 28, 1)";
  ctx.strokeStyle = "#434343";
  ctx.strokeStyle = "rgba(67, 67, 67, 1)";
  ctx.lineWidth = 0.13229167;
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.moveTo(37.244263, 212.5917);
  ctx.bezierCurveTo(
    37.646370999999995,
    211.64758,
    37.434833,
    210.90955,
    37.447993999999994,
    210.36786,
  );
  ctx.bezierCurveTo(
    38.76465999999999,
    210.49439,
    38.839811999999995,
    210.39006,
    42.418381999999994,
    210.40566,
  );
  ctx.bezierCurveTo(
    40.631916999999994,
    212.66627,
    37.244263,
    212.5917,
    37.244263,
    212.5917,
  );
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#fd911c";
  ctx.fillStyle = "rgba(253, 145, 28, 1)";
  ctx.strokeStyle = "#434343";
  ctx.strokeStyle = "rgba(67, 67, 67, 1)";
  ctx.lineWidth = 0.13229167;
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.moveTo(141.9773, 211.57738);
  ctx.bezierCurveTo(
    142.71767000000003,
    211.57738,
    143.49227000000002,
    211.59828000000002,
    144.19791,
    211.62458,
  );
  ctx.bezierCurveTo(
    144.56834,
    211.63838,
    144.80458000000002,
    212.72525000000002,
    144.43415000000002,
    212.71127,
  );
  ctx.lineTo(141.93006000000003, 212.61677);
  ctx.bezierCurveTo(
    141.58349,
    212.60367,
    141.63044000000002,
    211.57738,
    141.97726000000003,
    211.57738,
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#fd911c";
  ctx.fillStyle = "rgba(253, 145, 28, 1)";
  ctx.strokeStyle = "#434343";
  ctx.strokeStyle = "rgba(67, 67, 67, 1)";
  ctx.lineWidth = 0.13229167;
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.moveTo(161.63124, 211.34011);
  ctx.lineTo(165.50664999999998, 211.84124);
  ctx.lineTo(165.3062, 214.24667);
  ctx.bezierCurveTo(
    163.96689999999998,
    213.73506,
    162.79605999999998,
    212.54963999999998,
    161.63124,
    211.34010999999998,
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  /// Front light
  ctx.save();
  ctx.fillStyle = "#666666";
  ctx.fillStyle = "rgba(102, 102, 102, 1)";
  ctx.strokeStyle = "#434343";
  ctx.strokeStyle = "rgba(67, 67, 67, 1)";
  ctx.lineWidth = 0.13229167;
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.moveTo(165.50665, 211.84124);
  ctx.bezierCurveTo(
    165.50665,
    211.84124,
    169.5491,
    212.94373,
    170.91886,
    214.3469,
  );
  ctx.bezierCurveTo(
    172.28862,
    215.75006000000002,
    172.25521,
    216.71891,
    172.25521,
    216.71891,
  );
  ctx.lineTo(168.44662, 216.71891);
  ctx.bezierCurveTo(
    168.44662,
    216.71891,
    168.31297999999998,
    216.15097,
    167.07685999999998,
    215.41597,
  );
  ctx.bezierCurveTo(
    165.84073999999998,
    214.68097999999998,
    165.3062,
    214.24667,
    165.3062,
    214.24667,
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 1)";
  ctx.strokeStyle = "#434343";
  ctx.strokeStyle = "rgba(67, 67, 67, 1)";
  ctx.lineWidth = 0.13229167;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.moveTo(93.226482, 195.98586);
  ctx.lineTo(94.683034, 205.86049);
  ctx.bezierCurveTo(
    85.37537,
    205.61244,
    68.437467,
    205.25854999999999,
    66.76004300000001,
    205.02185,
  );
  ctx.lineTo(65.24813900000001, 202.74218);
  ctx.bezierCurveTo(
    65.24813900000001,
    202.74218,
    64.809319,
    201.8578,
    65.01190500000001,
    201.37202,
  );
  ctx.bezierCurveTo(
    65.21200900000001,
    200.89219,
    66.51199600000001,
    199.89555,
    68.23651100000001,
    199.30496,
  );
  ctx.bezierCurveTo(
    69.961027,
    198.71437,
    73.61917100000001,
    197.56907999999999,
    78.382812,
    196.97804,
  );
  ctx.bezierCurveTo(
    83.288694,
    196.36936,
    93.226482,
    195.98586,
    93.226482,
    195.98586,
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 1)";
  ctx.strokeStyle = "#434343";
  ctx.strokeStyle = "rgba(67, 67, 67, 1)";
  ctx.lineWidth = 0.13229167;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.moveTo(95.749306, 195.93871);
  ctx.lineTo(97.787238, 206.06153999999998);
  ctx.lineTo(128.12233, 206.86334999999997);
  ctx.bezierCurveTo(
    119.29016,
    201.09591999999998,
    109.96451,
    196.32310999999996,
    95.749306,
    195.93870999999996,
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 1)";
  ctx.strokeStyle = "#434343";
  ctx.strokeStyle = "rgba(67, 67, 67, 1)";
  ctx.lineWidth = 0.13229167;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.moveTo(74.839284, 229.484);
  ctx.lineTo(74.69754400000001, 222.49144);
  ctx.bezierCurveTo(
    74.46863,
    220.60107000000002,
    72.16100600000001,
    212.93794000000003,
    63.358258000000006,
    213.04204000000001,
  );
  ctx.bezierCurveTo(
    51.78345,
    213.17893,
    50.60156200000001,
    227.83035,
    50.60156200000001,
    227.83035,
  );
  ctx.lineTo(54.79025200000001, 228.579);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  /// Rear wheel
  ctx.save();
  ctx.fillStyle = "#0000FF";
  ctx.translate(63.64172, 224.14511);
  ctx.rotate(angle);
  ctx.font = "  400 15px ''";
  ctx.save();
  ctx.fillStyle = "#3c3d3b";
  ctx.strokeStyle = "#434343";
  ctx.lineWidth = 0.13229166;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.arc(0, 0, 9.9691219, 0, 6.283185307179586, false);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#c2ccdd";
  ctx.strokeStyle = "#434343";
  ctx.lineWidth = 0.13229166;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.arc(0, 0, 7.0870533, 0, 6.283185307179586, false);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#323232";
  ctx.fillStyle = "rgba(50, 50, 50, 1)";
  ctx.strokeStyle = "rgba(0,0,0,0)";
  ctx.lineWidth = 0.10170905;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.rotate(1.5911440384397622);
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.rotate(0);
  ctx.arc(0, 0, 5.448699, 4.721575831697883e-7, 0.8468934008293014, 0);
  ctx.lineTo(0,0);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#323232";
  ctx.fillStyle = "rgba(50, 50, 50, 1)";
  ctx.strokeStyle = "rgba(0,0,0,0)";
  ctx.lineWidth = 0.10170905;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.rotate(2.803385892730985);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.arc(0, 0, 5.448699, -4.0288286908256607e-7, 0.8468929109402825, 0);
  ctx.lineTo(0, 0);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#323232";
  ctx.fillStyle = "rgba(50, 50, 50, 1)";
  ctx.strokeStyle = "rgba(0,0,0,0)";
  ctx.lineWidth = 0.10170905;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.rotate(-2.1441221507763917);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.arc(0, 0, 5.448699, 2.8817474254688297e-7, 0.8468934003764788, 0);
  ctx.lineTo(0, 0);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#323232";
  ctx.fillStyle = "rgba(50, 50, 50, 1)";
  ctx.strokeStyle = "rgba(0,0,0,0)";
  ctx.lineWidth = 0.10170905;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.rotate(0.3656406488931104);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.arc(0, 0, 5.448699, -7.884953353001449e-8, 0.8468934004122871, 0);
  ctx.lineTo(0, 0);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#323232";
  ctx.fillStyle = "rgba(50, 50, 50, 1)";
  ctx.strokeStyle = "rgba(0,0,0,0)";
  ctx.lineWidth = 0.10170905;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.rotate(-0.8644360443458348);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.arc(0, 0, 5.448699, -7.884953353001449e-8, 0.8468934004122884, 0);
  ctx.lineTo(0, 0);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#c2ccdd";
  ctx.strokeStyle = "#434343";
  ctx.lineWidth = 0.03590516;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.arc(0, 0, 1.9234908, 0, 6.283185307179586, false);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.restore();

  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 1)";
  ctx.strokeStyle = "#000000";
  ctx.strokeStyle = "rgba(0, 0, 0, 1)";
  ctx.lineWidth = 0.13229167;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.moveTo(163.16804, 230.04898);
  ctx.lineTo(162.80379, 224.61756);
  ctx.bezierCurveTo(
    163.03118999999998,
    224.27647,
    162.20243,
    213.98188,
    152.13540999999998,
    213.56175,
  );
  ctx.bezierCurveTo(
    138.67001,
    213.84524,
    139.75669999999997,
    229.5785,
    139.75669999999997,
    229.5785,
  );
  ctx.lineTo(163.16803999999996, 230.04898);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  /// Front wheel
  ctx.save();
  ctx.font = "  400 15px ''";
  ctx.translate(88.175755, 0);
  ctx.translate(63.64172, 224.14511);
  ctx.rotate(angle);
  ctx.save();
  ctx.fillStyle = "#3c3d3b";
  ctx.fillStyle = "rgba(60, 61, 59, 1)";
  ctx.strokeStyle = "#434343";
  ctx.strokeStyle = "rgba(67, 67, 67, 1)";
  ctx.lineWidth = 0.13229166;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.arc(0, 0, 9.9691219, 0, 6.283185307179586, false);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#c2ccdd";
  ctx.fillStyle = "rgba(194, 204, 221, 1)";
  ctx.strokeStyle = "#434343";
  ctx.strokeStyle = "rgba(67, 67, 67, 1)";
  ctx.lineWidth = 0.13229166;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.arc(0, 0, 7.0870533, 0, 6.283185307179586, false);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#323232";
  ctx.fillStyle = "rgba(50, 50, 50, 1)";
  ctx.strokeStyle = "rgba(0,0,0,0)";
  ctx.lineWidth = 0.10170905;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.rotate(1.5911440384397622);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.arc(0, 0, 5.448699, 4.721575831697883e-7, 0.8468934008293014, 0);
  ctx.lineTo(0, 0);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#323232";
  ctx.fillStyle = "rgba(50, 50, 50, 1)";
  ctx.strokeStyle = "rgba(0,0,0,0)";
  ctx.lineWidth = 0.10170905;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.rotate(2.803385892730985);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.arc(0, 0, 5.448699, -4.0288286908256607e-7, 0.8468929109402825, 0);
  ctx.lineTo(0, 0);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#323232";
  ctx.fillStyle = "rgba(50, 50, 50, 1)";
  ctx.strokeStyle = "rgba(0,0,0,0)";
  ctx.lineWidth = 0.10170905;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.rotate(-2.1441221507763917);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.arc(0, 0, 5.448699, 2.8817474254688297e-7, 0.8468934003764788, 0);
  ctx.lineTo(0, 0);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#323232";
  ctx.fillStyle = "rgba(50, 50, 50, 1)";
  ctx.strokeStyle = "rgba(0,0,0,0)";
  ctx.lineWidth = 0.10170905;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.rotate(0.3656406488931104);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.arc(0, 0, 5.448699, -7.884953353001449e-8, 0.8468934004122871, 0);
  ctx.lineTo(0, 0);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#323232";
  ctx.fillStyle = "rgba(50, 50, 50, 1)";
  ctx.strokeStyle = "rgba(0,0,0,0)";
  ctx.lineWidth = 0.10170905;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.rotate(-0.8644360443458348);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.arc(0, 0, 5.448699, -7.884953353001449e-8, 0.8468934004122884, 0);
  ctx.lineTo(0, 0);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#c2ccdd";
  ctx.fillStyle = "rgba(194, 204, 221, 1)";
  ctx.strokeStyle = "#434343";
  ctx.strokeStyle = "rgba(67, 67, 67, 1)";
  ctx.lineWidth = 0.03590516;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.arc(0, 0, 1.9234908, 0, 6.283185307179586, false);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.restore();

  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 1)";
  ctx.strokeStyle = "#434343";
  ctx.strokeStyle = "rgba(67, 67, 67, 1)";
  ctx.lineWidth = 0.13229167;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.moveTo(173.0186, 221.45201);
  ctx.lineTo(173.10209999999998, 225.69327);
  ctx.bezierCurveTo(
    173.10209999999998,
    225.65287,
    170.22007,
    226.16898,
    169.38341999999997,
    226.00442,
  );
  ctx.bezierCurveTo(
    168.54677999999998,
    225.83987000000002,
    168.72769999999997,
    224.19659000000001,
    168.72769999999997,
    224.19659000000001,
  );
  ctx.bezierCurveTo(
    168.72769999999997,
    224.19659000000001,
    168.76969999999997,
    223.3581,
    170.04537999999997,
    222.17692000000002,
  );
  ctx.bezierCurveTo(
    171.32104999999996,
    221.43006000000003,
    173.01857999999996,
    221.45201000000003,
    173.01857999999996,
    221.45201000000003,
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.strokeStyle = "#434343";
  ctx.strokeStyle = "rgba(67, 67, 67, 1)";
  ctx.lineWidth = 0.13229167;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.moveTo(174.56041, 219.89274);
  ctx.bezierCurveTo(
    174.56041,
    219.89274,
    170.88545,
    219.99296,
    170.15045999999998,
    220.22683,
  );
  ctx.bezierCurveTo(
    169.41546999999997,
    220.46069,
    167.77844,
    221.86385,
    167.51117,
    222.49862000000002,
  );
  ctx.bezierCurveTo(
    167.24391,
    223.13338000000002,
    166.67596,
    226.40743,
    167.84526,
    227.27606000000003,
  );
  ctx.bezierCurveTo(
    169.01457,
    228.14469000000003,
    174.5103,
    227.39299000000003,
    174.5103,
    227.39299000000003,
  );
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#232323";
  ctx.fillStyle = "rgba(35, 35, 35, 0.49358975)";
  ctx.strokeStyle = "rgba(0,0,0,0)";
  ctx.lineWidth = 0.26458332;
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.moveTo(52.68043, 224.05058);
  ctx.lineTo(73.988839, 224.05058);
  ctx.bezierCurveTo(
    73.988839,
    224.05058,
    73.752603,
    213.75073,
    63.499999,
    213.70349,
  );
  ctx.bezierCurveTo(
    53.247395000000004,
    213.65628999999998,
    52.68043,
    224.05058,
    52.68043,
    224.05058,
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#232323";
  ctx.fillStyle = "rgba(35, 35, 35, 0.49358975)";
  ctx.strokeStyle = "rgba(0,0,0,0)";
  ctx.lineWidth = 0.26458332;
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.moveTo(141.05128, 224.05058);
  ctx.lineTo(162.3597, 224.05058);
  ctx.bezierCurveTo(
    162.3597,
    224.05058,
    162.12347,
    213.75073,
    151.87086,
    213.70349,
  );
  ctx.bezierCurveTo(
    141.61825,
    213.65628999999998,
    141.05128,
    224.05058,
    141.05128,
    224.05058,
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.strokeStyle = "#434343";
  ctx.strokeStyle = "rgba(67, 67, 67, 1)";
  ctx.lineWidth = 0.13229167;
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.moveTo(66.760042, 205.02185);
  ctx.lineTo(77.57498, 223.16679);
  ctx.bezierCurveTo(
    77.57498,
    223.16679,
    79.71313599999999,
    226.07335,
    81.11630099999999,
    226.14015999999998,
  );
  ctx.bezierCurveTo(
    82.519466,
    226.20695999999998,
    98.08482099999999,
    226.36569999999998,
    98.08482099999999,
    226.36569999999998,
  );
  ctx.lineTo(97.70684599999998, 212.19158999999996);
  ctx.bezierCurveTo(
    97.70684599999998,
    212.19158999999996,
    97.42336299999998,
    209.64024999999995,
    97.23437399999999,
    208.22283999999996,
  );
  ctx.bezierCurveTo(
    97.04538699999999,
    206.80542999999997,
    94.09244699999999,
    194.14322999999996,
    94.09244699999999,
    194.14322999999996,
  );
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.strokeStyle = "#434343";
  ctx.strokeStyle = "rgba(67, 67, 67, 1)";
  ctx.lineWidth = 0.13229167;
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.moveTo(98.084819, 226.3657);
  ctx.lineTo(139.98241, 227.10901);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.strokeStyle = "#434343";
  ctx.strokeStyle = "rgba(67, 67, 67, 1)";
  ctx.lineWidth = 0.13229167;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.miterLimit = "4";
  ctx.font = "  400 15px ''";
  ctx.beginPath();
  ctx.moveTo(128.12233, 206.86335);
  ctx.bezierCurveTo(
    128.12233,
    206.86335,
    131.29615,
    210.3271,
    131.29615,
    212.19799,
  );
  ctx.bezierCurveTo(
    131.29615,
    214.06888,
    130.42541,
    226.92085,
    130.42541,
    226.92085,
  );
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  ctx.restore();
}


/**
 * Dessine une voiture vu de derrière.
 * @param {object} ctx - Context canvas 2D
 * @param {boolean} flash - Rear lights On/Off
 * @param {string} color - car color (defaults to blue, #1243A5)
 */
export function draw_car_back(ctx, flash, color = "#1243A5") {
  ctx.save();
  ctx.strokeStyle = "rgba(0,0,0,0)";
  ctx.scale(0.29850746268656714, 0.29850746268656714);
  ctx.translate(-136.5, -101);
  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.translate(5, 0);
  ctx.save();
  ctx.fillStyle = "#212121";
  ctx.beginPath();
  ctx.moveTo(39, 141.5);
  ctx.lineTo(40, 165.5);
  ctx.bezierCurveTo(40.3333333, 183.5, 40, 194, 39, 197);
  ctx.bezierCurveTo(37.5, 201.5, 34, 201.5, 31.5, 201.5);
  ctx.lineTo(31.5, 201.5);
  ctx.lineTo(11, 201.5);
  ctx.bezierCurveTo(7.5, 201.5, 6.73002942, 200.755839, 4.5, 197);
  ctx.bezierCurveTo(3.01331372, 194.496107, 2.01331372, 190.662774, 1.5, 185.5);
  ctx.lineTo(1.5, 185.5);
  ctx.lineTo(0, 143);
  ctx.lineTo(39, 141.5);
  ctx.closePath();
  ctx.moveTo(224, 141.5);
  ctx.lineTo(263, 143);
  ctx.lineTo(261.5, 185.5);
  ctx.bezierCurveTo(260.986686, 190.662774, 259.986686, 194.496107, 258.5, 197);
  ctx.bezierCurveTo(256.269971, 200.755839, 255.5, 201.5, 252, 201.5);
  ctx.lineTo(231.5, 201.5);
  ctx.lineTo(231.5, 201.5);
  ctx.bezierCurveTo(229, 201.5, 225.5, 201.5, 224, 197);
  ctx.bezierCurveTo(223, 194, 222.666667, 183.5, 223, 165.5);
  ctx.lineTo(224, 141.5);
  ctx.closePath();
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#000";
  ctx.fillStyle = color;
  ctx.lineWidth = 3;

  ctx.beginPath();
  ctx.moveTo(15.5, 48);
  ctx.bezierCurveTo(15.5, 44.8272143, 17.6666667, 43.3272143, 22, 43.5);
  ctx.lineTo(22, 43.5);
  ctx.lineTo(37, 43.5);
  ctx.lineTo(29.5, 60.5);
  ctx.bezierCurveTo(24.5, 59.5, 20.8333333, 58.3333333, 18.5, 57);
  ctx.bezierCurveTo(17, 55.5, 15.5, 52.7591785, 15.5, 48);
  ctx.closePath();
  ctx.moveTo(247.5, 48);
  ctx.bezierCurveTo(247.5, 52.7591785, 246, 55.5, 244.5, 57);
  ctx.bezierCurveTo(242.166667, 58.3333333, 238.5, 59.5, 233.5, 60.5);
  ctx.lineTo(226, 43.5);
  ctx.lineTo(241, 43.5);
  ctx.bezierCurveTo(245.333333, 43.3272143, 247.5, 44.8272143, 247.5, 48);
  ctx.closePath();
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = color;

  ctx.beginPath();
  ctx.moveTo(26.1, 179.041667);
  ctx.bezierCurveTo(14.1, 179.041667, 7.43333333, 178.041667, 6.1, 176.041667);
  ctx.bezierCurveTo(
    4.76666667,
    174.041667,
    2.76666667,
    161.708333,
    0.1,
    139.041667,
  );
  ctx.bezierCurveTo(
    -0.233333333,
    116.708333,
    0.266666667,
    103.541667,
    1.6,
    99.5416667,
  );
  ctx.bezierCurveTo(3.6, 93.5416667, 7.6, 89.5416667, 9.6, 85.5416667);
  ctx.bezierCurveTo(11.6, 81.5416667, 10.9547379, 77.4190503, 14.1, 72.0416667);
  ctx.bezierCurveTo(17.2452621, 66.6642831, 23.1, 62.0416667, 26.1, 59.0416667);
  ctx.bezierCurveTo(37.1, 32.0416667, 48.1, 10.5416667, 59.1, 5.04166667);
  ctx.bezierCurveTo(
    66.4333333,
    1.375,
    90.7666667,
    -0.291666667,
    132.1,
    0.0416666667,
  );
  ctx.lineTo(131.5, 0.037);
  ctx.lineTo(132.1349, 0.0322666667);
  ctx.bezierCurveTo(
    172.7183,
    -0.258133333,
    196.64,
    1.41166667,
    203.9,
    5.04166667,
  );
  ctx.bezierCurveTo(214.9, 10.5416667, 225.9, 32.0416667, 236.9, 59.0416667);
  ctx.bezierCurveTo(
    239.9,
    62.0416667,
    245.754738,
    66.6642831,
    248.9,
    72.0416667,
  );
  ctx.bezierCurveTo(
    252.045262,
    77.4190503,
    251.4,
    81.5416667,
    253.4,
    85.5416667,
  );
  ctx.bezierCurveTo(255.4, 89.5416667, 259.4, 93.5416667, 261.4, 99.5416667);
  ctx.bezierCurveTo(
    262.733333,
    103.541667,
    263.233333,
    116.708333,
    262.9,
    139.041667,
  );
  ctx.bezierCurveTo(
    260.233333,
    161.708333,
    258.233333,
    174.041667,
    256.9,
    176.041667,
  );
  ctx.bezierCurveTo(
    255.566667,
    178.041667,
    248.9,
    179.041667,
    236.9,
    179.041667,
  );
  ctx.closePath();
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#151515";

  ctx.beginPath();
  ctx.moveTo(132.1, 179.041667);
  ctx.lineTo(25.6489273, 179.041884);
  ctx.bezierCurveTo(14.0408258, 179.053082, 11.7429973, 179.485995, 11, 178);
  ctx.bezierCurveTo(10, 176, 11, 162, 13, 160);
  ctx.bezierCurveTo(15, 158, 21, 156.5, 31.5, 156.5);
  ctx.bezierCurveTo(42, 156.5, 67, 155.5, 74, 156.5);
  ctx.bezierCurveTo(81, 157.5, 74, 160.5, 83, 163.5);
  ctx.bezierCurveTo(
    91.8821483,
    166.460716,
    108.556154,
    165.525503,
    131.099562,
    165.500503,
  );
  ctx.lineTo(131.1, 165.444444);
  ctx.bezierCurveTo(154.1, 165.444444, 171.1, 166.444444, 180.1, 163.444444);
  ctx.bezierCurveTo(189.1, 160.444444, 182.1, 157.444444, 189.1, 156.444444);
  ctx.bezierCurveTo(196.1, 155.444444, 221.1, 156.444444, 231.6, 156.444444);
  ctx.bezierCurveTo(242.1, 156.444444, 248.1, 157.944444, 250.1, 159.944444);
  ctx.bezierCurveTo(252.1, 161.944444, 253.1, 175.944444, 252.1, 177.944444);
  ctx.bezierCurveTo(
    251.366528,
    179.411388,
    249.117837,
    179.008312,
    237.892964,
    178.986963,
  );
  ctx.lineTo(132.099695, 178.986);
  ctx.lineTo(132.1, 179.041667);
  ctx.closePath();
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#000";
  ctx.fillStyle = "rgba(0, 0, 0, 0.8)";

  ctx.beginPath();
  ctx.moveTo(131.035262, 49.0002965);
  ctx.bezierCurveTo(99.04455, 49.01975, 51.975, 49.985, 49.5, 48.5);
  ctx.bezierCurveTo(47, 47, 48.1050718, 43.1847847, 49.5, 39);
  ctx.bezierCurveTo(52, 31.5, 59, 17, 61.5, 15);
  ctx.bezierCurveTo(64, 13, 69.0402108, 12.924106, 81, 12.5);
  ctx.bezierCurveTo(
    92.6848515,
    12.0856436,
    106.355573,
    11.5263977,
    130.29313,
    11.5009042,
  );
  ctx.lineTo(132.70687, 11.5009042);
  ctx.bezierCurveTo(156.644427, 11.5263977, 170.315148, 12.0856436, 182, 12.5);
  ctx.bezierCurveTo(193.959789, 12.924106, 199, 13, 201.5, 15);
  ctx.bezierCurveTo(204, 17, 211, 31.5, 213.5, 39);
  ctx.bezierCurveTo(214.894928, 43.1847847, 216, 47, 213.5, 48.5);
  ctx.bezierCurveTo(
    211.025,
    49.985,
    163.95545,
    49.01975,
    131.964739,
    49.0002965,
  );
  ctx.closePath();
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#0E0E0E";
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(55.5, 166.5);
  ctx.bezierCurveTo(57.5, 166.5, 59.5, 168.166667, 61.5, 171.5);
  ctx.bezierCurveTo(62.5, 174.5, 62.5, 176.666667, 61.5, 178);
  ctx.bezierCurveTo(60.5, 179.333333, 58.5, 179.833333, 55.5, 179.5);
  ctx.lineTo(55.5, 179.5);
  ctx.lineTo(33.5, 179.5);
  ctx.bezierCurveTo(
    29.1665928,
    178.666667,
    26.9998891,
    177.166667,
    26.9998891,
    175,
  );
  ctx.bezierCurveTo(26.9998891, 171.75, 28.5, 169.5, 33.5, 168);
  ctx.bezierCurveTo(
    38.0689655,
    166.62931,
    50.1530916,
    166.511147,
    54.4917073,
    166.500961,
  );
  ctx.closePath();
  ctx.moveTo(229.5, 168);
  ctx.bezierCurveTo(234.5, 169.5, 236.000111, 171.75, 236.000111, 175);
  ctx.bezierCurveTo(
    236.000111,
    177.166667,
    233.833407,
    178.666667,
    229.5,
    179.5,
  );
  ctx.lineTo(207.5, 179.5);
  ctx.bezierCurveTo(204.5, 179.833333, 202.5, 179.333333, 201.5, 178);
  ctx.bezierCurveTo(200.5, 176.666667, 200.5, 174.5, 201.5, 171.5);
  ctx.bezierCurveTo(203.5, 168.166667, 205.5, 166.5, 207.5, 166.5);
  ctx.lineTo(208.508293, 166.500961);
  ctx.bezierCurveTo(212.846908, 166.511147, 224.931034, 166.62931, 229.5, 168);
  ctx.closePath();
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = flash ? "#ccc" : "#666";
  ctx.strokeStyle = "#000";
  ctx.strokeStyle = "rgba(0, 0, 0, 0.12)";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(18, 78);
  ctx.bezierCurveTo(29.6666667, 79.6666667, 49.5, 81, 77.5, 82);
  ctx.lineTo(77.5, 82);
  ctx.lineTo(76, 90.5);
  ctx.lineTo(73, 94);
  ctx.lineTo(15.5, 92.5);
  ctx.bezierCurveTo(12.8333333, 84.5, 13.6666667, 79.6666667, 18, 78);
  ctx.closePath();
  ctx.moveTo(245, 78);
  ctx.bezierCurveTo(249.333333, 79.6666667, 250.166667, 84.5, 247.5, 92.5);
  ctx.lineTo(190, 94);
  ctx.lineTo(187, 90.5);
  ctx.lineTo(185.5, 82);
  ctx.bezierCurveTo(213.5, 81, 233.333333, 79.6666667, 245, 78);
  ctx.closePath();
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#AE0000";
  ctx.strokeStyle = "#000";
  ctx.strokeStyle = "rgba(0, 0, 0, 0.212)";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(17, 74);
  ctx.bezierCurveTo(20, 74, 19.0789359, 86.9802443, 20, 88.5);
  ctx.bezierCurveTo(20.6140427, 89.5131705, 22.9473761, 90.1798372, 27, 90.5);
  ctx.lineTo(76, 90.5);
  ctx.bezierCurveTo(76, 94.8333333, 74.5, 97, 71.5, 97);
  ctx.bezierCurveTo(60.5, 98.3333333, 43.3333333, 98.3333333, 20, 97);
  ctx.bezierCurveTo(15.3333333, 97, 12.5, 95.8333333, 11.5, 93.5);
  ctx.bezierCurveTo(10, 90, 10.7530492, 83.6236126, 11.5, 80.5);
  ctx.bezierCurveTo(12.2469508, 77.3763874, 14, 74, 17, 74);
  ctx.closePath();
  ctx.moveTo(246, 74);
  ctx.bezierCurveTo(249, 74, 250.753049, 77.3763874, 251.5, 80.5);
  ctx.bezierCurveTo(252.246951, 83.6236126, 253, 90, 251.5, 93.5);
  ctx.bezierCurveTo(250.5, 95.8333333, 247.666667, 97, 243, 97);
  ctx.bezierCurveTo(219.666667, 98.3333333, 202.5, 98.3333333, 191.5, 97);
  ctx.bezierCurveTo(188.5, 97, 187, 94.8333333, 187, 90.5);
  ctx.lineTo(187, 90.5);
  ctx.lineTo(236, 90.5);
  ctx.bezierCurveTo(240.052624, 90.1798372, 242.385957, 89.5131705, 243, 88.5);
  ctx.bezierCurveTo(243.921064, 86.9802443, 243, 74, 246, 74);
  ctx.closePath();
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#000";
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";

  ctx.beginPath();
  ctx.moveTo(130.543738, 66.0010109);
  ctx.bezierCurveTo(89.5318415, 66.0582071, 69.505814, 68.5348837, 27.5, 71.5);
  ctx.lineTo(27.5, 71.5);
  ctx.lineTo(27.5, 68.5);
  ctx.bezierCurveTo(
    68.8900195,
    64.5392326,
    93.1790795,
    62.4682032,
    130.49998,
    61.5366597,
  );
  ctx.lineTo(130.5, 61.5);
  ctx.lineTo(131.25, 61.518);
  ctx.lineTo(132, 61.5);
  ctx.lineTo(132.001023, 61.5366847);
  ctx.bezierCurveTo(169.321356, 62.4682403, 193.610351, 64.5392681, 235, 68.5);
  ctx.lineTo(235, 71.5);
  ctx.bezierCurveTo(
    192.994186,
    68.5348837,
    172.968158,
    66.0582071,
    131.956262,
    66.0010109,
  );
  ctx.closePath();
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#0F0F0F";

  ctx.beginPath();
  ctx.moveTo(15.5, 146);
  ctx.bezierCurveTo(12, 154, 11, 152, 9.5, 163);
  ctx.bezierCurveTo(9.10480968, 165.898062, 8.92597702, 168, 8, 168);
  ctx.bezierCurveTo(7.38268199, 168, 6.71601532, 166.333333, 6, 163);
  ctx.lineTo(7, 153);
  ctx.bezierCurveTo(7.66666667, 148.333333, 8.5, 145.833333, 9.5, 145.5);
  ctx.bezierCurveTo(11, 145, 14.5, 144, 15.5, 146);
  ctx.closePath();
  ctx.moveTo(248, 146);
  ctx.bezierCurveTo(249, 144, 252.5, 145, 254, 145.5);
  ctx.bezierCurveTo(255, 145.833333, 255.833333, 148.333333, 256.5, 153);
  ctx.lineTo(256.5, 153);
  ctx.lineTo(257.5, 163);
  ctx.bezierCurveTo(256.783985, 166.333333, 256.117318, 168, 255.5, 168);
  ctx.bezierCurveTo(254.574023, 168, 254.39519, 165.898062, 254, 163);
  ctx.bezierCurveTo(252.5, 152, 251.5, 154, 248, 146);
  ctx.closePath();
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#252525";
  ctx.strokeStyle = "#181818";

  ctx.beginPath();
  ctx.moveTo(112, 87);
  ctx.lineTo(154, 87);
  ctx.bezierCurveTo(155.10456949966158, 87, 156, 87.8954305003384, 156, 89);
  ctx.lineTo(156, 108);
  ctx.bezierCurveTo(156, 109.1045694996616, 155.10456949966158, 110, 154, 110);
  ctx.lineTo(112, 110);
  ctx.bezierCurveTo(110.8954305003384, 110, 110, 109.1045694996616, 110, 108);
  ctx.lineTo(110, 89);
  ctx.bezierCurveTo(110, 87.8954305003384, 110.8954305003384, 87, 112, 87);
  ctx.closePath();
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0)";

  ctx.translate(14.455, 117);
  ctx.save();
  ctx.fillStyle = "#000";
  ctx.fillStyle = "rgba(0, 0, 0, 0.143)";

  ctx.beginPath();
  ctx.moveTo(202.5, 2.5);
  ctx.bezierCurveTo(202.5, 5.5, 201.268048, 5.77892921, 182.5, 8);
  ctx.bezierCurveTo(
    170.089503,
    9.46869791,
    148.180429,
    10.136507,
    116.77278,
    10.0034271,
  );
  ctx.bezierCurveTo(
    85.3646557,
    10.136507,
    63.4555823,
    9.46869791,
    51.045085,
    8,
  );
  ctx.bezierCurveTo(32.2770368, 5.77892921, 31.045085, 5.5, 31.045085, 2.5);
  ctx.bezierCurveTo(31.045085, -0.5, 53.045085, 4.5, 117.545085, 3);
  ctx.lineTo(115.999085, 3.03494818);
  ctx.lineTo(116, 3);
  ctx.lineTo(116.772085, 3.01694818);
  ctx.lineTo(117.545085, 3);
  ctx.lineTo(117.545085, 3.03494818);
  ctx.lineTo(117.92227, 3.0430645);
  ctx.bezierCurveTo(180.9378, 4.4008, 202.5, -0.47, 202.5, 2.5);
  ctx.closePath();
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#5D0101";
  ctx.strokeStyle = "#000";
  ctx.strokeStyle = "rgba(0, 0, 0, 0.202)";

  ctx.beginPath();
  ctx.moveTo(12.045085, 1);
  ctx.bezierCurveTo(
    17.8736443,
    1.37006726,
    24.5403109,
    1.37006726,
    32.045085,
    1,
  );
  ctx.lineTo(33.545085, 5);
  ctx.lineTo(4.54508497, 5);
  ctx.bezierCurveTo(
    2.54508497,
    4.33333333,
    1.21175164,
    3.66666667,
    0.545084972,
    3,
  );
  ctx.bezierCurveTo(-0.454915028, 2, 0.0450849719, 0, 1.04508497, 0);
  ctx.bezierCurveTo(2.04508497, 0, 3.30224602, 0.444899114, 12.045085, 1);
  ctx.closePath();
  ctx.moveTo(232.5, 0);
  ctx.bezierCurveTo(233.5, 0, 234, 2, 233, 3);
  ctx.bezierCurveTo(232.333333, 3.66666667, 231, 4.33333333, 229, 5);
  ctx.lineTo(229, 5);
  ctx.lineTo(200, 5);
  ctx.lineTo(201.5, 1);
  ctx.bezierCurveTo(209.004774, 1.37006726, 215.671441, 1.37006726, 221.5, 1);
  ctx.bezierCurveTo(230.242839, 0.444899114, 231.5, 0, 232.5, 0);
  ctx.closePath();
  ctx.fill("evenodd");
  ctx.stroke();
  ctx.restore();
  ctx.restore();
  ctx.save();
  ctx.fillStyle = "#E8D23C";

  ctx.beginPath();
  ctx.moveTo(121.375, 105);
  ctx.bezierCurveTo(121.445, 105, 121.515, 104.94, 121.515, 104.86);
  ctx.lineTo(121.515, 102.24);
  ctx.lineTo(123.015, 102.24);
  ctx.lineTo(123.015, 104.86);
  ctx.bezierCurveTo(123.015, 104.94, 123.085, 105, 123.155, 105);
  ctx.lineTo(124.345, 105);
  ctx.bezierCurveTo(124.425, 105, 124.485, 104.94, 124.485, 104.86);
  ctx.lineTo(124.485, 98.15);
  ctx.bezierCurveTo(124.485, 98.07, 124.425, 98.01, 124.345, 98.01);
  ctx.lineTo(123.155, 98.01);
  ctx.bezierCurveTo(123.085, 98.01, 123.015, 98.07, 123.015, 98.15);
  ctx.lineTo(123.015, 100.77);
  ctx.lineTo(121.515, 100.77);
  ctx.lineTo(121.515, 98.15);
  ctx.bezierCurveTo(121.515, 98.07, 121.445, 98.01, 121.375, 98.01);
  ctx.lineTo(120.185, 98.01);
  ctx.bezierCurveTo(120.105, 98.01, 120.045, 98.07, 120.045, 98.15);
  ctx.lineTo(120.045, 104.86);
  ctx.bezierCurveTo(120.045, 104.94, 120.105, 105, 120.185, 105);
  ctx.lineTo(121.375, 105);
  ctx.closePath();
  ctx.moveTo(129.415, 105);
  ctx.bezierCurveTo(129.485, 105, 129.555, 104.94, 129.555, 104.86);
  ctx.lineTo(129.555, 103.67);
  ctx.bezierCurveTo(129.555, 103.59, 129.485, 103.53, 129.415, 103.53);
  ctx.lineTo(127.105, 103.53);
  ctx.lineTo(127.105, 102.24);
  ctx.lineTo(128.875, 102.24);
  ctx.bezierCurveTo(128.955, 102.24, 129.015, 102.18, 129.015, 102.1);
  ctx.lineTo(129.015, 100.91);
  ctx.bezierCurveTo(129.015, 100.83, 128.955, 100.77, 128.875, 100.77);
  ctx.lineTo(127.105, 100.77);
  ctx.lineTo(127.105, 99.48);
  ctx.lineTo(129.415, 99.48);
  ctx.bezierCurveTo(129.485, 99.48, 129.555, 99.42, 129.555, 99.34);
  ctx.lineTo(129.555, 98.15);
  ctx.bezierCurveTo(129.555, 98.07, 129.485, 98.01, 129.415, 98.01);
  ctx.lineTo(125.775, 98.01);
  ctx.bezierCurveTo(125.695, 98.01, 125.635, 98.07, 125.635, 98.15);
  ctx.lineTo(125.635, 104.86);
  ctx.bezierCurveTo(125.635, 104.94, 125.695, 105, 125.775, 105);
  ctx.lineTo(129.415, 105);
  ctx.closePath();
  ctx.moveTo(134.875, 105);
  ctx.bezierCurveTo(134.955, 105, 135.025, 104.94, 135.025, 104.86);
  ctx.lineTo(135.025, 103.67);
  ctx.bezierCurveTo(135.025, 103.6, 134.955, 103.53, 134.875, 103.53);
  ctx.lineTo(132.195, 103.53);
  ctx.lineTo(132.195, 98.15);
  ctx.bezierCurveTo(132.185, 98.09, 132.125, 98.04, 132.055, 98.04);
  ctx.lineTo(130.875, 98.04);
  ctx.bezierCurveTo(130.805, 98.04, 130.745, 98.09, 130.735, 98.15);
  ctx.lineTo(130.725, 98.15);
  ctx.lineTo(130.725, 104.86);
  ctx.bezierCurveTo(130.725, 104.94, 130.795, 105, 130.875, 105);
  ctx.lineTo(134.875, 105);
  ctx.closePath();
  ctx.moveTo(140.335, 105);
  ctx.bezierCurveTo(140.415, 105, 140.485, 104.94, 140.485, 104.86);
  ctx.lineTo(140.485, 103.67);
  ctx.bezierCurveTo(140.485, 103.6, 140.415, 103.53, 140.335, 103.53);
  ctx.lineTo(137.655, 103.53);
  ctx.lineTo(137.655, 98.15);
  ctx.bezierCurveTo(137.645, 98.09, 137.585, 98.04, 137.515, 98.04);
  ctx.lineTo(136.335, 98.04);
  ctx.bezierCurveTo(136.265, 98.04, 136.205, 98.09, 136.195, 98.15);
  ctx.lineTo(136.185, 98.15);
  ctx.lineTo(136.185, 104.86);
  ctx.bezierCurveTo(136.185, 104.94, 136.255, 105, 136.335, 105);
  ctx.lineTo(140.335, 105);
  ctx.closePath();
  ctx.moveTo(145.335, 104.89);
  ctx.lineTo(145.905, 104.33);
  ctx.bezierCurveTo(
    146.007857,
    104.227143,
    146.007857,
    104.109592,
    146.005758,
    104.078105,
  );
  ctx.lineTo(146.005, 98.94);
  ctx.bezierCurveTo(146.005, 98.94, 146.025, 98.8, 145.905, 98.68);
  ctx.lineTo(145.335, 98.12);
  ctx.bezierCurveTo(
    145.249286,
    98.0271429,
    145.153367,
    98.0108163,
    145.105554,
    98.0090671,
  );
  ctx.lineTo(142.464446, 98.0090671);
  ctx.bezierCurveTo(
    142.416633,
    98.0108163,
    142.320714,
    98.0271429,
    142.235,
    98.12,
  );
  ctx.lineTo(141.675, 98.68);
  ctx.bezierCurveTo(141.555, 98.8, 141.565, 98.94, 141.565, 98.94);
  ctx.lineTo(141.565, 104.07);
  ctx.bezierCurveTo(141.565, 104.07, 141.555, 104.21, 141.675, 104.33);
  ctx.lineTo(142.235, 104.89);
  ctx.bezierCurveTo(142.355, 105.01, 142.495, 105, 142.495, 105);
  ctx.lineTo(145.085, 105);
  ctx.bezierCurveTo(145.085, 105, 145.215, 105.01, 145.335, 104.89);
  ctx.closePath();
  ctx.moveTo(144.365, 103.53);
  ctx.lineTo(143.205, 103.53);
  ctx.lineTo(143.065, 103.39);
  ctx.bezierCurveTo(143.045, 103.36, 143.035, 103.34, 143.035, 103.32);
  ctx.lineTo(143.035, 99.75);
  ctx.bezierCurveTo(143.035, 99.75, 143.035, 99.71, 143.065, 99.67);
  ctx.lineTo(143.235, 99.51);
  ctx.bezierCurveTo(143.255, 99.48, 143.285, 99.48, 143.295, 99.48);
  ctx.lineTo(144.275, 99.48);
  ctx.bezierCurveTo(144.285, 99.48, 144.315, 99.48, 144.345, 99.51);
  ctx.lineTo(144.505, 99.67);
  ctx.bezierCurveTo(144.525, 99.69, 144.5325, 99.71, 144.535, 99.725);
  ctx.lineTo(144.535, 103.32);
  ctx.bezierCurveTo(144.535, 103.34, 144.535, 103.36, 144.505, 103.39);
  ctx.lineTo(144.365, 103.53);
  ctx.closePath();
  ctx.moveTo(124.81, 93.952);
  ctx.lineTo(125.034, 93.728);
  ctx.bezierCurveTo(125.074, 93.688, 125.074, 93.676, 125.078, 93.656);
  ctx.lineTo(125.078, 93.204);
  ctx.bezierCurveTo(125.078, 93.176, 125.05, 93.148, 125.022, 93.148);
  ctx.lineTo(124.546, 93.148);
  ctx.bezierCurveTo(124.514, 93.148, 124.49, 93.176, 124.49, 93.204);
  ctx.lineTo(124.49, 93.324);
  ctx.bezierCurveTo(124.49, 93.332, 124.486, 93.344, 124.478, 93.352);
  ctx.lineTo(124.422, 93.408);
  ctx.lineTo(123.958, 93.408);
  ctx.lineTo(123.902, 93.352);
  ctx.bezierCurveTo(123.89, 93.344, 123.89, 93.332, 123.886, 93.324);
  ctx.lineTo(123.886, 91.896);
  ctx.bezierCurveTo(123.886, 91.896, 123.886, 91.88, 123.902, 91.868);
  ctx.lineTo(123.966, 91.8);
  ctx.bezierCurveTo(123.978, 91.792, 123.986, 91.788, 123.994, 91.788);
  ctx.lineTo(124.382, 91.788);
  ctx.bezierCurveTo(124.39, 91.788, 124.402, 91.792, 124.41, 91.8);
  ctx.lineTo(124.478, 91.868);
  ctx.bezierCurveTo(
    124.486,
    91.876,
    124.488667,
    91.8857778,
    124.489556,
    91.8914074,
  );
  ctx.lineTo(124.49, 92);
  ctx.bezierCurveTo(124.49, 92.028, 124.514, 92.056, 124.546, 92.056);
  ctx.lineTo(125.022, 92.056);
  ctx.bezierCurveTo(125.05, 92.056, 125.078, 92.028, 125.078, 92);
  ctx.lineTo(125.078, 91.58);
  ctx.bezierCurveTo(125.078, 91.576, 125.074, 91.572, 125.074, 91.572);
  ctx.lineTo(125.078, 91.572);
  ctx.bezierCurveTo(125.078, 91.572, 125.082, 91.516, 125.034, 91.468);
  ctx.lineTo(124.81, 91.244);
  ctx.bezierCurveTo(124.766, 91.2, 124.706, 91.2, 124.706, 91.2);
  ctx.lineTo(123.67, 91.2);
  ctx.bezierCurveTo(123.67, 91.2, 123.614, 91.2, 123.566, 91.244);
  ctx.lineTo(123.342, 91.468);
  ctx.bezierCurveTo(123.298, 91.512, 123.302, 91.572, 123.302, 91.572);
  ctx.lineTo(123.302, 93.624);
  ctx.bezierCurveTo(123.302, 93.624, 123.302, 93.688, 123.342, 93.728);
  ctx.lineTo(123.566, 93.952);
  ctx.bezierCurveTo(123.599, 93.985, 123.641, 93.99325, 123.659938, 93.9953125);
  ctx.lineTo(124.706, 93.996);
  ctx.bezierCurveTo(124.706, 93.996, 124.766, 93.996, 124.81, 93.952);
  ctx.closePath();
  ctx.moveTo(125.942, 94);
  ctx.bezierCurveTo(125.974, 94, 126.002, 93.972, 126.014, 93.944);
  ctx.lineTo(126.11, 93.62);
  ctx.lineTo(126.914, 93.62);
  ctx.lineTo(127.01, 93.944);
  ctx.bezierCurveTo(127.022, 93.972, 127.05, 94, 127.082, 94);
  ctx.lineTo(127.538, 94);
  ctx.bezierCurveTo(127.57, 94, 127.606, 93.972, 127.598, 93.944);
  ctx.lineTo(126.806, 91.264);
  ctx.lineTo(126.806, 91.264);
  ctx.lineTo(126.806, 91.26);
  ctx.bezierCurveTo(126.794, 91.224, 126.778, 91.204, 126.75, 91.204);
  ctx.lineTo(126.274, 91.204);
  ctx.bezierCurveTo(126.246, 91.204, 126.234, 91.224, 126.218, 91.26);
  ctx.lineTo(126.218, 91.264);
  ctx.lineTo(125.426, 93.944);
  ctx.bezierCurveTo(125.418, 93.972, 125.454, 94, 125.486, 94);
  ctx.lineTo(125.942, 94);
  ctx.closePath();
  ctx.moveTo(126.754, 93.08);
  ctx.lineTo(126.27, 93.08);
  ctx.lineTo(126.514, 92.26);
  ctx.lineTo(126.754, 93.08);
  ctx.closePath();
  ctx.moveTo(129.618, 94);
  ctx.bezierCurveTo(129.65, 94, 129.678, 93.976, 129.678, 93.944);
  ctx.lineTo(129.678, 93.468);
  ctx.bezierCurveTo(129.678, 93.44, 129.65, 93.412, 129.618, 93.412);
  ctx.lineTo(128.546, 93.412);
  ctx.lineTo(128.546, 91.26);
  ctx.bezierCurveTo(128.542, 91.236, 128.518, 91.216, 128.49, 91.216);
  ctx.lineTo(128.018, 91.216);
  ctx.bezierCurveTo(127.99, 91.216, 127.966, 91.236, 127.962, 91.26);
  ctx.lineTo(127.958, 91.26);
  ctx.lineTo(127.958, 93.944);
  ctx.bezierCurveTo(127.958, 93.976, 127.986, 94, 128.018, 94);
  ctx.lineTo(129.618, 94);
  ctx.closePath();
  ctx.moveTo(130.638, 94);
  ctx.bezierCurveTo(130.67, 94, 130.694, 93.976, 130.694, 93.944);
  ctx.lineTo(130.694, 91.272);
  ctx.bezierCurveTo(130.694, 91.24, 130.67, 91.216, 130.638, 91.216);
  ctx.lineTo(130.162, 91.216);
  ctx.bezierCurveTo(130.13, 91.216, 130.106, 91.24, 130.106, 91.272);
  ctx.lineTo(130.106, 93.944);
  ctx.bezierCurveTo(130.106, 93.976, 130.13, 94, 130.162, 94);
  ctx.lineTo(130.638, 94);
  ctx.closePath();
  ctx.moveTo(131.658, 94);
  ctx.bezierCurveTo(131.69, 94, 131.714, 93.976, 131.714, 93.944);
  ctx.lineTo(131.714, 92.896);
  ctx.lineTo(132.45, 92.896);
  ctx.lineTo(132.45, 92.888);
  ctx.bezierCurveTo(132.466, 92.88, 132.478, 92.86, 132.478, 92.84);
  ctx.lineTo(132.478, 92.364);
  ctx.bezierCurveTo(132.478, 92.332, 132.454, 92.308, 132.422, 92.308);
  ctx.lineTo(131.714, 92.308);
  ctx.lineTo(131.714, 91.792);
  ctx.lineTo(132.662, 91.792);
  ctx.lineTo(132.662, 91.784);
  ctx.bezierCurveTo(132.682, 91.776, 132.694, 91.756, 132.694, 91.736);
  ctx.lineTo(132.694, 91.26);
  ctx.bezierCurveTo(132.694, 91.228, 132.666, 91.204, 132.638, 91.204);
  ctx.lineTo(131.182, 91.204);
  ctx.lineTo(131.182, 91.204);
  ctx.bezierCurveTo(131.15, 91.204, 131.126, 91.228, 131.126, 91.26);
  ctx.lineTo(131.126, 93.944);
  ctx.bezierCurveTo(131.126, 93.976, 131.15, 94, 131.182, 94);
  ctx.lineTo(131.658, 94);
  ctx.closePath();
  ctx.moveTo(134.59, 93.956);
  ctx.lineTo(134.818, 93.732);
  ctx.bezierCurveTo(134.866, 93.684, 134.858, 93.628, 134.858, 93.628);
  ctx.lineTo(134.858, 91.576);
  ctx.bezierCurveTo(134.858, 91.576, 134.866, 91.52, 134.818, 91.472);
  ctx.lineTo(134.59, 91.248);
  ctx.bezierCurveTo(134.554, 91.209, 134.5135, 91.20375, 134.4955, 91.2035571);
  ctx.lineTo(133.454, 91.204);
  ctx.bezierCurveTo(133.454, 91.204, 133.398, 91.196, 133.35, 91.248);
  ctx.lineTo(133.126, 91.472);
  ctx.bezierCurveTo(133.078, 91.52, 133.082, 91.576, 133.082, 91.576);
  ctx.lineTo(133.082, 93.628);
  ctx.bezierCurveTo(133.082, 93.628, 133.078, 93.684, 133.126, 93.732);
  ctx.lineTo(133.35, 93.956);
  ctx.bezierCurveTo(133.386, 93.992, 133.4265, 93.99875, 133.4445, 93.999875);
  ctx.lineTo(134.49, 94);
  ctx.bezierCurveTo(134.49, 94, 134.542, 94.004, 134.59, 93.956);
  ctx.closePath();
  ctx.moveTo(134.202, 93.412);
  ctx.lineTo(133.738, 93.412);
  ctx.lineTo(133.682, 93.356);
  ctx.bezierCurveTo(133.674, 93.344, 133.67, 93.336, 133.67, 93.328);
  ctx.lineTo(133.67, 91.9);
  ctx.lineTo(133.673556, 91.8834074);
  ctx.bezierCurveTo(
    133.675333,
    91.8786667,
    133.678,
    91.8733333,
    133.682,
    91.868,
  );
  ctx.lineTo(133.75, 91.804);
  ctx.bezierCurveTo(133.758, 91.792, 133.77, 91.792, 133.774, 91.792);
  ctx.lineTo(134.166, 91.792);
  ctx.bezierCurveTo(134.17, 91.792, 134.182, 91.792, 134.194, 91.804);
  ctx.lineTo(134.258, 91.868);
  ctx.bezierCurveTo(134.274, 91.884, 134.27, 91.9, 134.27, 91.9);
  ctx.lineTo(134.27, 93.328);
  ctx.bezierCurveTo(134.27, 93.336, 134.27, 93.344, 134.258, 93.356);
  ctx.lineTo(134.202, 93.412);
  ctx.closePath();
  ctx.moveTo(135.826, 94);
  ctx.bezierCurveTo(135.858, 94, 135.882, 93.972, 135.882, 93.944);
  ctx.lineTo(135.882, 92.972);
  ctx.lineTo(136.066, 92.972);
  ctx.lineTo(136.458, 93.944);
  ctx.bezierCurveTo(136.47, 93.972, 136.498, 94, 136.53, 94);
  ctx.lineTo(137.066, 94);
  ctx.bezierCurveTo(137.094, 94, 137.13, 93.972, 137.122, 93.944);
  ctx.lineTo(136.714, 92.94);
  ctx.lineTo(136.726, 92.932);
  ctx.lineTo(136.954, 92.704);
  ctx.bezierCurveTo(137.002, 92.656, 136.994, 92.6, 136.994, 92.6);
  ctx.lineTo(136.994, 91.584);
  ctx.bezierCurveTo(136.994, 91.584, 137.002, 91.52, 136.954, 91.472);
  ctx.lineTo(136.726, 91.244);
  ctx.bezierCurveTo(136.69, 91.208, 136.6495, 91.2035, 136.6315, 91.2035);
  ctx.lineTo(135.35, 91.204);
  ctx.bezierCurveTo(135.322, 91.204, 135.294, 91.228, 135.294, 91.26);
  ctx.lineTo(135.294, 93.944);
  ctx.bezierCurveTo(135.294, 93.972, 135.322, 94, 135.35, 94);
  ctx.lineTo(135.826, 94);
  ctx.closePath();
  ctx.moveTo(136.302, 92.384);
  ctx.lineTo(135.882, 92.384);
  ctx.lineTo(135.882, 91.792);
  ctx.lineTo(136.298, 91.792);
  ctx.bezierCurveTo(136.298, 91.792, 136.314, 91.788, 136.33, 91.804);
  ctx.lineTo(136.394, 91.868);
  ctx.bezierCurveTo(136.41, 91.884, 136.406, 91.9, 136.406, 91.9);
  ctx.lineTo(136.406, 92.276);
  ctx.bezierCurveTo(136.406, 92.276, 136.41, 92.292, 136.394, 92.308);
  ctx.lineTo(136.33, 92.372);
  ctx.bezierCurveTo(136.318, 92.384, 136.306, 92.384, 136.302, 92.384);
  ctx.closePath();
  ctx.moveTo(137.99, 93.996);
  ctx.bezierCurveTo(138.018, 93.996, 138.046, 93.968, 138.046, 93.94);
  ctx.lineTo(138.046, 92.604);
  ctx.lineTo(138.534, 93.94);
  ctx.bezierCurveTo(138.546, 93.968, 138.574, 93.996, 138.606, 93.996);
  ctx.lineTo(139.238, 93.996);
  ctx.bezierCurveTo(139.27, 93.996, 139.294, 93.968, 139.294, 93.94);
  ctx.lineTo(139.294, 91.256);
  ctx.bezierCurveTo(139.294, 91.224, 139.27, 91.2, 139.238, 91.2);
  ctx.lineTo(138.762, 91.2);
  ctx.bezierCurveTo(138.734, 91.2, 138.706, 91.224, 138.706, 91.256);
  ctx.lineTo(138.706, 92.844);
  ctx.lineTo(138.698, 92.8);
  ctx.lineTo(138.17, 91.256);
  ctx.lineTo(138.166, 91.256);
  ctx.bezierCurveTo(138.158, 91.22, 138.138, 91.2, 138.11, 91.2);
  ctx.lineTo(137.514, 91.2);
  ctx.bezierCurveTo(137.482, 91.2, 137.458, 91.224, 137.458, 91.256);
  ctx.lineTo(137.458, 93.94);
  ctx.bezierCurveTo(137.458, 93.968, 137.482, 93.996, 137.514, 93.996);
  ctx.lineTo(137.99, 93.996);
  ctx.closePath();
  ctx.moveTo(140.238, 94);
  ctx.bezierCurveTo(140.27, 94, 140.294, 93.976, 140.294, 93.944);
  ctx.lineTo(140.294, 91.272);
  ctx.bezierCurveTo(140.294, 91.24, 140.27, 91.216, 140.238, 91.216);
  ctx.lineTo(139.762, 91.216);
  ctx.bezierCurveTo(139.73, 91.216, 139.706, 91.24, 139.706, 91.272);
  ctx.lineTo(139.706, 93.944);
  ctx.bezierCurveTo(139.706, 93.976, 139.73, 94, 139.762, 94);
  ctx.lineTo(140.238, 94);
  ctx.closePath();
  ctx.moveTo(141.134, 94);
  ctx.bezierCurveTo(141.166, 94, 141.194, 93.972, 141.206, 93.944);
  ctx.lineTo(141.302, 93.62);
  ctx.lineTo(142.106, 93.62);
  ctx.lineTo(142.202, 93.944);
  ctx.bezierCurveTo(142.214, 93.972, 142.242, 94, 142.274, 94);
  ctx.lineTo(142.73, 94);
  ctx.bezierCurveTo(142.762, 94, 142.798, 93.972, 142.79, 93.944);
  ctx.lineTo(141.998, 91.264);
  ctx.lineTo(141.998, 91.264);
  ctx.lineTo(141.998, 91.26);
  ctx.bezierCurveTo(141.986, 91.224, 141.97, 91.204, 141.942, 91.204);
  ctx.lineTo(141.466, 91.204);
  ctx.bezierCurveTo(141.438, 91.204, 141.426, 91.224, 141.41, 91.26);
  ctx.lineTo(141.41, 91.264);
  ctx.lineTo(140.618, 93.944);
  ctx.bezierCurveTo(140.61, 93.972, 140.646, 94, 140.678, 94);
  ctx.lineTo(141.134, 94);
  ctx.closePath();
  ctx.moveTo(141.946, 93.08);
  ctx.lineTo(141.462, 93.08);
  ctx.lineTo(141.706, 92.26);
  ctx.lineTo(141.946, 93.08);
  ctx.closePath();
  ctx.fill("nonzero");
  ctx.stroke();
  ctx.restore();
  ctx.restore();
  ctx.restore();
  ctx.restore();
}

/**
 * Dessine un cone de chantier vu du dessus.
 * @param ctx - Context canvas 2D
 */
export function draw_cone_top(ctx) {
  ctx.save();
  ctx.scale(0.25641025641025644, 0.25641025641025644);

  ctx.fillStyle = "#222";
  ctx.roundRect(-25, -25, 50, 50, 11);
  ctx.fill();
  ctx.fillStyle = "#DA5D00";
  ctx.fillEllipse(0, 0, 16);
  ctx.fillStyle = "#EEE";
  ctx.fillEllipse(0, 0, 11);
  ctx.fillStyle = "#DA5D00";
  ctx.fillEllipse(0, 0, 6);
  ctx.fillStyle = "#222";
  ctx.fillEllipse(0, 0, 3);
  ctx.restore();
}

/**
 * Dessine un cone de chantier vu de cote
 * @param ctx - Context canvas 2D
 */
export function draw_cone_back(ctx) {
  ctx.save();
  ctx.scale(0.29850746268656714, -0.29850746268656714);
  ctx.translate(0, -101);

  ctx.fillStyle = "#222";
  ctx.roundRect(-25, -2, 50, 8, 2);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(-16, 4);
  ctx.lineTo(16, 4);
  ctx.lineTo(3, 70);
  ctx.lineTo(-3, 70);
  ctx.fillStyle = "#DA5D00";
  ctx.fill();

  ctx.beginPath();
  ctx.ellipse(0, 4, 16, 3, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(-11.5, 25);
  ctx.lineTo(11.5, 25);
  ctx.lineTo(7.5, 46);
  ctx.lineTo(-7.5, 46);
  ctx.fillStyle = "#EEE";
  ctx.fill();

  ctx.beginPath();
  ctx.ellipse(0, 25, 11, 2, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#DA5D00";

  ctx.beginPath();
  ctx.ellipse(0, 46, 7, 0.5, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

