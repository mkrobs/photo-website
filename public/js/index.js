//This function will be called when user click changing language
function translate(lng, tagAttr){
    var translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();
    if(lng == 'en'){
      $("#enTranslator").css('color', '#f4623a');
      $("#fiTranslator").css('color', '#212529');
      $("#svTranslator").css('color', '#212529');
    } 
    if(lng == 'fi'){
      $("#fiTranslator").css('color', '#f4623a');
      $("#enTranslator").css('color', '#212529');
      $("#svTranslator").css('color', '#212529');
    }
    if(lng == 'sv'){
      $("#fiTranslator").css('color', '#212529');
      $("#enTranslator").css('color', '#212529');
      $("#svTranslator").css('color', '#f4623a');
    }
}
$(document).ready(function(){
  //This is id of HTML element (English) with attribute lng-tag
  $("#enTranslator").click(function(){
    translate('en', 'lng-tag');
  });
  //This is id of HTML element (Khmer) with attribute lng-tag
  $("#fiTranslator").click(function(){
    translate('fi', 'lng-tag');
  });
  //This is id of HTML element (English) with attribute lng-tag
  $("#svTranslator").click(function(){
    translate('sv', 'lng-tag');
  });
});