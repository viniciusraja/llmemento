const DEFAULT_DPI = 96;

const pixelsToMm = (px: number, dpi: number = DEFAULT_DPI) => {
  const inchesPerMillimeter = 1 / 25.4;
  const pixelsPerInch = dpi;
  return px / (inchesPerMillimeter * pixelsPerInch);
};

export default pixelsToMm;
