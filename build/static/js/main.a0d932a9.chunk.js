(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports={profile:"ProfileSponsor_profile__1xFwL",profile_info:"ProfileSponsor_profile_info__vcHJz",profile_icons:"ProfileSponsor_profile_icons__GVxD4"}},29:function(e,t,a){e.exports={profile:"ProfileOfficer_profile__2UQRJ",profile_info:"ProfileOfficer_profile_info__287Km",profile_icons:"ProfileOfficer_profile_icons__3TAPE"}},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},50:function(e,t,a){e.exports=a.p+"static/media/logo-min.45f7f118.png"},51:function(e,t,a){e.exports={navbar:"NavigationBar_navbar__1UA1j"}},55:function(e,t,a){e.exports={BackgroundImage:"BackgroundImage_BackgroundImage__1GJFR"}},56:function(e,t,a){e.exports=a.p+"static/media/background.57cb6c0b.png"},57:function(e,t,a){e.exports={videoResponsive:"BackgroundYoutube_videoResponsive__11oya"}},58:function(e,t,a){e.exports=a.p+"static/media/jpm-logo.084ce27e.jpg"},59:function(e,t,a){e.exports={mt_5:"Footer_mt_5__1ySS9"}},64:function(e,t,a){e.exports=a(96)},69:function(e,t,a){},70:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},93:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(26),l=a.n(c),i=(a(69),a(70),a(71),a(47)),o=a(48),s=a(62),u=a(49),m=a(63),f=a(98),d=a(99),p=a(54),E=a(50),v=a.n(E),b=a(15),g=a(51),h=a.n(g),_=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:h.a.navbar},r.a.createElement(f.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(f.a.Brand,{href:"#home",className:"sticky-nav"}," ",r.a.createElement(b.b,{className:"nav-link",to:"/ACE_Website/"}," ",r.a.createElement("img",{src:v.a,width:"65",height:"30",alt:""})," ")," "),r.a.createElement(f.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(f.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(d.a,{className:"ml-auto"},r.a.createElement(p.a,null," ",r.a.createElement(b.b,{className:"nav-link",to:"/ACE_Website/About"},"About us")," "),r.a.createElement(p.a,null," ",r.a.createElement(b.b,{className:"nav-link",to:"/ACE_Website/Learn"},"Learn")," ")))))}}]),t}(n.Component),k=a(55),N=a.n(k),w=a(56),y=a.n(w);var j=function(){return r.a.createElement("div",{className:N.a.BackgroundImage},r.a.createElement("h1",null,"UF Association of Computer Engineers"),r.a.createElement("img",{src:y.a,alt:""}))},x=a(57),S=a.n(x),C=function(e){var t=e.embedId;return r.a.createElement("div",{className:S.a.videoResponsive},r.a.createElement("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"}))};a(82);var O=function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(j,null),r.a.createElement("div",{className:"background_video"},r.a.createElement("h1",null,"Latest Video"),r.a.createElement(C,{className:"homepage_video",embedId:"rokGy0huYEA"})))},A=a(23),I=a(11),L=(a(83),a(27)),D=a(28),W=a.n(D);var P=function(e){var t=e.src,a=e.description,n=e.linkedin,c=e.site;return r.a.createElement("div",{className:W.a.profile},r.a.createElement("img",{src:t,alt:""}),r.a.createElement("div",{className:W.a.profile_info},r.a.createElement("h4",null,a),r.a.createElement("div",{className:W.a.profile_icons},r.a.createElement(L.SocialIcon,{url:n})),r.a.createElement("div",{className:W.a.profile_icons},r.a.createElement(L.SocialIcon,{url:c}))))},B=a(29),U=a.n(B);var F=function(e){var t=e.src,a=e.role,n=e.name,c=e.linkedin,l=e.email;return r.a.createElement("div",{className:U.a.profile},r.a.createElement("img",{src:t,alt:t}),r.a.createElement("div",{className:U.a.profile_info},r.a.createElement("h2",null,a),r.a.createElement("h4",null,n),r.a.createElement("div",{className:U.a.profile_icons},r.a.createElement(L.SocialIcon,{url:c})),r.a.createElement("div",{className:U.a.profile_icons},r.a.createElement(L.SocialIcon,{url:l}))))},R=a(58),J=a.n(R),T=a(41);T.a.initializeApp({apiKey:"AIzaSyDYJIKN3yQoogaNYxpICy3B8t87dYoEBNc",authDomain:"ace-website-fd278.firebaseapp.com",databaseURL:"https://ace-website-fd278-default-rtdb.firebaseio.com",projectId:"ace-website-fd278",storageBucket:"ace-website-fd278.appspot.com",messagingSenderId:"324077971707",appId:"1:324077971707:web:b8aa3466e43f2272bd285e"});var M=T.a;var Y=function(){var e=r.a.useState([]),t=Object(I.a)(e,2),a=t[0],n=t[1];return r.a.useEffect(function(){return M.firestore().collection("officers").onSnapshot(function(e){var t=[];e.forEach(function(e){return t.push(Object(A.a)({},e.data(),{id:e.id}))}),n(t)})},[]),r.a.createElement("div",{className:"aboutpage"},r.a.createElement("h1",null,"Founded in 2014"),r.a.createElement("h3",null,"The Association of Computer Engineers serves as a community dedicated to representing the union of computer science and electrical engineering. We provide an opportunity for students at the University of Florida to develop their technical skills, learn from upperclassmen, and develop as professionals. Come out to one of our events and meet an amazing group of students to help you through your academic journey."),r.a.createElement("h2",null,"Sponsors"),r.a.createElement("div",{className:"about_sponsors"},r.a.createElement(P,{src:J.a,description:"J.P. Morgan is a global leader in financial services, offering solutions to the world's most important corporations, governments and institutions in more than 100 countries.",linkedin:"https://www.linkedin.com/company/jpmorgan/",site:"https://www.jpmorgan.com/global"})),r.a.createElement("h2",null,"Officers"),r.a.createElement("div",{className:"about_officers"},r.a.createElement("div",{className:"about_officers"},a.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(F,{src:e.avatar,role:e.role,name:e.name,linkedin:e.linkedin,email:e.email}))}))))};var z=function(){return r.a.createElement("div",{className:"JoinPage"},r.a.createElement("h1",null,"JoinPage"))},G=a(60),K=a(61),V=a(40),Q=a(59),H=a.n(Q),q=function(){return r.a.createElement("footer",{className:H.a.mt_5,bg:"dark"},r.a.createElement(G.a,{fluid:!0},r.a.createElement(K.a,{className:"border-top justify-content-between p-3"},r.a.createElement(V.a,{className:"p-0",md:3},r.a.createElement("h5",null,"Association of Software Engineers"),r.a.createElement(d.a,{className:"ml-auto",bg:"dark"},r.a.createElement(d.a.Link,{href:"#aboutus"},"Instagram"),r.a.createElement(d.a.Link,{href:"#projects"},"Facebook"),r.a.createElement(d.a.Link,{href:"#deets"},"Slack"))),r.a.createElement(V.a,null,r.a.createElement("h5",null,"Menu"),r.a.createElement(d.a,{className:"ml-auto"},r.a.createElement(p.a,null," ",r.a.createElement(b.b,{className:"nav-link",to:"/ACE_Website/About"},"About us")," "),r.a.createElement(p.a,null," ",r.a.createElement(b.b,{className:"nav-link",to:"/ACE_Website/Learn"},"Learn")," "),r.a.createElement(p.a,null," ",r.a.createElement(b.b,{className:"nav-link",to:"/ACE_Website/Admin"},"Admin")," "))))))};a(93);var X=function(e){var t=e.embedId,a=e.title,n=e.description,c=e.tags;return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row mb-4"},r.a.createElement("div",{class:"col-sm lg-mb-4 mb-2"},r.a.createElement("div",{class:"thumbnail"},r.a.createElement("a",{href:"https://www.youtube.com/watch?v="+t,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:"http://img.youtube.com/vi/"+t+"/0.jpg",alt:a,class:"img-fluid rounded"})))),r.a.createElement("div",{class:"col-sm mb-4"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"title"},r.a.createElement("h2",null,a))),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"description"},r.a.createElement("h4",null,n))),r.a.createElement("div",{class:"row"},r.a.createElement("div",{className:"tags"},r.a.createElement("span",{class:"badge badge-pill badge-primary"},c))))))};a(44);var Z=function(){var e=r.a.useState([]),t=Object(I.a)(e,2),a=t[0],n=t[1];return r.a.useEffect(function(){return M.firestore().collection("videos").onSnapshot(function(e){var t=[];e.forEach(function(e){return t.push(Object(A.a)({},e.data(),{id:e.id}))}),n(t)})},[]),r.a.createElement("div",{className:"LearnPage"},r.a.createElement("h1",null," Videos "),a.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",{className:"videos"},r.a.createElement(X,{embedId:e.videoID,title:e.title,description:e.description,tags:e.tag})))}),r.a.createElement("section",{id:"pagination",class:"d-flex justify-content-center"},r.a.createElement("nav",{"aria-label":"..."},r.a.createElement("ul",{class:"pagination"},r.a.createElement("li",{class:"page-item disabled"},r.a.createElement("button",{class:"page-link",href:"#",tabindex:"-1","aria-disabled":"true"},"Previous")),r.a.createElement("li",{class:"page-item"},r.a.createElement("button",{class:"page-link",href:"#"},"1")),r.a.createElement("li",{class:"page-item active","aria-current":"page"},r.a.createElement("button",{class:"page-link",href:"#"},"2")),r.a.createElement("li",{class:"page-item"},r.a.createElement("button",{class:"page-link",href:"#"},"3")),r.a.createElement("li",{class:"page-item"},r.a.createElement("button",{class:"page-link",href:"#"},"Next"))))))},$=a(16),ee=a.n($),te=a(21),ae=(a(45),function(e){var t=e.officer,a=r.a.useState(t.name),n=Object(I.a)(a,2),c=n[0],l=n[1],i=r.a.useState(t.role),o=Object(I.a)(i,2),s=o[0],u=o[1],m=r.a.useState(t.email),f=Object(I.a)(m,2),d=f[0],p=f[1],E=r.a.useState(t.linkedin),v=Object(I.a)(E,2),b=v[0],g=v[1],h=r.a.useState(t.fileUrl),_=Object(I.a)(h,2),k=_[0],N=_[1],w=function(){var e=Object(te.a)(ee.a.mark(function e(t){var a,n,r;return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files[0],n=M.storage().ref(),r=n.child(a.name),e.next=5,r.put(a);case 5:return e.t0=N,e.next=8,r.getDownloadURL();case 8:e.t1=e.sent,(0,e.t0)(e.t1),console.log(r.getDownloadURL());case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"officer_input"},r.a.createElement("input",{value:c,onChange:function(e){l(e.target.value)}}),r.a.createElement("input",{value:s,onChange:function(e){u(e.target.value)}}),r.a.createElement("input",{value:d,onChange:function(e){p(e.target.value)}}),r.a.createElement("input",{value:b,onChange:function(e){g(e.target.value)}}),r.a.createElement("input",{type:"file",onChange:w}),r.a.createElement("button",{onClick:function(){if(console.log(k),null!=k)M.firestore().collection("officers").doc(t.id).set({name:c,role:s,email:d,linkedin:b,avatar:k});else{console.log("fileURL == null");var e=M.firestore();e.collection("officers").doc(t.id).get().then(function(a){a.exists?e.collection("officers").doc(t.id).set({name:c,role:s,email:d,linkedin:b,avatar:a.data().avatar}):console.log("No such document!")}).catch(function(e){console.log("Error getting document:",e)})}}},"Update"),r.a.createElement("button",{onClick:function(){M.firestore().collection("officers").doc(t.id).delete()}},"Delete"))}),ne=(a(46),M.firestore());var re=function(){var e=r.a.useState([]),t=Object(I.a)(e,2),a=t[0],c=t[1],l=r.a.useState(null),i=Object(I.a)(l,2),o=i[0],s=i[1],u=r.a.useState([]),m=Object(I.a)(u,2),f=(m[0],m[1]);r.a.useEffect(function(){return M.firestore().collection("officers").onSnapshot(function(e){var t=[];e.forEach(function(e){return t.push(Object(A.a)({},e.data(),{id:e.id}))}),c(t)})},[]);var d=function(){var e=Object(te.a)(ee.a.mark(function e(t){var a,n,r;return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files[0],n=M.storage().ref(),r=n.child(a.name),e.next=5,r.put(a);case 5:return e.t0=s,e.next=8,r.getDownloadURL();case 8:e.t1=e.sent,(0,e.t0)(e.t1),console.log(r.getDownloadURL());case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(te.a)(ee.a.mark(function e(t){var a,n,r,c;return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=t.target.username.value,n=t.target.role.value,r=t.target.email.value,c=t.target.linkedin.value,a&&o){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,ne.collection("officers").doc(a).set({name:a,role:n,email:r,linkedin:c,avatar:o});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){!function(){var e=Object(te.a)(ee.a.mark(function e(){var t;return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.collection("officers").get();case 2:t=e.sent,f(t.docs.map(function(e){return e.data()}));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),r.a.createElement("div",{className:"modify_page"},r.a.createElement("div",{className:"insert_feild"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col"},r.a.createElement(p.a,null,r.a.createElement(b.b,{className:"nav-link",to:"/ACE_Website/Admin"},r.a.createElement("h3",null,"Modify Officers")))),r.a.createElement("div",{class:"col"},r.a.createElement(p.a,null,r.a.createElement(b.b,{className:"nav-link",to:"/ACE_Website/AdminLearn"},r.a.createElement("h3",null,"Modify Learn Page"))))),r.a.createElement("ul",{className:"current_officers"},a.map(function(e){return r.a.createElement(ae,{officer:e})})),r.a.createElement("h3",null,"Test Input"),r.a.createElement("div",{className:"test_input"},r.a.createElement("form",{onSubmit:E},r.a.createElement("input",{type:"text",name:"username",placeholder:"Name"}),r.a.createElement("input",{type:"text",name:"role",placeholder:"Role"}),r.a.createElement("input",{type:"text",name:"email",placeholder:"Email"}),r.a.createElement("input",{type:"text",name:"linkedin",placeholder:"LinkedIn"}),r.a.createElement("input",{type:"file",onChange:d}),r.a.createElement("button",null,"Submit")),r.a.createElement("div",{className:"about_officers"},a.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(F,{src:e.avatar,role:e.role,name:e.name,linkedin:e.linkedin,email:"mailto:"+e.email}))})))))},ce=a(12),le=function(e){var t=e.video,a=r.a.useState(t.title),n=Object(I.a)(a,2),c=n[0],l=n[1],i=r.a.useState(t.description),o=Object(I.a)(i,2),s=o[0],u=o[1],m=r.a.useState(t.tag),f=Object(I.a)(m,2),d=f[0],p=f[1],E=r.a.useState(t.videoID),v=Object(I.a)(E,2),b=v[0],g=v[1];return r.a.createElement("div",{className:"officer_input"},r.a.createElement("input",{value:c,onChange:function(e){l(e.target.value)}}),r.a.createElement("input",{value:s,onChange:function(e){u(e.target.value)}}),r.a.createElement("input",{value:d,onChange:function(e){p(e.target.value)}}),r.a.createElement("input",{value:b,onChange:function(e){g(e.target.value)}}),r.a.createElement("button",{onClick:function(){M.firestore().collection("videos").doc(t.id).set({title:c,description:s,tag:d,videoID:b})}},"Update"),r.a.createElement("button",{onClick:function(){M.firestore().collection("videos").doc(t.id).delete()}},"Delete"))},ie=M.firestore();var oe=function(){var e=r.a.useState([]),t=Object(I.a)(e,2),a=t[0],c=t[1],l=r.a.useState([]),i=Object(I.a)(l,2),o=(i[0],i[1]);r.a.useEffect(function(){return M.firestore().collection("videos").onSnapshot(function(e){var t=[];e.forEach(function(e){return t.push(Object(A.a)({},e.data(),{id:e.id}))}),c(t)})},[]);var s=function(){var e=Object(te.a)(ee.a.mark(function e(t){var a,n,r,c;return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=t.target.title.value,n=t.target.description.value,r=t.target.tag.value,c=t.target.videoID.value,a){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,ie.collection("videos").doc(a).set({title:a,description:n,tag:r,videoID:c});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){!function(){var e=Object(te.a)(ee.a.mark(function e(){var t;return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie.collection("videos").get();case 2:t=e.sent,o(t.docs.map(function(e){return e.data()}));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),r.a.createElement("div",{className:"modify_page"},r.a.createElement("div",{className:"insert_feild"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col"},r.a.createElement(p.a,null,r.a.createElement(b.b,{className:"nav-link",to:"/ACE_Website/Admin"},r.a.createElement("h3",null,"Modify Officers")))),r.a.createElement("div",{class:"col"},r.a.createElement(p.a,null,r.a.createElement(b.b,{className:"nav-link",to:"/ACE_Website/AdminLearn"},r.a.createElement("h3",null,"Modify Learn Page"))))),r.a.createElement("ul",{className:"current_officers"},a.map(function(e){return r.a.createElement(le,{video:e})})),r.a.createElement("h3",null,"Test Input"),r.a.createElement("div",{className:"test_input"},r.a.createElement("form",{onSubmit:s},r.a.createElement("input",{type:"text",name:"title",placeholder:"Title"}),r.a.createElement("input",{type:"text",name:"description",placeholder:"Description"}),r.a.createElement("input",{type:"text",name:"tag",placeholder:"Tag"}),r.a.createElement("input",{type:"text",name:"videoID",placeholder:"videoID (../watch?v=ID)"}),r.a.createElement("button",null,"Submit")),a.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",{className:"videos"},r.a.createElement(X,{embedId:e.videoID,title:e.title,description:e.description,tags:e.tag})))}))))};var se=function(){return r.a.createElement(b.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(_,null),r.a.createElement("div",{className:"content"},r.a.createElement(ce.c,null,r.a.createElement(ce.a,{exact:!0,path:"/ACE_Website/"},r.a.createElement(O,null)),r.a.createElement(ce.a,{path:"/ACE_Website/About"},r.a.createElement(Y,null)),r.a.createElement(ce.a,{path:"/ACE_Website/Learn"},r.a.createElement(Z,null)),r.a.createElement(ce.a,{path:"/ACE_Website/Contact"},r.a.createElement(z,null)),r.a.createElement(ce.a,{path:"/ACE_Website/Admin"},r.a.createElement(re,null)),r.a.createElement(ce.a,{path:"/ACE_Website/AdminLearn"},r.a.createElement(oe,null)))),r.a.createElement(q,null)))},ue=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,100)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)})};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root")),ue()}},[[64,1,2]]]);
//# sourceMappingURL=main.a0d932a9.chunk.js.map