var menu=document.querySelector(".navigation-menu__list-and-login"),menu_open_btn=document.querySelector(".navigation-menu__btn"),form=document.querySelector(".form__main-tag"),name_input=document.querySelector(".form__input--name"),tel_input=document.querySelector(".form__input--tel"),email_input=document.querySelector(".form__input--email"),password_input=document.querySelector(".form__input--password"),site_input=document.querySelector(".form__input--site"),chbox=document.querySelector(".form__checkbox"),chbox_visual=document.querySelector(".form__checkbox-visual");menu.classList.remove("nojs"),menu_open_btn.addEventListener("click",function(e){menu_open_btn.classList.contains("open-menu")?menu_open_btn.classList.contains("open-menu")&&(menu_open_btn.classList.remove("open-menu"),menu.classList.remove("show-menu"),menu.classList.add("close-menu"),setTimeout(function(){menu.classList.remove("close-menu")},500)):(e.preventDefault(),menu_open_btn.classList.add("open-menu"),menu.classList.add("show-menu"))}),form.addEventListener("submit",function(e){name.value&&tel.value&&email.value&&password.value&&site.value&&chbox.checked||(e.preventDefault(),name_input.value||(name_input.classList.add("wrong"),name_input.addEventListener("click",function(e){name_input.classList.remove("wrong")})),email_input.value||(email_input.classList.add("wrong"),email_input.addEventListener("click",function(e){email_input.classList.remove("wrong")})),tel_input.value||(tel_input.classList.add("wrong"),tel_input.addEventListener("click",function(e){tel_input.classList.remove("wrong")})),password_input.value||(password_input.classList.add("wrong"),password_input.addEventListener("click",function(e){password_input.classList.remove("wrong")})),site_input.value||(site_input.classList.add("wrong"),site_input.addEventListener("click",function(e){site_input.classList.remove("wrong")})),chbox.checked||(chbox_visual.classList.add("wrong"),chbox.addEventListener("click",function(e){chbox_visual.classList.remove("wrong")})))}),name_input.onblur=function(){name_input.value?name_input.classList.add("active"):name_input.classList.remove("active")},tel_input.onblur=function(){tel_input.value?tel_input.classList.add("active"):tel_input.classList.remove("active")},email_input.onblur=function(){email_input.value?email_input.classList.add("active"):email_input.classList.remove("active")},password_input.onblur=function(){password_input.value?password_input.classList.add("active"):password_input.classList.remove("active")},site_input.onblur=function(){site_input.value?site_input.classList.add("active"):site_input.classList.remove("active")};