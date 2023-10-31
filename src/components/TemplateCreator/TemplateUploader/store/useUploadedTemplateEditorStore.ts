import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
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
  persist(
    (...a) => ({
      ...createUploadedTemplateEditorStore(...a),
    }),
    {
      name: "template-uploaded-file",
    }
  )
);

export default useUploadedTemplateEditorStore;
