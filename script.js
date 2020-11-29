const d=document,
  $gallery=d.getElementById('gallery')
  arrLft=d.getElementById("btn-lft"),
  arrRgth=d.getElementById("btn-rgt"),
  cards=d.querySelectorAll(".card-container");
  // console.log($gallery)

  cards.forEach((element,index) => {
    element.style.zIndex=index+1;
    // console.log(index)
    console.log(element.style.zIndex)
  });

  d.addEventListener("click",e=>{
    if(e.target.matches("#btn-lft i")) move("left",cards);
    if(e.target.matches('#btn-rgt i')) move("rigth",cards);
  })

  function move(direction,arr){
    if (direction==="left"){
      arr.forEach((ele)=>{
        ele.style.zIndex--;
        if (ele.style.zIndex<1) ele.style.zIndex=6;
      })
    } else{
      arr.forEach((ele)=>{
        ele.style.zIndex++;
        if (ele.style.zIndex>6) ele.style.zIndex=1;
      })
    }
  }