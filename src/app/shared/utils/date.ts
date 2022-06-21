import { TimesConstants } from '../constants/shared-constants';

const DateParse = (isoDate: Date): number => new Date(isoDate).getTime();

const CountDiffAmongDays = (diffDate: string): number => {
  const today = new Date();
  const publishedDate = new Date(Date.parse(diffDate));

  // Time delta in ms
  const timeDiff = Math.abs(today.getTime() - publishedDate.getTime());

  // Day amount = delta in ms converts to days.
  return Math.ceil(
    timeDiff /
      (TimesConstants.msInSec *
        TimesConstants.secInHour *
        TimesConstants.hourInDay)
  );
};

export { DateParse, CountDiffAmongDays };
