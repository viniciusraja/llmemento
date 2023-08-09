import create, { StateCreator } from "zustand";
import { TemplateData } from "~/components/TemplateEditor/templateTypes";

export interface UploadedTemplateEditorStore {
  uploadedTemplateEditor: TemplateData;
  setUploadedTemplateEditor: (uploadedTemplateEditor: TemplateData) => void;
}

export const createUploadedTemplateEditorStore: StateCreator<
  UploadedTemplateEditorStore
> = (set) => ({
  uploadedTemplateEditor: {} as TemplateData,
  setUploadedTemplateEditor: (uploadedTemplateEditor) =>
    set({ uploadedTemplateEditor }),
});

const useUploadedTemplateEditorStore = create<UploadedTemplateEditorStore>()(
  (...a) => ({
    ...createUploadedTemplateEditorStore(...a),
  })
);

export default useUploadedTemplateEditorStore;
