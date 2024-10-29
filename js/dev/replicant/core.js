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
if((!(cljs.core.not.call(null,cljs.core.re_find.call(null,/#($|\.)/,"tag"))))){
var fn__10841__auto___11100 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10842__auto___11101 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10843__auto___11102 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11096 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," contains an empty id"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Either complete the id or remove the # character."], null);
var G__11096__$1 = (cljs.core.truth_(fn__10841__auto___11100)?cljs.core.assoc.call(null,G__11096,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10841__auto___11100):G__11096);
var G__11096__$2 = (cljs.core.truth_(alias__10842__auto___11101)?cljs.core.assoc.call(null,G__11096__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10842__auto___11101):G__11096__$1);
if(cljs.core.truth_(fd__10843__auto___11102)){
return cljs.core.assoc.call(null,G__11096__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10843__auto___11102);
} else {
return G__11096__$2;
}
})());
} else {
}

if((!(cljs.core.not.call(null,cljs.core.re_find.call(null,/#[^a-zA-Z_\.]/,"tag"))))){
var fn__10841__auto___11103 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10842__auto___11104 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10843__auto___11105 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11097 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," contains an invalid id"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"IDs must start with a letter."], null);
var G__11097__$1 = (cljs.core.truth_(fn__10841__auto___11103)?cljs.core.assoc.call(null,G__11097,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10841__auto___11103):G__11097);
var G__11097__$2 = (cljs.core.truth_(alias__10842__auto___11104)?cljs.core.assoc.call(null,G__11097__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10842__auto___11104):G__11097__$1);
if(cljs.core.truth_(fd__10843__auto___11105)){
return cljs.core.assoc.call(null,G__11097__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10843__auto___11105);
} else {
return G__11097__$2;
}
})());
} else {
}

if((!(cljs.core.not.call(null,cljs.core.re_find.call(null,/\.$/,"tag"))))){
var fn__10841__auto___11106 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10842__auto___11107 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10843__auto___11108 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11098 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," contains an empty class"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"This may cause a DOMException and is considered a coding error. Replicant will not sacrifice performance to work around it."], null);
var G__11098__$1 = (cljs.core.truth_(fn__10841__auto___11106)?cljs.core.assoc.call(null,G__11098,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10841__auto___11106):G__11098);
var G__11098__$2 = (cljs.core.truth_(alias__10842__auto___11107)?cljs.core.assoc.call(null,G__11098__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10842__auto___11107):G__11098__$1);
if(cljs.core.truth_(fd__10843__auto___11108)){
return cljs.core.assoc.call(null,G__11098__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10843__auto___11108);
} else {
return G__11098__$2;
}
})());
} else {
}

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
var tag_name = (function (){var G__11099 = (cljs.core.truth_(id_index)?tag__$1.substring((0),id_index):(cljs.core.truth_(class_index)?tag__$1.substring((0),class_index):tag__$1
));
if(cljs.core.truth_(ns)){
return cljs.core.keyword.call(null,ns,G__11099);
} else {
return G__11099;
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
var pt__9339__auto__ = replicant.core.parse_tag.call(null,sym);
var G__11109 = pt__9339__auto__;
G__11109.push((function (){var temp__5804__auto__ = new cljs.core.Keyword("replicant","key","replicant/key",-670108117).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5804__auto__)){
var k__9333__auto__ = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pt__9339__auto__[(0)]),k__9333__auto__], null);
} else {
return null;
}
})());

G__11109.push(attrs);

G__11109.push(((has_args_QMARK_)?cljs.core.rest.call(null,args):args));

G__11109.push(ns);

G__11109.push(sexp);

G__11109.push(null);

G__11109.push((pt__9339__auto__[(0)]));

G__11109.push(null);

return G__11109;
} else {
var text__9346__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexp);
return (new Array(null,null,null,null,null,null,null,text__9346__auto__,text__9346__auto__,null,null));
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
return cljs.core.keep.call(null,(function (p1__11110_SHARP_){
return cljs.core.not_empty.call(null,p1__11110_SHARP_.trim());
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
var vec__11112 = cljs.core.map.call(null,(function (p1__11111_SHARP_){
return p1__11111_SHARP_.trim();
}),kv.split(":"));
var k = cljs.core.nth.call(null,vec__11112,(0),null);
var v = cljs.core.nth.call(null,vec__11112,(1),null);
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
var G__11115 = cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499),new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009));
var G__11115__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,G__11115,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__11115);
var G__11115__$2 = ((cljs.core.seq.call(null,classes__$1))?cljs.core.assoc.call(null,G__11115__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),classes__$1):G__11115__$1);
if(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs) === 'string'){
return cljs.core.update.call(null,G__11115__$2,new cljs.core.Keyword(null,"style","style",-496642736),replicant.core.explode_styles);
} else {
return G__11115__$2;
}
});
/**
 * Given `headers` as produced by `get-hiccup-headers`, returns a map of all HTML
 *   attributes.
 */
replicant.core.get_attrs = (function replicant$core$get_attrs(headers){
if((!((!(cljs.core.contains_QMARK_.call(null,(headers[(4)]),new cljs.core.Keyword(null,"className","className",-1983287057))))))){
var fn__10841__auto___11119 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10842__auto___11120 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10843__auto___11121 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11116 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Use :class, not :className",new cljs.core.Keyword(null,"message","message",-406056002),":className is not supported, please use :class instead. It takes a keyword, a string, or a collection of either of those."], null);
var G__11116__$1 = (cljs.core.truth_(fn__10841__auto___11119)?cljs.core.assoc.call(null,G__11116,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10841__auto___11119):G__11116);
var G__11116__$2 = (cljs.core.truth_(alias__10842__auto___11120)?cljs.core.assoc.call(null,G__11116__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10842__auto___11120):G__11116__$1);
if(cljs.core.truth_(fd__10843__auto___11121)){
return cljs.core.assoc.call(null,G__11116__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10843__auto___11121);
} else {
return G__11116__$2;
}
})());
} else {
}

if((!((function (){var class__10903__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
return (((!(typeof class__10903__auto__ === 'string'))) || ((class__10903__auto__.indexOf(" ") < (0))));
})()))){
var fn__10841__auto___11122 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10842__auto___11123 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10843__auto___11124 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11117 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid space separated :class strings",new cljs.core.Keyword(null,"message","message",-406056002),(function (){var class__10903__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
return [":class supports collections of keywords and/or strings as classes. These perform better, and are usually more convenient to work with. Solve by converting ",cljs.core.pr_str.call(null,class__10903__auto__)," to ",cljs.core.pr_str.call(null,cljs.core.vec.call(null,class__10903__auto__.split(" ")))].join('');
})()], null);
var G__11117__$1 = (cljs.core.truth_(fn__10841__auto___11122)?cljs.core.assoc.call(null,G__11117,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10841__auto___11122):G__11117);
var G__11117__$2 = (cljs.core.truth_(alias__10842__auto___11123)?cljs.core.assoc.call(null,G__11117__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10842__auto___11123):G__11117__$1);
if(cljs.core.truth_(fd__10843__auto___11124)){
return cljs.core.assoc.call(null,G__11117__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10843__auto___11124);
} else {
return G__11117__$2;
}
})());
} else {
}

if((!((!(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1((headers[(4)])) === 'string'))))){
var fn__10841__auto___11125 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10842__auto___11126 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10843__auto___11127 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11118 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid string styles",new cljs.core.Keyword(null,"message","message",-406056002),":style supports structured maps of CSS property/value pairs. Strings must be parsed, so they're both slower and harder to read and write."], null);
var G__11118__$1 = (cljs.core.truth_(fn__10841__auto___11125)?cljs.core.assoc.call(null,G__11118,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10841__auto___11125):G__11118);
var G__11118__$2 = (cljs.core.truth_(alias__10842__auto___11126)?cljs.core.assoc.call(null,G__11118__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10842__auto___11126):G__11118__$1);
if(cljs.core.truth_(fd__10843__auto___11127)){
return cljs.core.assoc.call(null,G__11118__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10843__auto___11127);
} else {
return G__11118__$2;
}
})());
} else {
}

return replicant.core.prep_attrs.call(null,(headers[(4)]),(headers[(1)]),(headers[(2)]));
});
replicant.core.merge_attrs = (function replicant$core$merge_attrs(attrs,overrides){
var G__11128 = cljs.core.merge.call(null,attrs,cljs.core.dissoc.call(null,overrides,new cljs.core.Keyword(null,"style","style",-496642736)));
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides);
}
})())){
return cljs.core.update.call(null,G__11128,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides));
} else {
return G__11128;
}
});
replicant.core.get_mounting_attrs = (function replicant$core$get_mounting_attrs(headers){
var temp__5802__auto__ = new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(temp__5802__auto__)){
var mounting = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.core.get_attrs.call(null,headers),(function (){var headers__$1 = (function (){var G__11129 = headers;
if(cljs.core.truth_(mounting)){
var headers__9353__auto__ = G__11129;
(headers__9353__auto__[(4)] = replicant.core.merge_attrs.call(null,(headers__9353__auto__[(4)]),mounting));

return headers__9353__auto__;
} else {
return G__11129;
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
return cljs.core.mapv.call(null,(function (p1__11130_SHARP_){
var G__11131 = p1__11130_SHARP_;
if((G__11131 == null)){
return null;
} else {
return replicant.core.get_hiccup_headers.call(null,ns,G__11131);
}
}),replicant.core.flatten_seqs.call(null,(headers[(5)])));
}
});
/**
 * Like `get-children` but returns a tuple of `[children ks]` where `ks` is a set
 *   of the keys in `children`.
 */
replicant.core.get_children_ks = (function replicant$core$get_children_ks(headers,ns){
var vec__11132 = cljs.core.reduce.call(null,(function (p__11135,hiccup){
var vec__11136 = p__11135;
var children = cljs.core.nth.call(null,vec__11136,(0),null);
var ks = cljs.core.nth.call(null,vec__11136,(1),null);
if(cljs.core.truth_(hiccup)){
var headers__$1 = replicant.core.get_hiccup_headers.call(null,ns,hiccup);
var k = (headers__$1[(3)]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,children,headers__$1),(function (){var G__11139 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.call(null,G__11139,k);
} else {
return G__11139;
}
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,children,null),ks], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY)], null),replicant.core.flatten_seqs.call(null,(headers[(5)])));
var children = cljs.core.nth.call(null,vec__11132,(0),null);
var ks = cljs.core.nth.call(null,vec__11132,(1),null);
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
var rd = (function (){var G__11140 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","dom-event","replicant.trigger/dom-event",930136738),new cljs.core.Keyword("replicant","js-event","replicant/js-event",1927942146),e,new cljs.core.Keyword("replicant","dom-event","replicant/dom-event",-1613182512),e], null);
if(cljs.core.truth_(node)){
return cljs.core.assoc.call(null,G__11140,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node);
} else {
return G__11140;
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
replicant.core.call_hook = (function replicant$core$call_hook(p__11141){
var vec__11142 = p__11141;
var hook = cljs.core.nth.call(null,vec__11142,(0),null);
var k = cljs.core.nth.call(null,vec__11142,(1),null);
var node = cljs.core.nth.call(null,vec__11142,(2),null);
var new$ = cljs.core.nth.call(null,vec__11142,(3),null);
var old = cljs.core.nth.call(null,vec__11142,(4),null);
var details = cljs.core.nth.call(null,vec__11142,(5),null);
var f = replicant.core.get_life_cycle_hook.call(null,hook);
var life_cycle = (((old == null))?new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865):(((new$ == null))?new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184):new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235)
));
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),k)) || (((((cljs.core._EQ_.call(null,k,new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162))) && (cljs.core._EQ_.call(null,life_cycle,new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865))))) || (((((cljs.core._EQ_.call(null,k,new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753))) && (cljs.core._EQ_.call(null,life_cycle,new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184))))) || (((cljs.core._EQ_.call(null,k,new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394))) && (cljs.core._EQ_.call(null,life_cycle,new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235))))))))))){
return f.call(null,(function (){var G__11145 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","life-cycle","replicant.trigger/life-cycle",-205660972),new cljs.core.Keyword("replicant","life-cycle","replicant/life-cycle",1802888458),life_cycle,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node], null);
if(cljs.core.truth_(details)){
return cljs.core.assoc.call(null,G__11145,new cljs.core.Keyword("replicant","details","replicant/details",-1846218867),details);
} else {
return G__11145;
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
var len__5769__auto___11162 = arguments.length;
var i__5770__auto___11163 = (0);
while(true){
if((i__5770__auto___11163 < len__5769__auto___11162)){
args__5775__auto__.push((arguments[i__5770__auto___11163]));

var G__11164 = (i__5770__auto___11163 + (1));
i__5770__auto___11163 = G__11164;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (p__11150,node,headers,p__11151){
var map__11152 = p__11150;
var map__11152__$1 = cljs.core.__destructure_map.call(null,map__11152);
var hooks = cljs.core.get.call(null,map__11152__$1,new cljs.core.Keyword(null,"hooks","hooks",-413590103));
var vec__11153 = p__11151;
var vdom = cljs.core.nth.call(null,vec__11153,(0),null);
var details = cljs.core.nth.call(null,vec__11153,(1),null);
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
var headers_sexp = (function (){var G__11156 = headers;
if((G__11156 == null)){
return null;
} else {
return (G__11156[(7)]);
}
})();
var vdom_sexp = (function (){var G__11157 = vdom;
if((G__11157 == null)){
return null;
} else {
return (G__11157[(7)]);
}
})();
return cljs.core._vreset_BANG_.call(null,hooks,cljs.core.into.call(null,cljs.core._deref.call(null,hooks),cljs.core.map.call(null,(function (p__11158){
var vec__11159 = p__11158;
var k = cljs.core.nth.call(null,vec__11159,(0),null);
var hook = cljs.core.nth.call(null,vec__11159,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook,k,node,headers_sexp,vdom_sexp,details], null);
}),new_hooks)));
}
}));

(replicant.core.register_hooks.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.register_hooks.cljs$lang$applyTo = (function (seq11146){
var G__11147 = cljs.core.first.call(null,seq11146);
var seq11146__$1 = cljs.core.next.call(null,seq11146);
var G__11148 = cljs.core.first.call(null,seq11146__$1);
var seq11146__$2 = cljs.core.next.call(null,seq11146__$1);
var G__11149 = cljs.core.first.call(null,seq11146__$2);
var seq11146__$3 = cljs.core.next.call(null,seq11146__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11147,G__11148,G__11149,seq11146__$3);
}));

replicant.core.register_mount = (function replicant$core$register_mount(p__11165,node,mounting_attrs,attrs){
var map__11166 = p__11165;
var map__11166__$1 = cljs.core.__destructure_map.call(null,map__11166);
var mounts = cljs.core.get.call(null,map__11166__$1,new cljs.core.Keyword(null,"mounts","mounts",-791474425));
return cljs.core._vreset_BANG_.call(null,mounts,cljs.core.conj.call(null,cljs.core._deref.call(null,mounts),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,mounting_attrs,attrs], null)));
});
replicant.core.update_styles = (function replicant$core$update_styles(renderer,el,new_styles,old_styles){
var new_ks = cljs.core.set.call(null,cljs.core.remove.call(null,(function (p1__11167_SHARP_){
return (p1__11167_SHARP_.call(null,new_styles) == null);
}),cljs.core.keys.call(null,new_styles)));
var old_ks = cljs.core.set.call(null,cljs.core.keys.call(null,old_styles));
cljs.core.run_BANG_.call(null,(function (p1__11168_SHARP_){
return replicant.protocols.remove_style.call(null,renderer,el,p1__11168_SHARP_);
}),cljs.core.remove.call(null,new_ks,old_ks));

return cljs.core.run_BANG_.call(null,(function (p1__11169_SHARP_){
var new_style = p1__11169_SHARP_.call(null,new_styles);
if(cljs.core.not_EQ_.call(null,new_style,p1__11169_SHARP_.call(null,old_styles))){
if((!(((typeof p1__11169_SHARP_ === 'string') || ((((p1__11169_SHARP_ instanceof cljs.core.Keyword)) || ((p1__11169_SHARP_ instanceof cljs.core.Symbol)))))))){
var fn__10841__auto___11172 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10842__auto___11173 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10843__auto___11174 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11170 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Style key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11169_SHARP_)," should be a keyword"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant expects your style keys to be strings, or the very least something that supports `name`. Other types will not work as expected."], null);
var G__11170__$1 = (cljs.core.truth_(fn__10841__auto___11172)?cljs.core.assoc.call(null,G__11170,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10841__auto___11172):G__11170);
var G__11170__$2 = (cljs.core.truth_(alias__10842__auto___11173)?cljs.core.assoc.call(null,G__11170__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10842__auto___11173):G__11170__$1);
if(cljs.core.truth_(fd__10843__auto___11174)){
return cljs.core.assoc.call(null,G__11170__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10843__auto___11174);
} else {
return G__11170__$2;
}
})());
} else {
}

if((!((function (){var name__10942__auto__ = cljs.core.name.call(null,p1__11169_SHARP_);
return ((clojure.string.starts_with_QMARK_.call(null,name__10942__auto__,"--")) || (cljs.core._EQ_.call(null,name__10942__auto__,clojure.string.lower_case.call(null,name__10942__auto__))));
})()))){
var fn__10841__auto___11175 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10842__auto___11176 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10843__auto___11177 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11171 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash_k.call(null,p1__11169_SHARP_)),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11169_SHARP_)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant passes style keys directly to `el.style.setProperty`, which expects CSS-style dash-cased property names."], null);
var G__11171__$1 = (cljs.core.truth_(fn__10841__auto___11175)?cljs.core.assoc.call(null,G__11171,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10841__auto___11175):G__11171);
var G__11171__$2 = (cljs.core.truth_(alias__10842__auto___11176)?cljs.core.assoc.call(null,G__11171__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10842__auto___11176):G__11171__$1);
if(cljs.core.truth_(fd__10843__auto___11177)){
return cljs.core.assoc.call(null,G__11171__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10843__auto___11177);
} else {
return G__11171__$2;
}
})());
} else {
}

return replicant.protocols.set_style.call(null,renderer,el,p1__11169_SHARP_,replicant.core.get_style_val.call(null,p1__11169_SHARP_,new_style));
} else {
return null;
}
}),new_ks);
});
replicant.core.update_classes = (function replicant$core$update_classes(renderer,el,new_classes,old_classes){
cljs.core.run_BANG_.call(null,(function (p1__11178_SHARP_){
return replicant.protocols.remove_class.call(null,renderer,el,p1__11178_SHARP_);
}),cljs.core.remove.call(null,cljs.core.set.call(null,new_classes),old_classes));

return cljs.core.run_BANG_.call(null,(function (p1__11179_SHARP_){
return replicant.protocols.add_class.call(null,renderer,el,p1__11179_SHARP_);
}),cljs.core.remove.call(null,cljs.core.set.call(null,old_classes),new_classes));
});
replicant.core.add_event_listeners = (function replicant$core$add_event_listeners(renderer,el,val){
return cljs.core.run_BANG_.call(null,(function (p__11180){
var vec__11181 = p__11180;
var event = cljs.core.nth.call(null,vec__11181,(0),null);
var handler = cljs.core.nth.call(null,vec__11181,(1),null);
if((!((function (){var event__10914__auto__ = cljs.core.name.call(null,event);
return ((cljs.core._EQ_.call(null,"DOMContentLoaded",event__10914__auto__)) || (cljs.core._EQ_.call(null,event__10914__auto__,clojure.string.lower_case.call(null,event__10914__auto__))));
})()))){
var fn__10841__auto___11185 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10842__auto___11186 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10843__auto___11187 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11184 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.call(null,clojure.string.lower_case.call(null,cljs.core.name.call(null,event)))),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Most event names should be in all lower-case. Replicant passes your event names directly to addEventListener, and mis-cased event names will fail silently."], null);
var G__11184__$1 = (cljs.core.truth_(fn__10841__auto___11185)?cljs.core.assoc.call(null,G__11184,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10841__auto___11185):G__11184);
var G__11184__$2 = (cljs.core.truth_(alias__10842__auto___11186)?cljs.core.assoc.call(null,G__11184__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10842__auto___11186):G__11184__$1);
if(cljs.core.truth_(fd__10843__auto___11187)){
return cljs.core.assoc.call(null,G__11184__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10843__auto___11187);
} else {
return G__11184__$2;
}
})());
} else {
}

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
cljs.core.run_BANG_.call(null,(function (p1__11188_SHARP_){
return replicant.protocols.remove_event_handler.call(null,renderer,el,p1__11188_SHARP_);
}),cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.filter.call(null,new_handlers,cljs.core.keys.call(null,new_handlers))),cljs.core.filter.call(null,old_handlers,cljs.core.keys.call(null,old_handlers))));

return replicant.core.add_event_listeners.call(null,renderer,el,cljs.core.remove.call(null,(function (p1__11189_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.val.call(null,p1__11189_SHARP_),cljs.core.get.call(null,old_handlers,cljs.core.key.call(null,p1__11189_SHARP_)));
}),new_handlers));
});
replicant.core.xlinkns = "http://www.w3.org/1999/xlink";
replicant.core.xmlns = "http://www.w3.org/XML/1998/namespace";
replicant.core.set_attr_val = (function replicant$core$set_attr_val(renderer,el,attr,v){
var an = cljs.core.name.call(null,attr);
if((!((!(clojure.string.starts_with_QMARK_.call(null,cljs.core.name.call(null,attr),"on")))))){
var fn__10841__auto___11193 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10842__auto___11194 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10843__auto___11195 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11190 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Set event listeners in the :on map",new cljs.core.Keyword(null,"message","message",-406056002),["Event handler attributes are not supported. Instead of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," set :on {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.call(null,replicant.asserts.camel__GT_dash.call(null,cljs.core.name.call(null,attr).substring((2)))))," ,,,}"].join('')], null);
var G__11190__$1 = (cljs.core.truth_(fn__10841__auto___11193)?cljs.core.assoc.call(null,G__11190,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10841__auto___11193):G__11190);
var G__11190__$2 = (cljs.core.truth_(alias__10842__auto___11194)?cljs.core.assoc.call(null,G__11190__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10842__auto___11194):G__11190__$1);
if(cljs.core.truth_(fd__10843__auto___11195)){
return cljs.core.assoc.call(null,G__11190__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10843__auto___11195);
} else {
return G__11190__$2;
}
})());
} else {
}

return replicant.protocols.set_attribute.call(null,renderer,el,an,(function (){var G__11191 = v;
if((((v instanceof cljs.core.Keyword)) || ((v instanceof cljs.core.Symbol)))){
return cljs.core.name.call(null,G__11191);
} else {
return G__11191;
}
})(),(function (){var G__11192 = cljs.core.PersistentArrayMap.EMPTY;
var G__11192__$1 = ((cljs.core._EQ_.call(null,(0),an.indexOf("xml:")))?cljs.core.assoc.call(null,G__11192,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xmlns):G__11192);
if(cljs.core._EQ_.call(null,(0),an.indexOf("xlink:"))){
return cljs.core.assoc.call(null,G__11192__$1,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xlinkns);
} else {
return G__11192__$1;
}
})());
});
replicant.core.update_attr = (function replicant$core$update_attr(renderer,el,attr,new$,old){
if(cljs.core.truth_(cljs.core.namespace.call(null,attr))){
return null;
} else {
var G__11196 = attr;
var G__11196__$1 = (((G__11196 instanceof cljs.core.Keyword))?G__11196.fqn:null);
switch (G__11196__$1) {
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
return cljs.core.reduce.call(null,(function (p1__11199_SHARP_,p2__11198_SHARP_){
return replicant.core.update_attr.call(null,renderer,el,p2__11198_SHARP_,new_attrs,old_attrs);
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
return cljs.core.run_BANG_.call(null,(function (p1__11200_SHARP_){
if((!(((typeof p1__11200_SHARP_ === 'string') || ((((p1__11200_SHARP_ instanceof cljs.core.Keyword)) || ((p1__11200_SHARP_ instanceof cljs.core.Symbol)))))))){
var fn__10841__auto___11203 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10842__auto___11204 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10843__auto___11205 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11201 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Style key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11200_SHARP_)," should be a keyword"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant expects your style keys to be strings, or the very least something that supports `name`. Other types will not work as expected."], null);
var G__11201__$1 = (cljs.core.truth_(fn__10841__auto___11203)?cljs.core.assoc.call(null,G__11201,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10841__auto___11203):G__11201);
var G__11201__$2 = (cljs.core.truth_(alias__10842__auto___11204)?cljs.core.assoc.call(null,G__11201__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10842__auto___11204):G__11201__$1);
if(cljs.core.truth_(fd__10843__auto___11205)){
return cljs.core.assoc.call(null,G__11201__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10843__auto___11205);
} else {
return G__11201__$2;
}
})());
} else {
}

if((!((function (){var name__10942__auto__ = cljs.core.name.call(null,p1__11200_SHARP_);
return ((clojure.string.starts_with_QMARK_.call(null,name__10942__auto__,"--")) || (cljs.core._EQ_.call(null,name__10942__auto__,clojure.string.lower_case.call(null,name__10942__auto__))));
})()))){
var fn__10841__auto___11206 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10842__auto___11207 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10843__auto___11208 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11202 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash_k.call(null,p1__11200_SHARP_)),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11200_SHARP_)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant passes style keys directly to `el.style.setProperty`, which expects CSS-style dash-cased property names."], null);
var G__11202__$1 = (cljs.core.truth_(fn__10841__auto___11206)?cljs.core.assoc.call(null,G__11202,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10841__auto___11206):G__11202);
var G__11202__$2 = (cljs.core.truth_(alias__10842__auto___11207)?cljs.core.assoc.call(null,G__11202__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10842__auto___11207):G__11202__$1);
if(cljs.core.truth_(fd__10843__auto___11208)){
return cljs.core.assoc.call(null,G__11202__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10843__auto___11208);
} else {
return G__11202__$2;
}
})());
} else {
}

return replicant.protocols.set_style.call(null,renderer,el,p1__11200_SHARP_,replicant.core.get_style_val.call(null,p1__11200_SHARP_,cljs.core.get.call(null,new_styles,p1__11200_SHARP_)));
}),cljs.core.filter.call(null,new_styles,cljs.core.keys.call(null,new_styles)));
});
replicant.core.set_classes = (function replicant$core$set_classes(renderer,el,new_classes){
return cljs.core.run_BANG_.call(null,(function (p1__11209_SHARP_){
return replicant.protocols.add_class.call(null,renderer,el,p1__11209_SHARP_);
}),new_classes);
});
replicant.core.set_event_listeners = (function replicant$core$set_event_listeners(renderer,el,new_handlers){
return replicant.core.add_event_listeners.call(null,renderer,el,new_handlers);
});
replicant.core.set_attr = (function replicant$core$set_attr(renderer,el,attr,new$){
if(cljs.core.truth_(cljs.core.namespace.call(null,attr))){
return null;
} else {
var G__11210 = attr;
var G__11210__$1 = (((G__11210 instanceof cljs.core.Keyword))?G__11210.fqn:null);
switch (G__11210__$1) {
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
return cljs.core.run_BANG_.call(null,(function (p1__11212_SHARP_){
return replicant.core.set_attr.call(null,renderer,el,p1__11212_SHARP_,new_attrs);
}),cljs.core.filter.call(null,new_attrs,cljs.core.keys.call(null,new_attrs)));
});
replicant.core.render_default_alias = (function replicant$core$render_default_alias(tag_name,_attrs,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-replicant-error","data-replicant-error",1583668098),["Undefined alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name)].join('')], null),(function (){var iter__5523__auto__ = (function replicant$core$render_default_alias_$_iter__11213(s__11214){
return (new cljs.core.LazySeq(null,(function (){
var s__11214__$1 = s__11214;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11214__$1);
if(temp__5804__auto__){
var s__11214__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11214__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__11214__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__11216 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__11215 = (0);
while(true){
if((i__11215 < size__5522__auto__)){
var child = cljs.core._nth.call(null,c__5521__auto__,i__11215);
cljs.core.chunk_append.call(null,b__11216,(function (){var G__11217 = child;
if((((!(typeof child === 'string'))) && ((!(replicant.core.hiccup_QMARK_.call(null,child)))))){
return cljs.core.pr_str.call(null,G__11217);
} else {
return G__11217;
}
})());

var G__11219 = (i__11215 + (1));
i__11215 = G__11219;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11216),replicant$core$render_default_alias_$_iter__11213.call(null,cljs.core.chunk_rest.call(null,s__11214__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11216),null);
}
} else {
var child = cljs.core.first.call(null,s__11214__$2);
return cljs.core.cons.call(null,(function (){var G__11218 = child;
if((((!(typeof child === 'string'))) && ((!(replicant.core.hiccup_QMARK_.call(null,child)))))){
return cljs.core.pr_str.call(null,G__11218);
} else {
return G__11218;
}
})(),replicant$core$render_default_alias_$_iter__11213.call(null,cljs.core.rest.call(null,s__11214__$2)));
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
replicant.core.get_alias_headers = (function replicant$core$get_alias_headers(p__11221,headers){
var map__11222 = p__11221;
var map__11222__$1 = cljs.core.__destructure_map.call(null,map__11222);
var aliases = cljs.core.get.call(null,map__11222__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
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
try{var hh__9359__auto__ = replicant.core.get_hiccup_headers.call(null,null,f.call(null,(function (){var G__11224 = (headers[(4)]);
var G__11224__$1 = (cljs.core.truth_(id)?cljs.core.update.call(null,G__11224,new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__11220_SHARP_){
var or__5045__auto__ = p1__11220_SHARP_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return id;
}
})):G__11224);
if(cljs.core.seq.call(null,classes)){
return cljs.core.update.call(null,G__11224__$1,new cljs.core.Keyword(null,"class","class",-2030961996),replicant.core.add_classes,classes);
} else {
return G__11224__$1;
}
})(),cljs.core.seq.call(null,replicant.core.flatten_seqs.call(null,(headers[(5)])))));
if(cljs.core.truth_(hh__9359__auto__)){
var G__11225 = hh__9359__auto__;
(G__11225[(3)] = (function (){var or__5045__auto__ = (headers[(3)]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (hh__9359__auto__[(3)]);
}
})());

(G__11225[(7)] = (hh__9359__auto__[(7)]));

(G__11225[(9)] = tag_name);

(G__11225[(10)] = (headers[(7)]));

return G__11225;
} else {
return null;
}
}catch (e11223){var e = e11223;
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
replicant.core.create_node = (function replicant$core$create_node(p__11226,headers){
var map__11227 = p__11226;
var map__11227__$1 = cljs.core.__destructure_map.call(null,map__11227);
var impl = map__11227__$1;
var renderer = cljs.core.get.call(null,map__11227__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
if(cljs.core.truth_(headers)){
var temp__5804__auto___11243 = (function (){var or__5045__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,(headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5804__auto___11243)){
var ctx__10835__auto___11244 = temp__5804__auto___11243;
cljs.core.reset_BANG_.call(null,replicant.assert.current_context,ctx__10835__auto___11244);
} else {
}

cljs.core.reset_BANG_.call(null,replicant.assert.current_node,(headers[(7)]));
} else {
}

var or__5045__auto__ = (function (){var temp__5804__auto__ = (headers[(8)]);
if(cljs.core.truth_(temp__5804__auto__)){
var text = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.protocols.create_text_node.call(null,renderer,text),(function (){var text__11055__auto__ = text;
return (new Array(null,null,null,null,null,null,false,text__11055__auto__,text__11055__auto__,null,null,null));
})()], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var G__11228 = replicant.core.get_alias_headers.call(null,impl,headers);
if((G__11228 == null)){
return null;
} else {
return replicant.core.create_node.call(null,impl,G__11228);
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
var vec__11229 = replicant.core.get_mounting_attrs.call(null,headers);
var attrs = cljs.core.nth.call(null,vec__11229,(0),null);
var mounting_attrs = cljs.core.nth.call(null,vec__11229,(1),null);
var _ = replicant.core.set_attributes.call(null,renderer,node,(function (){var or__5045__auto____$2 = mounting_attrs;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return attrs;
}
})());
var vec__11232 = cljs.core.reduce.call(null,(function (p__11235,child_headers){
var vec__11236 = p__11235;
var children = cljs.core.nth.call(null,vec__11236,(0),null);
var ks = cljs.core.nth.call(null,vec__11236,(1),null);
var n = cljs.core.nth.call(null,vec__11236,(2),null);
if(cljs.core.truth_(child_headers)){
var vec__11239 = replicant.core.create_node.call(null,impl,child_headers);
var child_node = cljs.core.nth.call(null,vec__11239,(0),null);
var vdom = cljs.core.nth.call(null,vec__11239,(1),null);
var k = (vdom[(1)]);
replicant.protocols.append_child.call(null,renderer,node,child_node);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,children,vdom),(function (){var G__11242 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.call(null,G__11242,k);
} else {
return G__11242;
}
})(),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,children,null),ks,n], null);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY),(0)], null),replicant.core.get_children.call(null,headers,ns));
var children = cljs.core.nth.call(null,vec__11232,(0),null);
var ks = cljs.core.nth.call(null,vec__11232,(1),null);
var n_children = cljs.core.nth.call(null,vec__11232,(2),null);
replicant.core.register_hooks.call(null,impl,node,headers);

if(cljs.core.truth_(mounting_attrs)){
replicant.core.register_mount.call(null,impl,node,mounting_attrs,attrs);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,(function (){var headers__11062__auto__ = headers;
return (new Array((headers__11062__auto__[(0)]),(headers__11062__auto__[(3)]),(headers__11062__auto__[(2)]),attrs,cljs.core.persistent_BANG_.call(null,children),cljs.core.persistent_BANG_.call(null,ks),cljs.core.boolean$.call(null,new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__11062__auto__[(4)]))),(headers__11062__auto__[(7)]),null,null,(headers__11062__auto__[(9)]),(headers__11062__auto__[(10)]),n_children));
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
var G__11245 = (coll_n + (1));
var G__11246 = dom_n;
var G__11247 = cljs.core.next.call(null,xs__$1);
coll_n = G__11245;
dom_n = G__11246;
xs__$1 = G__11247;
continue;
} else {
if(cljs.core.truth_(f.call(null,cljs.core.first.call(null,xs__$1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll_n,dom_n], null);
} else {
var G__11248 = (coll_n + (1));
var G__11249 = (dom_n + (1));
var G__11250 = cljs.core.next.call(null,xs__$1);
coll_n = G__11248;
dom_n = G__11249;
xs__$1 = G__11250;
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
replicant.core.insert_children = (function replicant$core$insert_children(p__11251,el,children,vdom){
var map__11252 = p__11251;
var map__11252__$1 = cljs.core.__destructure_map.call(null,map__11252);
var impl = map__11252__$1;
var renderer = cljs.core.get.call(null,map__11252__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
return cljs.core.reduce.call(null,(function (p__11253,child){
var vec__11254 = p__11253;
var res = cljs.core.nth.call(null,vec__11254,(0),null);
var n = cljs.core.nth.call(null,vec__11254,(1),null);
if(cljs.core.truth_(child)){
var vec__11257 = replicant.core.create_node.call(null,impl,child);
var node = cljs.core.nth.call(null,vec__11257,(0),null);
var vdom__$1 = cljs.core.nth.call(null,vec__11257,(1),null);
replicant.protocols.append_child.call(null,renderer,el,node);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,res,vdom__$1),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,res,null),n], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vdom,(0)], null),children);
});
replicant.core.remove_child = (function replicant$core$remove_child(p__11260,unmounts,el,n,vdom){
var map__11261 = p__11260;
var map__11261__$1 = cljs.core.__destructure_map.call(null,map__11261);
var impl = map__11261__$1;
var renderer = cljs.core.get.call(null,map__11261__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
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
var vdom__$1 = (function (){var vdom__11049__auto__ = vdom;
(vdom__11049__auto__[(9)] = cljs.core._vreset_BANG_.call(null,replicant.vdom.id,(cljs.core._deref.call(null,replicant.vdom.id) + (1))));

return vdom__11049__auto__;
})();
var child = replicant.protocols.get_child.call(null,renderer,el,n);
replicant.core.update_attributes.call(null,renderer,child,attrs,(vdom__$1[(3)]));

cljs.core._vreset_BANG_.call(null,new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.conj.call(null,cljs.core._deref.call(null,new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.on_transition_end.call(null,renderer,child,(function (){
cljs.core._vreset_BANG_.call(null,new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.disj.call(null,cljs.core._deref.call(null,new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.remove_child.call(null,renderer,el,child);

var temp__5804__auto___11262 = new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((vdom__$1[(3)]));
if(cljs.core.truth_(temp__5804__auto___11262)){
var hook_11263 = temp__5804__auto___11262;
replicant.core.call_hook.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook_11263,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),child,null,vdom__$1], null));
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
return cljs.core._EQ_.call(null,(function (){var G__11264 = headers;
if((G__11264 == null)){
return null;
} else {
return (G__11264[(7)]);
}
})(),(function (){var G__11265 = vdom;
if((G__11265 == null)){
return null;
} else {
var vdom__11038__auto__ = G__11265;
var or__5045__auto__ = (vdom__11038__auto__[(11)]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (vdom__11038__auto__[(7)]);
}
}
})());
});
replicant.core.move_nodes = (function replicant$core$move_nodes(p__11268,el,headers,new_children,vdom,old_children,n,n_children){
var map__11269 = p__11268;
var map__11269__$1 = cljs.core.__destructure_map.call(null,map__11269);
var impl = map__11269__$1;
var renderer = cljs.core.get.call(null,map__11269__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var vec__11270 = (cljs.core.truth_((headers[(3)]))?replicant.core.index_of.call(null,(function (p1__11266_SHARP_){
return replicant.core.same_QMARK_.call(null,headers,p1__11266_SHARP_);
}),old_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var o_idx = cljs.core.nth.call(null,vec__11270,(0),null);
var o_dom_idx = cljs.core.nth.call(null,vec__11270,(1),null);
var vec__11273 = (cljs.core.truth_((vdom[(1)]))?replicant.core.index_of.call(null,(function (p1__11267_SHARP_){
return replicant.core.same_QMARK_.call(null,p1__11267_SHARP_,vdom);
}),new_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var n_idx = cljs.core.nth.call(null,vec__11273,(0),null);
var n_dom_idx = cljs.core.nth.call(null,vec__11273,(1),null);
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
var G__11304 = cljs.core.next.call(null,children);
var G__11305 = cljs.core.conj_BANG_.call(null,vdom__$1,null);
var G__11306 = n__$1;
var G__11307 = n_children__$2;
children = G__11304;
vdom__$1 = G__11305;
n__$1 = G__11306;
n_children__$2 = G__11307;
continue;
} else {
var temp__5802__auto__ = replicant.core.remove_child.call(null,impl,unmounts,el,n__$1,cljs.core.first.call(null,children));
if(cljs.core.truth_(temp__5802__auto__)){
var pending_vdom = temp__5802__auto__;
var G__11308 = cljs.core.next.call(null,children);
var G__11309 = cljs.core.conj_BANG_.call(null,vdom__$1,pending_vdom);
var G__11310 = (n__$1 + (1));
var G__11311 = n_children__$2;
children = G__11308;
vdom__$1 = G__11309;
n__$1 = G__11310;
n_children__$2 = G__11311;
continue;
} else {
var G__11312 = cljs.core.next.call(null,children);
var G__11313 = vdom__$1;
var G__11314 = n__$1;
var G__11315 = (n_children__$2 - (1));
children = G__11312;
vdom__$1 = G__11313;
n__$1 = G__11314;
n_children__$2 = G__11315;
continue;
}

}
}
break;
}
} else {
if(old_empty_QMARK_){
var vec__11290 = replicant.core.insert_children.call(null,impl,el,new_c,vdom);
var vdom__$1 = cljs.core.nth.call(null,vec__11290,(0),null);
var n__$1 = cljs.core.nth.call(null,vec__11290,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.persistent_BANG_.call(null,vdom__$1),new_ks,(n_children__$1 + n__$1)], null);
} else {
if(((new_nil_QMARK_) && (old_nil_QMARK_))){
var G__11316 = cljs.core.next.call(null,new_c);
var G__11317 = cljs.core.next.call(null,old_c);
var G__11318 = n;
var G__11319 = move_n;
var G__11320 = n_children__$1;
var G__11321 = changed_QMARK_;
var G__11322 = cljs.core.conj_BANG_.call(null,vdom,null);
new_c = G__11316;
old_c = G__11317;
n = G__11318;
move_n = G__11319;
n_children__$1 = G__11320;
changed_QMARK_ = G__11321;
vdom = G__11322;
continue;
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = old_vdom;
if(cljs.core.truth_(and__5043__auto__)){
return (old_vdom[(9)]);
} else {
return and__5043__auto__;
}
})())){
var vec__11293 = (cljs.core.truth_((function (){var and__5043__auto__ = new_headers;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,old_ks.call(null,(new_headers[(3)])));
} else {
return and__5043__auto__;
}
})())?(function (){var res = replicant.core.create_node.call(null,impl,new_headers);
replicant.core.insert_node.call(null,r,el,cljs.core.first.call(null,res),n,n_children__$1);

return res;
})():null);
var child = cljs.core.nth.call(null,vec__11293,(0),null);
var child_vdom = cljs.core.nth.call(null,vec__11293,(1),null);
if(cljs.core.truth_(unmounts.call(null,(old_vdom[(9)])))){
if(new_nil_QMARK_){
var G__11323 = cljs.core.next.call(null,new_c);
var G__11324 = cljs.core.next.call(null,old_c);
var G__11325 = (n + (1));
var G__11326 = move_n;
var G__11327 = n_children__$1;
var G__11328 = changed_QMARK_;
var G__11329 = cljs.core.conj_BANG_.call(null,vdom,old_vdom);
new_c = G__11323;
old_c = G__11324;
n = G__11325;
move_n = G__11326;
n_children__$1 = G__11327;
changed_QMARK_ = G__11328;
vdom = G__11329;
continue;
} else {
if(cljs.core.truth_(child)){
var G__11330 = cljs.core.next.call(null,new_c);
var G__11331 = cljs.core.next.call(null,old_c);
var G__11332 = (n + (2));
var G__11333 = move_n;
var G__11334 = (n_children__$1 + (1));
var G__11335 = true;
var G__11336 = cljs.core.conj_BANG_.call(null,vdom,child_vdom);
new_c = G__11330;
old_c = G__11331;
n = G__11332;
move_n = G__11333;
n_children__$1 = G__11334;
changed_QMARK_ = G__11335;
vdom = G__11336;
continue;
} else {
var G__11337 = new_c;
var G__11338 = cljs.core.next.call(null,old_c);
var G__11339 = (n + (1));
var G__11340 = move_n;
var G__11341 = n_children__$1;
var G__11342 = changed_QMARK_;
var G__11343 = cljs.core.conj_BANG_.call(null,vdom,old_vdom);
new_c = G__11337;
old_c = G__11338;
n = G__11339;
move_n = G__11340;
n_children__$1 = G__11341;
changed_QMARK_ = G__11342;
vdom = G__11343;
continue;

}
}
} else {
if(new_nil_QMARK_){
var G__11344 = cljs.core.next.call(null,new_c);
var G__11345 = cljs.core.next.call(null,old_c);
var G__11346 = n;
var G__11347 = (move_n - (1));
var G__11348 = (n_children__$1 - (1));
var G__11349 = changed_QMARK_;
var G__11350 = cljs.core.conj_BANG_.call(null,vdom,null);
new_c = G__11344;
old_c = G__11345;
n = G__11346;
move_n = G__11347;
n_children__$1 = G__11348;
changed_QMARK_ = G__11349;
vdom = G__11350;
continue;
} else {
if(cljs.core.truth_(child)){
var G__11351 = cljs.core.next.call(null,new_c);
var G__11352 = cljs.core.next.call(null,old_c);
var G__11353 = (n + (1));
var G__11354 = move_n;
var G__11355 = n_children__$1;
var G__11356 = true;
var G__11357 = cljs.core.conj_BANG_.call(null,vdom,child_vdom);
new_c = G__11351;
old_c = G__11352;
n = G__11353;
move_n = G__11354;
n_children__$1 = G__11355;
changed_QMARK_ = G__11356;
vdom = G__11357;
continue;
} else {
var G__11358 = new_c;
var G__11359 = cljs.core.next.call(null,old_c);
var G__11360 = n;
var G__11361 = (move_n - (1));
var G__11362 = (n_children__$1 - (1));
var G__11363 = changed_QMARK_;
var G__11364 = vdom;
new_c = G__11358;
old_c = G__11359;
n = G__11360;
move_n = G__11361;
n_children__$1 = G__11362;
changed_QMARK_ = G__11363;
vdom = G__11364;
continue;

}
}
}
} else {
if(new_nil_QMARK_){
if(cljs.core.contains_QMARK_.call(null,new_ks,(old_vdom[(1)]))){
var G__11365 = cljs.core.next.call(null,new_c);
var G__11366 = old_c;
var G__11367 = n;
var G__11368 = move_n;
var G__11369 = n_children__$1;
var G__11370 = true;
var G__11371 = vdom;
new_c = G__11365;
old_c = G__11366;
n = G__11367;
move_n = G__11368;
n_children__$1 = G__11369;
changed_QMARK_ = G__11370;
vdom = G__11371;
continue;
} else {
var temp__5802__auto__ = replicant.core.remove_child.call(null,impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5802__auto__)){
var unmounting_node = temp__5802__auto__;
var G__11372 = cljs.core.next.call(null,new_c);
var G__11373 = cljs.core.next.call(null,old_c);
var G__11374 = (n + (1));
var G__11375 = move_n;
var G__11376 = n_children__$1;
var G__11377 = true;
var G__11378 = cljs.core.conj_BANG_.call(null,vdom,unmounting_node);
new_c = G__11372;
old_c = G__11373;
n = G__11374;
move_n = G__11375;
n_children__$1 = G__11376;
changed_QMARK_ = G__11377;
vdom = G__11378;
continue;
} else {
var G__11379 = cljs.core.next.call(null,new_c);
var G__11380 = cljs.core.next.call(null,old_c);
var G__11381 = n;
var G__11382 = move_n;
var G__11383 = (n_children__$1 - (1));
var G__11384 = true;
var G__11385 = cljs.core.conj_BANG_.call(null,vdom,null);
new_c = G__11379;
old_c = G__11380;
n = G__11381;
move_n = G__11382;
n_children__$1 = G__11383;
changed_QMARK_ = G__11384;
vdom = G__11385;
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

var G__11386 = cljs.core.next.call(null,new_c);
var G__11387 = cljs.core.next.call(null,old_c);
var G__11388 = (n + (1));
var G__11389 = move_n;
var G__11390 = n_children__$1;
var G__11391 = (function (){var or__5045__auto__ = changed_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (!(node_unchanged_QMARK_));
}
})();
var G__11392 = cljs.core.conj_BANG_.call(null,vdom,new_vdom);
new_c = G__11386;
old_c = G__11387;
n = G__11388;
move_n = G__11389;
n_children__$1 = G__11390;
changed_QMARK_ = G__11391;
vdom = G__11392;
continue;
} else {
if(cljs.core.not.call(null,old_ks.call(null,(new_headers[(3)])))){
var vec__11296 = replicant.core.create_node.call(null,impl,new_headers);
var child = cljs.core.nth.call(null,vec__11296,(0),null);
var child_vdom = cljs.core.nth.call(null,vec__11296,(1),null);
replicant.core.insert_node.call(null,r,el,child,n,n_children__$1);

var G__11393 = cljs.core.next.call(null,new_c);
var G__11394 = (function (){var G__11299 = old_c;
if((old_vdom == null)){
return cljs.core.next.call(null,G__11299);
} else {
return G__11299;
}
})();
var G__11395 = (n + (1));
var G__11396 = move_n;
var G__11397 = (n_children__$1 + (1));
var G__11398 = true;
var G__11399 = cljs.core.conj_BANG_.call(null,vdom,child_vdom);
new_c = G__11393;
old_c = G__11394;
n = G__11395;
move_n = G__11396;
n_children__$1 = G__11397;
changed_QMARK_ = G__11398;
vdom = G__11399;
continue;
} else {
if(((old_nil_QMARK_) || (cljs.core.not.call(null,new_ks.call(null,(old_vdom[(1)])))))){
var temp__5802__auto__ = replicant.core.remove_child.call(null,impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5802__auto__)){
var unmounting_node = temp__5802__auto__;
var G__11400 = new_c;
var G__11401 = cljs.core.next.call(null,old_c);
var G__11402 = (n + (1));
var G__11403 = move_n;
var G__11404 = n_children__$1;
var G__11405 = true;
var G__11406 = cljs.core.conj_BANG_.call(null,vdom,unmounting_node);
new_c = G__11400;
old_c = G__11401;
n = G__11402;
move_n = G__11403;
n_children__$1 = G__11404;
changed_QMARK_ = G__11405;
vdom = G__11406;
continue;
} else {
var G__11407 = new_c;
var G__11408 = cljs.core.next.call(null,old_c);
var G__11409 = n;
var G__11410 = move_n;
var G__11411 = (n_children__$1 - (1));
var G__11412 = true;
var G__11413 = vdom;
new_c = G__11407;
old_c = G__11408;
n = G__11409;
move_n = G__11410;
n_children__$1 = G__11411;
changed_QMARK_ = G__11412;
vdom = G__11413;
continue;
}
} else {
var vec__11300 = replicant.core.move_nodes.call(null,impl,el,new_headers,new_c,old_vdom,old_c,n,n_children__$1);
var nc = cljs.core.nth.call(null,vec__11300,(0),null);
var oc = cljs.core.nth.call(null,vec__11300,(1),null);
var n__$1 = cljs.core.nth.call(null,vec__11300,(2),null);
var move_n__$1 = cljs.core.nth.call(null,vec__11300,(3),null);
var vdom_node = cljs.core.nth.call(null,vec__11300,(4),null);
var G__11414 = nc;
var G__11415 = oc;
var G__11416 = n__$1;
var G__11417 = move_n__$1;
var G__11418 = n_children__$1;
var G__11419 = true;
var G__11420 = (function (){var G__11303 = vdom;
if(cljs.core.truth_(vdom_node)){
return cljs.core.conj_BANG_.call(null,G__11303,vdom_node);
} else {
return G__11303;
}
})();
new_c = G__11414;
old_c = G__11415;
n = G__11416;
move_n = G__11417;
n_children__$1 = G__11418;
changed_QMARK_ = G__11419;
vdom = G__11420;
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
replicant.core.reconcile_STAR_ = (function replicant$core$reconcile_STAR_(p__11421,el,headers,vdom,index){
var map__11422 = p__11421;
var map__11422__$1 = cljs.core.__destructure_map.call(null,map__11422);
var impl = map__11422__$1;
var renderer = cljs.core.get.call(null,map__11422__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
if(cljs.core.truth_(headers)){
var temp__5804__auto___11435 = (function (){var or__5045__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,(headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5804__auto___11435)){
var ctx__10835__auto___11436 = temp__5804__auto___11435;
cljs.core.reset_BANG_.call(null,replicant.assert.current_context,ctx__10835__auto___11436);
} else {
}

cljs.core.reset_BANG_.call(null,replicant.assert.current_node,(headers[(7)]));
} else {
}

if(replicant.core.unchanged_QMARK_.call(null,headers,vdom)){
return vdom;
} else {
if(cljs.core.not_EQ_.call(null,(headers[(8)]),(vdom[(8)]))){
var vec__11423 = replicant.core.create_node.call(null,impl,headers);
var node = cljs.core.nth.call(null,vec__11423,(0),null);
var vdom__$1 = cljs.core.nth.call(null,vec__11423,(1),null);
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
var vec__11426 = (cljs.core.truth_(new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1((headers__$1[(4)])))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,true], null):replicant.core.get_children_ks.call(null,headers__$1,replicant.core.get_ns.call(null,headers__$1)));
var new_children = cljs.core.nth.call(null,vec__11426,(0),null);
var new_ks = cljs.core.nth.call(null,vec__11426,(1),null);
var inner_html_QMARK_ = cljs.core.nth.call(null,vec__11426,(2),null);
var vec__11429 = (cljs.core.truth_(new cljs.core.Keyword(null,"contenteditable","contenteditable",-770210530).cljs$core$IFn$_invoke$arity$1(vdom_attrs))?(function (){
replicant.protocols.remove_all_children.call(null,renderer,child);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null);
})()
:(cljs.core.truth_(inner_html_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vdom[(4)]),(vdom[(5)]),(vdom[(12)])], null)
));
var old_children = cljs.core.nth.call(null,vec__11429,(0),null);
var old_ks = cljs.core.nth.call(null,vec__11429,(1),null);
var old_nc = cljs.core.nth.call(null,vec__11429,(2),null);
var vec__11432 = replicant.core.update_children.call(null,impl,child,new_children,new_ks,old_children,old_ks,old_nc);
var children_changed_QMARK_ = cljs.core.nth.call(null,vec__11432,(0),null);
var children = cljs.core.nth.call(null,vec__11432,(1),null);
var child_ks = cljs.core.nth.call(null,vec__11432,(2),null);
var n_children = cljs.core.nth.call(null,vec__11432,(3),null);
var attrs_changed_QMARK___$1 = ((attrs_changed_QMARK_) || (cljs.core.not_EQ_.call(null,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((headers__$1[(4)])),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1(vdom_attrs))));
replicant.core.register_hooks.call(null,impl,child,headers__$1,vdom,(cljs.core.truth_((function (){var and__5043__auto__ = attrs_changed_QMARK___$1;
if(and__5043__auto__){
return children_changed_QMARK_;
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895),new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null):((attrs_changed_QMARK___$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null)
)));

var headers__11062__auto__ = headers__$1;
return (new Array((headers__11062__auto__[(0)]),(headers__11062__auto__[(3)]),(headers__11062__auto__[(2)]),attrs,children,child_ks,cljs.core.boolean$.call(null,new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__11062__auto__[(4)]))),(headers__11062__auto__[(7)]),null,null,(headers__11062__auto__[(9)]),(headers__11062__auto__[(10)]),n_children));

}
}
});
replicant.core.perform_post_mount_update = (function replicant$core$perform_post_mount_update(renderer,p__11437){
var vec__11438 = p__11437;
var node = cljs.core.nth.call(null,vec__11438,(0),null);
var mounting_attrs = cljs.core.nth.call(null,vec__11438,(1),null);
var attrs = cljs.core.nth.call(null,vec__11438,(2),null);
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
var len__5769__auto___11453 = arguments.length;
var i__5770__auto___11454 = (0);
while(true){
if((i__5770__auto___11454 < len__5769__auto___11453)){
args__5775__auto__.push((arguments[i__5770__auto___11454]));

var G__11455 = (i__5770__auto___11454 + (1));
i__5770__auto___11454 = G__11455;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic = (function (renderer,el,hiccup,p__11447){
var vec__11448 = p__11447;
var vdom = cljs.core.nth.call(null,vec__11448,(0),null);
var map__11451 = cljs.core.nth.call(null,vec__11448,(1),null);
var map__11451__$1 = cljs.core.__destructure_map.call(null,map__11451);
var unmounts = cljs.core.get.call(null,map__11451__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521));
var aliases = cljs.core.get.call(null,map__11451__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var impl = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"hooks","hooks",-413590103),cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"mounts","mounts",-791474425),cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"unmounts","unmounts",173366521),(function (){var or__5045__auto__ = unmounts;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
}
})(),new cljs.core.Keyword(null,"aliases","aliases",1346874714),aliases], null);
var vdom__$1 = (function (){var headers = replicant.core.get_hiccup_headers.call(null,null,hiccup);
if(cljs.core.truth_(headers)){
var temp__5804__auto___11456 = (function (){var or__5045__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,(headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5804__auto___11456)){
var ctx__10835__auto___11457 = temp__5804__auto___11456;
cljs.core.reset_BANG_.call(null,replicant.assert.current_context,ctx__10835__auto___11457);
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
return cljs.core.second.call(null,replicant.core.update_children.call(null,impl,el,(cljs.core.truth_(headers)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [headers], null):null),(function (){var G__11452 = cljs.core.PersistentHashSet.EMPTY;
if(cljs.core.truth_(k)){
return cljs.core.conj.call(null,G__11452,k);
} else {
return G__11452;
}
})(),vdom,cljs.core.set.call(null,cljs.core.keep.call(null,(function (p1__11441_SHARP_){
return (p1__11441_SHARP_[(1)]);
}),vdom)),(cljs.core.truth_(cljs.core.first.call(null,vdom))?(1):(0))));
}
})();
var hooks = cljs.core.deref.call(null,new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(impl));
var temp__5802__auto___11458 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"mounts","mounts",-791474425).cljs$core$IFn$_invoke$arity$1(impl)));
if(temp__5802__auto___11458){
var mounts_11459 = temp__5802__auto___11458;
replicant.protocols.next_frame.call(null,renderer,(function (){
cljs.core.run_BANG_.call(null,(function (p1__11442_SHARP_){
return replicant.core.perform_post_mount_update.call(null,renderer,p1__11442_SHARP_);
}),mounts_11459);

return cljs.core.run_BANG_.call(null,replicant.core.call_hook,hooks);
}));
} else {
cljs.core.run_BANG_.call(null,replicant.core.call_hook,hooks);
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hooks","hooks",-413590103),hooks,new cljs.core.Keyword(null,"vdom","vdom",953162958),vdom__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521),new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)], null);
}));

(replicant.core.reconcile.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.reconcile.cljs$lang$applyTo = (function (seq11443){
var G__11444 = cljs.core.first.call(null,seq11443);
var seq11443__$1 = cljs.core.next.call(null,seq11443);
var G__11445 = cljs.core.first.call(null,seq11443__$1);
var seq11443__$2 = cljs.core.next.call(null,seq11443__$1);
var G__11446 = cljs.core.first.call(null,seq11443__$2);
var seq11443__$3 = cljs.core.next.call(null,seq11443__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11444,G__11445,G__11446,seq11443__$3);
}));

cljs.core.add_watch.call(null,replicant.assert.error,new cljs.core.Keyword("replicant.assert","default","replicant.assert/default",-504441266),(function (___10853__auto__,___10853__auto____$1,___10853__auto____$2,error__10854__auto__){
return replicant.console_logger.report.call(null,error__10854__auto__);
}));

//# sourceMappingURL=core.js.map
