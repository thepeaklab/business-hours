import isDate from "date-fns/is_date";
import { setHours, setMinutes, isWithinRange } from "date-fns";

const DAYS = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday"
};

const isEmpty = obj =>
  Object.entries(obj).length === 0 && obj.constructor === Object;

const extractHours = dateString => dateString.split(":")[0];
const extractMinutes = dateString => dateString.split(":")[1];

export const isOpen = ({ date, businessHours }) => {
  if (!isDate(date)) {
    throw new Error("Date argument is not of type Date.");
  }

  if (isEmpty(businessHours)) {
    throw new Error("businessHours argument is empty");
  }

  const day = date.getDay();
  const businessHoursOnSpecificDay = businessHours[DAYS[day]];

  let result = false;
  businessHoursOnSpecificDay.forEach(({ from, to }) => {
    const fromDate = setMinutes(
      setHours(date, extractHours(from)),
      extractMinutes(from)
    );

    const toDate = setMinutes(
      setHours(date, extractHours(to)),
      extractMinutes(to)
    );

    if (isWithinRange(date, fromDate, toDate)) {
      result = true;
    }
  });

  return result;
};
