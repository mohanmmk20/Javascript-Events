<!DOCTYPE html>
<html>
<body>

<h1>The Element Object</h1>
<h2>The addEventListener() Method</h2>

<p>Execute a function when a user clicks on a button:</p>

<button id="myBtn">Try it</button>

<p id="demo">

<script>
const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
</script>

</body>
</html>
<html>

<head>
  <title></title>
  <meta http-equiv="Content-Type" content="text/html; charset=unicode" />
  <meta content="CoffeeCup HTML Editor (www.coffeecup.com)" name="generator" />
</head>

<body>


  <script language="Javascript">
    function IsEmpty() {

      if (document.form.question.value == "") {
        alert("empty");
      }
      return;
    }
  </script>
  Question: <input name="question" /> <br/>

  <input id="insert" onclick="IsEmpty();" type="submit" value="Add Question" />

</body>

</html>
<!DOCTYPE html>
<html>
<body>

<h2>My First Web Page</h2>

<p>Activate debugging in your browser (Chrome, IE, Firefox) with F12, and select "Console" in the debugger menu.</p>

<script>
a = 5;
b = 6;
c = a + b;
console.log(c);
</script>

</body>
</html> 
<!DOCTYPE html>
<html>
<head>
<script>
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}
</script>
</head>

<body onload="checkCookie()"></body>

</html>
<!DOCTYPE html>
<html>
<body>

<h2>Creating an Object from a JSON Literal</h2>
<p id="demo"></p>

<script>
const myObj = {"name":"John", "age":30, "car":null};
document.getElementById("demo").innerHTML = myObj.name;
</script>

</body>
</html>
