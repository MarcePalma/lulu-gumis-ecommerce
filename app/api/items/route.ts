import { NextResponse } from 'next/server';
import { getItemsFromDatabase } from '@/app/lib/database';

export async function GET() {
    try {
        const items = await getItemsFromDatabase();
        return NextResponse.json(items);
    } catch (error) {
        return NextResponse.json({ message: 'Error al obtener los productos' }, { status: 500 });
    }
}