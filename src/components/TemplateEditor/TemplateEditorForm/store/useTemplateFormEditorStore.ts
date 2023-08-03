import create, { StateCreator } from "zustand";
import { persist } from "zustand/middleware";
export interface TemplateEditorFormStore {
  templateEditorForm: {};
  setTemplateEditorForm: (templateEditorForm: {}) => void;
}

export const createTemplateEditorFormStore: StateCreator<
  TemplateEditorFormStore
> = (set) => ({
  templateEditorForm: {},
  setTemplateEditorForm: (templateEditorForm: {}) =>
    set({ templateEditorForm }),
});

const useTemplateFormEditorStore = create<TemplateEditorFormStore>()(
  persist(
    (...a) => ({
      ...createTemplateEditorFormStore(...a),
    }),
    { name: "template-editor" }
  )
);

export default useTemplateFormEditorStore;
