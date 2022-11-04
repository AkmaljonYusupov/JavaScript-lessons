"use strict";

const school = {
  teacher: "Akmaljon",
  age: 24,
  science: "Informatika IT",
  lessons: {
    monday: "day off",
    tuesday: 6,
    wednesday: 2,
    thursday: 4,
    friday: 2,
    saturday: 2,
  },
};

console.log(Object.keys(school).length);

// disturitatsiya
const { monday, tuesday, wednesday, thursday, friday, saturday } =
  school.lessons;
console.log(monday);

for (let key in school) {
  if (typeof school[key] === "object") {
    for (let i in school[key]) {
      console.log(`Property ${i} has value ${school[key][i]}`);
    }
  } else {
    console.log(`Property ${key} has value ${school[key]}`);
  }
}
