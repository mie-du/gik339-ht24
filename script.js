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
