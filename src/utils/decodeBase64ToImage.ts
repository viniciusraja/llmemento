import base64 from "base-64";

const decodeBase64Image = (base64Image: string) => {
  const imagePrefix = "data:image/png;base64,";
  const alreadyHasImagePrefix = base64Image.includes("data:image");

  return base64.decode(
    alreadyHasImagePrefix ? base64Image : `${imagePrefix}${base64Image}`
  );
};

export default decodeBase64Image;
