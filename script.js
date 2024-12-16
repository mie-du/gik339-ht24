function printTimeStamp() {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}.${
    date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`
  } `;
}

function getUserWithoutPromise() {
  let user = null;
  setInterval(() => {
    user = { firstName: 'Mikaela' };
  }, 3000);
  return user;
}

function getUserWithPromise(ok) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      if (!ok) reject(printTimeStamp() + ' Något blev fel');
      else reslove({ firstName: 'Mikaela' });
    }, 3000);
  });
}

const user = getUserWithoutPromise();
console.log(printTimeStamp(), user);

const user2 = getUserWithPromise(false);
console.log(printTimeStamp(), user2);

const notFinishedPromise = getUserWithPromise(true);
console.log(printTimeStamp(), notFinishedPromise);

function callbackForFinishedPromise(user4) {
  console.log(printTimeStamp(), user4);
  //försök inte med detta, det blir ett promise utanför, använd user4 inuti denna funktion
  return user4;
}

const user5 = notFinishedPromise.then(callbackForFinishedPromise);
console.log(user5);

getUserWithPromise(true).then((userObject) => {
  //allt man vill göra med userObject görs här
  console.log(userObject);
});

function printInfoWithThen() {
  getUserWithPromise(true).then((user) => {
    console.log(printTimeStamp(), user);
    //gör något med user-objektet
    getUserWithPromise(user).then((otherData) => {
      console.log(otherData);
    });
  });
}

printInfoWithThen();

async function printInfoWithAsyncAwait() {
  const user = await getUserWithPromise(true);
  console.log(printTimeStamp(), user);
  const otherData = await getUserWithPromise(user);
  console.log(printTimeStamp(), otherData);
}

printInfoWithAsyncAwait();

const url = 'https://my-json-server.typicode.com/mie-du/gik339-ht23/users';

const users = fetch(url)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((users) => {
    console.log(users);
    let html = '<div>';
    users.forEach((user) => {
      html += `<p>${user.firstName}</p>`;
    });
    html += '</div>';
    document.body.insertAdjacentHTML('beforeend', html);

    //returnera inte ut users såhär:
    return users;
  });

userForm.addEventListener('submit', sendUserData);

function sendUserData(e) {
  e.preventDefault();

  const userData = {
    firstName: userForm.firstName.value,
    lastName: userForm.lastName.value
  };
  const jsonData = JSON.stringify(userData);
  console.log(jsonData);

  const request = new Request(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: jsonData
  });

  fetch(request)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
