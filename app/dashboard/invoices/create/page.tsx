import { fetchCustomers } from "@/app/lib/data";
import { customers } from "@/app/lib/placeholder-data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/create-form";
import React from "react";

const CreateInvoice = async () => {
  const customers = await fetchCustomers();
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
};

export default CreateInvoice;
