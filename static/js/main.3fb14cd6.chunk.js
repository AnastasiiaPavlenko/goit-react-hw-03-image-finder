(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{1:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__HXNrI",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__1m3_y",stats:"ImageGalleryItem_stats__27xmX",stats_item:"ImageGalleryItem_stats_item__1RqiT",fullscreen_button:"ImageGalleryItem_fullscreen_button__-pX_B",gallery_item:"ImageGalleryItem_gallery_item__3Iiby"}},11:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1bdRT"}},12:function(e,t,a){e.exports={Spinner:"Loader_Spinner__329ez"}},13:function(e,t,a){e.exports={Button:"Button_Button__1Isrx"}},15:function(e,t,a){e.exports=a(35)},20:function(e,t,a){e.exports={App:"App_App__2htTF"}},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),o=a(2),s=a(3),m=a(5),i=a(4),u=a(6),h=(a(20),a(11)),_=a.n(h),p=a(7),g=a.n(p),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.handleChange=function(e){console.log(e.target.value),a.setState({value:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state.value),a.props.onSubmit(a.state.value),a.setState({value:""})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:g.a.Searchbar},r.a.createElement("form",{className:g.a.SearchForm,onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:g.a.SearchForm_button},r.a.createElement("span",{className:g.a.SearchForm_button_label},"Search")),r.a.createElement("input",{className:g.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})))}}]),t}(n.Component),b=a(1),f=a.n(b),d=(a(8),function(e){return e.galleryItems.map((function(e){var t=e.id,a=e.webformatURL,n=e.likes,l=e.views,c=e.comments,o=e.downloads;return r.a.createElement("li",{className:f.a.photo_card,key:t},r.a.createElement("img",{src:a,alt:"",className:f.a.ImageGalleryItem_image}),r.a.createElement("div",{className:f.a.stats},r.a.createElement("p",{className:f.a.stats_item},r.a.createElement("i",{className:"material-icons"},"thumb_up"),n),r.a.createElement("p",{className:f.a.stats_item},r.a.createElement("i",{className:"material-icons"},"visibility"),l),r.a.createElement("p",{className:f.a.stats_item},r.a.createElement("i",{className:"material-icons"},"comment"),c),r.a.createElement("p",{className:f.a.stats_item},r.a.createElement("i",{className:"material-icons"},"cloud_download"),o)),r.a.createElement("button",{type:"button",className:f.a.fullscreen_button},r.a.createElement("i",{className:"material-icons"},"zoom_out_map")))}))}),S=a(14),I=a(12),E=a.n(I),v=function(){return r.a.createElement("div",null,r.a.createElement(S.a,{className:E.a.Spinner,color:"#3F50B5"}))},N=a(13),O=a.n(N),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={galleryItems:[],isLoading:!1,error:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{type:"button",className:O.a.Button,onClick:this.props.onClick},"Load more")}}]),t}(n.Component),F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={galleryItems:[],isLoading:!1,error:null,searchQuery:"",page:1},a.fetchGalleryItems=function(){a.setState({isLoading:!0}),fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(a.state.searchQuery,"&page=").concat(a.state.page,"&per_page=12&key=14234855-711e9a9449f1d753999c1992c")).then((function(e){return e.json()})).then((function(e){a.setState((function(t){return{galleryItems:e.hits,page:t.page+1}}))})).catch((function(e){a.setState({error:e})})).finally((function(){a.setState({isLoading:!1})}))},a.handleSearchFormSubmit=function(e){a.setState({searchQuery:e})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!=this.state.searchQuery&&this.fetchGalleryItems()}},{key:"render",value:function(){var e=this.state,t=e.galleryItems,a=e.isLoading,n=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{onSubmit:this.handleSearchFormSubmit}),n&&r.a.createElement("p",null,"Woops, something went wrong: ",n.message," "),a&&r.a.createElement(v,null),r.a.createElement("ul",{className:_.a.ImageGallery},t.length>0&&r.a.createElement(d,{galleryItems:t})),t.length>0&&r.a.createElement(j,{onClick:this.fetchGalleryItems}))}}]),t}(n.Component),G=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),r.a.createElement(F,null))}}]),t}(n.Component);c.a.render(r.a.createElement(G,null),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__3Ohr3",SearchForm:"SearchBar_SearchForm__2X443",SearchForm_button:"SearchBar_SearchForm_button__3SxtH",SearchForm_button_label:"SearchBar_SearchForm_button_label__2Lvdy",SearchForm_input:"SearchBar_SearchForm_input__2nm8w"}},8:function(e,t,a){e.exports={Overlay:"Modal_Overlay__39oN5",Modal:"Modal_Modal__1JHsN"}}},[[15,1,2]]]);
//# sourceMappingURL=main.3fb14cd6.chunk.js.map