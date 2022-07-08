for(var i=0;i<3;i++) {
  setTimeout(() => {
    console.log('a', i);
  }, 1);
}
for(let i=0;i<3;i++) {
  setTimeout(() => {
    console.log('b', i);
  }, 1);
}