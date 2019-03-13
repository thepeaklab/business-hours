# @thepeaklab/business-hours

A tiny module to check if a store is open on a given date.

## Installation

```console
npm install @thepeaklab/business-hours --save
```

## Usage

```javascript
import { isOpen } from "@thepeaklab/business-hours";

const businessHours = {
  monday: [{ from: "09:00", to: "18:00" }],
  tuesday: [{ from: "09:00", to: "18:00" }],
  wednesday: [{ from: "09:00", to: "13:00" }, { from: "14:00", to: "18:00" }],
  thursday: [{ from: "09:00", to: "18:00" }],
  friday: [{ from: "09:00", to: "18:00" }],
  saturday: [],
  sunday: []
};

const wednesdayInMarch = new Date(2019, 3, 13, 10, 0, 0);
const sundayInMarch = new Date(2019, 3, 17, 10, 0, 0);

// true
isOpen({ date: wednesdayInMarch, businessHours });

// false
isOpen({ date: sundayInMarch, businessHours });
```
