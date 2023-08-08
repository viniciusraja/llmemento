"use client";
import { Box } from "@chakra-ui/react";
import TemplateEditor from "~/components/TemplateEditor";

type TemplatePageProps = {
  params: { templateId: string };
};

export default function TemplatePage({
  params: { templateId },
}: TemplatePageProps) {
  return <TemplateEditor templateId={templateId} />;
}
