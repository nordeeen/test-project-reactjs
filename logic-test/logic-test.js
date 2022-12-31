const numStr = ['092289','992299','12291','982289','22022022','2301','2013','1001','756564','1011','766567','756546','2002','91019','765567'];

const checkIsPalindrome = (el) => {
  const values = String(el);

  let x = 0;
  let y = values.length - 1;

  while(x < y) {
    if(values[x] === values[y]) {
      x++;
      y--;
    } else {
      return false;
    }
  }
  return true;
};

const findPalindrome = (numStr) => {
  return numStr.filter(el => checkIsPalindrome(el));
};

// console.log('NumStr :', numStr);
console.log('Results Palindrome :', findPalindrome(numStr));
// [‘992299’,’982289’,’22022022’,’1001’,’2002’,’91019’,’765567’]