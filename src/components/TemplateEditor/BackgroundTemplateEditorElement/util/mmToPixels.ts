const DEFAULT_DPI = 96;

const mmToPixels = (mm: number, dpi: number = DEFAULT_DPI) => {
  const inchesPerMillimeter = 1 / 25.4;
  const pixelsPerInch = dpi;
  return mm * inchesPerMillimeter * pixelsPerInch;
};

export default mmToPixels;
