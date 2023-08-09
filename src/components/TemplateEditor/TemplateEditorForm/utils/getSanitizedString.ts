import DOMPurify from "dompurify";

const getSanitizedString = (inputHTML: string) => {
  const tempElement = document.createElement("div");

  tempElement.innerHTML = DOMPurify.sanitize(inputHTML);

  const sanitizedText = tempElement.textContent || tempElement.innerText; // Use textContent for modern browsers and innerText for older ones

  return sanitizedText;
};

export default getSanitizedString;
