(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},17:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(8),i=t.n(r),s=(t(15),t(1)),o=t(2),l=t(4),m=t(3),d=t(5),g=function(){return n.a.createElement("nav",null,n.a.createElement("div",{className:"nav-wrapper indigo"},n.a.createElement("a",{href:"/",className:"brand-logo center"},"Clicky Game")))},h=function(){return n.a.createElement("div",{className:"parallax-container"},n.a.createElement("div",{className:"parallax"},n.a.createElement("img",{src:"https://images7.alphacoders.com/914/914659.jpg",alt:"spongebob"})))},p=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h3",null,"Click An Image To Begin!"),n.a.createElement("p",{className:"flow-text"},"Click any image to begin but don't click the same image twice"))},u=function(e){return n.a.createElement("div",{className:"col s3",onClick:function(){return e.handleClick(e.id)}},n.a.createElement("div",{className:"card-panel "},n.a.createElement("div",{className:"card-image valign-wrapper"},n.a.createElement("img",{src:e.image,alt:"Character"}))))},f=function(e){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12 m4"},n.a.createElement("ul",{className:"collection"},n.a.createElement("li",{className:"collection-item"},"Score: ",n.a.createElement("span",{className:"badge orange white-text"},e.score)),n.a.createElement("li",{className:"collection-item"},"High Score: ",n.a.createElement("span",{className:"badge green white-text"},e.highScore)))))},k=t(6),b=(t(17),function(e){function a(){var e,t;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={characters:k,score:0,highScore:0},t.componentDidMount=function(){t.setState({characters:t.state.characters.sort(function(){return.5-Math.random()})})},t.handleClick=function(e){if(e=t.state.characters.findIndex(function(a){return a.id===e}),t.state.characters[e].clicked)alert("has been clicked, you lost!!"),t.state.score>t.state.highScore?t.setState({score:0,highScore:t.state.score}):t.setState({score:0,characters:k});else{var a=Object.assign({},t.state);a.characters=a.characters.slice(),a.characters[e]=Object.assign({},a.characters[e]),a.characters[e].clicked=!0,a.score+=1,a.characters=a.characters.sort(function(){return.5-Math.random()}),t.setState(a)}},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement(f,{score:this.state.score,highScore:this.state.highScore}),n.a.createElement("div",{className:"row"},this.state.characters.map(function(a){return n.a.createElement(u,{image:a.image,key:a.id,handleClick:e.handleClick,id:a.id})})))}}]),a}(c.Component)),E=function(){return n.a.createElement("div",{className:"page-footer indigo"},n.a.createElement("div",{className:"footer-copyright"},n.a.createElement("div",{className:"container"},"\xa9 Clicky Game")))},v=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(g,null),n.a.createElement(h,null),n.a.createElement(p,null),n.a.createElement(b,null),n.a.createElement(E,null))}}]),a}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e){e.exports=[{id:1,clicked:!1,image:"http://avatarbox.net/avatars/img21/plankton_scared_avatar_picture_99632.gif"},{id:2,clicked:!1,image:"http://fanaru.com/spongebob-squarepants/image/6603-spongebob-squarepants-happy-gary-avatar.gif"},{id:3,clicked:!1,image:"https://m.media-amazon.com/images/M/MV5BYWIwNWIxYzgtOTg2OC00OTI4LTk4OWUtZDY1OWNlNzBhOGY3XkEyXkFqcGdeQXVyNTI4MjkxMDE@._V1_SX100_CR0,0,100,100_AL_.jpg"},{id:4,clicked:!1,image:"https://m.media-amazon.com/images/M/MV5BODkwOWY0OTQtOTExYy00MmU2LTg3YjctM2MxMGFlMmM4NmU0XkEyXkFqcGdeQXVyNzY2MzE1MDA@._V1_SY100_CR16,0,100,100_AL_.jpg"},{id:5,clicked:!1,image:"http://images1.fanpop.com/images/photos/2200000/Spongebob-Icon-spongebob-squarepants-2251926-100-100.jpg"},{id:6,clicked:!1,image:"https://pm1.narvii.com/6449/3db0bfa5886f15723847205800c41fc16049a86f_128.jpg"},{id:7,clicked:!1,image:"https://pm1.narvii.com/6191/4a58a734430309f86267479fa0ae939ba2541286_128.jpg"},{id:8,clicked:!1,image:"https://imageproxy.ifcdn.com/crop:square,resize:100x,quality:90x75/user_photos/96b28d7e3e0592d9509be9f4e53345a3748208ad_0.jpg%3F1537384494"},{id:9,clicked:!1,image:"http://www.sbmania.net/images/avatars/3.png"},{id:10,clicked:!1,image:"https://yt3.ggpht.com/a-/AN66SAzY3yIbXXWA462Z0rlalH5qWjIRluNueCHM_g=s100-mo-c-c0xffffffff-rj-k-no"},{id:11,clicked:!1,image:"https://www.whosampled.com/static/artist_images/r171446_2017321_25248897095.jpg"},{id:12,clicked:!1,image:"https://yt3.ggpht.com/-eSaYtw48bmU/AAAAAAAAAAI/AAAAAAAAAAA/QnMKPb66yJg/s100-mo-c-c0xffffffff-rj-k-no/photo.jpg"}]},9:function(e,a,t){e.exports=t(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.215ab23a.chunk.js.map