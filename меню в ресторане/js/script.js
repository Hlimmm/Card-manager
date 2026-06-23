function Bludo(name0,img0,class0,text0,price0){
    this.name=name0
    this.img=img0
    this.class=class0
    this.text=text0
    this.price=+price0
    this.show = function() {
        spisok.innerHTML+='<div class="card"><h2 class="nameBludo">'+this.name+'</h2><img src="'+this.img+'" alt="" class="imgBludo"><p class="classBludo">Класс: '+this.class+'</p><p class="textBludo">'+this.text+'</p><p class="priceBludo">Цена:'+this.price+'</p> </div>';
    }
}

let masBludo=[]
let numCard=0
masBludo.push(new Bludo("Борщ","https://primebeef.ru/images/cms/data/3-501.jpg","Супы","аправочный многокомпонентный суп и является технологически сложным в приготовлении блюдом. Главная составляющая часть любого борща — свёкла, прежде всего она создаёт вкус, аромат и цвет борща, и в силу этого борщ относится к овощным супам.",8));
masBludo.push(new Bludo("Суп с фрикадельками","https://art-lunch.ru/wp-content/uploads/2017/12/Soup_with_meatballs_001.jpg","Супы","Суп с фрикадельками и вермишелью — это очень быстрый и простой в приготовлении. Фрикадельки и вермишель делают суп сытным, вкусным и наваристым",11));
masBludo.push(new Bludo("Паста карбонара","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fYqqdHLv2X-ayfALvhge3z3zV7lFLB4Waw&s","Гарнир","Паста Карбонара - это настоящая жемчужина итальянской кухни, обладающая неповторимым вкусом и богатой историей. Это блюдо, олицетворяющее сочетание простоты и изысканности, которое с легкостью завоевывает сердца гурманов по всему миру. ",10));
masBludo.push(new Bludo("Индейка","https://img1.russianfood.com/dycontent/images_upl/584/sm_583581.jpg","Мясное","Картофель, запечённый с индейкой, - сытное и очень вкусное блюдо, которое можно приготовить как на обед или ужин среди недели, так и на праздничный стол. Картофель и филе индейки сдобрим чесноком и ароматными пряностями (карри, паприкой, хмели-сунели и базиликом) и запечём. Картофель и индюшиное мясо получаются румяными и мягкими, а от вас при этом потребуется минимум усилий.",9));
masBludo.push(new Bludo("Белое вино","https://calorizator.ru/sites/default/files/imagecache/product_512/product/wine-white-dry.jpg","напиток(18+)","вино наиболее светлого оттенка, изготавливаемое из винограда любого цвета (белого, чёрного, розового) при условии ферментации в отсутствие кожицы винограда. Именно отсутствие кожицы обуславливает светлый оттенок, так как сок мякоти ягод подавляющего большинства сортов винограда почти бесцветен.",7));

showAll();

function showAll() {
    spisok.innerHTML="";
    for (let i=0; i<masBludo.length; i++) {
        masBludo[i].show();
    }
    mas=document.querySelectorAll(".card");
    for (let i=0; i<mas.length;i++) {
        mas[i].addEventListener("click", function() {
            numCard=i;
            menuCard.style.display="block";
        });
    }
}

add0.onclick = function() {
    inputName.value="";
    inputImg.value="";
    inputClass.value="";
    inputText.value="";
    inputPrice.value="";
    insert0.style.display="block";
}
cancelBtn.onclick = function() {
    insert0.style.display="none";
}
addBtn.onclick = function() {
    masBludo.push(new Bludo(inputName.value,inputImg.value,inputClass.value,inputText.value,inputPrice.value));
    insert0.style.display="none";
    showAll();
}

menuCancelBtn.onclick = function() {
    menuCard.style.display="none";
}

menuDel.onclick = function() {
    masBludo.splice(numCard,1);
    menuCard.style.display="none";
    showAll();
}

menuEdit.onclick = function() {
    menuCard.style.display="none";
    inputEditName.value=masBludo[numCard].name;
    inputEditImg.value=masBludo[numCard].img;
    inputEditClass.value=masBludo[numCard].class;
    inputEditText.value=masBludo[numCard].text;
    inputEditPrice.value=masBludo[numCard].price;
    edit0.style.display="block";
}

editBtn.onclick = function() {
    masBludo[numCard].name=inputEditName.value
    masBludo[numCard].img=inputEditImg.value;
    masBludo[numCard].class=inputEditClass.value;
    masBludo[numCard].text=inputEditText.value;
    masBludo[numCard].price=inputEditPrice.value;
    showAll();
    edit0.style.display="none";
}

sortByName.onclick = function() {
    masBludo.sort(function(a,b) {
        let flag=0;
        if (a.name<b.name) {
            flag=-1;
        }
        else {
            flag=1;
        }
        return flag;
    });
    showAll();
}

sortByPrice.onclick = function() {
    masBludo.sort(function(a,b) {
        let flag=0;
        if (+a.price<+b.price) {
            flag=-1;
        }
        else {
            flag=1;
        }
        return flag;
    });
    showAll();
}
sortByClassPrice.onclick = function() {
    masBludo.sort(function(a,b) {
        let flag=0;
        if (a.class<b.class) {
            flag=-1;
        }
        if (a.class>b.class) {
            flag=1;
        }
        if (a.class==b.class) {
            if (a.price<b.price) {
                flag=-1;
            }
            else {
                flag=1;
            }
        }
        return flag;
    });
    showAll();
}