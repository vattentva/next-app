import { GetUserUseCase, DeleteUserUseCase } from '@/application/useCases/UserUseCase';
import { UserRepository } from '@/infrastructure/repositories/UserRepository';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json(
      { error: 'id is required' },
      { status: 400 },
    );
  }

  const useCase = new GetUserUseCase(new UserRepository());
  const userDTO = await useCase.execute(id);

  return NextResponse.json(
    { data: { ...userDTO?.toJSON() } },
    { status: 200 }
  );
}

export async function DELETE(request: NextRequest): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json(
      { error: 'id is required' },
      { status: 400 },
    );
  }

  const useCase = new DeleteUserUseCase(new UserRepository());
  const result = await useCase.execute(id);

  return NextResponse.json(
    { message: `User[${result}] deleted successfully` },
    { status: 200 }
  );
}
  