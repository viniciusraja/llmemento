import Head from "next/head";
import useUploadedTemplateEditorStore from "~/components/TemplateCreator/TemplateUploader/store/useUploadedTemplateEditorStore";
import { TextElement } from "../templateTypes";

const FontLoader = () => {
  const uploadedTemplateEditor = useUploadedTemplateEditorStore(
    (state) => state.uploadedTemplateEditor
  );

  const elementsToRender = Object.values(
    uploadedTemplateEditor?.elements || {}
  );

  const textElements = elementsToRender?.filter(
    (element) => element?.type === "text"
  ) as TextElement[];

  return (
    <Head>
      {textElements?.map((textElement) => (
        <link rel="stylesheet" type="font/woff2" href={textElement?.fontUrl} />
      ))}
    </Head>
  );
};

export default FontLoader;
