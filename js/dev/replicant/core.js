// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('replicant.core');
goog.require('cljs.core');
goog.require('replicant.assert');
goog.require('replicant.asserts');
goog.require('replicant.hiccup');
goog.require('replicant.hiccup_headers');
goog.require('replicant.protocols');
goog.require('replicant.vdom');
replicant.core.parse_tag = (function replicant$core$parse_tag(tag){
replicant.asserts.assert_non_empty_id.call(null,tag);

replicant.asserts.assert_valid_id.call(null,tag);

replicant.asserts.assert_non_empty_class.call(null,tag);

var ns = cljs.core.namespace.call(null,tag);
var tag__$1 = cljs.core.name.call(null,tag);
var id_index = (function (){var index = tag__$1.indexOf("#");
if((index > (0))){
return index;
} else {
return null;
}
})();
var class_index = (function (){var index = tag__$1.indexOf(".");
if((index > (0))){
return index;
} else {
return null;
}
})();
var tag_name = (function (){var G__9753 = (cljs.core.truth_(id_index)?tag__$1.substring((0),id_index):(cljs.core.truth_(class_index)?tag__$1.substring((0),class_index):tag__$1
));
if(cljs.core.truth_(ns)){
return cljs.core.keyword.call(null,ns,G__9753);
} else {
return G__9753;
}
})();
var id = (cljs.core.truth_(id_index)?(cljs.core.truth_(class_index)?tag__$1.substring((id_index + (1)),class_index):tag__$1.substring((id_index + (1)))):null);
var classes = (cljs.core.truth_(class_index)?cljs.core.seq.call(null,tag__$1.substring((class_index + (1))).split(".")):null);
return [tag_name,id,classes];
});
/**
 * Hiccup symbols can include tag name, id and classes. The argument map is
 *   optional. This function finds the important bits of the hiccup data structure
 *   and returns a "headers" tuple with a stable position for:
 * 
 *   - tag-name
 *   - id from the hiccup symbol
 *   - classes from the hiccup symbol
 *   - key
 *   - attributes
 *   - children
 *   - namespace
 *   - original s-expression
 * 
 *   Attributes and children are completely untouched. Headers can be used to
 *   quickly determine tag name and key, or sent to `get-attrs` and
 *   `get-children` for usable information about those things.
 * 
 *   Returns a tuple (instead of a map) for speed.
 * 
 *   - `sexp` is the hiccup to parse
 * 
 *   - `ns` is the namespace of the elements, used for SVG elements. The SVG
 *   element has an explicit namespace, which needs to be set on all of its
 *   children, so they can all be created with createElementNS etc.
 */
replicant.core.get_hiccup_headers = (function replicant$core$get_hiccup_headers(ns,sexp){
if(cljs.core.truth_(sexp)){
if(replicant.hiccup.hiccup_QMARK_.call(null,sexp)){
var sym = cljs.core.first.call(null,sexp);
var args = cljs.core.rest.call(null,sexp);
var has_args_QMARK_ = cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args));
var attrs = ((has_args_QMARK_)?cljs.core.first.call(null,args):cljs.core.PersistentArrayMap.EMPTY);
var pt__9343__auto__ = replicant.core.parse_tag.call(null,sym);
var G__9754 = pt__9343__auto__;
G__9754.push((function (){var temp__5804__auto__ = new cljs.core.Keyword("replicant","key","replicant/key",-670108117).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5804__auto__)){
var k__9337__auto__ = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pt__9343__auto__[(0)]),k__9337__auto__], null);
} else {
return null;
}
})());

G__9754.push(attrs);

G__9754.push(((has_args_QMARK_)?cljs.core.rest.call(null,args):args));

G__9754.push(ns);

G__9754.push(sexp);

G__9754.push(null);

G__9754.push(null);

return G__9754;
} else {
var text__9350__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexp);
return (new Array(null,null,null,null,null,null,null,text__9350__auto__,text__9350__auto__,null));
}
} else {
return null;
}
});
replicant.core.get_classes = (function replicant$core$get_classes(classes){
if((classes instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,classes)], null);
} else {
if(cljs.core.empty_QMARK_.call(null,classes)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.coll_QMARK_.call(null,classes)){
return cljs.core.keep.call(null,(function (class$){
if(cljs.core.truth_(class$)){
if((class$ instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,class$);
} else {
if(typeof class$ === 'string'){
return cljs.core.not_empty.call(null,class$.trim());
} else {
return null;
}
}
} else {
return null;
}
}),classes);
} else {
if(typeof classes === 'string'){
return cljs.core.keep.call(null,(function (p1__9755_SHARP_){
return cljs.core.not_empty.call(null,p1__9755_SHARP_.trim());
}),classes.split(" "));
} else {
throw cljs.core.ex_info.call(null,"class name is neither string, keyword, or a collection of those",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null));

}
}
}
}
});
replicant.core.skip_pixelize_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 26, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),null,new cljs.core.Keyword(null,"box-flex-group","box-flex-group",-1468550335),null,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),null,new cljs.core.Keyword(null,"column-count","column-count",1235131236),null,new cljs.core.Keyword(null,"flex-negative","flex-negative",-1543996476),null,new cljs.core.Keyword(null,"tab-size","tab-size",-1265790523),null,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),null,new cljs.core.Keyword(null,"flex-order","flex-order",-621251126),null,new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),null,new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),null,new cljs.core.Keyword(null,"flex","flex",-1425124628),null,new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),null,new cljs.core.Keyword(null,"stop-opacity","stop-opacity",-2018003729),null,new cljs.core.Keyword(null,"orphans","orphans",1913357231),null,new cljs.core.Keyword(null,"widows","widows",1989591025),null,new cljs.core.Keyword(null,"z-index","z-index",1892827090),null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null,new cljs.core.Keyword(null,"opacity","opacity",397153780),null,new cljs.core.Keyword(null,"box-ordinal-group","box-ordinal-group",201694774),null,new cljs.core.Keyword(null,"order","order",-1254677256),null,new cljs.core.Keyword(null,"animation-iteration-count","animation-iteration-count",-1410888227),null,new cljs.core.Keyword(null,"line-clamp","line-clamp",-1079334403),null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),null,new cljs.core.Keyword(null,"flex-positive","flex-positive",-239614242),null,new cljs.core.Keyword(null,"box-flex","box-flex",-831196194),null], null), null);
/**
 * Converts string values for the style attribute to a map of keyword keys and
 *   string values.
 */
replicant.core.explode_styles = (function replicant$core$explode_styles(s){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (kv){
var vec__9757 = cljs.core.map.call(null,(function (p1__9756_SHARP_){
return p1__9756_SHARP_.trim();
}),kv.split(":"));
var k = cljs.core.nth.call(null,vec__9757,(0),null);
var v = cljs.core.nth.call(null,vec__9757,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}),s.split(";")));
});
replicant.core.get_style_val = (function replicant$core$get_style_val(attr,v){
if(typeof v === 'number'){
if(cljs.core.truth_(replicant.core.skip_pixelize_attrs.call(null,attr))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"px"].join('');
}
} else {
if((v instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,v);
} else {
return v;

}
}
});
replicant.core.prep_attrs = (function replicant$core$prep_attrs(attrs,id,classes){
var classes__$1 = cljs.core.concat.call(null,replicant.core.get_classes.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs)),classes);
var G__9760 = cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499),new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009));
var G__9760__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,G__9760,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__9760);
var G__9760__$2 = ((cljs.core.seq.call(null,classes__$1))?cljs.core.assoc.call(null,G__9760__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),classes__$1):G__9760__$1);
if(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs) === 'string'){
return cljs.core.update.call(null,G__9760__$2,new cljs.core.Keyword(null,"style","style",-496642736),replicant.core.explode_styles);
} else {
return G__9760__$2;
}
});
/**
 * Given `headers` as produced by `get-hiccup-headers`, returns a map of all HTML
 *   attributes.
 */
replicant.core.get_attrs = (function replicant$core$get_attrs(headers){
replicant.asserts.assert_no_class_name.call(null,headers);

replicant.asserts.assert_no_space_separated_class.call(null,headers);

replicant.asserts.assert_no_string_style.call(null,headers);

return replicant.core.prep_attrs.call(null,(headers[(4)]),(headers[(1)]),(headers[(2)]));
});
replicant.core.merge_attrs = (function replicant$core$merge_attrs(attrs,overrides){
var G__9761 = cljs.core.merge.call(null,attrs,cljs.core.dissoc.call(null,overrides,new cljs.core.Keyword(null,"style","style",-496642736)));
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides);
}
})())){
return cljs.core.update.call(null,G__9761,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides));
} else {
return G__9761;
}
});
replicant.core.get_mounting_attrs = (function replicant$core$get_mounting_attrs(headers){
var temp__5802__auto__ = new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(temp__5802__auto__)){
var mounting = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.core.get_attrs.call(null,headers),(function (){var headers__$1 = (function (){var G__9762 = headers;
if(cljs.core.truth_(mounting)){
var headers__9357__auto__ = G__9762;
(headers__9357__auto__[(4)] = replicant.core.merge_attrs.call(null,(headers__9357__auto__[(4)]),mounting));

return headers__9357__auto__;
} else {
return G__9762;
}
})();
return replicant.core.prep_attrs.call(null,(headers__$1[(4)]),(headers__$1[(1)]),(headers__$1[(2)]));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.core.get_attrs.call(null,headers)], null);
}
});
replicant.core.get_unmounting_attrs = (function replicant$core$get_unmounting_attrs(vdom){
if(cljs.core.truth_((vdom[(6)]))){
return replicant.core.prep_attrs.call(null,replicant.core.merge_attrs.call(null,(vdom[(3)]),new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,(vdom[(7)]),(1)))),null,(vdom[(2)]));
} else {
return null;
}
});
replicant.core.flatten_seqs_STAR_ = (function replicant$core$flatten_seqs_STAR_(xs,coll){
return cljs.core.reduce.call(null,(function (_,x){
if(cljs.core.seq_QMARK_.call(null,x)){
return replicant.core.flatten_seqs_STAR_.call(null,x,coll);
} else {
return cljs.core.conj_BANG_.call(null,coll,x);

}
}),null,xs);
});
replicant.core.flatten_seqs = (function replicant$core$flatten_seqs(xs){
var coll = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
replicant.core.flatten_seqs_STAR_.call(null,xs,coll);

return cljs.core.persistent_BANG_.call(null,coll);
});
/**
 * Given an optional tag namespace `ns` (e.g. for SVG nodes) and `headers`, as
 *   produced by `get-hiccup-headers`, returns a flat collection of children as
 *   "hiccup headers". Children will carry the `ns`, if any.
 */
replicant.core.get_children = (function replicant$core$get_children(headers,ns){
if(cljs.core.truth_(new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1((headers[(4)])))){
return null;
} else {
return cljs.core.mapv.call(null,(function (p1__9763_SHARP_){
var G__9764 = p1__9763_SHARP_;
if((G__9764 == null)){
return null;
} else {
return replicant.core.get_hiccup_headers.call(null,ns,G__9764);
}
}),replicant.core.flatten_seqs.call(null,(headers[(5)])));
}
});
/**
 * Like `get-children` but returns a tuple of `[children ks]` where `ks` is a set
 *   of the keys in `children`.
 */
replicant.core.get_children_ks = (function replicant$core$get_children_ks(headers,ns){
var vec__9765 = cljs.core.reduce.call(null,(function (p__9768,hiccup){
var vec__9769 = p__9768;
var children = cljs.core.nth.call(null,vec__9769,(0),null);
var ks = cljs.core.nth.call(null,vec__9769,(1),null);
if(cljs.core.truth_(hiccup)){
var headers__$1 = replicant.core.get_hiccup_headers.call(null,ns,hiccup);
var k = (headers__$1[(3)]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,children,headers__$1),(function (){var G__9772 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.call(null,G__9772,k);
} else {
return G__9772;
}
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,children,null),ks], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY)], null),replicant.core.flatten_seqs.call(null,(headers[(5)])));
var children = cljs.core.nth.call(null,vec__9765,(0),null);
var ks = cljs.core.nth.call(null,vec__9765,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,children),cljs.core.persistent_BANG_.call(null,ks)], null);
});
replicant.core._STAR_dispatch_STAR_ = null;
/**
 * Returns the function to use for handling DOM events. Uses `handler` directly
 *   when it's a function or a string (assumed to be inline JavaScript, not really
 *   recommended), or a wrapper that dispatches through
 *   `replicant.core/*dispatch*`, if it is bound to a function. 
 */
replicant.core.get_event_handler = (function replicant$core$get_event_handler(handler,event){
var or__5045__auto__ = ((((cljs.core.fn_QMARK_.call(null,handler)) || (((cljs.core.var_QMARK_.call(null,handler)) && (cljs.core.fn_QMARK_.call(null,cljs.core.deref.call(null,handler)))))))?handler:null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = ((cljs.core.ifn_QMARK_.call(null,replicant.core._STAR_dispatch_STAR_))?(function (e){
var node = e.target;
var rd = (function (){var G__9773 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","dom-event","replicant.trigger/dom-event",930136738),new cljs.core.Keyword("replicant","js-event","replicant/js-event",1927942146),e,new cljs.core.Keyword("replicant","dom-event","replicant/dom-event",-1613182512),e], null);
if(cljs.core.truth_(node)){
return cljs.core.assoc.call(null,G__9773,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node);
} else {
return G__9773;
}
})();
return replicant.core._STAR_dispatch_STAR_.call(null,rd,handler);
}):null);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = ((typeof handler === 'string')?handler:null);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
throw cljs.core.ex_info.call(null,"Cannot use non-function event handler when replicant.core/*dispatch* is not bound to a function",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),replicant.core._STAR_dispatch_STAR_], null));
}
}
}
});
/**
 * Returns the function to use to dispatch life-cycle hooks on an element. Uses
 *   `handler` directly when it's a function, or a wrapper that dispatches through
 *   `replicant.core/*dispatch*`, if it is bound to a function.
 */
replicant.core.get_life_cycle_hook = (function replicant$core$get_life_cycle_hook(handler){
var or__5045__auto__ = ((cljs.core.fn_QMARK_.call(null,handler))?handler:null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (cljs.core.truth_((function (){var and__5043__auto__ = handler;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.ifn_QMARK_.call(null,replicant.core._STAR_dispatch_STAR_);
} else {
return and__5043__auto__;
}
})())?(function (e){
return replicant.core._STAR_dispatch_STAR_.call(null,e,handler);
}):null);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
if(cljs.core.truth_(handler)){
throw cljs.core.ex_info.call(null,"Cannot use non-function life-cycle hook when replicant.core/*dispatch* is not bound to a function",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),replicant.core._STAR_dispatch_STAR_], null));
} else {
return null;
}
}
}
});
replicant.core.call_hook = (function replicant$core$call_hook(p__9774){
var vec__9775 = p__9774;
var hook = cljs.core.nth.call(null,vec__9775,(0),null);
var k = cljs.core.nth.call(null,vec__9775,(1),null);
var node = cljs.core.nth.call(null,vec__9775,(2),null);
var new$ = cljs.core.nth.call(null,vec__9775,(3),null);
var old = cljs.core.nth.call(null,vec__9775,(4),null);
var details = cljs.core.nth.call(null,vec__9775,(5),null);
var f = replicant.core.get_life_cycle_hook.call(null,hook);
var life_cycle = (((old == null))?new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865):(((new$ == null))?new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184):new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235)
));
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),k)) || (((((cljs.core._EQ_.call(null,k,new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162))) && (cljs.core._EQ_.call(null,life_cycle,new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865))))) || (((((cljs.core._EQ_.call(null,k,new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753))) && (cljs.core._EQ_.call(null,life_cycle,new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184))))) || (((cljs.core._EQ_.call(null,k,new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394))) && (cljs.core._EQ_.call(null,life_cycle,new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235))))))))))){
return f.call(null,(function (){var G__9778 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","life-cycle","replicant.trigger/life-cycle",-205660972),new cljs.core.Keyword("replicant","life-cycle","replicant/life-cycle",1802888458),life_cycle,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node], null);
if(cljs.core.truth_(details)){
return cljs.core.assoc.call(null,G__9778,new cljs.core.Keyword("replicant","details","replicant/details",-1846218867),details);
} else {
return G__9778;
}
})());
} else {
return null;
}
});
/**
 * Register the life-cycle hooks from the corresponding virtual DOM node to call
 *   in `impl`, if any. `details` is a vector of keywords that provide some detail
 *   about why the hook is invoked.
 */
replicant.core.register_hooks = (function replicant$core$register_hooks(var_args){
var args__5775__auto__ = [];
var len__5769__auto___9795 = arguments.length;
var i__5770__auto___9796 = (0);
while(true){
if((i__5770__auto___9796 < len__5769__auto___9795)){
args__5775__auto__.push((arguments[i__5770__auto___9796]));

var G__9797 = (i__5770__auto___9796 + (1));
i__5770__auto___9796 = G__9797;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (p__9783,node,headers,p__9784){
var map__9785 = p__9783;
var map__9785__$1 = cljs.core.__destructure_map.call(null,map__9785);
var hooks = cljs.core.get.call(null,map__9785__$1,new cljs.core.Keyword(null,"hooks","hooks",-413590103));
var vec__9786 = p__9784;
var vdom = cljs.core.nth.call(null,vec__9786,(0),null);
var details = cljs.core.nth.call(null,vec__9786,(1),null);
var target = (cljs.core.truth_(headers)?(headers[(4)]):(vdom[(3)]));
var new_hooks = cljs.core.keep.call(null,(function (life_cycle_key){
var temp__5804__auto__ = life_cycle_key.call(null,target);
if(cljs.core.truth_(temp__5804__auto__)){
var hook = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [life_cycle_key,hook], null);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162),new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753),new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394)], null));
if(cljs.core.empty_QMARK_.call(null,new_hooks)){
return null;
} else {
var headers_sexp = (function (){var G__9789 = headers;
if((G__9789 == null)){
return null;
} else {
return (G__9789[(7)]);
}
})();
var vdom_sexp = (function (){var G__9790 = vdom;
if((G__9790 == null)){
return null;
} else {
return (G__9790[(7)]);
}
})();
return cljs.core._vreset_BANG_.call(null,hooks,cljs.core.into.call(null,cljs.core._deref.call(null,hooks),cljs.core.map.call(null,(function (p__9791){
var vec__9792 = p__9791;
var k = cljs.core.nth.call(null,vec__9792,(0),null);
var hook = cljs.core.nth.call(null,vec__9792,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook,k,node,headers_sexp,vdom_sexp,details], null);
}),new_hooks)));
}
}));

(replicant.core.register_hooks.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.register_hooks.cljs$lang$applyTo = (function (seq9779){
var G__9780 = cljs.core.first.call(null,seq9779);
var seq9779__$1 = cljs.core.next.call(null,seq9779);
var G__9781 = cljs.core.first.call(null,seq9779__$1);
var seq9779__$2 = cljs.core.next.call(null,seq9779__$1);
var G__9782 = cljs.core.first.call(null,seq9779__$2);
var seq9779__$3 = cljs.core.next.call(null,seq9779__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9780,G__9781,G__9782,seq9779__$3);
}));

replicant.core.register_mount = (function replicant$core$register_mount(p__9798,node,mounting_attrs,attrs){
var map__9799 = p__9798;
var map__9799__$1 = cljs.core.__destructure_map.call(null,map__9799);
var mounts = cljs.core.get.call(null,map__9799__$1,new cljs.core.Keyword(null,"mounts","mounts",-791474425));
return cljs.core._vreset_BANG_.call(null,mounts,cljs.core.conj.call(null,cljs.core._deref.call(null,mounts),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,mounting_attrs,attrs], null)));
});
replicant.core.update_styles = (function replicant$core$update_styles(renderer,el,new_styles,old_styles){
var new_ks = cljs.core.set.call(null,cljs.core.remove.call(null,(function (p1__9800_SHARP_){
return (cljs.core.get.call(null,new_styles,p1__9800_SHARP_) == null);
}),cljs.core.keys.call(null,new_styles)));
var old_ks = cljs.core.set.call(null,cljs.core.keys.call(null,old_styles));
cljs.core.run_BANG_.call(null,(function (p1__9801_SHARP_){
return replicant.protocols.remove_style.call(null,renderer,el,p1__9801_SHARP_);
}),cljs.core.remove.call(null,new_ks,old_ks));

return cljs.core.run_BANG_.call(null,(function (p1__9802_SHARP_){
var new_style = cljs.core.get.call(null,new_styles,p1__9802_SHARP_);
if(cljs.core.not_EQ_.call(null,new_style,cljs.core.get.call(null,old_styles,p1__9802_SHARP_))){
replicant.asserts.assert_style_key_type.call(null,p1__9802_SHARP_);

replicant.asserts.assert_style_key_casing.call(null,p1__9802_SHARP_);

return replicant.protocols.set_style.call(null,renderer,el,p1__9802_SHARP_,replicant.core.get_style_val.call(null,p1__9802_SHARP_,new_style));
} else {
return null;
}
}),new_ks);
});
replicant.core.update_classes = (function replicant$core$update_classes(renderer,el,new_classes,old_classes){
cljs.core.run_BANG_.call(null,(function (p1__9803_SHARP_){
return replicant.protocols.remove_class.call(null,renderer,el,p1__9803_SHARP_);
}),cljs.core.remove.call(null,cljs.core.set.call(null,new_classes),old_classes));

return cljs.core.run_BANG_.call(null,(function (p1__9804_SHARP_){
return replicant.protocols.add_class.call(null,renderer,el,p1__9804_SHARP_);
}),cljs.core.remove.call(null,cljs.core.set.call(null,old_classes),new_classes));
});
replicant.core.add_event_listeners = (function replicant$core$add_event_listeners(renderer,el,val){
return cljs.core.run_BANG_.call(null,(function (p__9805){
var vec__9806 = p__9805;
var event = cljs.core.nth.call(null,vec__9806,(0),null);
var handler = cljs.core.nth.call(null,vec__9806,(1),null);
replicant.asserts.assert_event_handler_casing.call(null,event);

var temp__5804__auto__ = replicant.core.get_event_handler.call(null,handler,event);
if(cljs.core.truth_(temp__5804__auto__)){
var handler__$1 = temp__5804__auto__;
return replicant.protocols.set_event_handler.call(null,renderer,el,event,handler__$1);
} else {
return null;
}
}),cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.second),val));
});
replicant.core.update_event_listeners = (function replicant$core$update_event_listeners(renderer,el,new_handlers,old_handlers){
cljs.core.run_BANG_.call(null,(function (p1__9809_SHARP_){
return replicant.protocols.remove_event_handler.call(null,renderer,el,p1__9809_SHARP_);
}),cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.filter.call(null,new_handlers,cljs.core.keys.call(null,new_handlers))),cljs.core.filter.call(null,old_handlers,cljs.core.keys.call(null,old_handlers))));

return replicant.core.add_event_listeners.call(null,renderer,el,cljs.core.remove.call(null,(function (p1__9810_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.val.call(null,p1__9810_SHARP_),cljs.core.get.call(null,old_handlers,cljs.core.key.call(null,p1__9810_SHARP_)));
}),new_handlers));
});
replicant.core.xlinkns = "http://www.w3.org/1999/xlink";
replicant.core.xmlns = "http://www.w3.org/XML/1998/namespace";
replicant.core.stringify = (function replicant$core$stringify(x){
return [(function (){var temp__5804__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [ns,"/"].join('');
} else {
return null;
}
})(),cljs.core.name.call(null,x)].join('');
});
replicant.core.set_attr_val = (function replicant$core$set_attr_val(renderer,el,attr,v){
var an = cljs.core.name.call(null,attr);
replicant.asserts.assert_no_event_attribute.call(null,attr);

replicant.asserts.assert_valid_attribute_name.call(null,attr,v);

return replicant.protocols.set_attribute.call(null,renderer,el,an,(function (){var G__9811 = v;
if((((v instanceof cljs.core.Keyword)) || ((v instanceof cljs.core.Symbol)))){
return replicant.core.stringify.call(null,G__9811);
} else {
return G__9811;
}
})(),(function (){var G__9812 = cljs.core.PersistentArrayMap.EMPTY;
var G__9812__$1 = ((cljs.core._EQ_.call(null,(0),an.indexOf("xml:")))?cljs.core.assoc.call(null,G__9812,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xmlns):G__9812);
if(cljs.core._EQ_.call(null,(0),an.indexOf("xlink:"))){
return cljs.core.assoc.call(null,G__9812__$1,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xlinkns);
} else {
return G__9812__$1;
}
})());
});
replicant.core.update_attr = (function replicant$core$update_attr(renderer,el,attr,new$,old){
if(cljs.core.truth_(cljs.core.namespace.call(null,attr))){
return null;
} else {
var G__9813 = attr;
var G__9813__$1 = (((G__9813 instanceof cljs.core.Keyword))?G__9813.fqn:null);
switch (G__9813__$1) {
case "style":
return replicant.core.update_styles.call(null,renderer,el,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(new$),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(old));

break;
case "classes":
return replicant.core.update_classes.call(null,renderer,el,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(new$),new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(old));

break;
case "on":
return replicant.core.update_event_listeners.call(null,renderer,el,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(new$),new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(old));

break;
default:
var temp__5802__auto__ = attr.call(null,new$);
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
if(cljs.core.not_EQ_.call(null,v,attr.call(null,old))){
return replicant.core.set_attr_val.call(null,renderer,el,attr,v);
} else {
return null;
}
} else {
return replicant.protocols.remove_attribute.call(null,renderer,el,cljs.core.name.call(null,attr));
}

}
}
});
replicant.core.update_attributes = (function replicant$core$update_attributes(renderer,el,new_attrs,old_attrs){
return cljs.core.reduce.call(null,(function (p1__9816_SHARP_,p2__9815_SHARP_){
return replicant.core.update_attr.call(null,renderer,el,p2__9815_SHARP_,new_attrs,old_attrs);
}),null,cljs.core.into.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_attrs)),cljs.core.keys.call(null,old_attrs)));
});
replicant.core.reconcile_attributes = (function replicant$core$reconcile_attributes(renderer,el,new_attrs,old_attrs){
if(cljs.core._EQ_.call(null,new_attrs,old_attrs)){
return false;
} else {
replicant.core.update_attributes.call(null,renderer,el,new_attrs,old_attrs);

return true;
}
});
replicant.core.set_styles = (function replicant$core$set_styles(renderer,el,new_styles){
return cljs.core.run_BANG_.call(null,(function (p1__9817_SHARP_){
replicant.asserts.assert_style_key_type.call(null,p1__9817_SHARP_);

replicant.asserts.assert_style_key_casing.call(null,p1__9817_SHARP_);

return replicant.protocols.set_style.call(null,renderer,el,p1__9817_SHARP_,replicant.core.get_style_val.call(null,p1__9817_SHARP_,cljs.core.get.call(null,new_styles,p1__9817_SHARP_)));
}),cljs.core.filter.call(null,new_styles,cljs.core.keys.call(null,new_styles)));
});
replicant.core.set_classes = (function replicant$core$set_classes(renderer,el,new_classes){
return cljs.core.run_BANG_.call(null,(function (p1__9818_SHARP_){
return replicant.protocols.add_class.call(null,renderer,el,p1__9818_SHARP_);
}),new_classes);
});
replicant.core.set_event_listeners = (function replicant$core$set_event_listeners(renderer,el,new_handlers){
return replicant.core.add_event_listeners.call(null,renderer,el,new_handlers);
});
replicant.core.set_attr = (function replicant$core$set_attr(renderer,el,attr,new$){
if(cljs.core.truth_(cljs.core.namespace.call(null,attr))){
return null;
} else {
var G__9819 = attr;
var G__9819__$1 = (((G__9819 instanceof cljs.core.Keyword))?G__9819.fqn:null);
switch (G__9819__$1) {
case "style":
return replicant.core.set_styles.call(null,renderer,el,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(new$));

break;
case "classes":
return replicant.core.set_classes.call(null,renderer,el,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(new$));

break;
case "on":
return replicant.core.set_event_listeners.call(null,renderer,el,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(new$));

break;
default:
return replicant.core.set_attr_val.call(null,renderer,el,attr,attr.call(null,new$));

}
}
});
replicant.core.set_attributes = (function replicant$core$set_attributes(renderer,el,new_attrs){
return cljs.core.run_BANG_.call(null,(function (p1__9821_SHARP_){
return replicant.core.set_attr.call(null,renderer,el,p1__9821_SHARP_,new_attrs);
}),cljs.core.filter.call(null,new_attrs,cljs.core.keys.call(null,new_attrs)));
});
replicant.core.render_default_alias = (function replicant$core$render_default_alias(tag_name,_attrs,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-replicant-error","data-replicant-error",1583668098),["Undefined alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name)].join('')], null),(function (){var iter__5523__auto__ = (function replicant$core$render_default_alias_$_iter__9822(s__9823){
return (new cljs.core.LazySeq(null,(function (){
var s__9823__$1 = s__9823;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__9823__$1);
if(temp__5804__auto__){
var s__9823__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9823__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__9823__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__9825 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__9824 = (0);
while(true){
if((i__9824 < size__5522__auto__)){
var child = cljs.core._nth.call(null,c__5521__auto__,i__9824);
cljs.core.chunk_append.call(null,b__9825,(function (){var G__9826 = child;
if((((!(typeof child === 'string'))) && ((!(replicant.hiccup.hiccup_QMARK_.call(null,child)))))){
return cljs.core.pr_str.call(null,G__9826);
} else {
return G__9826;
}
})());

var G__9828 = (i__9824 + (1));
i__9824 = G__9828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9825),replicant$core$render_default_alias_$_iter__9822.call(null,cljs.core.chunk_rest.call(null,s__9823__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9825),null);
}
} else {
var child = cljs.core.first.call(null,s__9823__$2);
return cljs.core.cons.call(null,(function (){var G__9827 = child;
if((((!(typeof child === 'string'))) && ((!(replicant.hiccup.hiccup_QMARK_.call(null,child)))))){
return cljs.core.pr_str.call(null,G__9827);
} else {
return G__9827;
}
})(),replicant$core$render_default_alias_$_iter__9822.call(null,cljs.core.rest.call(null,s__9823__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,children);
})()], null);
});
replicant.core.add_classes = (function replicant$core$add_classes(class_attr,classes){
if(cljs.core.coll_QMARK_.call(null,class_attr)){
return cljs.core.set.call(null,cljs.core.concat.call(null,class_attr,classes));
} else {
if((class_attr == null)){
return cljs.core.set.call(null,classes);
} else {
return cljs.core.conj.call(null,cljs.core.set.call(null,classes),class_attr);

}
}
});
replicant.core.get_alias_headers = (function replicant$core$get_alias_headers(p__9830,headers){
var map__9831 = p__9830;
var map__9831__$1 = cljs.core.__destructure_map.call(null,map__9831);
var aliases = cljs.core.get.call(null,map__9831__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var alias_data = cljs.core.get.call(null,map__9831__$1,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930));
var tag_name = (headers[(0)]);
if((tag_name instanceof cljs.core.Keyword)){
var f = (function (){var or__5045__auto__ = cljs.core.get.call(null,aliases,tag_name);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.partial.call(null,replicant.core.render_default_alias,tag_name);
}
})();
var id = (headers[(1)]);
var classes = (headers[(2)]);
replicant.asserts.assert_alias_exists.call(null,tag_name,cljs.core.get.call(null,aliases,tag_name),cljs.core.keys.call(null,aliases));

try{var attrs = (headers[(4)]);
var alias_hiccup = f.call(null,(function (){var G__9833 = attrs;
var G__9833__$1 = (cljs.core.truth_(id)?cljs.core.update.call(null,G__9833,new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__9829_SHARP_){
var or__5045__auto__ = p1__9829_SHARP_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return id;
}
})):G__9833);
var G__9833__$2 = (cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.seq.call(null,classes);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs);
}
})())?cljs.core.update.call(null,G__9833__$1,new cljs.core.Keyword(null,"class","class",-2030961996),replicant.core.add_classes,classes):G__9833__$1);
if(cljs.core.truth_(alias_data)){
return cljs.core.assoc.call(null,G__9833__$2,new cljs.core.Keyword("replicant","alias-data","replicant/alias-data",1929752572),alias_data);
} else {
return G__9833__$2;
}
})(),cljs.core.seq.call(null,replicant.core.flatten_seqs.call(null,(headers[(5)]))));
replicant.asserts.assert_valid_alias_result.call(null,tag_name,alias_hiccup);

var hh__9363__auto__ = replicant.core.get_hiccup_headers.call(null,null,alias_hiccup);
var alias__9364__auto__ = headers;
if(cljs.core.truth_(hh__9363__auto__)){
var G__9834 = hh__9363__auto__;
(G__9834[(3)] = (function (){var or__5045__auto__ = (alias__9364__auto__[(3)]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (hh__9363__auto__[(3)]);
}
})());

(G__9834[(7)] = (hh__9363__auto__[(7)]));

(G__9834[(9)] = (alias__9364__auto__[(7)]));

return G__9834;
} else {
return null;
}
}catch (e9832){var e = e9832;
return replicant.core.get_hiccup_headers.call(null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-replicant-error","data-replicant-error",1583668098),"Alias threw exception",new cljs.core.Keyword(null,"data-replicant-exception","data-replicant-exception",-506817638),e.message,new cljs.core.Keyword(null,"data-replicant-sexp","data-replicant-sexp",1848901448),cljs.core.pr_str.call(null,(headers[(7)]))], null)], null));
}} else {
return null;
}
});
/**
 * Create DOM node according to virtual DOM in `headers`. Register relevant
 *   life-cycle hooks from the new node or its descendants in `impl`. Returns a
 *   tuple of the newly created node and the fully realized vdom.
 */
replicant.core.create_node = (function replicant$core$create_node(p__9835,headers){
var map__9836 = p__9835;
var map__9836__$1 = cljs.core.__destructure_map.call(null,map__9836);
var impl = map__9836__$1;
var renderer = cljs.core.get.call(null,map__9836__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
if(cljs.core.truth_(headers)){
var temp__5804__auto___9855 = (function (){var or__5045__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,(headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5804__auto___9855)){
var ctx__9528__auto___9856 = temp__5804__auto___9855;
cljs.core.reset_BANG_.call(null,replicant.assert.current_context,ctx__9528__auto___9856);
} else {
}

cljs.core.reset_BANG_.call(null,replicant.assert.current_node,(headers[(7)]));
} else {
}

var or__5045__auto__ = (function (){var temp__5804__auto__ = (headers[(8)]);
if(cljs.core.truth_(temp__5804__auto__)){
var text = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.protocols.create_text_node.call(null,renderer,text),(function (){var text__9691__auto__ = text;
return (new Array(null,null,null,null,null,null,false,text__9691__auto__,text__9691__auto__,null,null));
})()], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var temp__5804__auto__ = replicant.core.get_alias_headers.call(null,impl,headers);
if(cljs.core.truth_(temp__5804__auto__)){
var alias_headers = temp__5804__auto__;
var vec__9837 = replicant.core.create_node.call(null,impl,alias_headers);
var child_node = cljs.core.nth.call(null,vec__9837,(0),null);
var vdom = cljs.core.nth.call(null,vec__9837,(1),null);
var k = (alias_headers[(3)]);
var vdom__$1 = (function (){var headers__9698__auto__ = headers;
return (new Array((headers__9698__auto__[(0)]),(headers__9698__auto__[(3)]),(headers__9698__auto__[(2)]),(headers[(4)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vdom], null),(function (){var G__9840 = cljs.core.PersistentHashSet.EMPTY;
if(cljs.core.truth_(k)){
return cljs.core.conj.call(null,G__9840,k);
} else {
return G__9840;
}
})(),cljs.core.boolean$.call(null,new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__9698__auto__[(4)]))),(headers__9698__auto__[(7)]),null,null,(1)));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [child_node,vdom__$1], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var tag_name = (headers[(0)]);
var ns = (function (){var or__5045__auto____$2 = (headers[(6)]);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
if(cljs.core._EQ_.call(null,"svg",tag_name)){
return "http://www.w3.org/2000/svg";
} else {
return null;
}
}
})();
var node = replicant.protocols.create_element.call(null,renderer,tag_name,(cljs.core.truth_(ns)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),ns], null):null));
var vec__9841 = replicant.core.get_mounting_attrs.call(null,headers);
var attrs = cljs.core.nth.call(null,vec__9841,(0),null);
var mounting_attrs = cljs.core.nth.call(null,vec__9841,(1),null);
var _ = replicant.core.set_attributes.call(null,renderer,node,(function (){var or__5045__auto____$2 = mounting_attrs;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return attrs;
}
})());
var vec__9844 = cljs.core.reduce.call(null,(function (p__9847,child_headers){
var vec__9848 = p__9847;
var children = cljs.core.nth.call(null,vec__9848,(0),null);
var ks = cljs.core.nth.call(null,vec__9848,(1),null);
var n = cljs.core.nth.call(null,vec__9848,(2),null);
if(cljs.core.truth_(child_headers)){
var vec__9851 = replicant.core.create_node.call(null,impl,child_headers);
var child_node = cljs.core.nth.call(null,vec__9851,(0),null);
var vdom = cljs.core.nth.call(null,vec__9851,(1),null);
var k = (vdom[(1)]);
replicant.protocols.append_child.call(null,renderer,node,child_node);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,children,vdom),(function (){var G__9854 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.call(null,G__9854,k);
} else {
return G__9854;
}
})(),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,children,null),ks,n], null);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY),(0)], null),replicant.core.get_children.call(null,headers,ns));
var children = cljs.core.nth.call(null,vec__9844,(0),null);
var ks = cljs.core.nth.call(null,vec__9844,(1),null);
var n_children = cljs.core.nth.call(null,vec__9844,(2),null);
replicant.core.register_hooks.call(null,impl,node,headers);

if(cljs.core.truth_(mounting_attrs)){
replicant.core.register_mount.call(null,impl,node,mounting_attrs,attrs);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,(function (){var headers__9698__auto__ = headers;
return (new Array((headers__9698__auto__[(0)]),(headers__9698__auto__[(3)]),(headers__9698__auto__[(2)]),attrs,cljs.core.persistent_BANG_.call(null,children),cljs.core.persistent_BANG_.call(null,ks),cljs.core.boolean$.call(null,new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__9698__auto__[(4)]))),(headers__9698__auto__[(7)]),null,null,n_children));
})()], null);
}
}
});
/**
 * Two elements are considered similar enough for reuse if they are both hiccup
 *   elements with the same tag name and the same key (or both have no key) - or
 *   they are both strings.
 * 
 *   Similarity in this case indicates that the node can be used for reconciliation
 *   instead of creating a new node from scratch.
 */
replicant.core.reusable_QMARK_ = (function replicant$core$reusable_QMARK_(headers,vdom){
var or__5045__auto__ = (function (){var and__5043__auto__ = (headers[(8)]);
if(cljs.core.truth_(and__5043__auto__)){
return (vdom[(8)]);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ((cljs.core._EQ_.call(null,(headers[(3)]),(vdom[(1)]))) && (cljs.core._EQ_.call(null,(headers[(0)]),(vdom[(0)]))));
}
});
replicant.core.same_QMARK_ = (function replicant$core$same_QMARK_(headers,vdom){
return ((cljs.core._EQ_.call(null,(headers[(3)]),(vdom[(1)]))) && (cljs.core._EQ_.call(null,(headers[(0)]),(vdom[(0)]))));
});
replicant.core.index_of = (function replicant$core$index_of(f,xs){
var coll_n = (0);
var dom_n = (0);
var xs__$1 = cljs.core.seq.call(null,xs);
while(true){
if((xs__$1 == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null);
} else {
if((cljs.core.first.call(null,xs__$1) == null)){
var G__9857 = (coll_n + (1));
var G__9858 = dom_n;
var G__9859 = cljs.core.next.call(null,xs__$1);
coll_n = G__9857;
dom_n = G__9858;
xs__$1 = G__9859;
continue;
} else {
if(cljs.core.truth_(f.call(null,cljs.core.first.call(null,xs__$1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll_n,dom_n], null);
} else {
var G__9860 = (coll_n + (1));
var G__9861 = (dom_n + (1));
var G__9862 = cljs.core.next.call(null,xs__$1);
coll_n = G__9860;
dom_n = G__9861;
xs__$1 = G__9862;
continue;

}
}
}
break;
}
});
replicant.core.get_ns = (function replicant$core$get_ns(headers){
var or__5045__auto__ = (headers[(6)]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core._EQ_.call(null,"svg",(headers[(0)]))){
return "http://www.w3.org/2000/svg";
} else {
return null;
}
}
});
replicant.core.insert_children = (function replicant$core$insert_children(p__9863,el,children,vdom){
var map__9864 = p__9863;
var map__9864__$1 = cljs.core.__destructure_map.call(null,map__9864);
var impl = map__9864__$1;
var renderer = cljs.core.get.call(null,map__9864__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
return cljs.core.reduce.call(null,(function (p__9865,child){
var vec__9866 = p__9865;
var res = cljs.core.nth.call(null,vec__9866,(0),null);
var n = cljs.core.nth.call(null,vec__9866,(1),null);
if(cljs.core.truth_(child)){
var vec__9869 = replicant.core.create_node.call(null,impl,child);
var node = cljs.core.nth.call(null,vec__9869,(0),null);
var vdom__$1 = cljs.core.nth.call(null,vec__9869,(1),null);
replicant.protocols.append_child.call(null,renderer,el,node);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,res,vdom__$1),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,res,null),n], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vdom,(0)], null),children);
});
replicant.core.remove_child = (function replicant$core$remove_child(p__9872,unmounts,el,n,vdom){
var map__9873 = p__9872;
var map__9873__$1 = cljs.core.__destructure_map.call(null,map__9873);
var impl = map__9873__$1;
var renderer = cljs.core.get.call(null,map__9873__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var temp__5802__auto__ = (vdom[(9)]);
if(cljs.core.truth_(temp__5802__auto__)){
var id = temp__5802__auto__;
if(cljs.core.truth_(unmounts.call(null,id))){
return vdom;
} else {
return null;
}
} else {
var res = (function (){var temp__5802__auto____$1 = replicant.core.get_unmounting_attrs.call(null,vdom);
if(cljs.core.truth_(temp__5802__auto____$1)){
var attrs = temp__5802__auto____$1;
var vdom__$1 = (function (){var vdom__9685__auto__ = vdom;
(vdom__9685__auto__[(9)] = cljs.core._vreset_BANG_.call(null,replicant.vdom.id,(cljs.core._deref.call(null,replicant.vdom.id) + (1))));

return vdom__9685__auto__;
})();
var child = replicant.protocols.get_child.call(null,renderer,el,n);
replicant.core.update_attributes.call(null,renderer,child,attrs,(vdom__$1[(3)]));

cljs.core._vreset_BANG_.call(null,new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.conj.call(null,cljs.core._deref.call(null,new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.on_transition_end.call(null,renderer,child,(function (){
cljs.core._vreset_BANG_.call(null,new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.disj.call(null,cljs.core._deref.call(null,new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.remove_child.call(null,renderer,el,child);

var temp__5804__auto___9874 = new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((vdom__$1[(3)]));
if(cljs.core.truth_(temp__5804__auto___9874)){
var hook_9875 = temp__5804__auto___9874;
replicant.core.call_hook.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook_9875,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),child,null,vdom__$1], null));
} else {
}

return renderer;
}));

return vdom__$1;
} else {
var child = replicant.protocols.get_child.call(null,renderer,el,n);
replicant.protocols.remove_child.call(null,renderer,el,child);

replicant.core.register_hooks.call(null,impl,child,null,vdom);

return null;
}
})();
return res;
}
});
replicant.core.move_node_details = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","move-node","replicant/move-node",-1189251602)], null);
replicant.core.unchanged_QMARK_ = (function replicant$core$unchanged_QMARK_(headers,vdom){
return cljs.core._EQ_.call(null,(function (){var G__9876 = headers;
if((G__9876 == null)){
return null;
} else {
return (G__9876[(7)]);
}
})(),(function (){var G__9877 = vdom;
if((G__9877 == null)){
return null;
} else {
return (G__9877[(7)]);
}
})());
});
replicant.core.move_nodes = (function replicant$core$move_nodes(p__9880,el,headers,new_children,vdom,old_children,n,n_children){
var map__9881 = p__9880;
var map__9881__$1 = cljs.core.__destructure_map.call(null,map__9881);
var impl = map__9881__$1;
var renderer = cljs.core.get.call(null,map__9881__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var vec__9882 = (cljs.core.truth_((headers[(3)]))?replicant.core.index_of.call(null,(function (p1__9878_SHARP_){
return replicant.core.same_QMARK_.call(null,headers,p1__9878_SHARP_);
}),old_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var o_idx = cljs.core.nth.call(null,vec__9882,(0),null);
var o_dom_idx = cljs.core.nth.call(null,vec__9882,(1),null);
var vec__9885 = (cljs.core.truth_((vdom[(1)]))?replicant.core.index_of.call(null,(function (p1__9879_SHARP_){
return replicant.core.same_QMARK_.call(null,p1__9879_SHARP_,vdom);
}),new_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var n_idx = cljs.core.nth.call(null,vec__9885,(0),null);
var n_dom_idx = cljs.core.nth.call(null,vec__9885,(1),null);
if((o_idx < n_idx)){
var idx = ((n + n_dom_idx) + (1));
var child = replicant.protocols.get_child.call(null,renderer,el,n);
if((idx < n_children)){
replicant.protocols.insert_before.call(null,renderer,el,child,replicant.protocols.get_child.call(null,renderer,el,idx));
} else {
replicant.protocols.append_child.call(null,renderer,el,child);
}

replicant.core.register_hooks.call(null,impl,child,cljs.core.nth.call(null,new_children,n_idx),vdom,replicant.core.move_node_details);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children,cljs.core.concat.call(null,cljs.core.take.call(null,n_idx,cljs.core.next.call(null,old_children)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,old_children)], null),cljs.core.drop.call(null,(n_idx + (1)),old_children)),n,(idx - (1))], null);
} else {
var idx = (n + o_dom_idx);
var child = replicant.protocols.get_child.call(null,renderer,el,idx);
var corresponding_old_vdom = cljs.core.nth.call(null,old_children,o_idx);
replicant.protocols.insert_before.call(null,renderer,el,child,replicant.protocols.get_child.call(null,renderer,el,n));

replicant.core.reconcile_STAR_.call(null,impl,el,headers,corresponding_old_vdom,n);

if(replicant.core.unchanged_QMARK_.call(null,headers,corresponding_old_vdom)){
replicant.core.register_hooks.call(null,impl,child,headers,corresponding_old_vdom,replicant.core.move_node_details);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next.call(null,new_children),cljs.core.concat.call(null,cljs.core.take.call(null,o_idx,old_children),cljs.core.drop.call(null,(o_idx + (1)),old_children)),(n + (1)),((n + o_idx) + (1)),corresponding_old_vdom], null);
}
});
replicant.core.insert_node = (function replicant$core$insert_node(r,el,child,n,n_children){
if((n_children <= n)){
return replicant.protocols.append_child.call(null,r,el,child);
} else {
return replicant.protocols.insert_before.call(null,r,el,child,replicant.protocols.get_child.call(null,r,el,n));
}
});
replicant.core.update_children = (function replicant$core$update_children(impl,el,new_children,new_ks,old_children,old_ks,n_children){
var r = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl);
var unmounts = cljs.core.deref.call(null,new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl));
var new_c = cljs.core.seq.call(null,new_children);
var old_c = cljs.core.seq.call(null,old_children);
var n = (0);
var move_n = (0);
var n_children__$1 = (function (){var or__5045__auto__ = n_children;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var changed_QMARK_ = false;
var vdom = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var new_headers = cljs.core.first.call(null,new_c);
var old_vdom = cljs.core.first.call(null,old_c);
var new_empty_QMARK_ = (new_c == null);
var old_empty_QMARK_ = (old_c == null);
var new_nil_QMARK_ = (new_headers == null);
var old_nil_QMARK_ = (old_vdom == null);
if(((new_empty_QMARK_) && (old_empty_QMARK_))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [changed_QMARK_,cljs.core.persistent_BANG_.call(null,vdom),new_ks,n_children__$1], null);
} else {
if(new_empty_QMARK_){
var children = cljs.core.seq.call(null,old_c);
var vdom__$1 = vdom;
var n__$1 = n;
var n_children__$2 = n_children__$1;
while(true){
if((children == null)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.persistent_BANG_.call(null,vdom__$1),new_ks,n_children__$2], null);
} else {
if((cljs.core.first.call(null,children) == null)){
var G__9916 = cljs.core.next.call(null,children);
var G__9917 = cljs.core.conj_BANG_.call(null,vdom__$1,null);
var G__9918 = n__$1;
var G__9919 = n_children__$2;
children = G__9916;
vdom__$1 = G__9917;
n__$1 = G__9918;
n_children__$2 = G__9919;
continue;
} else {
var temp__5802__auto__ = replicant.core.remove_child.call(null,impl,unmounts,el,n__$1,cljs.core.first.call(null,children));
if(cljs.core.truth_(temp__5802__auto__)){
var pending_vdom = temp__5802__auto__;
var G__9920 = cljs.core.next.call(null,children);
var G__9921 = cljs.core.conj_BANG_.call(null,vdom__$1,pending_vdom);
var G__9922 = (n__$1 + (1));
var G__9923 = n_children__$2;
children = G__9920;
vdom__$1 = G__9921;
n__$1 = G__9922;
n_children__$2 = G__9923;
continue;
} else {
var G__9924 = cljs.core.next.call(null,children);
var G__9925 = vdom__$1;
var G__9926 = n__$1;
var G__9927 = (n_children__$2 - (1));
children = G__9924;
vdom__$1 = G__9925;
n__$1 = G__9926;
n_children__$2 = G__9927;
continue;
}

}
}
break;
}
} else {
if(old_empty_QMARK_){
var vec__9902 = replicant.core.insert_children.call(null,impl,el,new_c,vdom);
var vdom__$1 = cljs.core.nth.call(null,vec__9902,(0),null);
var n__$1 = cljs.core.nth.call(null,vec__9902,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.persistent_BANG_.call(null,vdom__$1),new_ks,(n_children__$1 + n__$1)], null);
} else {
if(((new_nil_QMARK_) && (old_nil_QMARK_))){
var G__9928 = cljs.core.next.call(null,new_c);
var G__9929 = cljs.core.next.call(null,old_c);
var G__9930 = n;
var G__9931 = move_n;
var G__9932 = n_children__$1;
var G__9933 = changed_QMARK_;
var G__9934 = cljs.core.conj_BANG_.call(null,vdom,null);
new_c = G__9928;
old_c = G__9929;
n = G__9930;
move_n = G__9931;
n_children__$1 = G__9932;
changed_QMARK_ = G__9933;
vdom = G__9934;
continue;
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = old_vdom;
if(cljs.core.truth_(and__5043__auto__)){
return (old_vdom[(9)]);
} else {
return and__5043__auto__;
}
})())){
var vec__9905 = (cljs.core.truth_((function (){var and__5043__auto__ = new_headers;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,old_ks.call(null,(new_headers[(3)])));
} else {
return and__5043__auto__;
}
})())?(function (){var res = replicant.core.create_node.call(null,impl,new_headers);
replicant.core.insert_node.call(null,r,el,cljs.core.first.call(null,res),n,n_children__$1);

return res;
})():null);
var child = cljs.core.nth.call(null,vec__9905,(0),null);
var child_vdom = cljs.core.nth.call(null,vec__9905,(1),null);
if(cljs.core.truth_(unmounts.call(null,(old_vdom[(9)])))){
if(new_nil_QMARK_){
var G__9935 = cljs.core.next.call(null,new_c);
var G__9936 = cljs.core.next.call(null,old_c);
var G__9937 = (n + (1));
var G__9938 = move_n;
var G__9939 = n_children__$1;
var G__9940 = changed_QMARK_;
var G__9941 = cljs.core.conj_BANG_.call(null,vdom,old_vdom);
new_c = G__9935;
old_c = G__9936;
n = G__9937;
move_n = G__9938;
n_children__$1 = G__9939;
changed_QMARK_ = G__9940;
vdom = G__9941;
continue;
} else {
if(cljs.core.truth_(child)){
var G__9942 = cljs.core.next.call(null,new_c);
var G__9943 = cljs.core.next.call(null,old_c);
var G__9944 = (n + (2));
var G__9945 = move_n;
var G__9946 = (n_children__$1 + (1));
var G__9947 = true;
var G__9948 = cljs.core.conj_BANG_.call(null,vdom,child_vdom);
new_c = G__9942;
old_c = G__9943;
n = G__9944;
move_n = G__9945;
n_children__$1 = G__9946;
changed_QMARK_ = G__9947;
vdom = G__9948;
continue;
} else {
var G__9949 = new_c;
var G__9950 = cljs.core.next.call(null,old_c);
var G__9951 = (n + (1));
var G__9952 = move_n;
var G__9953 = n_children__$1;
var G__9954 = changed_QMARK_;
var G__9955 = cljs.core.conj_BANG_.call(null,vdom,old_vdom);
new_c = G__9949;
old_c = G__9950;
n = G__9951;
move_n = G__9952;
n_children__$1 = G__9953;
changed_QMARK_ = G__9954;
vdom = G__9955;
continue;

}
}
} else {
if(new_nil_QMARK_){
var G__9956 = cljs.core.next.call(null,new_c);
var G__9957 = cljs.core.next.call(null,old_c);
var G__9958 = n;
var G__9959 = (move_n - (1));
var G__9960 = (n_children__$1 - (1));
var G__9961 = changed_QMARK_;
var G__9962 = cljs.core.conj_BANG_.call(null,vdom,null);
new_c = G__9956;
old_c = G__9957;
n = G__9958;
move_n = G__9959;
n_children__$1 = G__9960;
changed_QMARK_ = G__9961;
vdom = G__9962;
continue;
} else {
if(cljs.core.truth_(child)){
var G__9963 = cljs.core.next.call(null,new_c);
var G__9964 = cljs.core.next.call(null,old_c);
var G__9965 = (n + (1));
var G__9966 = move_n;
var G__9967 = n_children__$1;
var G__9968 = true;
var G__9969 = cljs.core.conj_BANG_.call(null,vdom,child_vdom);
new_c = G__9963;
old_c = G__9964;
n = G__9965;
move_n = G__9966;
n_children__$1 = G__9967;
changed_QMARK_ = G__9968;
vdom = G__9969;
continue;
} else {
var G__9970 = new_c;
var G__9971 = cljs.core.next.call(null,old_c);
var G__9972 = n;
var G__9973 = (move_n - (1));
var G__9974 = (n_children__$1 - (1));
var G__9975 = changed_QMARK_;
var G__9976 = vdom;
new_c = G__9970;
old_c = G__9971;
n = G__9972;
move_n = G__9973;
n_children__$1 = G__9974;
changed_QMARK_ = G__9975;
vdom = G__9976;
continue;

}
}
}
} else {
if(new_nil_QMARK_){
if(cljs.core.contains_QMARK_.call(null,new_ks,(old_vdom[(1)]))){
var G__9977 = cljs.core.next.call(null,new_c);
var G__9978 = old_c;
var G__9979 = n;
var G__9980 = move_n;
var G__9981 = n_children__$1;
var G__9982 = true;
var G__9983 = vdom;
new_c = G__9977;
old_c = G__9978;
n = G__9979;
move_n = G__9980;
n_children__$1 = G__9981;
changed_QMARK_ = G__9982;
vdom = G__9983;
continue;
} else {
var temp__5802__auto__ = replicant.core.remove_child.call(null,impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5802__auto__)){
var unmounting_node = temp__5802__auto__;
var G__9984 = cljs.core.next.call(null,new_c);
var G__9985 = cljs.core.next.call(null,old_c);
var G__9986 = (n + (1));
var G__9987 = move_n;
var G__9988 = n_children__$1;
var G__9989 = true;
var G__9990 = cljs.core.conj_BANG_.call(null,vdom,unmounting_node);
new_c = G__9984;
old_c = G__9985;
n = G__9986;
move_n = G__9987;
n_children__$1 = G__9988;
changed_QMARK_ = G__9989;
vdom = G__9990;
continue;
} else {
var G__9991 = cljs.core.next.call(null,new_c);
var G__9992 = cljs.core.next.call(null,old_c);
var G__9993 = n;
var G__9994 = move_n;
var G__9995 = (n_children__$1 - (1));
var G__9996 = true;
var G__9997 = cljs.core.conj_BANG_.call(null,vdom,null);
new_c = G__9991;
old_c = G__9992;
n = G__9993;
move_n = G__9994;
n_children__$1 = G__9995;
changed_QMARK_ = G__9996;
vdom = G__9997;
continue;
}
}
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = old_vdom;
if(cljs.core.truth_(and__5043__auto__)){
return replicant.core.reusable_QMARK_.call(null,new_headers,old_vdom);
} else {
return and__5043__auto__;
}
})())){
var new_vdom = replicant.core.reconcile_STAR_.call(null,impl,el,new_headers,old_vdom,n);
var node_unchanged_QMARK_ = replicant.core.unchanged_QMARK_.call(null,new_headers,old_vdom);
if(((node_unchanged_QMARK_) && ((n < move_n)))){
replicant.core.register_hooks.call(null,impl,replicant.protocols.get_child.call(null,r,el,n),new_headers,old_vdom,replicant.core.move_node_details);
} else {
}

var G__9998 = cljs.core.next.call(null,new_c);
var G__9999 = cljs.core.next.call(null,old_c);
var G__10000 = (n + (1));
var G__10001 = move_n;
var G__10002 = n_children__$1;
var G__10003 = (function (){var or__5045__auto__ = changed_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (!(node_unchanged_QMARK_));
}
})();
var G__10004 = cljs.core.conj_BANG_.call(null,vdom,new_vdom);
new_c = G__9998;
old_c = G__9999;
n = G__10000;
move_n = G__10001;
n_children__$1 = G__10002;
changed_QMARK_ = G__10003;
vdom = G__10004;
continue;
} else {
if(cljs.core.not.call(null,old_ks.call(null,(new_headers[(3)])))){
var vec__9908 = replicant.core.create_node.call(null,impl,new_headers);
var child = cljs.core.nth.call(null,vec__9908,(0),null);
var child_vdom = cljs.core.nth.call(null,vec__9908,(1),null);
replicant.core.insert_node.call(null,r,el,child,n,n_children__$1);

var G__10005 = cljs.core.next.call(null,new_c);
var G__10006 = (function (){var G__9911 = old_c;
if((old_vdom == null)){
return cljs.core.next.call(null,G__9911);
} else {
return G__9911;
}
})();
var G__10007 = (n + (1));
var G__10008 = move_n;
var G__10009 = (n_children__$1 + (1));
var G__10010 = true;
var G__10011 = cljs.core.conj_BANG_.call(null,vdom,child_vdom);
new_c = G__10005;
old_c = G__10006;
n = G__10007;
move_n = G__10008;
n_children__$1 = G__10009;
changed_QMARK_ = G__10010;
vdom = G__10011;
continue;
} else {
if(((old_nil_QMARK_) || (cljs.core.not.call(null,new_ks.call(null,(old_vdom[(1)])))))){
var temp__5802__auto__ = replicant.core.remove_child.call(null,impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5802__auto__)){
var unmounting_node = temp__5802__auto__;
var G__10012 = new_c;
var G__10013 = cljs.core.next.call(null,old_c);
var G__10014 = (n + (1));
var G__10015 = move_n;
var G__10016 = n_children__$1;
var G__10017 = true;
var G__10018 = cljs.core.conj_BANG_.call(null,vdom,unmounting_node);
new_c = G__10012;
old_c = G__10013;
n = G__10014;
move_n = G__10015;
n_children__$1 = G__10016;
changed_QMARK_ = G__10017;
vdom = G__10018;
continue;
} else {
var G__10019 = new_c;
var G__10020 = cljs.core.next.call(null,old_c);
var G__10021 = n;
var G__10022 = move_n;
var G__10023 = (n_children__$1 - (1));
var G__10024 = true;
var G__10025 = vdom;
new_c = G__10019;
old_c = G__10020;
n = G__10021;
move_n = G__10022;
n_children__$1 = G__10023;
changed_QMARK_ = G__10024;
vdom = G__10025;
continue;
}
} else {
var vec__9912 = replicant.core.move_nodes.call(null,impl,el,new_headers,new_c,old_vdom,old_c,n,n_children__$1);
var nc = cljs.core.nth.call(null,vec__9912,(0),null);
var oc = cljs.core.nth.call(null,vec__9912,(1),null);
var n__$1 = cljs.core.nth.call(null,vec__9912,(2),null);
var move_n__$1 = cljs.core.nth.call(null,vec__9912,(3),null);
var vdom_node = cljs.core.nth.call(null,vec__9912,(4),null);
var G__10026 = nc;
var G__10027 = oc;
var G__10028 = n__$1;
var G__10029 = move_n__$1;
var G__10030 = n_children__$1;
var G__10031 = true;
var G__10032 = (function (){var G__9915 = vdom;
if(cljs.core.truth_(vdom_node)){
return cljs.core.conj_BANG_.call(null,G__9915,vdom_node);
} else {
return G__9915;
}
})();
new_c = G__10026;
old_c = G__10027;
n = G__10028;
move_n = G__10029;
n_children__$1 = G__10030;
changed_QMARK_ = G__10031;
vdom = G__10032;
continue;

}
}
}
}
}
}
}
}
}
break;
}
});
replicant.core.reconcile_STAR_ = (function replicant$core$reconcile_STAR_(p__10033,el,headers,vdom,index){
var map__10034 = p__10033;
var map__10034__$1 = cljs.core.__destructure_map.call(null,map__10034);
var impl = map__10034__$1;
var renderer = cljs.core.get.call(null,map__10034__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
if(cljs.core.truth_(headers)){
var temp__5804__auto___10050 = (function (){var or__5045__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,(headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5804__auto___10050)){
var ctx__9528__auto___10051 = temp__5804__auto___10050;
cljs.core.reset_BANG_.call(null,replicant.assert.current_context,ctx__9528__auto___10051);
} else {
}

cljs.core.reset_BANG_.call(null,replicant.assert.current_node,(headers[(7)]));
} else {
}

replicant.asserts.assert_no_conditional_attributes.call(null,headers,vdom);

var or__5045__auto__ = ((replicant.core.unchanged_QMARK_.call(null,headers,vdom))?vdom:null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var temp__5804__auto__ = replicant.core.get_alias_headers.call(null,impl,headers);
if(cljs.core.truth_(temp__5804__auto__)){
var alias_headers = temp__5804__auto__;
var vdom_child = cljs.core.first.call(null,(vdom[(4)]));
var updated_vdom = (cljs.core.truth_(replicant.core.reusable_QMARK_.call(null,alias_headers,vdom_child))?replicant.core.reconcile_STAR_.call(null,impl,el,alias_headers,vdom_child,index):(function (){var vec__10035 = replicant.core.create_node.call(null,impl,alias_headers);
var node = cljs.core.nth.call(null,vec__10035,(0),null);
var updated_vdom = cljs.core.nth.call(null,vec__10035,(1),null);
replicant.protocols.replace_child.call(null,renderer,el,node,replicant.protocols.get_child.call(null,renderer,el,index));

return updated_vdom;
})());
var headers__9698__auto__ = headers;
return (new Array((headers__9698__auto__[(0)]),(headers__9698__auto__[(3)]),(headers__9698__auto__[(2)]),(headers[(4)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_vdom], null),(function (){var temp__5804__auto____$1 = (updated_vdom[(1)]);
if(cljs.core.truth_(temp__5804__auto____$1)){
var k = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null);
} else {
return null;
}
})(),cljs.core.boolean$.call(null,new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__9698__auto__[(4)]))),(headers__9698__auto__[(7)]),null,null,(1)));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = ((cljs.core.not_EQ_.call(null,(headers[(8)]),(vdom[(8)])))?(function (){var vec__10038 = replicant.core.create_node.call(null,impl,headers);
var node = cljs.core.nth.call(null,vec__10038,(0),null);
var vdom__$1 = cljs.core.nth.call(null,vec__10038,(1),null);
replicant.protocols.replace_child.call(null,renderer,el,node,replicant.protocols.get_child.call(null,renderer,el,index));

return vdom__$1;
})():null);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var child = replicant.protocols.get_child.call(null,renderer,el,index);
var headers__$1 = (function (){var or__5045__auto____$3 = replicant.core.get_alias_headers.call(null,impl,headers);
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
return headers;
}
})();
var attrs = replicant.core.get_attrs.call(null,headers__$1);
var vdom_attrs = (vdom[(3)]);
var attrs_changed_QMARK_ = replicant.core.reconcile_attributes.call(null,renderer,child,attrs,vdom_attrs);
var vec__10041 = (cljs.core.truth_(new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1((headers__$1[(4)])))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,true], null):replicant.core.get_children_ks.call(null,headers__$1,replicant.core.get_ns.call(null,headers__$1)));
var new_children = cljs.core.nth.call(null,vec__10041,(0),null);
var new_ks = cljs.core.nth.call(null,vec__10041,(1),null);
var inner_html_QMARK_ = cljs.core.nth.call(null,vec__10041,(2),null);
var vec__10044 = (cljs.core.truth_(new cljs.core.Keyword(null,"contenteditable","contenteditable",-770210530).cljs$core$IFn$_invoke$arity$1(vdom_attrs))?(function (){
replicant.protocols.remove_all_children.call(null,renderer,child);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null);
})()
:(cljs.core.truth_(inner_html_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vdom[(4)]),(vdom[(5)]),(vdom[(10)])], null)
));
var old_children = cljs.core.nth.call(null,vec__10044,(0),null);
var old_ks = cljs.core.nth.call(null,vec__10044,(1),null);
var old_nc = cljs.core.nth.call(null,vec__10044,(2),null);
var vec__10047 = replicant.core.update_children.call(null,impl,child,new_children,new_ks,old_children,old_ks,old_nc);
var children_changed_QMARK_ = cljs.core.nth.call(null,vec__10047,(0),null);
var children = cljs.core.nth.call(null,vec__10047,(1),null);
var child_ks = cljs.core.nth.call(null,vec__10047,(2),null);
var n_children = cljs.core.nth.call(null,vec__10047,(3),null);
var attrs_changed_QMARK___$1 = ((attrs_changed_QMARK_) || (cljs.core.not_EQ_.call(null,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((headers__$1[(4)])),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1(vdom_attrs))));
replicant.core.register_hooks.call(null,impl,child,headers__$1,vdom,(cljs.core.truth_((function (){var and__5043__auto__ = attrs_changed_QMARK___$1;
if(and__5043__auto__){
return children_changed_QMARK_;
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895),new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null):((attrs_changed_QMARK___$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null)
)));

var headers__9698__auto__ = headers__$1;
return (new Array((headers__9698__auto__[(0)]),(headers__9698__auto__[(3)]),(headers__9698__auto__[(2)]),attrs,children,child_ks,cljs.core.boolean$.call(null,new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__9698__auto__[(4)]))),(headers__9698__auto__[(7)]),null,null,n_children));
}
}
}
});
replicant.core.perform_post_mount_update = (function replicant$core$perform_post_mount_update(renderer,p__10052){
var vec__10053 = p__10052;
var node = cljs.core.nth.call(null,vec__10053,(0),null);
var mounting_attrs = cljs.core.nth.call(null,vec__10053,(1),null);
var attrs = cljs.core.nth.call(null,vec__10053,(2),null);
return replicant.core.update_attributes.call(null,renderer,node,attrs,mounting_attrs);
});
/**
 * Reconcile the DOM in `el` by diffing `hiccup` with `vdom`. If there is no
 *   `vdom`, `reconcile` will create the DOM as per `hiccup`. Assumes that the DOM
 *   in `el` is in sync with `vdom` - if not, this will certainly not produce the
 *   desired result.
 */
replicant.core.reconcile = (function replicant$core$reconcile(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10068 = arguments.length;
var i__5770__auto___10069 = (0);
while(true){
if((i__5770__auto___10069 < len__5769__auto___10068)){
args__5775__auto__.push((arguments[i__5770__auto___10069]));

var G__10070 = (i__5770__auto___10069 + (1));
i__5770__auto___10069 = G__10070;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic = (function (renderer,el,hiccup,p__10062){
var vec__10063 = p__10062;
var vdom = cljs.core.nth.call(null,vec__10063,(0),null);
var map__10066 = cljs.core.nth.call(null,vec__10063,(1),null);
var map__10066__$1 = cljs.core.__destructure_map.call(null,map__10066);
var unmounts = cljs.core.get.call(null,map__10066__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521));
var aliases = cljs.core.get.call(null,map__10066__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var alias_data = cljs.core.get.call(null,map__10066__$1,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930));
var impl = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"hooks","hooks",-413590103),cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"mounts","mounts",-791474425),cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"unmounts","unmounts",173366521),(function (){var or__5045__auto__ = unmounts;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
}
})(),new cljs.core.Keyword(null,"aliases","aliases",1346874714),aliases,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930),alias_data], null);
var vdom__$1 = (function (){var headers = replicant.core.get_hiccup_headers.call(null,null,hiccup);
if(cljs.core.truth_(headers)){
var temp__5804__auto___10071 = (function (){var or__5045__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,(headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5804__auto___10071)){
var ctx__9528__auto___10072 = temp__5804__auto___10071;
cljs.core.reset_BANG_.call(null,replicant.assert.current_context,ctx__9528__auto___10072);
} else {
}

cljs.core.reset_BANG_.call(null,replicant.assert.current_node,(headers[(7)]));
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = headers;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = vdom;
if(cljs.core.truth_(and__5043__auto____$1)){
return ((replicant.core.unchanged_QMARK_.call(null,headers,cljs.core.first.call(null,vdom))) && (cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,vdom))));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return vdom;
} else {
var k = (cljs.core.truth_(headers)?(headers[(3)]):null);
return cljs.core.second.call(null,replicant.core.update_children.call(null,impl,el,(cljs.core.truth_(headers)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [headers], null):null),(function (){var G__10067 = cljs.core.PersistentHashSet.EMPTY;
if(cljs.core.truth_(k)){
return cljs.core.conj.call(null,G__10067,k);
} else {
return G__10067;
}
})(),vdom,cljs.core.set.call(null,cljs.core.keep.call(null,(function (p1__10056_SHARP_){
return (p1__10056_SHARP_[(1)]);
}),vdom)),(cljs.core.truth_(cljs.core.first.call(null,vdom))?(1):(0))));
}
})();
var hooks = cljs.core.deref.call(null,new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(impl));
var temp__5802__auto___10073 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"mounts","mounts",-791474425).cljs$core$IFn$_invoke$arity$1(impl)));
if(temp__5802__auto___10073){
var mounts_10074 = temp__5802__auto___10073;
replicant.protocols.next_frame.call(null,renderer,(function (){
cljs.core.run_BANG_.call(null,(function (p1__10057_SHARP_){
return replicant.core.perform_post_mount_update.call(null,renderer,p1__10057_SHARP_);
}),mounts_10074);

return cljs.core.run_BANG_.call(null,replicant.core.call_hook,hooks);
}));
} else {
cljs.core.run_BANG_.call(null,replicant.core.call_hook,hooks);
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hooks","hooks",-413590103),hooks,new cljs.core.Keyword(null,"vdom","vdom",953162958),vdom__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521),new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)], null);
}));

(replicant.core.reconcile.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.reconcile.cljs$lang$applyTo = (function (seq10058){
var G__10059 = cljs.core.first.call(null,seq10058);
var seq10058__$1 = cljs.core.next.call(null,seq10058);
var G__10060 = cljs.core.first.call(null,seq10058__$1);
var seq10058__$2 = cljs.core.next.call(null,seq10058__$1);
var G__10061 = cljs.core.first.call(null,seq10058__$2);
var seq10058__$3 = cljs.core.next.call(null,seq10058__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10059,G__10060,G__10061,seq10058__$3);
}));

cljs.core.add_watch.call(null,replicant.assert.error,new cljs.core.Keyword("replicant.assert","default","replicant.assert/default",-504441266),(function (___9546__auto__,___9546__auto____$1,___9546__auto____$2,error__9547__auto__){
return replicant.console_logger.report.call(null,error__9547__auto__);
}));

//# sourceMappingURL=core.js.map
