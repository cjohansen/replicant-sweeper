// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('replicant.core');
goog.require('cljs.core');
goog.require('replicant.assert');
goog.require('replicant.asserts');
goog.require('replicant.hiccup');
goog.require('replicant.protocols');
goog.require('replicant.vdom');
replicant.core.hiccup_QMARK_ = (function replicant$core$hiccup_QMARK_(sexp){
return ((cljs.core.vector_QMARK_.call(null,sexp)) && ((((!(cljs.core.map_entry_QMARK_.call(null,sexp)))) && ((cljs.core.first.call(null,sexp) instanceof cljs.core.Keyword)))));
});
replicant.core.parse_tag = (function replicant$core$parse_tag(tag){



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
var tag_name = (function (){var G__11063 = (cljs.core.truth_(id_index)?tag__$1.substring((0),id_index):(cljs.core.truth_(class_index)?tag__$1.substring((0),class_index):tag__$1
));
if(cljs.core.truth_(ns)){
return cljs.core.keyword.call(null,ns,G__11063);
} else {
return G__11063;
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
if(replicant.core.hiccup_QMARK_.call(null,sexp)){
var sym = cljs.core.first.call(null,sexp);
var args = cljs.core.rest.call(null,sexp);
var has_args_QMARK_ = cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args));
var attrs = ((has_args_QMARK_)?cljs.core.first.call(null,args):cljs.core.PersistentArrayMap.EMPTY);
var pt__10677__auto__ = replicant.core.parse_tag.call(null,sym);
var G__11064 = pt__10677__auto__;
G__11064.push((function (){var temp__5804__auto__ = new cljs.core.Keyword("replicant","key","replicant/key",-670108117).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5804__auto__)){
var k__10671__auto__ = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pt__10677__auto__[(0)]),k__10671__auto__], null);
} else {
return null;
}
})());

G__11064.push(attrs);

G__11064.push(((has_args_QMARK_)?cljs.core.rest.call(null,args):args));

G__11064.push(ns);

G__11064.push(sexp);

G__11064.push(null);

G__11064.push((pt__10677__auto__[(0)]));

G__11064.push(null);

return G__11064;
} else {
var text__10684__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexp);
return (new Array(null,null,null,null,null,null,null,text__10684__auto__,text__10684__auto__,null,null));
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
return cljs.core.keep.call(null,(function (p1__11065_SHARP_){
return cljs.core.not_empty.call(null,p1__11065_SHARP_.trim());
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
var vec__11067 = cljs.core.map.call(null,(function (p1__11066_SHARP_){
return p1__11066_SHARP_.trim();
}),kv.split(":"));
var k = cljs.core.nth.call(null,vec__11067,(0),null);
var v = cljs.core.nth.call(null,vec__11067,(1),null);
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
var G__11070 = cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499),new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009));
var G__11070__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,G__11070,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__11070);
var G__11070__$2 = ((cljs.core.seq.call(null,classes__$1))?cljs.core.assoc.call(null,G__11070__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),classes__$1):G__11070__$1);
if(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs) === 'string'){
return cljs.core.update.call(null,G__11070__$2,new cljs.core.Keyword(null,"style","style",-496642736),replicant.core.explode_styles);
} else {
return G__11070__$2;
}
});
/**
 * Given `headers` as produced by `get-hiccup-headers`, returns a map of all HTML
 *   attributes.
 */
replicant.core.get_attrs = (function replicant$core$get_attrs(headers){



return replicant.core.prep_attrs.call(null,(headers[(4)]),(headers[(1)]),(headers[(2)]));
});
replicant.core.merge_attrs = (function replicant$core$merge_attrs(attrs,overrides){
var G__11071 = cljs.core.merge.call(null,attrs,cljs.core.dissoc.call(null,overrides,new cljs.core.Keyword(null,"style","style",-496642736)));
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides);
}
})())){
return cljs.core.update.call(null,G__11071,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides));
} else {
return G__11071;
}
});
replicant.core.get_mounting_attrs = (function replicant$core$get_mounting_attrs(headers){
var temp__5802__auto__ = new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(temp__5802__auto__)){
var mounting = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.core.get_attrs.call(null,headers),(function (){var headers__$1 = (function (){var G__11072 = headers;
if(cljs.core.truth_(mounting)){
var headers__10691__auto__ = G__11072;
(headers__10691__auto__[(4)] = replicant.core.merge_attrs.call(null,(headers__10691__auto__[(4)]),mounting));

return headers__10691__auto__;
} else {
return G__11072;
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
return cljs.core.mapv.call(null,(function (p1__11073_SHARP_){
var G__11074 = p1__11073_SHARP_;
if((G__11074 == null)){
return null;
} else {
return replicant.core.get_hiccup_headers.call(null,ns,G__11074);
}
}),replicant.core.flatten_seqs.call(null,(headers[(5)])));
}
});
/**
 * Like `get-children` but returns a tuple of `[children ks]` where `ks` is a set
 *   of the keys in `children`.
 */
replicant.core.get_children_ks = (function replicant$core$get_children_ks(headers,ns){
var vec__11075 = cljs.core.reduce.call(null,(function (p__11078,hiccup){
var vec__11079 = p__11078;
var children = cljs.core.nth.call(null,vec__11079,(0),null);
var ks = cljs.core.nth.call(null,vec__11079,(1),null);
if(cljs.core.truth_(hiccup)){
var headers__$1 = replicant.core.get_hiccup_headers.call(null,ns,hiccup);
var k = (headers__$1[(3)]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,children,headers__$1),(function (){var G__11082 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.call(null,G__11082,k);
} else {
return G__11082;
}
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,children,null),ks], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY)], null),replicant.core.flatten_seqs.call(null,(headers[(5)])));
var children = cljs.core.nth.call(null,vec__11075,(0),null);
var ks = cljs.core.nth.call(null,vec__11075,(1),null);
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
var or__5045__auto__ = ((cljs.core.fn_QMARK_.call(null,handler))?handler:null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = ((cljs.core.ifn_QMARK_.call(null,replicant.core._STAR_dispatch_STAR_))?(function (e){
var node = e.target;
var rd = (function (){var G__11083 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","dom-event","replicant.trigger/dom-event",930136738),new cljs.core.Keyword("replicant","js-event","replicant/js-event",1927942146),e,new cljs.core.Keyword("replicant","dom-event","replicant/dom-event",-1613182512),e], null);
if(cljs.core.truth_(node)){
return cljs.core.assoc.call(null,G__11083,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node);
} else {
return G__11083;
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
replicant.core.call_hook = (function replicant$core$call_hook(p__11084){
var vec__11085 = p__11084;
var hook = cljs.core.nth.call(null,vec__11085,(0),null);
var k = cljs.core.nth.call(null,vec__11085,(1),null);
var node = cljs.core.nth.call(null,vec__11085,(2),null);
var new$ = cljs.core.nth.call(null,vec__11085,(3),null);
var old = cljs.core.nth.call(null,vec__11085,(4),null);
var details = cljs.core.nth.call(null,vec__11085,(5),null);
var f = replicant.core.get_life_cycle_hook.call(null,hook);
var life_cycle = (((old == null))?new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865):(((new$ == null))?new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184):new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235)
));
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),k)) || (((((cljs.core._EQ_.call(null,k,new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162))) && (cljs.core._EQ_.call(null,life_cycle,new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865))))) || (((((cljs.core._EQ_.call(null,k,new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753))) && (cljs.core._EQ_.call(null,life_cycle,new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184))))) || (((cljs.core._EQ_.call(null,k,new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394))) && (cljs.core._EQ_.call(null,life_cycle,new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235))))))))))){
return f.call(null,(function (){var G__11088 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","life-cycle","replicant.trigger/life-cycle",-205660972),new cljs.core.Keyword("replicant","life-cycle","replicant/life-cycle",1802888458),life_cycle,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node], null);
if(cljs.core.truth_(details)){
return cljs.core.assoc.call(null,G__11088,new cljs.core.Keyword("replicant","details","replicant/details",-1846218867),details);
} else {
return G__11088;
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
var len__5769__auto___11105 = arguments.length;
var i__5770__auto___11106 = (0);
while(true){
if((i__5770__auto___11106 < len__5769__auto___11105)){
args__5775__auto__.push((arguments[i__5770__auto___11106]));

var G__11107 = (i__5770__auto___11106 + (1));
i__5770__auto___11106 = G__11107;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (p__11093,node,headers,p__11094){
var map__11095 = p__11093;
var map__11095__$1 = cljs.core.__destructure_map.call(null,map__11095);
var hooks = cljs.core.get.call(null,map__11095__$1,new cljs.core.Keyword(null,"hooks","hooks",-413590103));
var vec__11096 = p__11094;
var vdom = cljs.core.nth.call(null,vec__11096,(0),null);
var details = cljs.core.nth.call(null,vec__11096,(1),null);
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
var headers_sexp = (function (){var G__11099 = headers;
if((G__11099 == null)){
return null;
} else {
return (G__11099[(7)]);
}
})();
var vdom_sexp = (function (){var G__11100 = vdom;
if((G__11100 == null)){
return null;
} else {
return (G__11100[(7)]);
}
})();
return cljs.core._vreset_BANG_.call(null,hooks,cljs.core.into.call(null,cljs.core._deref.call(null,hooks),cljs.core.map.call(null,(function (p__11101){
var vec__11102 = p__11101;
var k = cljs.core.nth.call(null,vec__11102,(0),null);
var hook = cljs.core.nth.call(null,vec__11102,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook,k,node,headers_sexp,vdom_sexp,details], null);
}),new_hooks)));
}
}));

(replicant.core.register_hooks.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.register_hooks.cljs$lang$applyTo = (function (seq11089){
var G__11090 = cljs.core.first.call(null,seq11089);
var seq11089__$1 = cljs.core.next.call(null,seq11089);
var G__11091 = cljs.core.first.call(null,seq11089__$1);
var seq11089__$2 = cljs.core.next.call(null,seq11089__$1);
var G__11092 = cljs.core.first.call(null,seq11089__$2);
var seq11089__$3 = cljs.core.next.call(null,seq11089__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11090,G__11091,G__11092,seq11089__$3);
}));

replicant.core.register_mount = (function replicant$core$register_mount(p__11108,node,mounting_attrs,attrs){
var map__11109 = p__11108;
var map__11109__$1 = cljs.core.__destructure_map.call(null,map__11109);
var mounts = cljs.core.get.call(null,map__11109__$1,new cljs.core.Keyword(null,"mounts","mounts",-791474425));
return cljs.core._vreset_BANG_.call(null,mounts,cljs.core.conj.call(null,cljs.core._deref.call(null,mounts),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,mounting_attrs,attrs], null)));
});
replicant.core.update_styles = (function replicant$core$update_styles(renderer,el,new_styles,old_styles){
var new_ks = cljs.core.set.call(null,cljs.core.remove.call(null,(function (p1__11110_SHARP_){
return (p1__11110_SHARP_.call(null,new_styles) == null);
}),cljs.core.keys.call(null,new_styles)));
var old_ks = cljs.core.set.call(null,cljs.core.keys.call(null,old_styles));
cljs.core.run_BANG_.call(null,(function (p1__11111_SHARP_){
return replicant.protocols.remove_style.call(null,renderer,el,p1__11111_SHARP_);
}),cljs.core.remove.call(null,new_ks,old_ks));

return cljs.core.run_BANG_.call(null,(function (p1__11112_SHARP_){
var new_style = p1__11112_SHARP_.call(null,new_styles);
if(cljs.core.not_EQ_.call(null,new_style,p1__11112_SHARP_.call(null,old_styles))){


return replicant.protocols.set_style.call(null,renderer,el,p1__11112_SHARP_,replicant.core.get_style_val.call(null,p1__11112_SHARP_,new_style));
} else {
return null;
}
}),new_ks);
});
replicant.core.update_classes = (function replicant$core$update_classes(renderer,el,new_classes,old_classes){
cljs.core.run_BANG_.call(null,(function (p1__11113_SHARP_){
return replicant.protocols.remove_class.call(null,renderer,el,p1__11113_SHARP_);
}),cljs.core.remove.call(null,cljs.core.set.call(null,new_classes),old_classes));

return cljs.core.run_BANG_.call(null,(function (p1__11114_SHARP_){
return replicant.protocols.add_class.call(null,renderer,el,p1__11114_SHARP_);
}),cljs.core.remove.call(null,cljs.core.set.call(null,old_classes),new_classes));
});
replicant.core.add_event_listeners = (function replicant$core$add_event_listeners(renderer,el,val){
return cljs.core.run_BANG_.call(null,(function (p__11115){
var vec__11116 = p__11115;
var event = cljs.core.nth.call(null,vec__11116,(0),null);
var handler = cljs.core.nth.call(null,vec__11116,(1),null);

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
cljs.core.run_BANG_.call(null,(function (p1__11119_SHARP_){
return replicant.protocols.remove_event_handler.call(null,renderer,el,p1__11119_SHARP_);
}),cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.filter.call(null,new_handlers,cljs.core.keys.call(null,new_handlers))),cljs.core.filter.call(null,old_handlers,cljs.core.keys.call(null,old_handlers))));

return replicant.core.add_event_listeners.call(null,renderer,el,cljs.core.remove.call(null,(function (p1__11120_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.val.call(null,p1__11120_SHARP_),cljs.core.get.call(null,old_handlers,cljs.core.key.call(null,p1__11120_SHARP_)));
}),new_handlers));
});
replicant.core.xlinkns = "http://www.w3.org/1999/xlink";
replicant.core.xmlns = "http://www.w3.org/XML/1998/namespace";
replicant.core.set_attr_val = (function replicant$core$set_attr_val(renderer,el,attr,v){
var an = cljs.core.name.call(null,attr);

return replicant.protocols.set_attribute.call(null,renderer,el,an,(function (){var G__11121 = v;
if((((v instanceof cljs.core.Keyword)) || ((v instanceof cljs.core.Symbol)))){
return cljs.core.name.call(null,G__11121);
} else {
return G__11121;
}
})(),(function (){var G__11122 = cljs.core.PersistentArrayMap.EMPTY;
var G__11122__$1 = ((cljs.core._EQ_.call(null,(0),an.indexOf("xml:")))?cljs.core.assoc.call(null,G__11122,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xmlns):G__11122);
if(cljs.core._EQ_.call(null,(0),an.indexOf("xlink:"))){
return cljs.core.assoc.call(null,G__11122__$1,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xlinkns);
} else {
return G__11122__$1;
}
})());
});
replicant.core.update_attr = (function replicant$core$update_attr(renderer,el,attr,new$,old){
if(cljs.core.truth_(cljs.core.namespace.call(null,attr))){
return null;
} else {
var G__11123 = attr;
var G__11123__$1 = (((G__11123 instanceof cljs.core.Keyword))?G__11123.fqn:null);
switch (G__11123__$1) {
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
return cljs.core.reduce.call(null,(function (p1__11126_SHARP_,p2__11125_SHARP_){
return replicant.core.update_attr.call(null,renderer,el,p2__11125_SHARP_,new_attrs,old_attrs);
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
return cljs.core.run_BANG_.call(null,(function (p1__11127_SHARP_){


return replicant.protocols.set_style.call(null,renderer,el,p1__11127_SHARP_,replicant.core.get_style_val.call(null,p1__11127_SHARP_,cljs.core.get.call(null,new_styles,p1__11127_SHARP_)));
}),cljs.core.filter.call(null,new_styles,cljs.core.keys.call(null,new_styles)));
});
replicant.core.set_classes = (function replicant$core$set_classes(renderer,el,new_classes){
return cljs.core.run_BANG_.call(null,(function (p1__11128_SHARP_){
return replicant.protocols.add_class.call(null,renderer,el,p1__11128_SHARP_);
}),new_classes);
});
replicant.core.set_event_listeners = (function replicant$core$set_event_listeners(renderer,el,new_handlers){
return replicant.core.add_event_listeners.call(null,renderer,el,new_handlers);
});
replicant.core.set_attr = (function replicant$core$set_attr(renderer,el,attr,new$){
if(cljs.core.truth_(cljs.core.namespace.call(null,attr))){
return null;
} else {
var G__11129 = attr;
var G__11129__$1 = (((G__11129 instanceof cljs.core.Keyword))?G__11129.fqn:null);
switch (G__11129__$1) {
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
return cljs.core.run_BANG_.call(null,(function (p1__11131_SHARP_){
return replicant.core.set_attr.call(null,renderer,el,p1__11131_SHARP_,new_attrs);
}),cljs.core.filter.call(null,new_attrs,cljs.core.keys.call(null,new_attrs)));
});
replicant.core.render_default_alias = (function replicant$core$render_default_alias(tag_name,_attrs,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-replicant-error","data-replicant-error",1583668098),["Undefined alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name)].join('')], null),(function (){var iter__5523__auto__ = (function replicant$core$render_default_alias_$_iter__11132(s__11133){
return (new cljs.core.LazySeq(null,(function (){
var s__11133__$1 = s__11133;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11133__$1);
if(temp__5804__auto__){
var s__11133__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11133__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__11133__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__11135 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__11134 = (0);
while(true){
if((i__11134 < size__5522__auto__)){
var child = cljs.core._nth.call(null,c__5521__auto__,i__11134);
cljs.core.chunk_append.call(null,b__11135,(function (){var G__11136 = child;
if((!(typeof child === 'string'))){
return cljs.core.pr_str.call(null,G__11136);
} else {
return G__11136;
}
})());

var G__11138 = (i__11134 + (1));
i__11134 = G__11138;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11135),replicant$core$render_default_alias_$_iter__11132.call(null,cljs.core.chunk_rest.call(null,s__11133__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11135),null);
}
} else {
var child = cljs.core.first.call(null,s__11133__$2);
return cljs.core.cons.call(null,(function (){var G__11137 = child;
if((!(typeof child === 'string'))){
return cljs.core.pr_str.call(null,G__11137);
} else {
return G__11137;
}
})(),replicant$core$render_default_alias_$_iter__11132.call(null,cljs.core.rest.call(null,s__11133__$2)));
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
return cljs.core.concat.call(null,class_attr,classes);
} else {
if((class_attr == null)){
return classes;
} else {
return cljs.core.cons.call(null,class_attr,classes);

}
}
});
replicant.core.get_alias_headers = (function replicant$core$get_alias_headers(p__11140,headers){
var map__11141 = p__11140;
var map__11141__$1 = cljs.core.__destructure_map.call(null,map__11141);
var aliases = cljs.core.get.call(null,map__11141__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
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
try{var hh__10697__auto__ = replicant.core.get_hiccup_headers.call(null,null,f.call(null,(function (){var G__11143 = (headers[(4)]);
var G__11143__$1 = (cljs.core.truth_(id)?cljs.core.update.call(null,G__11143,new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__11139_SHARP_){
var or__5045__auto__ = p1__11139_SHARP_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return id;
}
})):G__11143);
if(cljs.core.seq.call(null,classes)){
return cljs.core.update.call(null,G__11143__$1,new cljs.core.Keyword(null,"class","class",-2030961996),replicant.core.add_classes,classes);
} else {
return G__11143__$1;
}
})(),cljs.core.seq.call(null,replicant.core.flatten_seqs.call(null,(headers[(5)])))));
if(cljs.core.truth_(hh__10697__auto__)){
var G__11144 = hh__10697__auto__;
(G__11144[(3)] = (function (){var or__5045__auto__ = (headers[(3)]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (hh__10697__auto__[(3)]);
}
})());

(G__11144[(7)] = (hh__10697__auto__[(7)]));

(G__11144[(9)] = tag_name);

(G__11144[(10)] = (headers[(7)]));

return G__11144;
} else {
return null;
}
}catch (e11142){var e = e11142;
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
replicant.core.create_node = (function replicant$core$create_node(p__11145,headers){
var map__11146 = p__11145;
var map__11146__$1 = cljs.core.__destructure_map.call(null,map__11146);
var impl = map__11146__$1;
var renderer = cljs.core.get.call(null,map__11146__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));

var or__5045__auto__ = (function (){var temp__5804__auto__ = (headers[(8)]);
if(cljs.core.truth_(temp__5804__auto__)){
var text = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.protocols.create_text_node.call(null,renderer,text),(function (){var text__11022__auto__ = text;
return (new Array(null,null,null,null,null,null,false,text__11022__auto__,text__11022__auto__,null,null,null));
})()], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var G__11147 = replicant.core.get_alias_headers.call(null,impl,headers);
if((G__11147 == null)){
return null;
} else {
return replicant.core.create_node.call(null,impl,G__11147);
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
var vec__11148 = replicant.core.get_mounting_attrs.call(null,headers);
var attrs = cljs.core.nth.call(null,vec__11148,(0),null);
var mounting_attrs = cljs.core.nth.call(null,vec__11148,(1),null);
var _ = replicant.core.set_attributes.call(null,renderer,node,(function (){var or__5045__auto____$2 = mounting_attrs;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return attrs;
}
})());
var vec__11151 = cljs.core.reduce.call(null,(function (p__11154,child_headers){
var vec__11155 = p__11154;
var children = cljs.core.nth.call(null,vec__11155,(0),null);
var ks = cljs.core.nth.call(null,vec__11155,(1),null);
var n = cljs.core.nth.call(null,vec__11155,(2),null);
if(cljs.core.truth_(child_headers)){
var vec__11158 = replicant.core.create_node.call(null,impl,child_headers);
var child_node = cljs.core.nth.call(null,vec__11158,(0),null);
var vdom = cljs.core.nth.call(null,vec__11158,(1),null);
var k = (vdom[(1)]);
replicant.protocols.append_child.call(null,renderer,node,child_node);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,children,vdom),(function (){var G__11161 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.call(null,G__11161,k);
} else {
return G__11161;
}
})(),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,children,null),ks,n], null);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY),(0)], null),replicant.core.get_children.call(null,headers,ns));
var children = cljs.core.nth.call(null,vec__11151,(0),null);
var ks = cljs.core.nth.call(null,vec__11151,(1),null);
var n_children = cljs.core.nth.call(null,vec__11151,(2),null);
replicant.core.register_hooks.call(null,impl,node,headers);

if(cljs.core.truth_(mounting_attrs)){
replicant.core.register_mount.call(null,impl,node,mounting_attrs,attrs);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,(function (){var headers__11029__auto__ = headers;
return (new Array((headers__11029__auto__[(0)]),(headers__11029__auto__[(3)]),(headers__11029__auto__[(2)]),attrs,cljs.core.persistent_BANG_.call(null,children),cljs.core.persistent_BANG_.call(null,ks),cljs.core.boolean$.call(null,new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__11029__auto__[(4)]))),(headers__11029__auto__[(7)]),null,null,(headers__11029__auto__[(9)]),(headers__11029__auto__[(10)]),n_children));
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
return ((cljs.core._EQ_.call(null,(headers[(3)]),(vdom[(1)]))) && (cljs.core._EQ_.call(null,(headers[(9)]),(vdom[(10)]))));
}
});
replicant.core.same_QMARK_ = (function replicant$core$same_QMARK_(headers,vdom){
return ((cljs.core._EQ_.call(null,(headers[(3)]),(vdom[(1)]))) && (cljs.core._EQ_.call(null,(headers[(9)]),(vdom[(10)]))));
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
var G__11162 = (coll_n + (1));
var G__11163 = dom_n;
var G__11164 = cljs.core.next.call(null,xs__$1);
coll_n = G__11162;
dom_n = G__11163;
xs__$1 = G__11164;
continue;
} else {
if(cljs.core.truth_(f.call(null,cljs.core.first.call(null,xs__$1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll_n,dom_n], null);
} else {
var G__11165 = (coll_n + (1));
var G__11166 = (dom_n + (1));
var G__11167 = cljs.core.next.call(null,xs__$1);
coll_n = G__11165;
dom_n = G__11166;
xs__$1 = G__11167;
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
replicant.core.insert_children = (function replicant$core$insert_children(p__11168,el,children,vdom){
var map__11169 = p__11168;
var map__11169__$1 = cljs.core.__destructure_map.call(null,map__11169);
var impl = map__11169__$1;
var renderer = cljs.core.get.call(null,map__11169__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
return cljs.core.reduce.call(null,(function (p__11170,child){
var vec__11171 = p__11170;
var res = cljs.core.nth.call(null,vec__11171,(0),null);
var n = cljs.core.nth.call(null,vec__11171,(1),null);
if(cljs.core.truth_(child)){
var vec__11174 = replicant.core.create_node.call(null,impl,child);
var node = cljs.core.nth.call(null,vec__11174,(0),null);
var vdom__$1 = cljs.core.nth.call(null,vec__11174,(1),null);
replicant.protocols.append_child.call(null,renderer,el,node);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,res,vdom__$1),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,res,null),n], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vdom,(0)], null),children);
});
replicant.core.remove_child = (function replicant$core$remove_child(p__11177,unmounts,el,n,vdom){
var map__11178 = p__11177;
var map__11178__$1 = cljs.core.__destructure_map.call(null,map__11178);
var impl = map__11178__$1;
var renderer = cljs.core.get.call(null,map__11178__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
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
var vdom__$1 = (function (){var vdom__11016__auto__ = vdom;
(vdom__11016__auto__[(9)] = cljs.core._vreset_BANG_.call(null,replicant.vdom.id,(cljs.core._deref.call(null,replicant.vdom.id) + (1))));

return vdom__11016__auto__;
})();
var child = replicant.protocols.get_child.call(null,renderer,el,n);
replicant.core.update_attributes.call(null,renderer,child,attrs,(vdom__$1[(3)]));

cljs.core._vreset_BANG_.call(null,new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.conj.call(null,cljs.core._deref.call(null,new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.on_transition_end.call(null,renderer,child,(function (){
cljs.core._vreset_BANG_.call(null,new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.disj.call(null,cljs.core._deref.call(null,new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.remove_child.call(null,renderer,el,child);

var temp__5804__auto___11179 = new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((vdom__$1[(3)]));
if(cljs.core.truth_(temp__5804__auto___11179)){
var hook_11180 = temp__5804__auto___11179;
replicant.core.call_hook.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook_11180,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),child,null,vdom__$1], null));
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
return cljs.core._EQ_.call(null,(function (){var G__11181 = headers;
if((G__11181 == null)){
return null;
} else {
return (G__11181[(7)]);
}
})(),(function (){var G__11182 = vdom;
if((G__11182 == null)){
return null;
} else {
var vdom__11005__auto__ = G__11182;
var or__5045__auto__ = (vdom__11005__auto__[(11)]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (vdom__11005__auto__[(7)]);
}
}
})());
});
replicant.core.move_nodes = (function replicant$core$move_nodes(p__11185,el,headers,new_children,vdom,old_children,n,n_children){
var map__11186 = p__11185;
var map__11186__$1 = cljs.core.__destructure_map.call(null,map__11186);
var impl = map__11186__$1;
var renderer = cljs.core.get.call(null,map__11186__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var vec__11187 = (cljs.core.truth_((headers[(3)]))?replicant.core.index_of.call(null,(function (p1__11183_SHARP_){
return replicant.core.same_QMARK_.call(null,headers,p1__11183_SHARP_);
}),old_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var o_idx = cljs.core.nth.call(null,vec__11187,(0),null);
var o_dom_idx = cljs.core.nth.call(null,vec__11187,(1),null);
var vec__11190 = (cljs.core.truth_((vdom[(1)]))?replicant.core.index_of.call(null,(function (p1__11184_SHARP_){
return replicant.core.same_QMARK_.call(null,p1__11184_SHARP_,vdom);
}),new_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var n_idx = cljs.core.nth.call(null,vec__11190,(0),null);
var n_dom_idx = cljs.core.nth.call(null,vec__11190,(1),null);
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
var G__11221 = cljs.core.next.call(null,children);
var G__11222 = cljs.core.conj_BANG_.call(null,vdom__$1,null);
var G__11223 = n__$1;
var G__11224 = n_children__$2;
children = G__11221;
vdom__$1 = G__11222;
n__$1 = G__11223;
n_children__$2 = G__11224;
continue;
} else {
var temp__5802__auto__ = replicant.core.remove_child.call(null,impl,unmounts,el,n__$1,cljs.core.first.call(null,children));
if(cljs.core.truth_(temp__5802__auto__)){
var pending_vdom = temp__5802__auto__;
var G__11225 = cljs.core.next.call(null,children);
var G__11226 = cljs.core.conj_BANG_.call(null,vdom__$1,pending_vdom);
var G__11227 = (n__$1 + (1));
var G__11228 = n_children__$2;
children = G__11225;
vdom__$1 = G__11226;
n__$1 = G__11227;
n_children__$2 = G__11228;
continue;
} else {
var G__11229 = cljs.core.next.call(null,children);
var G__11230 = vdom__$1;
var G__11231 = n__$1;
var G__11232 = (n_children__$2 - (1));
children = G__11229;
vdom__$1 = G__11230;
n__$1 = G__11231;
n_children__$2 = G__11232;
continue;
}

}
}
break;
}
} else {
if(old_empty_QMARK_){
var vec__11207 = replicant.core.insert_children.call(null,impl,el,new_c,vdom);
var vdom__$1 = cljs.core.nth.call(null,vec__11207,(0),null);
var n__$1 = cljs.core.nth.call(null,vec__11207,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.persistent_BANG_.call(null,vdom__$1),new_ks,(n_children__$1 + n__$1)], null);
} else {
if(((new_nil_QMARK_) && (old_nil_QMARK_))){
var G__11233 = cljs.core.next.call(null,new_c);
var G__11234 = cljs.core.next.call(null,old_c);
var G__11235 = n;
var G__11236 = move_n;
var G__11237 = n_children__$1;
var G__11238 = changed_QMARK_;
var G__11239 = cljs.core.conj_BANG_.call(null,vdom,null);
new_c = G__11233;
old_c = G__11234;
n = G__11235;
move_n = G__11236;
n_children__$1 = G__11237;
changed_QMARK_ = G__11238;
vdom = G__11239;
continue;
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = old_vdom;
if(cljs.core.truth_(and__5043__auto__)){
return (old_vdom[(9)]);
} else {
return and__5043__auto__;
}
})())){
var vec__11210 = (cljs.core.truth_((function (){var and__5043__auto__ = new_headers;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,old_ks.call(null,(new_headers[(3)])));
} else {
return and__5043__auto__;
}
})())?(function (){var res = replicant.core.create_node.call(null,impl,new_headers);
replicant.core.insert_node.call(null,r,el,cljs.core.first.call(null,res),n,n_children__$1);

return res;
})():null);
var child = cljs.core.nth.call(null,vec__11210,(0),null);
var child_vdom = cljs.core.nth.call(null,vec__11210,(1),null);
if(cljs.core.truth_(unmounts.call(null,(old_vdom[(9)])))){
if(new_nil_QMARK_){
var G__11240 = cljs.core.next.call(null,new_c);
var G__11241 = cljs.core.next.call(null,old_c);
var G__11242 = (n + (1));
var G__11243 = move_n;
var G__11244 = n_children__$1;
var G__11245 = changed_QMARK_;
var G__11246 = cljs.core.conj_BANG_.call(null,vdom,old_vdom);
new_c = G__11240;
old_c = G__11241;
n = G__11242;
move_n = G__11243;
n_children__$1 = G__11244;
changed_QMARK_ = G__11245;
vdom = G__11246;
continue;
} else {
if(cljs.core.truth_(child)){
var G__11247 = cljs.core.next.call(null,new_c);
var G__11248 = cljs.core.next.call(null,old_c);
var G__11249 = (n + (2));
var G__11250 = move_n;
var G__11251 = (n_children__$1 + (1));
var G__11252 = true;
var G__11253 = cljs.core.conj_BANG_.call(null,vdom,child_vdom);
new_c = G__11247;
old_c = G__11248;
n = G__11249;
move_n = G__11250;
n_children__$1 = G__11251;
changed_QMARK_ = G__11252;
vdom = G__11253;
continue;
} else {
var G__11254 = new_c;
var G__11255 = cljs.core.next.call(null,old_c);
var G__11256 = (n + (1));
var G__11257 = move_n;
var G__11258 = n_children__$1;
var G__11259 = changed_QMARK_;
var G__11260 = cljs.core.conj_BANG_.call(null,vdom,old_vdom);
new_c = G__11254;
old_c = G__11255;
n = G__11256;
move_n = G__11257;
n_children__$1 = G__11258;
changed_QMARK_ = G__11259;
vdom = G__11260;
continue;

}
}
} else {
if(new_nil_QMARK_){
var G__11261 = cljs.core.next.call(null,new_c);
var G__11262 = cljs.core.next.call(null,old_c);
var G__11263 = n;
var G__11264 = (move_n - (1));
var G__11265 = (n_children__$1 - (1));
var G__11266 = changed_QMARK_;
var G__11267 = cljs.core.conj_BANG_.call(null,vdom,null);
new_c = G__11261;
old_c = G__11262;
n = G__11263;
move_n = G__11264;
n_children__$1 = G__11265;
changed_QMARK_ = G__11266;
vdom = G__11267;
continue;
} else {
if(cljs.core.truth_(child)){
var G__11268 = cljs.core.next.call(null,new_c);
var G__11269 = cljs.core.next.call(null,old_c);
var G__11270 = (n + (1));
var G__11271 = move_n;
var G__11272 = n_children__$1;
var G__11273 = true;
var G__11274 = cljs.core.conj_BANG_.call(null,vdom,child_vdom);
new_c = G__11268;
old_c = G__11269;
n = G__11270;
move_n = G__11271;
n_children__$1 = G__11272;
changed_QMARK_ = G__11273;
vdom = G__11274;
continue;
} else {
var G__11275 = new_c;
var G__11276 = cljs.core.next.call(null,old_c);
var G__11277 = n;
var G__11278 = (move_n - (1));
var G__11279 = (n_children__$1 - (1));
var G__11280 = changed_QMARK_;
var G__11281 = vdom;
new_c = G__11275;
old_c = G__11276;
n = G__11277;
move_n = G__11278;
n_children__$1 = G__11279;
changed_QMARK_ = G__11280;
vdom = G__11281;
continue;

}
}
}
} else {
if(new_nil_QMARK_){
if(cljs.core.contains_QMARK_.call(null,new_ks,(old_vdom[(1)]))){
var G__11282 = cljs.core.next.call(null,new_c);
var G__11283 = old_c;
var G__11284 = n;
var G__11285 = move_n;
var G__11286 = n_children__$1;
var G__11287 = true;
var G__11288 = vdom;
new_c = G__11282;
old_c = G__11283;
n = G__11284;
move_n = G__11285;
n_children__$1 = G__11286;
changed_QMARK_ = G__11287;
vdom = G__11288;
continue;
} else {
var temp__5802__auto__ = replicant.core.remove_child.call(null,impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5802__auto__)){
var unmounting_node = temp__5802__auto__;
var G__11289 = cljs.core.next.call(null,new_c);
var G__11290 = cljs.core.next.call(null,old_c);
var G__11291 = (n + (1));
var G__11292 = move_n;
var G__11293 = n_children__$1;
var G__11294 = true;
var G__11295 = cljs.core.conj_BANG_.call(null,vdom,unmounting_node);
new_c = G__11289;
old_c = G__11290;
n = G__11291;
move_n = G__11292;
n_children__$1 = G__11293;
changed_QMARK_ = G__11294;
vdom = G__11295;
continue;
} else {
var G__11296 = cljs.core.next.call(null,new_c);
var G__11297 = cljs.core.next.call(null,old_c);
var G__11298 = n;
var G__11299 = move_n;
var G__11300 = (n_children__$1 - (1));
var G__11301 = true;
var G__11302 = cljs.core.conj_BANG_.call(null,vdom,null);
new_c = G__11296;
old_c = G__11297;
n = G__11298;
move_n = G__11299;
n_children__$1 = G__11300;
changed_QMARK_ = G__11301;
vdom = G__11302;
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

var G__11303 = cljs.core.next.call(null,new_c);
var G__11304 = cljs.core.next.call(null,old_c);
var G__11305 = (n + (1));
var G__11306 = move_n;
var G__11307 = n_children__$1;
var G__11308 = (function (){var or__5045__auto__ = changed_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (!(node_unchanged_QMARK_));
}
})();
var G__11309 = cljs.core.conj_BANG_.call(null,vdom,new_vdom);
new_c = G__11303;
old_c = G__11304;
n = G__11305;
move_n = G__11306;
n_children__$1 = G__11307;
changed_QMARK_ = G__11308;
vdom = G__11309;
continue;
} else {
if(cljs.core.not.call(null,old_ks.call(null,(new_headers[(3)])))){
var vec__11213 = replicant.core.create_node.call(null,impl,new_headers);
var child = cljs.core.nth.call(null,vec__11213,(0),null);
var child_vdom = cljs.core.nth.call(null,vec__11213,(1),null);
replicant.core.insert_node.call(null,r,el,child,n,n_children__$1);

var G__11310 = cljs.core.next.call(null,new_c);
var G__11311 = (function (){var G__11216 = old_c;
if((old_vdom == null)){
return cljs.core.next.call(null,G__11216);
} else {
return G__11216;
}
})();
var G__11312 = (n + (1));
var G__11313 = move_n;
var G__11314 = (n_children__$1 + (1));
var G__11315 = true;
var G__11316 = cljs.core.conj_BANG_.call(null,vdom,child_vdom);
new_c = G__11310;
old_c = G__11311;
n = G__11312;
move_n = G__11313;
n_children__$1 = G__11314;
changed_QMARK_ = G__11315;
vdom = G__11316;
continue;
} else {
if(((old_nil_QMARK_) || (cljs.core.not.call(null,new_ks.call(null,(old_vdom[(1)])))))){
var temp__5802__auto__ = replicant.core.remove_child.call(null,impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5802__auto__)){
var unmounting_node = temp__5802__auto__;
var G__11317 = new_c;
var G__11318 = cljs.core.next.call(null,old_c);
var G__11319 = (n + (1));
var G__11320 = move_n;
var G__11321 = n_children__$1;
var G__11322 = true;
var G__11323 = cljs.core.conj_BANG_.call(null,vdom,unmounting_node);
new_c = G__11317;
old_c = G__11318;
n = G__11319;
move_n = G__11320;
n_children__$1 = G__11321;
changed_QMARK_ = G__11322;
vdom = G__11323;
continue;
} else {
var G__11324 = new_c;
var G__11325 = cljs.core.next.call(null,old_c);
var G__11326 = n;
var G__11327 = move_n;
var G__11328 = (n_children__$1 - (1));
var G__11329 = true;
var G__11330 = vdom;
new_c = G__11324;
old_c = G__11325;
n = G__11326;
move_n = G__11327;
n_children__$1 = G__11328;
changed_QMARK_ = G__11329;
vdom = G__11330;
continue;
}
} else {
var vec__11217 = replicant.core.move_nodes.call(null,impl,el,new_headers,new_c,old_vdom,old_c,n,n_children__$1);
var nc = cljs.core.nth.call(null,vec__11217,(0),null);
var oc = cljs.core.nth.call(null,vec__11217,(1),null);
var n__$1 = cljs.core.nth.call(null,vec__11217,(2),null);
var move_n__$1 = cljs.core.nth.call(null,vec__11217,(3),null);
var vdom_node = cljs.core.nth.call(null,vec__11217,(4),null);
var G__11331 = nc;
var G__11332 = oc;
var G__11333 = n__$1;
var G__11334 = move_n__$1;
var G__11335 = n_children__$1;
var G__11336 = true;
var G__11337 = (function (){var G__11220 = vdom;
if(cljs.core.truth_(vdom_node)){
return cljs.core.conj_BANG_.call(null,G__11220,vdom_node);
} else {
return G__11220;
}
})();
new_c = G__11331;
old_c = G__11332;
n = G__11333;
move_n = G__11334;
n_children__$1 = G__11335;
changed_QMARK_ = G__11336;
vdom = G__11337;
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
replicant.core.reconcile_STAR_ = (function replicant$core$reconcile_STAR_(p__11338,el,headers,vdom,index){
var map__11339 = p__11338;
var map__11339__$1 = cljs.core.__destructure_map.call(null,map__11339);
var impl = map__11339__$1;
var renderer = cljs.core.get.call(null,map__11339__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));

if(replicant.core.unchanged_QMARK_.call(null,headers,vdom)){
return vdom;
} else {
if(cljs.core.not_EQ_.call(null,(headers[(8)]),(vdom[(8)]))){
var vec__11340 = replicant.core.create_node.call(null,impl,headers);
var node = cljs.core.nth.call(null,vec__11340,(0),null);
var vdom__$1 = cljs.core.nth.call(null,vec__11340,(1),null);
replicant.protocols.replace_child.call(null,renderer,el,node,replicant.protocols.get_child.call(null,renderer,el,index));

return vdom__$1;
} else {
var child = replicant.protocols.get_child.call(null,renderer,el,index);
var headers__$1 = (function (){var or__5045__auto__ = replicant.core.get_alias_headers.call(null,impl,headers);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return headers;
}
})();
var attrs = replicant.core.get_attrs.call(null,headers__$1);
var vdom_attrs = (vdom[(3)]);
var attrs_changed_QMARK_ = replicant.core.reconcile_attributes.call(null,renderer,child,attrs,vdom_attrs);
var vec__11343 = (cljs.core.truth_(new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1((headers__$1[(4)])))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,true], null):replicant.core.get_children_ks.call(null,headers__$1,replicant.core.get_ns.call(null,headers__$1)));
var new_children = cljs.core.nth.call(null,vec__11343,(0),null);
var new_ks = cljs.core.nth.call(null,vec__11343,(1),null);
var inner_html_QMARK_ = cljs.core.nth.call(null,vec__11343,(2),null);
var vec__11346 = (cljs.core.truth_(new cljs.core.Keyword(null,"contenteditable","contenteditable",-770210530).cljs$core$IFn$_invoke$arity$1(vdom_attrs))?(function (){
replicant.protocols.remove_all_children.call(null,renderer,child);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null);
})()
:(cljs.core.truth_(inner_html_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vdom[(4)]),(vdom[(5)]),(vdom[(12)])], null)
));
var old_children = cljs.core.nth.call(null,vec__11346,(0),null);
var old_ks = cljs.core.nth.call(null,vec__11346,(1),null);
var old_nc = cljs.core.nth.call(null,vec__11346,(2),null);
var vec__11349 = replicant.core.update_children.call(null,impl,child,new_children,new_ks,old_children,old_ks,old_nc);
var children_changed_QMARK_ = cljs.core.nth.call(null,vec__11349,(0),null);
var children = cljs.core.nth.call(null,vec__11349,(1),null);
var child_ks = cljs.core.nth.call(null,vec__11349,(2),null);
var n_children = cljs.core.nth.call(null,vec__11349,(3),null);
var attrs_changed_QMARK___$1 = ((attrs_changed_QMARK_) || (cljs.core.not_EQ_.call(null,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((headers__$1[(4)])),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1(vdom_attrs))));
replicant.core.register_hooks.call(null,impl,child,headers__$1,vdom,(cljs.core.truth_((function (){var and__5043__auto__ = attrs_changed_QMARK___$1;
if(and__5043__auto__){
return children_changed_QMARK_;
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895),new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null):((attrs_changed_QMARK___$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null)
)));

var headers__11029__auto__ = headers__$1;
return (new Array((headers__11029__auto__[(0)]),(headers__11029__auto__[(3)]),(headers__11029__auto__[(2)]),attrs,children,child_ks,cljs.core.boolean$.call(null,new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__11029__auto__[(4)]))),(headers__11029__auto__[(7)]),null,null,(headers__11029__auto__[(9)]),(headers__11029__auto__[(10)]),n_children));

}
}
});
replicant.core.perform_post_mount_update = (function replicant$core$perform_post_mount_update(renderer,p__11352){
var vec__11353 = p__11352;
var node = cljs.core.nth.call(null,vec__11353,(0),null);
var mounting_attrs = cljs.core.nth.call(null,vec__11353,(1),null);
var attrs = cljs.core.nth.call(null,vec__11353,(2),null);
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
var len__5769__auto___11368 = arguments.length;
var i__5770__auto___11369 = (0);
while(true){
if((i__5770__auto___11369 < len__5769__auto___11368)){
args__5775__auto__.push((arguments[i__5770__auto___11369]));

var G__11370 = (i__5770__auto___11369 + (1));
i__5770__auto___11369 = G__11370;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic = (function (renderer,el,hiccup,p__11362){
var vec__11363 = p__11362;
var vdom = cljs.core.nth.call(null,vec__11363,(0),null);
var map__11366 = cljs.core.nth.call(null,vec__11363,(1),null);
var map__11366__$1 = cljs.core.__destructure_map.call(null,map__11366);
var unmounts = cljs.core.get.call(null,map__11366__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521));
var aliases = cljs.core.get.call(null,map__11366__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var impl = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"hooks","hooks",-413590103),cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"mounts","mounts",-791474425),cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"unmounts","unmounts",173366521),(function (){var or__5045__auto__ = unmounts;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
}
})(),new cljs.core.Keyword(null,"aliases","aliases",1346874714),aliases], null);
var vdom__$1 = (function (){var headers = replicant.core.get_hiccup_headers.call(null,null,hiccup);

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
return cljs.core.second.call(null,replicant.core.update_children.call(null,impl,el,(cljs.core.truth_(headers)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [headers], null):null),(function (){var G__11367 = cljs.core.PersistentHashSet.EMPTY;
if(cljs.core.truth_(k)){
return cljs.core.conj.call(null,G__11367,k);
} else {
return G__11367;
}
})(),vdom,cljs.core.set.call(null,cljs.core.keep.call(null,(function (p1__11356_SHARP_){
return (p1__11356_SHARP_[(1)]);
}),vdom)),(cljs.core.truth_(cljs.core.first.call(null,vdom))?(1):(0))));
}
})();
var hooks = cljs.core.deref.call(null,new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(impl));
var temp__5802__auto___11371 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"mounts","mounts",-791474425).cljs$core$IFn$_invoke$arity$1(impl)));
if(temp__5802__auto___11371){
var mounts_11372 = temp__5802__auto___11371;
replicant.protocols.next_frame.call(null,renderer,(function (){
cljs.core.run_BANG_.call(null,(function (p1__11357_SHARP_){
return replicant.core.perform_post_mount_update.call(null,renderer,p1__11357_SHARP_);
}),mounts_11372);

return cljs.core.run_BANG_.call(null,replicant.core.call_hook,hooks);
}));
} else {
cljs.core.run_BANG_.call(null,replicant.core.call_hook,hooks);
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hooks","hooks",-413590103),hooks,new cljs.core.Keyword(null,"vdom","vdom",953162958),vdom__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521),new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)], null);
}));

(replicant.core.reconcile.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.reconcile.cljs$lang$applyTo = (function (seq11358){
var G__11359 = cljs.core.first.call(null,seq11358);
var seq11358__$1 = cljs.core.next.call(null,seq11358);
var G__11360 = cljs.core.first.call(null,seq11358__$1);
var seq11358__$2 = cljs.core.next.call(null,seq11358__$1);
var G__11361 = cljs.core.first.call(null,seq11358__$2);
var seq11358__$3 = cljs.core.next.call(null,seq11358__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11359,G__11360,G__11361,seq11358__$3);
}));


//# sourceMappingURL=core.js.map
