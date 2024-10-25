import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    // Logica para despues
    return NextResponse.json({ message: "Hello from the items API!" });
}