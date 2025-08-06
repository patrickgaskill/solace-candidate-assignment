import SolaceLogo from "./SolaceLogo";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-12">
      <SolaceLogo />
    </div>
  );
}
