export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const getMonthFromID = (id)=>{
  switch(id){
      case 0:
      return " januar";
      case 1:
      return " februar";
      case 2:
      return " mars";
      case 3:
      return " april";
      case 4:
      return " mai";
      case 5:
      return " juni";
      case 6:
      return " juli";
      case 7:
      return " august";
      case 8:
      return " september";
      case 9:
      return " oktober";
      case 10:
      return " november";
      case 11:
      return " desember";
  }
}

export const preloadImages = (images)=>{
    if (!preloadImages.list) {
      preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < images.length; i++) {
      var img = new Image();
      img.onload = function() {
        var index = list.indexOf(this);
        if (index !== -1) {
              list.splice(index, 1);
        }
      }
  
      list.push(img);
      img.src = images[i];
    }
  }

export function removeUnderscore(str) {
  if(!str || !str.toString().length){
    return '';
  }
    let i, frags = str.toString().split('_');
    for (i=0; i<frags.length; i++) {
        frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
}
  
export function limitCharacterInString(str, num){
  if(!str || !str.toString().length){
    return ''
  }
    if (str.length > num) {
        str = str.slice(0, num);
        return removeUnderscore(str + '...');
    }else{
        return removeUnderscore(str);
    }
}