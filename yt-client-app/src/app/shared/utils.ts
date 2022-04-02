const DateParse = (isoDate: Date): number => new Date(isoDate).getTime();

const CountDiffAmongDays = (diffDate: string): number => {
  const today = new Date();
  const publishedDate = new Date(Date.parse(diffDate));
  const timeDiff = Math.abs(today.getTime() - publishedDate.getTime());
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
};

export { DateParse, CountDiffAmongDays };
