export function pdfHref(projectId: string) {
  const number = projectId.replace(/^bt/, "");
  return `${import.meta.env.BASE_URL}pdfs/bai-${number}-nguyen-thi-viet-loan.pdf`;
}
