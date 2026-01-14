import { cn } from "@/lib/utils";

interface Props {
  amount?: number;
  className?: string;
}

const PriceFormat = ({ amount, className }: Props) => {
  const formattedAmount = new Number(amount ? amount * 80 : 0).toLocaleString(
    "en-IN",
    {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    }
  );
  return <span className={cn(className)}>{formattedAmount}</span>;
};

export default PriceFormat;
