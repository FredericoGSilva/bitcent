import SummaryItem from "./SummaryItem";
import { IconArrowsDoubleSwNe, IconCash, IconCreditCard } from "@tabler/icons-react";

export default function Summary() {
  return (
    <div className={`
        grid grid-cols-1 md:grid-cols-3 gap-4
    `}>
      <SummaryItem 
        title="Receitas"
        value={144.55}
        icon={<IconCash />}
        iconClassName='text-green-500'
        />
        <SummaryItem 
            title="Despesas"
            value={244.55}
            icon={<IconCreditCard />}
            iconClassName='text-red-500'
        />
        <SummaryItem 
            title="Total"
            value={344.55}
            icon={<IconArrowsDoubleSwNe />}
            iconClassName='text-yellow-500'
        />
    </div>
  );
}
