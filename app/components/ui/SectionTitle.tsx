interface SectionTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
  return (
    <div className={`section-title-block ${className}`}>
      <h2>{title}</h2>
      <p className="script-sub font-script">{subtitle}</p>
    </div>
  );
}
