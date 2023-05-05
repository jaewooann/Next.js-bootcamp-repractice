export const getDate = (date) => {
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = `00${_date.getMonth() + 1}`;
  const  dd = `00${_date.getDate()}`;
  return `${yyyy}-${mm.slice(-2)}-${dd.slice(-2)}`;
}