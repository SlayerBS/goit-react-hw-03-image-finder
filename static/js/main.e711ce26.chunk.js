(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__1kVwW",SearchForm:"SearchBar_SearchForm__3HYhi","SearchForm-button":"SearchBar_SearchForm-button__2O2F9","SearchForm-button-label":"SearchBar_SearchForm-button-label__3pUHz","SearchForm-input":"SearchBar_SearchForm-input__1YBJ8"}},13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1OHvA","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__1Q_9s"}},15:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1IQID",Modal:"Modal_Modal__1wBqd"}},16:function(e,t,a){e.exports={App:"App_App__3nfF4",Error:"App_Error__3llr9"}},26:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1vX9v"}},27:function(e,t,a){e.exports={Button:"Button_Button__lvLUS"}},30:function(e,t,a){e.exports={Loader:"Loader_Loader__114M4"}},35:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),c=a.n(o),s=(a(35),a(17)),l=a(6),i=a(7),u=a(9),h=a(8),m=a(4),d=a(2),p=a.n(d),g=a(10),b=a.n(g),j=a(1),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){e.setState({value:t.target.value.toLowerCase()}),console.log(t.target.value)},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.value.trim()?(e.props.onSubmit(e.state.value),e.setState({value:""})):m.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441")},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:b.a.Searchbar,children:Object(j.jsxs)("form",{className:b.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{type:"submit",className:b.a["SearchForm-button"],children:Object(j.jsx)("span",{className:b.a["SearchForm-button-label"],children:"Search"})}),Object(j.jsx)("input",{className:b.a["SearchForm-input"],type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange,value:this.state.value})]})})}}]),a}(n.Component);f.protoType={onSubmit:p.a.func.isRequired};var v=f,y=a(13),O=a.n(y),S=function(e){var t=e.imageSrc,a=e.openModalImage;return Object(j.jsx)("li",{className:O.a.ImageGalleryItem,children:Object(j.jsx)("img",{src:t,alt:"",className:O.a["ImageGalleryItem-image"],onClick:a})})},_=a(26),w=a.n(_),x=function(e){var t=e.images,a=e.modalImage;return Object(j.jsx)("ul",{className:w.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL;return Object(j.jsx)(S,{imageSrc:n,openModalImage:function(){return a(r)}},t)}))})},I=a(27),k=a.n(I),B=function(e){var t=e.onClick;return Object(j.jsx)("button",{onClick:t,className:k.a.Button,children:"Load more"})},C=a(14),L=a.n(C),M=a(28),F=a(11),N=a.n(F);function G(e,t){return D.apply(this,arguments)}function D(){return(D=Object(M.a)(L.a.mark((function e(t,a){var n,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("",{params:{q:t,page:a}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.hits);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}N.a.defaults.baseURL="https://pixabay.com/api",N.a.defaults.params={key:"4423902-dbd0f970c0cc60dbb84d66d4b",image_type:"photo",orientation:"horizontal",per_page:12};var U=a(29),A=a.n(U),E=a(30),Q=a.n(E),R=(a(76),function(){return Object(j.jsxs)("div",{className:Q.a.Loader,children:[Object(j.jsx)(A.a,{type:"ThreeDots",color:"#3f51b5",height:80,width:80}),";"]})}),q=a(15),H=a.n(q),T=document.querySelector("#modal-root"),J=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(j.jsx)("div",{className:H.a.Overlay,onClick:this.handleBackdropClick,children:Object(j.jsx)("div",{className:H.a.Modal,children:this.props.children})}),T)}}]),a}(n.Component),K=(a(77),a(16)),z=a.n(K),W=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],searchQuery:"",page:1,showModal:!1,isLoading:!1,largeImageURL:"",showButton:!1},e.onSubmit=function(t){return e.setState({images:[],searchQuery:t,page:1,error:null,showButton:!1})},e.getImages=function(){var t=e.state,a=t.searchQuery,n=t.page;e.setState({isLoading:!0}),G(a,n).then((function(t){if(0===t.length)return e.setState({showButton:!1}),void m.b.error('Search result by "'.concat(a,"' not successful. Enter the correct query."));12!==t.length&&(Object(m.b)("\u0424\u043e\u0442\u043e \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0438\u0441\u044c"),e.setState({showButton:!1})),e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),page:e.page+1}}))})).catch((function(e){return Object(m.b)(e)})).finally((function(){e.scrollDown(),e.setState({isLoading:!1})}))},e.scrollDown=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.toggleModal=function(){return e.setState((function(e){return{showModal:!e.showModal}}))},e.modalImage=function(t){e.setState({largeImageURL:t}),e.toggleModal()},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.getImages(),this.state.images.length-t.images.length===12&&this.setState({showButton:!0})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.showModal,r=e.largeImageURL,o=e.error,c=e.showButton;return Object(j.jsxs)("div",{className:z.a.App,children:[Object(j.jsx)(m.a,{autoClose:3e3,position:"top-left"}),Object(j.jsx)(v,{onSubmit:this.onSubmit}),o&&Object(j.jsx)("p",{className:z.a.Error,children:o}),t&&Object(j.jsx)("div",{children:Object(j.jsx)(x,{images:t,modalImage:this.modalImage})}),a&&Object(j.jsx)(R,{}),c&&!a&&Object(j.jsx)(B,{onClick:this.getImages}),n&&Object(j.jsx)(J,{onClose:this.toggleModal,children:Object(j.jsx)("img",{src:r,alt:""})})]})}}]),a}(n.Component);c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(W,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.e711ce26.chunk.js.map