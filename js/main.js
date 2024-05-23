var siteName = document.getElementById('Sitename')

var siteURL = document.getElementById('SiteURL')


var siteList = []


if (localStorage.getItem('siteList')){
    siteList =   JSON.parse(localStorage.getItem('siteList'))
    displayData()
}




function addList (){

    var list = {
        name : siteName.value , 
        url : siteURL.value ,
    }
siteList.push(list)

localStorage.setItem('siteList' , JSON.stringify(siteList))
displayData()



}


function displayData(){
    console.log(siteList);
    var temp = ""
    for (var i = 0 ; i < siteList.length ; i++) {
    temp = temp + ` <tr>
    <td>`+i+`</td>
 
    
   
  
    <td>`+siteList[i].name+`</td>
   
    <td>
        <button class="btn btn-success">Visit</button>
    </td>
    <td>
        <button onclick='deleteItem(`+i+`)' class="btn btn-danger">Delete</button>
    </td>
</tr>`
    }


    document.getElementById('myData').innerHTML = temp
}



function deleteItem(index) {



    siteList.splice(index , 1)
    localStorage.setItem('siteList' , JSON.stringify(siteList))
    displayData()
    
}