import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import TemplateEditor from "~/components/TemplateEditor";

export default function TemplatePage() {
  if (typeof navigator === "undefined") return;
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator?.userAgent);

  const dndBackendProvider = isMobile ? TouchBackend : HTML5Backend;

  return (
    <DndProvider backend={dndBackendProvider}>
      <TemplateEditor />;
    </DndProvider>
  );
}
