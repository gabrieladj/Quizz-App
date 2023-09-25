// lib/jokes.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function list_users() {
  let users = await prisma.User.findMany();
  return users;
}

{/*
export async function get_joke(id) {
  let joke = await prisma.joke.findUnique({
    where: { id }
  });
  return joke;
}

export async function create_joke(joke) {
  await prisma.joke.create({ data: joke });
}

export async function update_joke(joke) {
  await prisma.joke.update({
    where: { id: joke.id },
    data: joke
  });
}

export async function delete_joke(id) {
  await prisma.joke.delete({
    where: { id }
  });
}
*/}
