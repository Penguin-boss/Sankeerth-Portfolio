interface SectionAnchorProps {
  id: string;
}

export function SectionAnchor({ id }: SectionAnchorProps) {
  return <div id={id} className="scroll-mt-20" aria-hidden="true" />;
}
