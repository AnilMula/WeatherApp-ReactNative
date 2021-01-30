const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const date = () => {
  const date = new Date().getDate(); //Current Date
  const month = new Date().getMonth(); //Current Month
  const day = new Date().getDay();
  return days[day] + ',' + date + ' ' + months[month];
};
const day = (timeStamp) => {
  return days[new Date(timeStamp * 1000).getDay()];
};
const hour = (timeStamp) => {
  const hrs = new Date(timeStamp * 1000).getHours();
  if (hrs >= 0 && hrs <= 9) return `0${hrs}:00`;
  return `${hrs}:00`;
};
const time = () => {
  const hours = new Date().getHours(); //Current Hours
  const min = new Date().getMinutes(); //Current Minutes
  if (min >= 0 && min <= 9) return `${hours}:0${min}`;
  return hours + ':' + min;
};
const percent = (num) => {
  return `${num}%`;
};

const pressure = (num) => {
  return `${num} hPa`;
};

const uvi = (num) => {
  if (num >= 0 && num <= 5) return `Low`;
  else return `High`;
};

const speed = (num) => {
  return `${num} miles/hour`;
};
export { date, time, day, hour, percent, pressure, uvi, speed };
