interface Size {
  width: number;
  height: number;
}

interface Position {
  x: number;
  y: number;
}

interface ImageApi {
  id: string;
  type: string;
  url: string;
  preview: string;
  backgroundRemoved: null | any;
  origin: string;
  trackedJob: null | any;
  data: any[];
  links: any[];
}

interface Metadata {
  uploadId?: string;
  imageApi?: ImageApi;
}

export interface ImageElement {
  id: string;
  metadata: Metadata;
  size: Size;
  position: Position;
  rotation: number;
  flip: {
    x: boolean;
    y: boolean;
  };
  group: null | any;
  locked: boolean;
  keepProportions: boolean;
  opacity: number;
  virtualGroup: null | any;
  tags: any[];
  index: string;
  type: "image";
  url?: string;
  preview?: string;
  urlBackgroundRemoved: null | any;
  filter: null | any;
  crop: { size: Size; position: Position };
  backgroundMode: string;
  mask: null | any;
}

interface TextColor {
  serializable: boolean;
  id: string;
  r: number;
  g: number;
  b: number;
  a: number;
  validForVariant: boolean;
}

interface TextOutline {
  color: TextColor; // Reuse the TextColor type
  width: number;
}

interface TextElement {
  id: string;
  metadata: Metadata;
  size: Size;
  position: Position;
  rotation: number;
  flip: {
    x: boolean;
    y: boolean;
  };
  group: null | any;
  locked: boolean;
  keepProportions: boolean;
  opacity: number;
  virtualGroup: null | any;
  tags: any[];
  index: string;
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
  colors: TextColor[]; // Reuse the TextColor type
  textTransform: string;
  scale: number;
  textShadow: any[]; // Change 'any' to a proper type if possible
  listStyle: string;
  link: string[];
  curvedProperties: {
    arc: null | any; // Change 'any' to a proper type if possible
    minArc: number;
    transformCurve: number;
  };
  minBoxWidth: number;
  minBoxHeight: number;
  content: string;
}

export type TemplateElement = ImageElement | TextElement;

export interface Elements {
  [key: string]: TemplateElement;
}

interface BackgroundColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

type PageConfig = {
  size: {
    width: number;
    height: number;
    unit: "mm";
    dpi: number;
  };
};

export interface BackgroundTemplateElement extends BackgroundColor {
  serializable: boolean;
  id: string;
  validForVariant: boolean;
  pageConfig: PageConfig;
}
