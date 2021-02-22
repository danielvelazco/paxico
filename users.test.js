const users = require('./users');

test('users const is an array', () => {
  expect(Array.isArray(users)).toBe(true);
});

test('number of users', () => {
  expect(users.length).toBe(2);
});

test('validating data for user 1', () => {
  const expectedId = 1;
  expect(users[0].id).toBe(expectedId);
  const expectedEmail = "rob23@gmail.com";
  expect(users[0].email).toBe(expectedEmail);
});


for (let index = 0; index < users.length; index++) {
  test(`Verifying data types for user ${users[index].id}`, () => {
    expect(typeof users[index].id).toBe('number');
    expect(typeof users[index].first_name).toBe('string');
    expect(typeof users[index].last_name).toBe('string');
    expect(typeof users[index].email).toBe('string');
  });
}

