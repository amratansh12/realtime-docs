import React from "react";

interface DocumentsIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentsIdPage = async ({ params }: DocumentsIdPageProps) => {
  const { documentId } = await params;

  return <div>DocumentsId: {documentId}</div>;
};

export default DocumentsIdPage;
