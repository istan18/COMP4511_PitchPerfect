
export const monthOptions = [
  {label: "Jan", value: "1"},
  {label: "Feb", value: "2"},
  {label: "Mar", value: "3"},
  {label: "Apr", value: "4"},
  {label: "May", value: "5"},
  {label: "Jun", value: "6"},
  {label: "Jul", value: "7"},
  {label: "Aug", value: "8"},
  {label: "Sep", value: "9"},
  {label: "Oct", value: "10"},
  {label: "Nov", value: "11"},
  {label: "Dec", value: "12"},
];

export const findValueByMonth = (month: string) => {
  const option = monthOptions.find(option => option.label === month);
  return option ? option.value : null;
}

export const findMonthByValue = (value: string) => {
  const month = monthOptions.find(option => option.value === value);
  return month ? month.label : null;
}

export const calculateDuration = (disableEndDate: boolean, endYear: string, startYear: string, endMonth: string, startMonth: string) => {
  if (disableEndDate) {
    endMonth = new Date().getMonth().toString();
    endYear = new Date().getFullYear().toString();
  }
  const totalMonths = (parseInt(endYear) - parseInt(startYear)) * 12 + (parseInt(endMonth) - parseInt(startMonth));

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return `${years > 0 ? `${years} yrs` : ''} ${months} mths`;
}
