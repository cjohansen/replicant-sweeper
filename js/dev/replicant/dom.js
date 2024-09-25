// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('replicant.dom');
goog.require('cljs.core');
goog.require('replicant.core');
goog.require('replicant.protocols');
replicant.dom.remove_listener = (function replicant$dom$remove_listener(el,event){
var temp__5804__auto__ = (function (){var G__9630 = el;
var G__9630__$1 = (((G__9630 == null))?null:G__9630.replicantHandlers);
if((G__9630__$1 == null)){
return null;
} else {
return (G__9630__$1[event]);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var old_handler = temp__5804__auto__;
return el.removeEventListener(event,old_handler);
} else {
return null;
}
});
replicant.dom.create_renderer = (function replicant$dom$create_renderer(){
var hooks = [];
if((typeof replicant !== 'undefined') && (typeof replicant.dom !== 'undefined') && (typeof replicant.dom.t_replicant$dom9631 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {replicant.protocols.IRender}
 * @implements {cljs.core.IWithMeta}
*/
replicant.dom.t_replicant$dom9631 = (function (hooks,meta9632){
this.hooks = hooks;
this.meta9632 = meta9632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(replicant.dom.t_replicant$dom9631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9633,meta9632__$1){
var self__ = this;
var _9633__$1 = this;
return (new replicant.dom.t_replicant$dom9631(self__.hooks,meta9632__$1));
}));

(replicant.dom.t_replicant$dom9631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9633){
var self__ = this;
var _9633__$1 = this;
return self__.meta9632;
}));

(replicant.dom.t_replicant$dom9631.prototype.replicant$protocols$IRender$ = cljs.core.PROTOCOL_SENTINEL);

(replicant.dom.t_replicant$dom9631.prototype.replicant$protocols$IRender$remove_attribute$arity$3 = (function (this$,el,attr){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343),attr)){
(el.innerHTML = "");
} else {
el.removeAttribute(attr);
}

return this$__$1;
}));

(replicant.dom.t_replicant$dom9631.prototype.replicant$protocols$IRender$remove_child$arity$3 = (function (this$,el,child_node){
var self__ = this;
var this$__$1 = this;
el.removeChild(child_node);

return this$__$1;
}));

(replicant.dom.t_replicant$dom9631.prototype.replicant$protocols$IRender$insert_before$arity$4 = (function (this$,el,child_node,reference_node){
var self__ = this;
var this$__$1 = this;
el.insertBefore(child_node,reference_node);

return this$__$1;
}));

(replicant.dom.t_replicant$dom9631.prototype.replicant$protocols$IRender$append_child$arity$3 = (function (this$,el,child_node){
var self__ = this;
var this$__$1 = this;
el.appendChild(child_node);

return this$__$1;
}));

(replicant.dom.t_replicant$dom9631.prototype.replicant$protocols$IRender$remove_event_handler$arity$3 = (function (this$,el,event){
var self__ = this;
var this$__$1 = this;
var event_9634__$1 = cljs.core.name.call(null,event);
replicant.dom.remove_listener.call(null,el,event_9634__$1);

(el.replicantHandlers[event_9634__$1] = null);

return this$__$1;
}));

(replicant.dom.t_replicant$dom9631.prototype.replicant$protocols$IRender$remove_class$arity$3 = (function (this$,el,cn){
var self__ = this;
var this$__$1 = this;
el.classList.remove(cn);

return this$__$1;
}));

(replicant.dom.t_replicant$dom9631.prototype.replicant$protocols$IRender$set_event_handler$arity$4 = (function (this$,el,event,handler){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(el.replicantHandlers)){
} else {
(el.replicantHandlers = ({}));
}

var event_9635__$1 = cljs.core.name.call(null,event);
replicant.dom.remove_listener.call(null,el,event_9635__$1);

(el.replicantHandlers[event_9635__$1] = handler);

el.addEventListener(event_9635__$1,handler);

return this$__$1;
}));

(replicant.dom.t_replicant$dom9631.prototype.replicant$protocols$IRender$replace_child$arity$4 = (function (this$,el,insert_child,replace_child){
var self__ = this;
var this$__$1 = this;
el.replaceChild(insert_child,replace_child);

return this$__$1;
}));

(replicant.dom.t_replicant$dom9631.prototype.replicant$protocols$IRender$remove_style$arity$3 = (function (this$,el,style){
var self__ = this;
var this$__$1 = this;
(el.style[cljs.core.name.call(null,style)] = null);

return this$__$1;
}));

(replicant.dom.t_replicant$dom9631.prototype.replicant$protocols$IRender$set_attribute$arity$5 = (function (this$,el,attr,v,opt){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,"innerHTML",attr)){
(el.innerHTML = v);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opt))){
el.setAttributeNS(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opt),attr,v);
} else {
el.setAttribute(attr,v);

}
}

return this$__$1;
}));

(replicant.dom.t_replicant$dom9631.prototype.replicant$protocols$IRender$create_text_node$arity$2 = (function (_this,text){
var self__ = this;
var _this__$1 = this;
return document.createTextNode(text);
}));

(replicant.dom.t_replicant$dom9631.prototype.replicant$protocols$IRender$set_style$arity$4 = (function (this$,el,style,v){
var self__ = this;
var this$__$1 = this;
(el.style[cljs.core.name.call(null,style)] = v);

return this$__$1;
}));

(replicant.dom.t_replicant$dom9631.prototype.replicant$protocols$IRender$add_class$arity$3 = (function (this$,el,cn){
var self__ = this;
var this$__$1 = this;
el.classList.add(cn);

return this$__$1;
}));

(replicant.dom.t_replicant$dom9631.prototype.replicant$protocols$IRender$get_child$arity$3 = (function (_this,el,idx){
var self__ = this;
var _this__$1 = this;
return (el.childNodes[(function (){var or__5045__auto__ = idx;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()]);
}));

(replicant.dom.t_replicant$dom9631.prototype.replicant$protocols$IRender$create_element$arity$3 = (function (_this,tag_name,options){
var self__ = this;
var _this__$1 = this;
var temp__5802__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5802__auto__)){
var ns = temp__5802__auto__;
return document.createElementNS(ns,tag_name);
} else {
return document.createElement(tag_name);
}
}));

(replicant.dom.t_replicant$dom9631.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hooks","hooks",1226941424,null),new cljs.core.Symbol(null,"meta9632","meta9632",-1352404419,null)], null);
}));

(replicant.dom.t_replicant$dom9631.cljs$lang$type = true);

(replicant.dom.t_replicant$dom9631.cljs$lang$ctorStr = "replicant.dom/t_replicant$dom9631");

(replicant.dom.t_replicant$dom9631.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"replicant.dom/t_replicant$dom9631");
}));

/**
 * Positional factory function for replicant.dom/t_replicant$dom9631.
 */
replicant.dom.__GT_t_replicant$dom9631 = (function replicant$dom$create_renderer_$___GT_t_replicant$dom9631(hooks__$1,meta9632){
return (new replicant.dom.t_replicant$dom9631(hooks__$1,meta9632));
});

}

return (new replicant.dom.t_replicant$dom9631(hooks,cljs.core.PersistentArrayMap.EMPTY));
});
if((typeof replicant !== 'undefined') && (typeof replicant.dom !== 'undefined') && (typeof replicant.dom.state !== 'undefined')){
} else {
replicant.dom.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
replicant.dom.render = (function replicant$dom$render(el,hiccup){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,replicant.dom.state),el)){
} else {
cljs.core.swap_BANG_.call(null,replicant.dom.state,cljs.core.assoc,el,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"renderer","renderer",336841071),replicant.dom.create_renderer.call(null)], null));
}

var map__9636_9637 = cljs.core.get.call(null,cljs.core.deref.call(null,replicant.dom.state),el);
var map__9636_9638__$1 = cljs.core.__destructure_map.call(null,map__9636_9637);
var renderer_9639 = cljs.core.get.call(null,map__9636_9638__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var current_9640 = cljs.core.get.call(null,map__9636_9638__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
replicant.core.reconcile.call(null,renderer_9639,el,hiccup,current_9640);

cljs.core.swap_BANG_.call(null,replicant.dom.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.Keyword(null,"current","current",-1088038603)], null),hiccup);

return el;
});
goog.exportSymbol('replicant.dom.render', replicant.dom.render);
replicant.dom.set_dispatch_BANG_ = (function replicant$dom$set_dispatch_BANG_(f){
return (replicant.core._STAR_dispatch_STAR_ = f);
});
goog.exportSymbol('replicant.dom.set_dispatch_BANG_', replicant.dom.set_dispatch_BANG_);

//# sourceMappingURL=dom.js.map
