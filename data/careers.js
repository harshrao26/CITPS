import {
  LuActivity,
  LuBuilding2,
  LuDroplet,
  LuEye,
  LuFlaskConical,
  LuHospital,
  LuMicroscope,
  LuScanLine,
} from "react-icons/lu";

// General workplaces for these roles across India. This is not a placement claim for any batch.
export const workplaces = [
  { title: "Hospitals", text: "Wards, theatres, emergency and day-care units.", icon: LuHospital },
  { title: "Diagnostic labs", text: "Pathology and testing labs, large and small.", icon: LuFlaskConical },
  { title: "Imaging centres", text: "X-ray and imaging suites inside or outside hospitals.", icon: LuScanLine },
  { title: "Dialysis units", text: "Renal care units and standalone dialysis centres.", icon: LuDroplet },
  { title: "Eye clinics", text: "Optometry practices and eye hospitals.", icon: LuEye },
  { title: "Rehab centres", text: "Physiotherapy and recovery clinics.", icon: LuActivity },
  { title: "Nursing homes", text: "Long-term care and home care providers.", icon: LuBuilding2 },
  { title: "Research labs", text: "Clinical research and teaching laboratories.", icon: LuMicroscope },
];
