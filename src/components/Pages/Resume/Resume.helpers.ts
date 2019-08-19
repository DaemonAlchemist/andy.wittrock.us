const getMonth = (m:number) => [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
][m-1];
export const formatDate = (date:Month):string => `${getMonth(date.month)}, ${date.year}`;
