// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('replicant.dom');
goog.require('cljs.core');
goog.require('replicant.alias');
goog.require('replicant.core');
goog.require('replicant.protocols');
goog.require('replicant.transition');
replicant.dom.remove_listener = (function replicant$dom$remove_listener(el,event){
var temp__5804__auto__ = (function (){var G__12253 = el;
var G__12253__$1 = (((G__12253 == null))?null:G__12253.replicantHandlers);
if((G__12253__$1 == null)){
return null;
} else {
return (G__12253__$1[event]);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var old_handler = temp__5804__auto__;
return el.removeEventListener(event,old_handler);
} else {
return null;
}
});
replicant.dom.on_next_frame = (function replicant$dom$on_next_frame(f){
return requestAnimationFrame((function (){
return requestAnimationFrame(f);
}));
});
replicant.dom._on_transition_end = (function replicant$dom$_on_transition_end(el,f){
var vec__12254 = replicant.transition.get_transition_stats.call(null,window.getComputedStyle(el).getPropertyValue("transition-duration"));
var n = cljs.core.nth.call(null,vec__12254,(0),null);
var dur = cljs.core.nth.call(null,vec__12254,(1),null);
if(cljs.core._EQ_.call(null,n,(0))){
return f.call(null);
} else {
var complete = cljs.core.volatile_BANG_.call(null,(0));
var timer = cljs.core.volatile_BANG_.call(null,null);
var started = (new Date());
var callback = (function() { 
var replicant$dom$_on_transition_end_$_listener__delegate = function (_args){
var cn = cljs.core._vreset_BANG_.call(null,complete,(cljs.core._deref.call(null,complete) + (1)));
if((((n <= cn)) || ((dur < ((new Date()) - started))))){
el.removeEventListener("transitionend",replicant$dom$_on_transition_end_$_listener);

clearTimeout(cljs.core.deref.call(null,timer));

return f.call(null);
} else {
return null;
}
};
var replicant$dom$_on_transition_end_$_listener = function (var_args){
var _args = null;
if (arguments.length > 0) {
var G__12257__i = 0, G__12257__a = new Array(arguments.length -  0);
while (G__12257__i < G__12257__a.length) {G__12257__a[G__12257__i] = arguments[G__12257__i + 0]; ++G__12257__i;}
  _args = new cljs.core.IndexedSeq(G__12257__a,0,null);
} 
return replicant$dom$_on_transition_end_$_listener__delegate.call(this,_args);};
replicant$dom$_on_transition_end_$_listener.cljs$lang$maxFixedArity = 0;
replicant$dom$_on_transition_end_$_listener.cljs$lang$applyTo = (function (arglist__12258){
var _args = cljs.core.seq(arglist__12258);
return replicant$dom$_on_transition_end_$_listener__delegate(_args);
});
replicant$dom$_on_transition_end_$_listener.cljs$core$IFn$_invoke$arity$variadic = replicant$dom$_on_transition_end_$_listener__delegate;
return replicant$dom$_on_transition_end_$_listener;
})()
;
el.addEventListener("transitionend",callback);

return cljs.core.vreset_BANG_.call(null,timer,setTimeout(callback,(dur + (200))));
}
});
replicant.dom.create_renderer = (function replicant$dom$create_renderer(){
if((typeof replicant !== 'undefined') && (typeof replicant.dom !== 'undefined') && (typeof replicant.dom.t_replicant$dom12259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {replicant.protocols.IRender}
 * @implements {cljs.core.IWithMeta}
*/
replicant.dom.t_replicant$dom12259 = (function (meta12260){
this.meta12260 = meta12260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(replicant.dom.t_replicant$dom12259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12261,meta12260__$1){
var self__ = this;
var _12261__$1 = this;
return (new replicant.dom.t_replicant$dom12259(meta12260__$1));
}));

(replicant.dom.t_replicant$dom12259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12261){
var self__ = this;
var _12261__$1 = this;
return self__.meta12260;
}));

(replicant.dom.t_replicant$dom12259.prototype.replicant$protocols$IRender$ = cljs.core.PROTOCOL_SENTINEL);

(replicant.dom.t_replicant$dom12259.prototype.replicant$protocols$IRender$remove_attribute$arity$3 = (function (this$,el,attr){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,"innerHTML",attr)){
(el.innerHTML = "");
} else {
el.removeAttribute(attr);
}

return this$__$1;
}));

(replicant.dom.t_replicant$dom12259.prototype.replicant$protocols$IRender$remove_all_children$arity$2 = (function (this$,el){
var self__ = this;
var this$__$1 = this;
(el.textContent = "");

return this$__$1;
}));

(replicant.dom.t_replicant$dom12259.prototype.replicant$protocols$IRender$remove_child$arity$3 = (function (this$,el,child_node){
var self__ = this;
var this$__$1 = this;
el.removeChild(child_node);

return this$__$1;
}));

(replicant.dom.t_replicant$dom12259.prototype.replicant$protocols$IRender$insert_before$arity$4 = (function (this$,el,child_node,reference_node){
var self__ = this;
var this$__$1 = this;
el.insertBefore(child_node,reference_node);

return this$__$1;
}));

(replicant.dom.t_replicant$dom12259.prototype.replicant$protocols$IRender$append_child$arity$3 = (function (this$,el,child_node){
var self__ = this;
var this$__$1 = this;
el.appendChild(child_node);

return this$__$1;
}));

(replicant.dom.t_replicant$dom12259.prototype.replicant$protocols$IRender$remove_event_handler$arity$3 = (function (this$,el,event){
var self__ = this;
var this$__$1 = this;
var event_12262__$1 = cljs.core.name.call(null,event);
replicant.dom.remove_listener.call(null,el,event_12262__$1);

(el.replicantHandlers[event_12262__$1] = null);

return this$__$1;
}));

(replicant.dom.t_replicant$dom12259.prototype.replicant$protocols$IRender$remove_class$arity$3 = (function (this$,el,cn){
var self__ = this;
var this$__$1 = this;
el.classList.remove(cn);

return this$__$1;
}));

(replicant.dom.t_replicant$dom12259.prototype.replicant$protocols$IRender$set_event_handler$arity$4 = (function (this$,el,event,handler){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(el.replicantHandlers)){
} else {
(el.replicantHandlers = ({}));
}

var event_12263__$1 = cljs.core.name.call(null,event);
replicant.dom.remove_listener.call(null,el,event_12263__$1);

(el.replicantHandlers[event_12263__$1] = handler);

el.addEventListener(event_12263__$1,handler);

return this$__$1;
}));

(replicant.dom.t_replicant$dom12259.prototype.replicant$protocols$IRender$replace_child$arity$4 = (function (this$,el,insert_child,replace_child){
var self__ = this;
var this$__$1 = this;
el.replaceChild(insert_child,replace_child);

return this$__$1;
}));

(replicant.dom.t_replicant$dom12259.prototype.replicant$protocols$IRender$on_transition_end$arity$3 = (function (this$,el,f){
var self__ = this;
var this$__$1 = this;
replicant.dom._on_transition_end.call(null,el,f);

return this$__$1;
}));

(replicant.dom.t_replicant$dom12259.prototype.replicant$protocols$IRender$remove_style$arity$3 = (function (this$,el,style){
var self__ = this;
var this$__$1 = this;
el.style.removeProperty(cljs.core.name.call(null,style));

return this$__$1;
}));

(replicant.dom.t_replicant$dom12259.prototype.replicant$protocols$IRender$set_attribute$arity$5 = (function (this$,el,attr,v,opt){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,"innerHTML",attr)){
(el.innerHTML = v);
} else {
if(cljs.core._EQ_.call(null,"value",attr)){
(el.value = v);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opt))){
el.setAttributeNS(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opt),attr,v);
} else {
el.setAttribute(attr,v);

}
}
}

return this$__$1;
}));

(replicant.dom.t_replicant$dom12259.prototype.replicant$protocols$IRender$create_text_node$arity$2 = (function (_this,text){
var self__ = this;
var _this__$1 = this;
return document.createTextNode(text);
}));

(replicant.dom.t_replicant$dom12259.prototype.replicant$protocols$IRender$set_style$arity$4 = (function (this$,el,style,v){
var self__ = this;
var this$__$1 = this;
el.style.setProperty(cljs.core.name.call(null,style),v);

return this$__$1;
}));

(replicant.dom.t_replicant$dom12259.prototype.replicant$protocols$IRender$next_frame$arity$2 = (function (_this,f){
var self__ = this;
var _this__$1 = this;
return replicant.dom.on_next_frame.call(null,f);
}));

(replicant.dom.t_replicant$dom12259.prototype.replicant$protocols$IRender$add_class$arity$3 = (function (this$,el,cn){
var self__ = this;
var this$__$1 = this;
el.classList.add(cn);

return this$__$1;
}));

(replicant.dom.t_replicant$dom12259.prototype.replicant$protocols$IRender$get_child$arity$3 = (function (_this,el,idx){
var self__ = this;
var _this__$1 = this;
return (el.childNodes[idx]);
}));

(replicant.dom.t_replicant$dom12259.prototype.replicant$protocols$IRender$create_element$arity$3 = (function (_this,tag_name,options){
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

(replicant.dom.t_replicant$dom12259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12260","meta12260",38669419,null)], null);
}));

(replicant.dom.t_replicant$dom12259.cljs$lang$type = true);

(replicant.dom.t_replicant$dom12259.cljs$lang$ctorStr = "replicant.dom/t_replicant$dom12259");

(replicant.dom.t_replicant$dom12259.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"replicant.dom/t_replicant$dom12259");
}));

/**
 * Positional factory function for replicant.dom/t_replicant$dom12259.
 */
replicant.dom.__GT_t_replicant$dom12259 = (function replicant$dom$create_renderer_$___GT_t_replicant$dom12259(meta12260){
return (new replicant.dom.t_replicant$dom12259(meta12260));
});

}

return (new replicant.dom.t_replicant$dom12259(cljs.core.PersistentArrayMap.EMPTY));
});
if((typeof replicant !== 'undefined') && (typeof replicant.dom !== 'undefined') && (typeof replicant.dom.state !== 'undefined')){
} else {
replicant.dom.state = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Render `hiccup` in DOM element `el`. Replaces any pre-existing content not
 *   created by this function. Subsequent calls with the same `el` will update the
 *   rendered DOM by comparing `hiccup` to the previous `hiccup`.
 */
replicant.dom.render = (function replicant$dom$render(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12276 = arguments.length;
var i__5770__auto___12277 = (0);
while(true){
if((i__5770__auto___12277 < len__5769__auto___12276)){
args__5775__auto__.push((arguments[i__5770__auto___12277]));

var G__12278 = (i__5770__auto___12277 + (1));
i__5770__auto___12277 = G__12278;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return replicant.dom.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});
goog.exportSymbol('replicant.dom.render', replicant.dom.render);

(replicant.dom.render.cljs$core$IFn$_invoke$arity$variadic = (function (el,hiccup,p__12269){
var vec__12270 = p__12269;
var map__12273 = cljs.core.nth.call(null,vec__12270,(0),null);
var map__12273__$1 = cljs.core.__destructure_map.call(null,map__12273);
var aliases = cljs.core.get.call(null,map__12273__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var rendering_QMARK__12279 = cljs.core.get_in.call(null,cljs.core.deref.call(null,replicant.dom.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.Keyword(null,"rendering?","rendering?",-1124117844)], null));
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,replicant.dom.state),el)){
} else {
(el.innerHTML = "");

cljs.core._vreset_BANG_.call(null,replicant.dom.state,cljs.core.assoc.call(null,cljs.core._deref.call(null,replicant.dom.state),el,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"renderer","renderer",336841071),replicant.dom.create_renderer.call(null),new cljs.core.Keyword(null,"unmounts","unmounts",173366521),cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword(null,"rendering?","rendering?",-1124117844),true,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY], null)));
}

if(cljs.core.truth_(rendering_QMARK__12279)){
cljs.core._vreset_BANG_.call(null,replicant.dom.state,cljs.core.update_in.call(null,cljs.core._deref.call(null,replicant.dom.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.Keyword(null,"queue","queue",1455835879)], null),(function (p1__12264_SHARP_){
return cljs.core.conj.call(null,p1__12264_SHARP_,hiccup);
})));
} else {
cljs.core._vreset_BANG_.call(null,replicant.dom.state,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,replicant.dom.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.Keyword(null,"rendering?","rendering?",-1124117844)], null),true));

var map__12274_12280 = cljs.core.get.call(null,cljs.core.deref.call(null,replicant.dom.state),el);
var map__12274_12281__$1 = cljs.core.__destructure_map.call(null,map__12274_12280);
var renderer_12282 = cljs.core.get.call(null,map__12274_12281__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var current_12283 = cljs.core.get.call(null,map__12274_12281__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var unmounts_12284 = cljs.core.get.call(null,map__12274_12281__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521));
var map__12275_12285 = replicant.core.reconcile.call(null,renderer_12282,el,hiccup,current_12283,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unmounts","unmounts",173366521),unmounts_12284,new cljs.core.Keyword(null,"aliases","aliases",1346874714),(function (){var or__5045__auto__ = aliases;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return replicant.alias.get_aliases.call(null);
}
})()], null));
var map__12275_12286__$1 = cljs.core.__destructure_map.call(null,map__12275_12285);
var vdom_12287 = cljs.core.get.call(null,map__12275_12286__$1,new cljs.core.Keyword(null,"vdom","vdom",953162958));
cljs.core._vreset_BANG_.call(null,replicant.dom.state,cljs.core.update.call(null,cljs.core._deref.call(null,replicant.dom.state),el,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current","current",-1088038603),vdom_12287,new cljs.core.Keyword(null,"rendering?","rendering?",-1124117844),false], null)));

var temp__5804__auto___12288 = cljs.core.first.call(null,new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,replicant.dom.state),el)));
if(cljs.core.truth_(temp__5804__auto___12288)){
var pending_12289 = temp__5804__auto___12288;
requestAnimationFrame((function (){
return replicant.dom.render.call(null,el,pending_12289);
}));

cljs.core._vreset_BANG_.call(null,replicant.dom.state,cljs.core.update_in.call(null,cljs.core._deref.call(null,replicant.dom.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.Keyword(null,"queue","queue",1455835879)], null),(function (p1__12265_SHARP_){
return cljs.core.vec.call(null,cljs.core.rest.call(null,p1__12265_SHARP_));
})));
} else {
}
}

return el;
}));

(replicant.dom.render.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(replicant.dom.render.cljs$lang$applyTo = (function (seq12266){
var G__12267 = cljs.core.first.call(null,seq12266);
var seq12266__$1 = cljs.core.next.call(null,seq12266);
var G__12268 = cljs.core.first.call(null,seq12266__$1);
var seq12266__$2 = cljs.core.next.call(null,seq12266__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12267,G__12268,seq12266__$2);
}));

/**
 * Unmounts elements in `el`, and clears internal state.
 */
replicant.dom.unmount = (function replicant$dom$unmount(el){
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,replicant.dom.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.Keyword(null,"rendering?","rendering?",-1124117844)], null)))){
return requestAnimationFrame((function (){
return replicant.dom.unmount.call(null,el);
}));
} else {
replicant.dom.render.call(null,el,null);

cljs.core._vreset_BANG_.call(null,replicant.dom.state,cljs.core.dissoc.call(null,cljs.core._deref.call(null,replicant.dom.state),el));

return null;
}
});
goog.exportSymbol('replicant.dom.unmount', replicant.dom.unmount);
replicant.dom.set_dispatch_BANG_ = (function replicant$dom$set_dispatch_BANG_(f){
return (replicant.core._STAR_dispatch_STAR_ = f);
});
goog.exportSymbol('replicant.dom.set_dispatch_BANG_', replicant.dom.set_dispatch_BANG_);

//# sourceMappingURL=dom.js.map
