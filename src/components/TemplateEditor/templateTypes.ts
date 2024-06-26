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
export interface BoxElement {
  id: string;
  size: Size;
  position: Position;
  type: "box";
  url: string;
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
  formLabel?: string;
  position: Position;
  rotation: number;
  opacity: number;
  type: "text";
  fontFamily: string;
  fontUrl: string;
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

export type TemplateElement = ImageElement | TextElement | BoxElement;

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
  id: string;
  pageConfig: PageConfig;
}

export type TemplateData = {
  id: string;
  background: BackgroundTemplateElement;
  elements: TemplateElement[];
};
