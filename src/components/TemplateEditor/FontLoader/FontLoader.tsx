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
    (element) => element?.type === "text" && !!element?.fontUrl
  ) as TextElement[];

  return (
    <Head>
      {textElements?.map((textElement) => (
        <link
          key={textElement?.fontUrl}
          rel="stylesheet"
          type="font/woff2"
          href={textElement?.fontUrl}
        />
      ))}
    </Head>
  );
};

export default FontLoader;
