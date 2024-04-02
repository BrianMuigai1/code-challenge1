let Carspeed;
if (Carspeed < 70) {
  return OK;
} else if (70 < Carspeed <= 75) {
  return Points1;
} else if (75 < Carspeed <= 80) {
  return Points2;
} else if (80 < Carspeed <= 85) {
  return Points3;
} else if (85 < Carspeed <= 90) {
  return Points4;
} else if (90 < Carspeed <= 95) {
  return Points5;
} else if (95 < Carspeed <= 100) {
  return Points6;
} else if (100 < Carspeed <= 105) {
  return Point7;
} else if (105 < Carspeed <= 110) {
  return Point8;
} else if (110 < Carspeed <= 115) {
  return Point9;
} else if (115 < Carspeed <= 120) {
  return Point10;
} else if (120 < Carspeed <= 125) {
  return Point11;
} else if (125 < Carspeed <= 130) {
  return Point12;
} else {
  return "License suspended";
}