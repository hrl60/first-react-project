(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('{"title":"Hello I\'m Hamidreza","subtitle":".net developer | DB designer | BI developer | Photogragher","links":{"github":"https://github.com/hrl60","instagram":"https://www.instagram.com/hrl60/","linkedin":"https://www.linkedin.com/in/hamid-reza-1ab72b40/","facebook":"https://www.facebook.com/hamidreza.lorestani"},"sections":[{"title":"About","items":[{"type":"p","content":"I like C#,JavaScript and T-Sql."},{"type":"p","content":"I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me and the success of your organization."},{"type":"p","content":"I am a dedicated person with a family of four. I enjoy reading, and the knowledge and perspective that my reading gives me has strengthened my teaching skills and presentation abilities. I have been successful at raising a family, and I attribute this success to my ability to plan, schedule, and handle many different tasks at once. This flexibility will help me in the classroom, where there are many different personalities and learning styles."}]},{"title":"Skills","items":[{"type":"card","content":{"image":"/images/asp.png","title":"Asp.net"}},{"type":"card","content":{"image":"/images/c.png","title":"C#.net"}},{"type":"card","content":{"image":"/images/dev.png","title":"DevExpress"}},{"type":"card","content":{"image":"/images/react.png","title":"React"}},{"type":"card","content":{"image":"/images/Sql.png","title":"Sql Server"}},{"type":"card","content":{"image":"/images/js.png","title":"Javascript"}},{"type":"card","content":{"image":"/images/mysql.png","title":"Mysql"}},{"type":"card","content":{"image":"/images/Bi.png","title":"BI"}},{"type":"card","content":{"image":"/images/vb.png","title":"VB.net"}},{"type":"card","content":{"image":"/images/oop.png","title":"OOP"}}]}]}')},,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(56)},,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(11),l=n.n(c),r=n(1),s=n(2),o=n(3),m=n(4),u=(n(28),n(6)),p=n(17),h=(n(36),n(37),function(e){Object(m.a)(n,e);var t=Object(o.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.children;return i.a.createElement("div",{className:"fullpage ".concat(this.props.themeName||"")},e)}}]),n}(a.Component)),d=n(5),g=(n(46),function(e){Object(m.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"down"},i.a.createElement(d.Link,{activeClass:"active",to:this.props.element,spy:!0,smooth:!0,offset:50,duration:500,onSetActive:this.handleSetActive},i.a.createElement("img",{src:"/images/Down.png"})))}}]),n}(a.Component)),f=(n(47),function(e){Object(m.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h,{themeName:this.props.themeName},i.a.createElement("h1",{className:"title"},u.title),i.a.createElement("div",null,i.a.createElement("h2",null,u.subtitle)),i.a.createElement("div",null,i.a.createElement("div",null,Object.keys(u.links).map((function(e){return i.a.createElement(p.SocialIcon,{url:u.links[e]})})))),i.a.createElement(g,{element:"about"})),i.a.createElement(d.Element,{name:"about",className:"element"}))}},{key:"toggle",value:function(){this.refs.p1.toggle()}}]),n}(a.Component)),v=(n(48),function(e){Object(m.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h,{themeName:this.props.themeName},i.a.createElement("h1",null,u.sections[0].title),i.a.createElement("div",null,u.sections[0].items.map((function(e){return i.a.createElement("p",null,e.content)}))),i.a.createElement(g,{element:"skills"})),i.a.createElement(d.Element,{name:"skills",className:"element"}))}}]),n}(a.Component)),b=(n(49),function(e){Object(m.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.skill;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"skillimage"},i.a.createElement("img",{src:e.content.image})),i.a.createElement("div",{className:"skilltitle"},e.content.title))}}]),n}(a.Component)),E=(n(50),function(e){Object(m.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"up"},i.a.createElement("img",{src:"/images/up.png",onClick:d.animateScroll.scrollToTop}))}}]),n}(a.Component)),y=(n(51),function(e){Object(m.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h,{themeName:this.props.themeName},i.a.createElement("h1",null,u.sections[1].title),i.a.createElement("div",{className:"cardwrapper"},u.sections[1].items.map((function(e){return i.a.createElement(b,{skill:e})}))),i.a.createElement(E,null)))}}]),n}(a.Component)),k=(n(52),function(e){Object(m.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).toggle=function(e){a.props.onClick()},a}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"colorChanger"},i.a.createElement("img",{src:"/images/magic.png",onClick:this.toggle}))}}]),n}(a.Component)),j=(n(53),function(e){Object(m.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"menu"},i.a.createElement(d.Link,{activeClass:"active",to:this.props.aboutElement,spy:!0,smooth:!0,offset:50,duration:500,onSetActive:this.handleSetActive},i.a.createElement("a",{className:"menu-item"},"About Me")),i.a.createElement(d.Link,{activeClass:"active",to:this.props.skillsElement,spy:!0,smooth:!0,offset:50,duration:500,onSetActive:this.handleSetActive},i.a.createElement("a",{className:"menu-item"},"Skills")))}}]),n}(a.Component)),O=n(22),N=n.n(O),w=function(e){Object(m.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).toggleTheme=function(t){e.setState({titleTheme:e.getNextTheme(e.state.titleTheme)}),e.setState({aboutTheme:e.getNextTheme(e.state.aboutTheme)}),e.setState({skillTheme:e.getNextTheme(e.state.skillTheme)})},e.getNextTheme=function(e){return"first"===e?"second":"second"===e?"third":"first"},e.state={titleTheme:"first",aboutTheme:"second",skillTheme:"third"},e}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",null,i.a.createElement(N.a,{followMouse:"0",snowCharacter:"\xb7",animationInterval:"50"})),i.a.createElement("div",{className:"navigation"},i.a.createElement(k,{onClick:this.toggleTheme}),i.a.createElement(j,{aboutElement:"about",skillsElement:"skills"})),i.a.createElement(f,{themeName:this.state.titleTheme}),i.a.createElement(v,{themeName:this.state.aboutTheme}),i.a.createElement(y,{themeName:this.state.skillTheme}))}}]),n}(a.Component);n(55);l.a.render(i.a.createElement(w,null),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.6967ef72.chunk.js.map