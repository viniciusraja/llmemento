interface Size {
  width: number;
  height: number;
}

interface Position {
  x: number;
  y: number;
}
export interface ImageElement {
  id: string;
  sizeWidth: number;
  sizeHeight: number;
  positionX: number;
  positionY: number;
  rotation: number;
  keepProportions: boolean;
  opacity: number;
  type: "image";
  url?: string;
  crop: { size: Size; position: Position };
}

interface TextColor {
  id: string;
  r: number;
  g: number;
  b: number;
  a: number;
}

interface TextOutline {
  color: TextColor; // Reuse the TextColor type
  width: number;
}

export interface TextElement {
  id: string;
  size: Size;
  position: Position;
  rotation: number;
  opacity: number;
  type: "text";
  fontFamily: string;
  fontWeight: number;
  fontStyle: string;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  textAlign: string;
  outline: TextOutline;
  color: TextColor;
  textTransform: string;
  link: string;
  content: string;
}

export type TemplateElement = ImageElement | TextElement;

interface BackgroundColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

type PageConfig = {
  width: number;
  height: number;
  unit: "mm";
  dpi: number;
};

export interface BackgroundTemplateElement extends BackgroundColor {
  id: string;
  pageConfig: PageConfig;
}

export type TemplateData = {
  id: string;
  background: BackgroundTemplateElement;
  elements: TemplateElement[];
};
