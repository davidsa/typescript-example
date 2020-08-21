export type Person =  {
  name: string
  lastname?: string
  age?: number
}


function getName(person: Person): string{
  return person.name
}

console.log(getName({name:'david'}))
