(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{138:function(e,a,t){},139:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),i=t.n(l),c=(t(87),t(88),t(89),t(90),t(19)),o=t(20),s=t(21),m=t(22),d=t(140),u=t(141),h=t(142),f=t(143),E=t(144),g=t(145),p=t(8);function b(e){var a=e.dish;return r.a.createElement(d.a,null,r.a.createElement(p.b,{to:"/menu/".concat(a.id)},r.a.createElement(u.a,{width:"100%",object:!0,src:a.image,alt:a.name}),r.a.createElement(h.a,null,r.a.createElement(f.a,null,a.name))))}var v=function(e){var a=e.dishes.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-10 col-md-5 mt-5"},r.a.createElement(b,{dish:e}))}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E.a,null,r.a.createElement(g.a,null,r.a.createElement(p.b,{to:"/home"},"Home")),r.a.createElement(g.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row justify-content-center"},a))},N=t(146),y=t(147),w=t(148),k=t(149),I=t(150),O=t(151),C=t(152);function j(e){var a=e.comments.map((function(e){return r.a.createElement(N.a,{key:e.id},r.a.createElement("ul",null,r.a.createElement("li",{className:"author"},e.author,r.a.createElement(y.a,{color:"danger",pill:!0},e.rating,"*"),"\xa0\xa0\xa0\xa0 ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))),r.a.createElement("li",null,e.comment)))}));return r.a.createElement("div",{className:"col-10 col-md-5 mt-5"},r.a.createElement(d.a,null,r.a.createElement(w.a,{tag:"h4"},"Comments"),r.a.createElement(k.a,null,r.a.createElement(I.a,{variant:"flush"},a))))}function T(e){var a=e.dish;return r.a.createElement("div",{className:"col-10 col-md-5 mt-5"},r.a.createElement(d.a,null,r.a.createElement(u.a,{width:"100%",object:!0,src:a.image,alt:a.name}),r.a.createElement(k.a,null,r.a.createElement(f.a,null,a.name),r.a.createElement(O.a,null,a.description))))}var F=function(e){var a=e.dish,t=e.comments;return null!=a?r.a.createElement("div",{className:"container"},r.a.createElement(C.a,null,r.a.createElement(E.a,null,r.a.createElement(g.a,null,r.a.createElement(p.b,{to:"/menu"},"Menu")),r.a.createElement(g.a,{active:!0},"Dish"))),r.a.createElement(C.a,null,r.a.createElement(T,{dish:a}),r.a.createElement(j,{comments:t}))):r.a.createElement("div",null)},S=t(153),x=t(154),Z=t(155),M=t(23),z=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"handleSubmit",value:function(e){console.log("The current State is "+JSON.stringify(e)),alert("The current State is "+JSON.stringify(e))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:"https://www.skype.com/en/"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us Your feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(M.LocalForm,{onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(C.a,{className:"form-group"},r.a.createElement(S.a,{htmlFor:"firstname",md:2}," First Name"),r.a.createElement(x.a,{md:10},r.a.createElement(M.Control.text,{model:".firstname",className:"form-control",id:"firstname",name:"firstname",placeholder:"first name"}))),r.a.createElement(C.a,{className:"form-group"},r.a.createElement(S.a,{htmlFor:"laststname",md:2}," Last Name"),r.a.createElement(x.a,{md:10},r.a.createElement(M.Control.text,{model:".lastname",id:"lastname",name:"lastname",className:"form-control",placeholder:"last name"}))),r.a.createElement(C.a,{className:"form-group"},r.a.createElement(S.a,{htmlFor:"email",md:2}," Email address"),r.a.createElement(x.a,{md:10},r.a.createElement(M.Control.text,{model:".email",id:"email",name:"email",placeholder:"email"}))),r.a.createElement(C.a,{className:"form-group"},r.a.createElement(x.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(S.a,{check:!0},r.a.createElement(M.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," ","",r.a.createElement("strong",null,"May we contact you ?")))),r.a.createElement(x.a,{md:{size:3,offset:1}},r.a.createElement(M.Control.select,{model:".contactType",className:"form-control",name:"contactType"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(C.a,{className:"form-group"},r.a.createElement(S.a,{md:2,htmlFor:"message"},"Your Feedback"),r.a.createElement(x.a,{md:10},r.a.createElement(M.Control.textarea,{model:".message",className:"form-control",id:"message",name:"message",rows:"12"}))),r.a.createElement(C.a,{className:"form-group"},r.a.createElement(x.a,{md:{size:10,offset:2}},r.a.createElement(Z.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component),A=t(156);function R(e){var a=e.item;return r.a.createElement(d.a,null,r.a.createElement(u.a,{src:a.image,alt:a.name}),r.a.createElement(k.a,null,r.a.createElement(f.a,null,a.name),a.designation?r.a.createElement(A.a,null,a.designation):null,r.a.createElement(O.a,null,a.description)))}var J=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(R,{item:e.dish})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(R,{item:e.promotion})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(R,{item:e.leader}))))},H=t(47),P=t(157),W=t(158),B=t(159),L=t(163),U=t(160),D=t(161),G=t(162),V=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).toggleNav=n.toggleNav.bind(Object(H.a)(n)),n.state={isNavOpen:!1},n}return Object(o.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(P.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(W.a,{onClick:this.toggleNav}),r.a.createElement(B.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(L.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(U.a,{navbar:!0},r.a.createElement(D.a,null,r.a.createElement(p.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(D.a,null,r.a.createElement(p.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(D.a,null,r.a.createElement(p.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(D.a,null,r.a.createElement(p.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us")))))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))))}}]),t}(n.Component);var K=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(p.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/aboutus"},"About")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/contactus"},"Contact")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},Y=t(6),q=t(15),$=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(c.a)(this,t),n=a.call(this,e),console.log(e),n}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(V,null),r.a.createElement(Y.d,null,r.a.createElement(Y.b,{path:"/home",component:function(){return r.a.createElement(J,{dish:e.props.dishes.filter((function(e){return e.featured}))[0],promotion:e.props.promotions.filter((function(e){return e.featured}))[0],leader:e.props.leaders.filter((function(e){return e.featured}))[0]})}}),r.a.createElement(Y.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(v,{dishes:e.props.dishes})}}),r.a.createElement(Y.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return console.log(" match is "+t.params),r.a.createElement(F,{dish:e.props.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],comments:e.props.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)}))})}}),r.a.createElement(Y.b,{exact:!0,path:"/contactus",component:z}),r.a.createElement(Y.a,{to:"/home"})),r.a.createElement(K,null))}}]),t}(n.Component),Q=Object(Y.g)(Object(q.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}))($)),X=(t(138),t(25)),_={dishes:[{id:0,name:"Uthappizza",image:"/assets/images/uthappizza.png",category:"mains",label:"Hot",price:"4.99",featured:!0,description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."},{id:1,name:"Zucchipakoda",image:"/assets/images/zucchipakoda.png",category:"appetizer",label:"",price:"1.99",featured:!1,description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"},{id:2,name:"Vadonut",image:"/assets/images/vadonut.png",category:"appetizer",label:"New",price:"1.99",featured:!1,description:"A quintessential ConFusion experience, is it a vada or is it a donut?"},{id:3,name:"ElaiCheese Cake",image:"/assets/images/elaicheesecake.png",category:"dessert",label:"",price:"2.99",featured:!1,description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"}],promotions:[{id:0,name:"Weekend Grand Buffet",image:"/assets/images/buffet.png",label:"New",price:"19.99",featured:!0,description:"Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person"}],leaders:[{id:0,name:"Peter Pan",image:"/assets/images/alberto.png",designation:"Chief Epicurious Officer",abbr:"CEO",featured:!1,description:"Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Dhanasekaran Witherspoon",image:"/assets/images/alberto.png",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Agumbe Tang",image:"/assets/images/alberto.png",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:3,name:"Alberto Somayya",image:"/assets/images/alberto.png",designation:"Executive Chef",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"}],comments:[{id:0,dishId:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,dishId:0,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,dishId:0,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,dishId:0,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,dishId:0,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:5,dishId:1,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:6,dishId:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:7,dishId:1,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:8,dishId:1,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:9,dishId:1,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:10,dishId:2,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:11,dishId:2,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:12,dishId:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:13,dishId:2,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:14,dishId:2,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:15,dishId:3,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:16,dishId:3,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:17,dishId:3,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:18,dishId:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:19,dishId:3,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;arguments.length>1&&arguments[1];return e},ae=Object(X.createStore)(ee,_),te=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(q.Provider,{store:ae},r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(Q,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,a,t){e.exports=t(139)},88:function(e,a,t){}},[[82,1,2]]]);
//# sourceMappingURL=main.64bb9717.chunk.js.map