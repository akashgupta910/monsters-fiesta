(this.webpackJsonpmonsters=this.webpackJsonpmonsters||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),s=n.n(o),c=(n(13),n(3)),i=n(4),l=n(6),u=n(5),m=n(7);n(14),n(15),n(16);function h(e){return r.a.createElement("div",{className:"card"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set1&size=200x200")}),r.a.createElement("h2",null,e.monster.name),r.a.createElement("p",null,e.monster.email))}function d(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(h,{key:e.id,monster:e})})))}n(17);function f(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("div",{className:"searchbox"},r.a.createElement("input",{type:"search",placeholder:t,onChange:n}))}var p=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={monsters:[],searchField:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,a=t.searchField,o=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Monsters Fiesta"),r.a.createElement(f,{placeholder:"Search Monster",handleChange:function(t){e.setState({searchField:t.target.value})}}),r.a.createElement(d,{monsters:o}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.70e13ce9.chunk.js.map