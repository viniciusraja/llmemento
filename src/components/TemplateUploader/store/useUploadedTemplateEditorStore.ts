import create, { StateCreator } from "zustand";

export interface UploadedTemplateEditorStore {
  uploadedTemplateEditor: {};
  setUploadedTemplateEditor: (uploadedTemplateEditor: {}) => void;
}

export const createUploadedTemplateEditorStore: StateCreator<
  UploadedTemplateEditorStore
> = (set) => ({
  uploadedTemplateEditor: {},
  setUploadedTemplateEditor: (uploadedTemplateEditor: {}) =>
    set({ uploadedTemplateEditor }),
});

const useUploadedTemplateEditorStore = create<UploadedTemplateEditorStore>()(
  (...a) => ({
    ...createUploadedTemplateEditorStore(...a),
  })
);

export default useUploadedTemplateEditorStore;
