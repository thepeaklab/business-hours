import { isOpen } from "./index";

describe("business hours", () => {
  test("is open", () => {
    const businessHours = {
      monday: [{ from: "09:00", to: "18:00" }]
    };

    const date = new Date(2019, 2, 18, 16, 0, 0);

    expect(isOpen({ date, businessHours })).toBe(true);
  });

  test("is closed", () => {
    const businessHours = {
      monday: [{ from: "09:00", to: "18:00" }]
    };

    const date = new Date(2019, 2, 18, 19, 0, 0);

    expect(isOpen({ date, businessHours })).toBe(false);
  });

  test("is closed with lunch break", () => {
    const businessHours = {
      monday: [{ from: "09:00", to: "13:00" }, { from: "14:00", to: "18:00" }]
    };

    const date = new Date(2019, 2, 18, 13, 30, 0);

    expect(isOpen({ date, businessHours })).toBe(false);
  });

  test("is open with lunch break", () => {
    const businessHours = {
      monday: [{ from: "09:00", to: "13:00" }, { from: "14:00", to: "18:00" }]
    };

    const date = new Date(2019, 2, 18, 14, 0, 0);

    expect(isOpen({ date, businessHours })).toBe(true);
  });
});
