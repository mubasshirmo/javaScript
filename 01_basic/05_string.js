 const name="usiad"
 const repo=34

 console.log(name +repo)

 //best way to use in the string according to the new rules
 console.log(`Hello my name is ${name} and the rep count is ${repo}`)
 

 //
  const gameName=new String ("abdul Basit")

  console.log(gameName[0]);
  console.log(gameName.length);
  console.log(gameName.toUpperCase);
  console.log(gameName.charAt(2));
  console.log(gameName.indexOf('d'));

  const newString =gameName.substring(0,4);
  console.log(newString);

  //we ca give the negative value in the slice method 
  const anotherString=gameName.slice(-8,4)
  console.log(anotherString);

  //trim method to remove the spaces from the both the side
  const newStringOne=" hitest@gmail.com "
  console.log(newStringOne);
  console.log(newStringOne.trim());


  //browser spaces nahi smjhat to use %20 krdeta hai use replace krne ke liye method
  const url="https://coding.xom/sdkl%20sdkj"
  console.log(url.replace('%20','_'))
  //for check it's available or not
 console.log(url.includes('coding'));

 console.log(gameName.split(' '))



