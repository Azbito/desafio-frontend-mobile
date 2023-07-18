interface TodaysDateProps {
  DAY: string | number;
  MONTH: string | number;
}

const currentDate = new Date();

export const TODAYS_DATE: TodaysDateProps = {
  DAY: currentDate.getDate(),
  MONTH: currentDate.getMonth() + 1,
};

export const FORMATTED_MONTH =
  Number(TODAYS_DATE.MONTH) < 10 ? `0${TODAYS_DATE.MONTH}` : TODAYS_DATE.MONTH;
