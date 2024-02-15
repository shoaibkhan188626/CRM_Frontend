import { ErpLayout } from '@/layout';
import CreateItem from '@/modules/ErpPanelModule/CreateItem';
import InvoiceForm from '../Forms/invoiceForm';

export default function CreateInvoiceModule({ config }) {
  return (
    <ErpLayout>
      <CreateItem config={config} CreateForm={InvoiceForm} />
    </ErpLayout>
  );
}
