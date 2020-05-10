let getId = selector  => document.getElementById(selector);
getId('bold').onclick = ()=> getId('lorem').classList.toggle('bold');
getId('cursive').onclick = ()=> getId('lorem').classList.toggle('cursive');
getId('underline').onclick = ()=> getId('lorem').classList.toggle('underline');
getId('through').onclick = ()=> getId('lorem').classList.toggle('line-through');
getId('left').addEventListener('click',()=> getId('lorem').style.textAlign='start');
getId('center').addEventListener('click',()=> getId('lorem').style.textAlign='center');
getId('right').addEventListener('click',()=> getId('lorem').style.textAlign='end');
let text = document.forms.text;
text.fonts.onchange = function (){
    for (let i = 0; i < text.fonts.options.length; i++) {
        if (text.fonts.options[i].selected) {
            getId('lorem').style.fontFamily= text.fonts.options[i].value;
        }
    }
}
text.font_size.onchange = function (){
    for (let i = 0; i < text.font_size.options.length; i++) {
        if (text.font_size.options[i].selected) {
            getId('lorem').style.fontSize= text.font_size.options[i].value;
        }
    }
}
getId('block_color').addEventListener('click',()=> getId('popup').style.display='block');
getId('close').addEventListener('click',()=> getId('popup').style.display='none');
getId('lightseagreen').addEventListener('click',()=> getId('lorem').style.color='lightseagreen');
getId('darkcyan').addEventListener('click',()=> getId('lorem').style.color='darkcyan');
getId('lightgreen').addEventListener('click',()=> getId('lorem').style.color='lightgreen');
getId('green').addEventListener('click',()=> getId('lorem').style.color='green');
getId('royalblue').addEventListener('click',()=> getId('lorem').style.color='royalblue');
getId('blue').addEventListener('click',()=> getId('lorem').style.color='blue');
getId('violet').addEventListener('click',()=> getId('lorem').style.color='violet');
getId('purple').addEventListener('click',()=> getId('lorem').style.color='purple');
getId('darkslategray').addEventListener('click',()=> getId('lorem').style.color='darkslategray');
getId('darkslateblue').addEventListener('click',()=> getId('lorem').style.color='darkslateblue');
getId('gold').addEventListener('click',()=> getId('lorem').style.color='gold');
getId('orange').addEventListener('click',()=> getId('lorem').style.color='orange');
getId('goldenrod').addEventListener('click',()=> getId('lorem').style.color='goldenrod');
getId('darkgoldenrod').addEventListener('click',()=> getId('lorem').style.color='darkgoldenrod');
getId('darkorange').addEventListener('click',()=> getId('lorem').style.color='darkorange');
getId('chocolate').addEventListener('click',()=> getId('lorem').style.color='chocolate');
getId('lightgrey').addEventListener('click',()=> getId('lorem').style.color='lightgrey');
getId('silver').addEventListener('click',()=> getId('lorem').style.color='silver');
getId('darkgray').addEventListener('click',()=> getId('lorem').style.color='darkgray');
getId('grey').addEventListener('click',()=> getId('lorem').style.color='grey');
getId('black').addEventListener('click',()=> getId('lorem').style.color='black');
getId('block_back_color').addEventListener('click',()=> getId('popup_back').style.display='block');
getId('close_back').addEventListener('click',()=> getId('popup_back').style.display='none');
getId('back_lightseagreen').addEventListener('click',()=> getId('lorem').style.background='lightseagreen');
getId('back_darkcyan').addEventListener('click',()=> getId('lorem').style.background='darkcyan');
getId('back_lightgreen').addEventListener('click',()=> getId('lorem').style.background='lightgreen');
getId('back_green').addEventListener('click',()=> getId('lorem').style.background='green');
getId('back_royalblue').addEventListener('click',()=> getId('lorem').style.background='royalblue');
getId('back_blue').addEventListener('click',()=> getId('lorem').style.background='blue');
getId('back_violet').addEventListener('click',()=> getId('lorem').style.background='violet');
getId('back_purple').addEventListener('click',()=> getId('lorem').style.background='purple');
getId('back_darkslategray').addEventListener('click',()=> getId('lorem').style.background='darkslategray');
getId('back_darkslateblue').addEventListener('click',()=> getId('lorem').style.background='darkslateblue');
getId('back_gold').addEventListener('click',()=> getId('lorem').style.background='gold');
getId('back_orange').addEventListener('click',()=> getId('lorem').style.background='orange');
getId('back_goldenrod').addEventListener('click',()=> getId('lorem').style.background='goldenrod');
getId('back_darkgoldenrod').addEventListener('click',()=> getId('lorem').style.background='darkgoldenrod');
getId('back_darkorange').addEventListener('click',()=> getId('lorem').style.background='darkorange');
getId('back_chocolate').addEventListener('click',()=> getId('lorem').style.background='chocolate');
getId('back_lightgrey').addEventListener('click',()=> getId('lorem').style.background='lightgrey');
getId('back_silver').addEventListener('click',()=> getId('lorem').style.background='silver');
getId('back_darkgray').addEventListener('click',()=> getId('lorem').style.background='darkgray');
getId('back_grey').addEventListener('click',()=> getId('lorem').style.background='grey');
getId('back_black').addEventListener('click',()=> getId('lorem').style.background='black');
getId('choose_color').addEventListener('click',()=>{
    getId('back_colors').style.display='block';
    getId('back_images').style.display='none';
    getId('back_color').style.height='330px';
    getId('back_files').style.display='none';
});
getId('choose_image').addEventListener('click',()=> {
    getId('back_images').style.display='block';
    getId('back_colors').style.display='none';
    getId('back_color').style.height='330px';
    getId('back_files').style.display='none';
});
getId('choose_file').addEventListener('click',()=> {
    getId('back_files').style.display='block';
    getId('back_colors').style.display='none';
    getId('back_color').style.height='150px';
    getId('back_images').style.display='none';
});
getId('img1').addEventListener('click',()=> getId('lorem').style.background='url(img/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg)');
getId('img2').addEventListener('click',()=> getId('lorem').style.background='url(img/1ce50d19821dd9917b1ec2aff3f48990c915.jpg)');
getId('img3').addEventListener('click',()=> getId('lorem').style.background='url(img/263455_pole_-derevo_-priroda_2560x1440_wwwgdefonru.jpg)');
getId('img4').addEventListener('click',()=> getId('lorem').style.background='url(img/91b5cdab51e207263169904b227503b4.jpg)');
getId('img5').addEventListener('click',()=> getId('lorem').style.background='url(img/French_Polynesia_Tropics_511266_1920x1080.jpg)');
getId('img6').addEventListener('click',()=> getId('lorem').style.background='url(img/planet_green_nature_space_leaves_tree_84720_1920x1080.jpg)');
getId('img7').addEventListener('click',()=> getId('lorem').style.background='url(img/screen-1.jpg)');
getId('img8').addEventListener('click',()=> getId('lorem').style.background='url(img/screen-3.jpg)');
getId('img9').addEventListener('click',()=> getId('lorem').style.background='url(img/u9AVLry.jpg)');
getId('block_signin').addEventListener('click',()=> getId('popup_sign').style.display='block');
let loadFile = function(event) {
    getId('lorem').style.backgroundImage = `url('${URL.createObjectURL(event.target.files[0])}')`;
};
let sign_in = document.forms.sign_in;
sign_in.submit_sign.onmousedown = function(){
    let regExp = sign_in.login.value;
    let regExp2 = new RegExp (sign_in.password.value);
    if(/^admin/.test(regExp) && regExp2.test('admin')){
        getId('popup_sign').style.display='none';
        getId('second_page').removeAttribute('disabled');
    }
    else{
        getId('login').style.border=('2px solid red');
        getId('password').style.border=('2px solid red');
    }
}


