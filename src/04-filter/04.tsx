const ages = [18, 20, 22, 1, 100, 90, 14]

export const predicate = (age: number) => {
  return age > 90
}

export const oldAges = (ages: number[]) => {
  return ages.filter(el => predicate(el) ? el : null)
}

oldAges(ages)

export type CourseType = {
  title: string
  price: number
}

const courses = [
  {title: 'CSS', price: 110},
  {title: 'JS', price: 200},
  {title: 'React', price: 150}
]

const chipPredicate = (course: CourseType) => {
  return course.price < 160
}