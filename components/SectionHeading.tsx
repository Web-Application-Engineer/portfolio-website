type SectionHeadingProps = {
  title: string;
};

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2 className="section-title">{title}</h2>

      <div className="mt-3 flex justify-center">
        <div className="live-line">
          <div className="live-line-bar"></div>
        </div>
      </div>
    </div>
  );
}