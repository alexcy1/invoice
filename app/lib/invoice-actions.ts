

// app/lib/invoice-actions.ts

'use server';

import { deleteInvoice } from '@/app/lib/actions';

export async function handleDeleteInvoice(id: string) {
  await deleteInvoice(id);
}