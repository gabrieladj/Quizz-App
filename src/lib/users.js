import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function list_users() {
  let users = await prisma.UserStudent.findMany();
  return users;
}

export async function createUser(username, hashedPassword) {
  const newUser = await prisma.UserStudent.create({data: {username, password: hashedPassword}})
  return newUser.id;
}

export async function validate_login(name, password){
  let userStudent =  await prisma.UserStudent.findUnique({
    where: {name}
  });
  return (userStudent.password === password);
  
}

export async function userExists(username) {
  let count = await prisma.UserStudent.count({
      where: {
        username: username
       }
  });
  console.log("COUNT: " + count)
  return (count !== 0);
}

export async function getId(name){
  let userStudent =  await prisma.UserStudent.findUnique({
    where: {name: name}
  });
  return (userStudent.id);
}

export async function getUsername(id){
  let userStudent =  await prisma.UserStudent.findUnique({
    where: {id: id}
  });
  return (userStudent.username);
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
