export const ITEM_TYPES = {
  TEXT: "text",
} as const;

export type ItemTypes = keyof typeof ITEM_TYPES;

export type ItemTypesValues = (typeof ITEM_TYPES)[ItemTypes];
