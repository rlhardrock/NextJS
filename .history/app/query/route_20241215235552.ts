import { db } from "@vercel/postgres";
import { NextResponse } from 'next/server';

const client = await db.connect();

async function listInvoices() {
  const data = await client.sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

  return data.rows;
}


export async function GET() {
  // Mensaje inicial como advertencia, si aún lo necesitas.
  const message = 'Uncomment this file and remove this line. You can delete this file when you are finished.';

  try {
    // Lógica principal: lista de facturas.
    const invoices = await listInvoices();
    return NextResponse.json(invoices);
  } catch (error) {
    // Manejo de errores.
    return NextResponse.json(
      { error: error.message || 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json({
    message:
      'Uncomment this file and remove this line. You can delete this file when you are finished.',
  });
  try {
    return Response.json(await listInvoices());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
