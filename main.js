var images=["istockphoto-1171409769-612x612.jpg","father.jpg","mom.jfif","sister.jpg","me.png"];
var names=["My Family","Sandhan Barpanda","Swagatika Mishra","Shreyanvi Barpanda","Ishanvi Barpanda"];
var counter=0;
function next(){
    counter++;
    var number=5;
    if(counter>number){
        counter=0;
    }
    document.getElementById("family_photo").src=images[counter];
    document.getElementById("family_name").src=names[counter];
}