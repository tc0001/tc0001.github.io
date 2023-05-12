
filterSelection("all");


const categoryBtns = document.querySelectorAll('.category-btn');
categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');
    filterSelection(category);
  })
});

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("category");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

document.getElementById("top-firstPage").addEventListener("click", function() {
  openPage('list1');
});
document.getElementById("top-lastPage").addEventListener("click", function() {
  openPage('list3');
});
document.getElementById("firstPage").addEventListener("click", function() {
  openPage('list1');
});
document.getElementById("page1").addEventListener("click", function() {
  openPage('list1');
});
document.getElementById("page2").addEventListener("click", function() {
  openPage('list2');
});
document.getElementById("page3").addEventListener("click", function() {
  openPage('list3');
});
document.getElementById("lastPage").addEventListener("click", function() {
  openPage('list3');
});

function openPage(pageNum) {
    var i, productlist;
    productlist = document.getElementsByClassName("product-list");
    for (i = 0; i < productlist.length; i++) {
        productlist[i].style.display = "none";
    }
    document.getElementById(pageNum).style.display = "block";
}
document.getElementById("page1").click();


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("category-container");
var btns = document.querySelectorAll(".category-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


document.getElementById("myInput").addEventListener("keyup", function() {
  var input, filter, products, product, i, title, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  products = document.getElementById("product-container");
  product = products.getElementsByClassName("category ");
  for (i = 0; i < product.length; i++) {
    title = product[i].getElementsByTagName("h2")[0];
    if (title) {
      txtValue = title.textContent || title.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }       
  }
});