(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),s=n.n(c),a=(n(12),n(2)),i=n(3),o=n(5),h=n(4),l=n(0),u=function(e){var t=e.name,n=e.email,r=e.id;return Object(l.jsxs)("div",{className:"tc dib bg-light-blue br3 pa4 ma2 grow bw2 shadow-5 link hover-bg-light-green",children:[Object(l.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:t}),Object(l.jsx)("p",{children:n})]})]})},b=function(e){var t=e.robots;return Object(l.jsx)("div",{children:t.map((function(e,n){return Object(l.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].id)}))})},j=function(e){var t=e.searchChange;return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 ba b-grey bg-lightest-blue w--30 tc",type:"search",placeholder:"search robots",onChange:t})})},d=(n(14),function(e){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"containerChild",children:e.children})})}),f=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={hasError:!1},e}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"Ooooops. Something went wrong "}):this.props.children}}]),n}(r.Component),O=(n(15),function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(l.jsx)(j,{searchChange:this.onSearchChange}),Object(l.jsx)(d,{children:Object(l.jsx)(f,{children:Object(l.jsx)(b,{robots:r})})})]}):Object(l.jsx)("h1",{className:"f1 tc vc",children:"Loading"})}}]),n}(r.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};n(16);s.a.render(Object(l.jsx)(O,{}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.9eab7569.chunk.js.map