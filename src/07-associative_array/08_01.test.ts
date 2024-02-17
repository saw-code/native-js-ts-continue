
type UsersType = {
  [key: string]: { id: number, name: string }
}

let users: UsersType = {
  '426': {id: 426, name: 'DimOk'},
  '324': {id: 324, name: 'Natasha'},
  '101': {id: 101, name: 'Valera'},
  '589': {id: 589, name: 'Valera'}
}

beforeEach(() => {
  users = {
    '426': {id: 426, name: 'DimOk'},
    '324': {id: 324, name: 'Natasha'},
    '101': {id: 101, name: 'Valera'},
    '589': {id: 589, name: 'Valera'}
  }
})

test('should update corresponding user', () => {
  const user = users['101'].name = "Peppito"

  expect(user).toBe('Peppito')
})

test('should delete corresponding user', () => {
  delete users['101']

  expect(users['101']).toBeUndefined()
})