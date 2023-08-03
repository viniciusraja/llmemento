import create, { StateCreator } from "zustand";

export interface TemplateEditorFormStore {
  templateEditorForm: {};
  setTemplateEditorForm: (templateEditorForm: {}) => void;
}

export const createTemplateEditorFormStore: StateCreator<
  TemplateEditorFormStore
> = (set) => ({
  templateEditorForm: {},
  setTemplateEditorForm: (templateEditorForm: {}) => set(templateEditorForm),
});

const useTemplateFormEditorStore = create<TemplateEditorFormStore>()(
  (...a) => ({
    ...createTemplateEditorFormStore(...a),
  })
);

export default useTemplateFormEditorStore;
