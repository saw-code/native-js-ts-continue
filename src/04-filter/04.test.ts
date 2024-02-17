import {CourseType, oldAges, predicate} from './04';

// beforeEach(() => {
//   const ages = [18, 20, 22, 1, 100, 90, 14]
// })

test('Array should be 100', () => {
  let state = oldAges([18, 22, 20, 1, 100, 90, 14])

  expect(state).toEqual([100]);
});

test('Courses should be cheaper than 160$', () => {
  const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'React', price: 150}
  ]

  const chipPredicate = (course: CourseType) => {
    return course.price < 160
  }

  const chipCourses = courses.filter(chipPredicate)

  expect(chipCourses.length).toBe(2);
  expect(chipCourses[0]).toEqual({title: 'CSS', price: 110});
  expect(chipCourses[0].title).toBe('CSS');
  expect(chipCourses[1].price).toBe(150);

});
