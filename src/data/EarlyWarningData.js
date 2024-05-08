// ----------------------- Early Warning -----------------------
export const earlyWarningStatus = {
  ALL: 0,
  STANDBY1: 1,
  STANDBY2: 2,
  STANDBY3: 3,
  NORMAL: 4,
};

export const earlyWarningStatusCode = {
  ALL: 0,
  STANDBY1: "Siaga 1",
  STANDBY2: "Siaga 2",
  STANDBY3: "Siaga 3",
  NORMAL: "Normal",
};

export const initialEarlyWarningData = [
  {
    id: 1,
    date: "2024-03-31T06:22:25.557035+07:00",
    status: "Siaga 1",
    status_code: 1,
    name: "Pompa Kali Duri (Kalijodo)",
    location: "Ciliwung",
    water_level: 215,
    previous_water_level: 200,
  },
  {
    id: 2,
    date: "2024-03-31T06:22:25.557035+07:00",
    status: "Siaga 2",
    status_code: 2,
    name: "PS. Cibogo",
    location: "Ciliwung",
    water_level: 245,
    previous_water_level: 245,
  },
  {
    id: 3,
    date: "2024-03-31T06:22:25.557035+07:00",
    status: "Siaga 3",
    status_code: 3,
    name: "PS. Depok",
    location: "Ciliwung",
    water_level: 190,
    previous_water_level: 195,
  },
  {
    id: 4,
    date: "2024-03-31T06:22:25.557035+07:00",
    status: "Siaga 3",
    status_code: 3,
    name: "PS. Depok",
    location: "Ciliwung",
    water_level: 195,
    previous_water_level: 195,
  },
  {
    id: 5,
    date: "2024-03-31T06:22:25.557035+07:00",
    status: "Normal",
    status_code: 4,
    name: "PS. Kp. Melayu",
    location: "Ciliwung",
    water_level: 200,
    previous_water_level: 320,
  },
];
// ----------------------- End Early Warning -----------------------
