// Dom manipulation Document Model
// 1.  Get  element by ID 


// const heading = document.getElementById('heading');

// console.log(heading);

// 2.  Get  element by Tag name

// const heading  = document.getElementsByTagName('h1');
// console.log(heading[0]);


// 3. Get  element by Class name

// const heading  = document.getElementsByClassName('heading');
// console.log(heading[0]);

// 4. querySelector
// const heading = document.querySelector('#heading');
// console.log(heading);

// 5. querySelectorAll
// const  heading = document.querySelectorAll('heading');
// console.log(heading);



// TraverseNode
//1. Get Parent Node

// const heading = document.querySelector('.heading');
// const Parent = heading.parentNode;
// console.log(Parent);

// 2. childrenNode
// const parent = document.querySelector('.parent');

// console.log(parent.childNodes[1]);

// 3. NextElementSibling
// const heading = document.querySelector('.heading');

// console.log(heading.nextElementSibling);


//4. previousElementSibling
// const subHeading = document.querySelector('h3');
// console.log(subHeading.previousElementSibling);

// manipulation

// const heading = document.querySelector('.heading');
// heading.innerHTML = 'Web dev is Awesome';

//Create  elements 
// const heading = document.createElement('h1');
// heading.innerHTML = 'javascript is awesome';
// heading.classList.add('titel');
// const parent = document.querySelector('.parent');
// parent.appendChild(heading);
// console.log(heading);



// Dom events


// const button = document.querySelector('#btn');
// const heading = document.querySelector('#heading');

// button.addEventListener('click', function(event){
//     heading.style.color = "blue";
//     console.log('button clicked', event);
// })


