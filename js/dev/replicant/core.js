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
var fn__10953__auto___11086 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10954__auto___11087 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10955__auto___11088 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11082 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," contains an empty id"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Either complete the id or remove the # character."], null);
var G__11082__$1 = (cljs.core.truth_(fn__10953__auto___11086)?cljs.core.assoc.call(null,G__11082,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10953__auto___11086):G__11082);
var G__11082__$2 = (cljs.core.truth_(alias__10954__auto___11087)?cljs.core.assoc.call(null,G__11082__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10954__auto___11087):G__11082__$1);
if(cljs.core.truth_(fd__10955__auto___11088)){
return cljs.core.assoc.call(null,G__11082__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10955__auto___11088);
} else {
return G__11082__$2;
}
})());
} else {
}

if((!(cljs.core.not.call(null,cljs.core.re_find.call(null,/#[^a-zA-Z_\.]/,"tag"))))){
var fn__10953__auto___11089 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10954__auto___11090 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10955__auto___11091 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11083 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," contains an invalid id"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"IDs must start with a letter."], null);
var G__11083__$1 = (cljs.core.truth_(fn__10953__auto___11089)?cljs.core.assoc.call(null,G__11083,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10953__auto___11089):G__11083);
var G__11083__$2 = (cljs.core.truth_(alias__10954__auto___11090)?cljs.core.assoc.call(null,G__11083__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10954__auto___11090):G__11083__$1);
if(cljs.core.truth_(fd__10955__auto___11091)){
return cljs.core.assoc.call(null,G__11083__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10955__auto___11091);
} else {
return G__11083__$2;
}
})());
} else {
}

if((!(cljs.core.not.call(null,cljs.core.re_find.call(null,/\.$/,"tag"))))){
var fn__10953__auto___11092 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10954__auto___11093 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10955__auto___11094 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11084 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," contains an empty class"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"This may cause a DOMException and is considered a coding error. Replicant will not sacrifice performance to work around it."], null);
var G__11084__$1 = (cljs.core.truth_(fn__10953__auto___11092)?cljs.core.assoc.call(null,G__11084,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10953__auto___11092):G__11084);
var G__11084__$2 = (cljs.core.truth_(alias__10954__auto___11093)?cljs.core.assoc.call(null,G__11084__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10954__auto___11093):G__11084__$1);
if(cljs.core.truth_(fd__10955__auto___11094)){
return cljs.core.assoc.call(null,G__11084__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10955__auto___11094);
} else {
return G__11084__$2;
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
var tag_name = (function (){var G__11085 = (cljs.core.truth_(id_index)?tag__$1.substring((0),id_index):(cljs.core.truth_(class_index)?tag__$1.substring((0),class_index):tag__$1
));
if(cljs.core.truth_(ns)){
return cljs.core.keyword.call(null,ns,G__11085);
} else {
return G__11085;
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
var G__11095 = pt__9339__auto__;
G__11095.push((function (){var temp__5804__auto__ = new cljs.core.Keyword("replicant","key","replicant/key",-670108117).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5804__auto__)){
var k__9333__auto__ = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pt__9339__auto__[(0)]),k__9333__auto__], null);
} else {
return null;
}
})());

G__11095.push(attrs);

G__11095.push(((has_args_QMARK_)?cljs.core.rest.call(null,args):args));

G__11095.push(ns);

G__11095.push(sexp);

G__11095.push(null);

G__11095.push((pt__9339__auto__[(0)]));

G__11095.push(null);

return G__11095;
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
return cljs.core.keep.call(null,(function (p1__11096_SHARP_){
return cljs.core.not_empty.call(null,p1__11096_SHARP_.trim());
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
var vec__11098 = cljs.core.map.call(null,(function (p1__11097_SHARP_){
return p1__11097_SHARP_.trim();
}),kv.split(":"));
var k = cljs.core.nth.call(null,vec__11098,(0),null);
var v = cljs.core.nth.call(null,vec__11098,(1),null);
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
var G__11101 = cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499),new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009));
var G__11101__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,G__11101,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__11101);
var G__11101__$2 = ((cljs.core.seq.call(null,classes__$1))?cljs.core.assoc.call(null,G__11101__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),classes__$1):G__11101__$1);
if(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs) === 'string'){
return cljs.core.update.call(null,G__11101__$2,new cljs.core.Keyword(null,"style","style",-496642736),replicant.core.explode_styles);
} else {
return G__11101__$2;
}
});
/**
 * Given `headers` as produced by `get-hiccup-headers`, returns a map of all HTML
 *   attributes.
 */
replicant.core.get_attrs = (function replicant$core$get_attrs(headers){
if((!((!(cljs.core.contains_QMARK_.call(null,(headers[(4)]),new cljs.core.Keyword(null,"className","className",-1983287057))))))){
var fn__10953__auto___11105 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10954__auto___11106 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10955__auto___11107 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11102 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Use :class, not :className",new cljs.core.Keyword(null,"message","message",-406056002),":className is not supported, please use :class instead. It takes a keyword, a string, or a collection of either of those."], null);
var G__11102__$1 = (cljs.core.truth_(fn__10953__auto___11105)?cljs.core.assoc.call(null,G__11102,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10953__auto___11105):G__11102);
var G__11102__$2 = (cljs.core.truth_(alias__10954__auto___11106)?cljs.core.assoc.call(null,G__11102__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10954__auto___11106):G__11102__$1);
if(cljs.core.truth_(fd__10955__auto___11107)){
return cljs.core.assoc.call(null,G__11102__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10955__auto___11107);
} else {
return G__11102__$2;
}
})());
} else {
}

if((!((function (){var class__11015__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
return (((!(typeof class__11015__auto__ === 'string'))) || ((class__11015__auto__.indexOf(" ") < (0))));
})()))){
var fn__10953__auto___11108 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10954__auto___11109 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10955__auto___11110 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11103 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid space separated :class strings",new cljs.core.Keyword(null,"message","message",-406056002),(function (){var class__11015__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
return [":class supports collections of keywords and/or strings as classes. These perform better, and are usually more convenient to work with. Solve by converting ",cljs.core.pr_str.call(null,class__11015__auto__)," to ",cljs.core.pr_str.call(null,cljs.core.vec.call(null,class__11015__auto__.split(" ")))].join('');
})()], null);
var G__11103__$1 = (cljs.core.truth_(fn__10953__auto___11108)?cljs.core.assoc.call(null,G__11103,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10953__auto___11108):G__11103);
var G__11103__$2 = (cljs.core.truth_(alias__10954__auto___11109)?cljs.core.assoc.call(null,G__11103__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10954__auto___11109):G__11103__$1);
if(cljs.core.truth_(fd__10955__auto___11110)){
return cljs.core.assoc.call(null,G__11103__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10955__auto___11110);
} else {
return G__11103__$2;
}
})());
} else {
}

if((!((!(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1((headers[(4)])) === 'string'))))){
var fn__10953__auto___11111 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10954__auto___11112 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10955__auto___11113 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11104 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid string styles",new cljs.core.Keyword(null,"message","message",-406056002),":style supports structured maps of CSS property/value pairs. Strings must be parsed, so they're both slower and harder to read and write."], null);
var G__11104__$1 = (cljs.core.truth_(fn__10953__auto___11111)?cljs.core.assoc.call(null,G__11104,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10953__auto___11111):G__11104);
var G__11104__$2 = (cljs.core.truth_(alias__10954__auto___11112)?cljs.core.assoc.call(null,G__11104__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10954__auto___11112):G__11104__$1);
if(cljs.core.truth_(fd__10955__auto___11113)){
return cljs.core.assoc.call(null,G__11104__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10955__auto___11113);
} else {
return G__11104__$2;
}
})());
} else {
}

return replicant.core.prep_attrs.call(null,(headers[(4)]),(headers[(1)]),(headers[(2)]));
});
replicant.core.merge_attrs = (function replicant$core$merge_attrs(attrs,overrides){
var G__11114 = cljs.core.merge.call(null,attrs,cljs.core.dissoc.call(null,overrides,new cljs.core.Keyword(null,"style","style",-496642736)));
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides);
}
})())){
return cljs.core.update.call(null,G__11114,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides));
} else {
return G__11114;
}
});
replicant.core.get_mounting_attrs = (function replicant$core$get_mounting_attrs(headers){
var temp__5802__auto__ = new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(temp__5802__auto__)){
var mounting = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.core.get_attrs.call(null,headers),(function (){var headers__$1 = (function (){var G__11115 = headers;
if(cljs.core.truth_(mounting)){
var headers__9353__auto__ = G__11115;
(headers__9353__auto__[(4)] = replicant.core.merge_attrs.call(null,(headers__9353__auto__[(4)]),mounting));

return headers__9353__auto__;
} else {
return G__11115;
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
return cljs.core.mapv.call(null,(function (p1__11116_SHARP_){
var G__11117 = p1__11116_SHARP_;
if((G__11117 == null)){
return null;
} else {
return replicant.core.get_hiccup_headers.call(null,ns,G__11117);
}
}),replicant.core.flatten_seqs.call(null,(headers[(5)])));
}
});
/**
 * Like `get-children` but returns a tuple of `[children ks]` where `ks` is a set
 *   of the keys in `children`.
 */
replicant.core.get_children_ks = (function replicant$core$get_children_ks(headers,ns){
var vec__11118 = cljs.core.reduce.call(null,(function (p__11121,hiccup){
var vec__11122 = p__11121;
var children = cljs.core.nth.call(null,vec__11122,(0),null);
var ks = cljs.core.nth.call(null,vec__11122,(1),null);
if(cljs.core.truth_(hiccup)){
var headers__$1 = replicant.core.get_hiccup_headers.call(null,ns,hiccup);
var k = (headers__$1[(3)]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,children,headers__$1),(function (){var G__11125 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.call(null,G__11125,k);
} else {
return G__11125;
}
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,children,null),ks], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY)], null),replicant.core.flatten_seqs.call(null,(headers[(5)])));
var children = cljs.core.nth.call(null,vec__11118,(0),null);
var ks = cljs.core.nth.call(null,vec__11118,(1),null);
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
var rd = (function (){var G__11126 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","dom-event","replicant.trigger/dom-event",930136738),new cljs.core.Keyword("replicant","js-event","replicant/js-event",1927942146),e,new cljs.core.Keyword("replicant","dom-event","replicant/dom-event",-1613182512),e], null);
if(cljs.core.truth_(node)){
return cljs.core.assoc.call(null,G__11126,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node);
} else {
return G__11126;
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
replicant.core.call_hook = (function replicant$core$call_hook(p__11127){
var vec__11128 = p__11127;
var hook = cljs.core.nth.call(null,vec__11128,(0),null);
var k = cljs.core.nth.call(null,vec__11128,(1),null);
var node = cljs.core.nth.call(null,vec__11128,(2),null);
var new$ = cljs.core.nth.call(null,vec__11128,(3),null);
var old = cljs.core.nth.call(null,vec__11128,(4),null);
var details = cljs.core.nth.call(null,vec__11128,(5),null);
var f = replicant.core.get_life_cycle_hook.call(null,hook);
var life_cycle = (((old == null))?new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865):(((new$ == null))?new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184):new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235)
));
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),k)) || (((((cljs.core._EQ_.call(null,k,new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162))) && (cljs.core._EQ_.call(null,life_cycle,new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865))))) || (((((cljs.core._EQ_.call(null,k,new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753))) && (cljs.core._EQ_.call(null,life_cycle,new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184))))) || (((cljs.core._EQ_.call(null,k,new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394))) && (cljs.core._EQ_.call(null,life_cycle,new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235))))))))))){
return f.call(null,(function (){var G__11131 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","life-cycle","replicant.trigger/life-cycle",-205660972),new cljs.core.Keyword("replicant","life-cycle","replicant/life-cycle",1802888458),life_cycle,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node], null);
if(cljs.core.truth_(details)){
return cljs.core.assoc.call(null,G__11131,new cljs.core.Keyword("replicant","details","replicant/details",-1846218867),details);
} else {
return G__11131;
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
var len__5769__auto___11148 = arguments.length;
var i__5770__auto___11149 = (0);
while(true){
if((i__5770__auto___11149 < len__5769__auto___11148)){
args__5775__auto__.push((arguments[i__5770__auto___11149]));

var G__11150 = (i__5770__auto___11149 + (1));
i__5770__auto___11149 = G__11150;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (p__11136,node,headers,p__11137){
var map__11138 = p__11136;
var map__11138__$1 = cljs.core.__destructure_map.call(null,map__11138);
var hooks = cljs.core.get.call(null,map__11138__$1,new cljs.core.Keyword(null,"hooks","hooks",-413590103));
var vec__11139 = p__11137;
var vdom = cljs.core.nth.call(null,vec__11139,(0),null);
var details = cljs.core.nth.call(null,vec__11139,(1),null);
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
var headers_sexp = (function (){var G__11142 = headers;
if((G__11142 == null)){
return null;
} else {
return (G__11142[(7)]);
}
})();
var vdom_sexp = (function (){var G__11143 = vdom;
if((G__11143 == null)){
return null;
} else {
return (G__11143[(7)]);
}
})();
return cljs.core._vreset_BANG_.call(null,hooks,cljs.core.into.call(null,cljs.core._deref.call(null,hooks),cljs.core.map.call(null,(function (p__11144){
var vec__11145 = p__11144;
var k = cljs.core.nth.call(null,vec__11145,(0),null);
var hook = cljs.core.nth.call(null,vec__11145,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook,k,node,headers_sexp,vdom_sexp,details], null);
}),new_hooks)));
}
}));

(replicant.core.register_hooks.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.register_hooks.cljs$lang$applyTo = (function (seq11132){
var G__11133 = cljs.core.first.call(null,seq11132);
var seq11132__$1 = cljs.core.next.call(null,seq11132);
var G__11134 = cljs.core.first.call(null,seq11132__$1);
var seq11132__$2 = cljs.core.next.call(null,seq11132__$1);
var G__11135 = cljs.core.first.call(null,seq11132__$2);
var seq11132__$3 = cljs.core.next.call(null,seq11132__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11133,G__11134,G__11135,seq11132__$3);
}));

replicant.core.register_mount = (function replicant$core$register_mount(p__11151,node,mounting_attrs,attrs){
var map__11152 = p__11151;
var map__11152__$1 = cljs.core.__destructure_map.call(null,map__11152);
var mounts = cljs.core.get.call(null,map__11152__$1,new cljs.core.Keyword(null,"mounts","mounts",-791474425));
return cljs.core._vreset_BANG_.call(null,mounts,cljs.core.conj.call(null,cljs.core._deref.call(null,mounts),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,mounting_attrs,attrs], null)));
});
replicant.core.update_styles = (function replicant$core$update_styles(renderer,el,new_styles,old_styles){
var new_ks = cljs.core.set.call(null,cljs.core.remove.call(null,(function (p1__11153_SHARP_){
return (p1__11153_SHARP_.call(null,new_styles) == null);
}),cljs.core.keys.call(null,new_styles)));
var old_ks = cljs.core.set.call(null,cljs.core.keys.call(null,old_styles));
cljs.core.run_BANG_.call(null,(function (p1__11154_SHARP_){
return replicant.protocols.remove_style.call(null,renderer,el,p1__11154_SHARP_);
}),cljs.core.remove.call(null,new_ks,old_ks));

return cljs.core.run_BANG_.call(null,(function (p1__11155_SHARP_){
var new_style = p1__11155_SHARP_.call(null,new_styles);
if(cljs.core.not_EQ_.call(null,new_style,p1__11155_SHARP_.call(null,old_styles))){
if((!(((typeof p1__11155_SHARP_ === 'string') || ((((p1__11155_SHARP_ instanceof cljs.core.Keyword)) || ((p1__11155_SHARP_ instanceof cljs.core.Symbol)))))))){
var fn__10953__auto___11158 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10954__auto___11159 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10955__auto___11160 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11156 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Style key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11155_SHARP_)," should be a keyword"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant expects your style keys to be strings, or the very least something that supports `name`. Other types will not work as expected."], null);
var G__11156__$1 = (cljs.core.truth_(fn__10953__auto___11158)?cljs.core.assoc.call(null,G__11156,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10953__auto___11158):G__11156);
var G__11156__$2 = (cljs.core.truth_(alias__10954__auto___11159)?cljs.core.assoc.call(null,G__11156__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10954__auto___11159):G__11156__$1);
if(cljs.core.truth_(fd__10955__auto___11160)){
return cljs.core.assoc.call(null,G__11156__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10955__auto___11160);
} else {
return G__11156__$2;
}
})());
} else {
}

if((!((function (){var name__11054__auto__ = cljs.core.name.call(null,p1__11155_SHARP_);
return ((clojure.string.starts_with_QMARK_.call(null,name__11054__auto__,"--")) || (cljs.core._EQ_.call(null,name__11054__auto__,clojure.string.lower_case.call(null,name__11054__auto__))));
})()))){
var fn__10953__auto___11161 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10954__auto___11162 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10955__auto___11163 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11157 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash_k.call(null,p1__11155_SHARP_)),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11155_SHARP_)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant passes style keys directly to `el.style.setProperty`, which expects CSS-style dash-cased property names."], null);
var G__11157__$1 = (cljs.core.truth_(fn__10953__auto___11161)?cljs.core.assoc.call(null,G__11157,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10953__auto___11161):G__11157);
var G__11157__$2 = (cljs.core.truth_(alias__10954__auto___11162)?cljs.core.assoc.call(null,G__11157__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10954__auto___11162):G__11157__$1);
if(cljs.core.truth_(fd__10955__auto___11163)){
return cljs.core.assoc.call(null,G__11157__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10955__auto___11163);
} else {
return G__11157__$2;
}
})());
} else {
}

return replicant.protocols.set_style.call(null,renderer,el,p1__11155_SHARP_,replicant.core.get_style_val.call(null,p1__11155_SHARP_,new_style));
} else {
return null;
}
}),new_ks);
});
replicant.core.update_classes = (function replicant$core$update_classes(renderer,el,new_classes,old_classes){
cljs.core.run_BANG_.call(null,(function (p1__11164_SHARP_){
return replicant.protocols.remove_class.call(null,renderer,el,p1__11164_SHARP_);
}),cljs.core.remove.call(null,cljs.core.set.call(null,new_classes),old_classes));

return cljs.core.run_BANG_.call(null,(function (p1__11165_SHARP_){
return replicant.protocols.add_class.call(null,renderer,el,p1__11165_SHARP_);
}),cljs.core.remove.call(null,cljs.core.set.call(null,old_classes),new_classes));
});
replicant.core.add_event_listeners = (function replicant$core$add_event_listeners(renderer,el,val){
return cljs.core.run_BANG_.call(null,(function (p__11166){
var vec__11167 = p__11166;
var event = cljs.core.nth.call(null,vec__11167,(0),null);
var handler = cljs.core.nth.call(null,vec__11167,(1),null);
if((!((function (){var event__11026__auto__ = cljs.core.name.call(null,event);
return ((cljs.core._EQ_.call(null,"DOMContentLoaded",event__11026__auto__)) || (cljs.core._EQ_.call(null,event__11026__auto__,clojure.string.lower_case.call(null,event__11026__auto__))));
})()))){
var fn__10953__auto___11171 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10954__auto___11172 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10955__auto___11173 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11170 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.call(null,clojure.string.lower_case.call(null,cljs.core.name.call(null,event)))),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Most event names should be in all lower-case. Replicant passes your event names directly to addEventListener, and mis-cased event names will fail silently."], null);
var G__11170__$1 = (cljs.core.truth_(fn__10953__auto___11171)?cljs.core.assoc.call(null,G__11170,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10953__auto___11171):G__11170);
var G__11170__$2 = (cljs.core.truth_(alias__10954__auto___11172)?cljs.core.assoc.call(null,G__11170__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10954__auto___11172):G__11170__$1);
if(cljs.core.truth_(fd__10955__auto___11173)){
return cljs.core.assoc.call(null,G__11170__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10955__auto___11173);
} else {
return G__11170__$2;
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
cljs.core.run_BANG_.call(null,(function (p1__11174_SHARP_){
return replicant.protocols.remove_event_handler.call(null,renderer,el,p1__11174_SHARP_);
}),cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.filter.call(null,new_handlers,cljs.core.keys.call(null,new_handlers))),cljs.core.filter.call(null,old_handlers,cljs.core.keys.call(null,old_handlers))));

return replicant.core.add_event_listeners.call(null,renderer,el,cljs.core.remove.call(null,(function (p1__11175_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.val.call(null,p1__11175_SHARP_),cljs.core.get.call(null,old_handlers,cljs.core.key.call(null,p1__11175_SHARP_)));
}),new_handlers));
});
replicant.core.xlinkns = "http://www.w3.org/1999/xlink";
replicant.core.xmlns = "http://www.w3.org/XML/1998/namespace";
replicant.core.set_attr_val = (function replicant$core$set_attr_val(renderer,el,attr,v){
var an = cljs.core.name.call(null,attr);
if((!((!(clojure.string.starts_with_QMARK_.call(null,cljs.core.name.call(null,attr),"on")))))){
var fn__10953__auto___11179 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10954__auto___11180 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10955__auto___11181 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11176 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Set event listeners in the :on map",new cljs.core.Keyword(null,"message","message",-406056002),["Event handler attributes are not supported. Instead of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," set :on {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.call(null,replicant.asserts.camel__GT_dash.call(null,cljs.core.name.call(null,attr).substring((2)))))," ,,,}"].join('')], null);
var G__11176__$1 = (cljs.core.truth_(fn__10953__auto___11179)?cljs.core.assoc.call(null,G__11176,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10953__auto___11179):G__11176);
var G__11176__$2 = (cljs.core.truth_(alias__10954__auto___11180)?cljs.core.assoc.call(null,G__11176__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10954__auto___11180):G__11176__$1);
if(cljs.core.truth_(fd__10955__auto___11181)){
return cljs.core.assoc.call(null,G__11176__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10955__auto___11181);
} else {
return G__11176__$2;
}
})());
} else {
}

return replicant.protocols.set_attribute.call(null,renderer,el,an,(function (){var G__11177 = v;
if((((v instanceof cljs.core.Keyword)) || ((v instanceof cljs.core.Symbol)))){
return cljs.core.name.call(null,G__11177);
} else {
return G__11177;
}
})(),(function (){var G__11178 = cljs.core.PersistentArrayMap.EMPTY;
var G__11178__$1 = ((cljs.core._EQ_.call(null,(0),an.indexOf("xml:")))?cljs.core.assoc.call(null,G__11178,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xmlns):G__11178);
if(cljs.core._EQ_.call(null,(0),an.indexOf("xlink:"))){
return cljs.core.assoc.call(null,G__11178__$1,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xlinkns);
} else {
return G__11178__$1;
}
})());
});
replicant.core.update_attr = (function replicant$core$update_attr(renderer,el,attr,new$,old){
if(cljs.core.truth_(cljs.core.namespace.call(null,attr))){
return null;
} else {
var G__11182 = attr;
var G__11182__$1 = (((G__11182 instanceof cljs.core.Keyword))?G__11182.fqn:null);
switch (G__11182__$1) {
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
return cljs.core.reduce.call(null,(function (p1__11185_SHARP_,p2__11184_SHARP_){
return replicant.core.update_attr.call(null,renderer,el,p2__11184_SHARP_,new_attrs,old_attrs);
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
return cljs.core.run_BANG_.call(null,(function (p1__11186_SHARP_){
if((!(((typeof p1__11186_SHARP_ === 'string') || ((((p1__11186_SHARP_ instanceof cljs.core.Keyword)) || ((p1__11186_SHARP_ instanceof cljs.core.Symbol)))))))){
var fn__10953__auto___11189 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10954__auto___11190 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10955__auto___11191 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11187 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Style key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11186_SHARP_)," should be a keyword"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant expects your style keys to be strings, or the very least something that supports `name`. Other types will not work as expected."], null);
var G__11187__$1 = (cljs.core.truth_(fn__10953__auto___11189)?cljs.core.assoc.call(null,G__11187,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10953__auto___11189):G__11187);
var G__11187__$2 = (cljs.core.truth_(alias__10954__auto___11190)?cljs.core.assoc.call(null,G__11187__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10954__auto___11190):G__11187__$1);
if(cljs.core.truth_(fd__10955__auto___11191)){
return cljs.core.assoc.call(null,G__11187__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10955__auto___11191);
} else {
return G__11187__$2;
}
})());
} else {
}

if((!((function (){var name__11054__auto__ = cljs.core.name.call(null,p1__11186_SHARP_);
return ((clojure.string.starts_with_QMARK_.call(null,name__11054__auto__,"--")) || (cljs.core._EQ_.call(null,name__11054__auto__,clojure.string.lower_case.call(null,name__11054__auto__))));
})()))){
var fn__10953__auto___11192 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var alias__10954__auto___11193 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
var fd__10955__auto___11194 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replicant.assert.current_context));
cljs.core.reset_BANG_.call(null,replicant.assert.error,(function (){var G__11188 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref.call(null,replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash_k.call(null,p1__11186_SHARP_)),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11186_SHARP_)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant passes style keys directly to `el.style.setProperty`, which expects CSS-style dash-cased property names."], null);
var G__11188__$1 = (cljs.core.truth_(fn__10953__auto___11192)?cljs.core.assoc.call(null,G__11188,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__10953__auto___11192):G__11188);
var G__11188__$2 = (cljs.core.truth_(alias__10954__auto___11193)?cljs.core.assoc.call(null,G__11188__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__10954__auto___11193):G__11188__$1);
if(cljs.core.truth_(fd__10955__auto___11194)){
return cljs.core.assoc.call(null,G__11188__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__10955__auto___11194);
} else {
return G__11188__$2;
}
})());
} else {
}

return replicant.protocols.set_style.call(null,renderer,el,p1__11186_SHARP_,replicant.core.get_style_val.call(null,p1__11186_SHARP_,cljs.core.get.call(null,new_styles,p1__11186_SHARP_)));
}),cljs.core.filter.call(null,new_styles,cljs.core.keys.call(null,new_styles)));
});
replicant.core.set_classes = (function replicant$core$set_classes(renderer,el,new_classes){
return cljs.core.run_BANG_.call(null,(function (p1__11195_SHARP_){
return replicant.protocols.add_class.call(null,renderer,el,p1__11195_SHARP_);
}),new_classes);
});
replicant.core.set_event_listeners = (function replicant$core$set_event_listeners(renderer,el,new_handlers){
return replicant.core.add_event_listeners.call(null,renderer,el,new_handlers);
});
replicant.core.set_attr = (function replicant$core$set_attr(renderer,el,attr,new$){
if(cljs.core.truth_(cljs.core.namespace.call(null,attr))){
return null;
} else {
var G__11196 = attr;
var G__11196__$1 = (((G__11196 instanceof cljs.core.Keyword))?G__11196.fqn:null);
switch (G__11196__$1) {
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
return cljs.core.run_BANG_.call(null,(function (p1__11198_SHARP_){
return replicant.core.set_attr.call(null,renderer,el,p1__11198_SHARP_,new_attrs);
}),cljs.core.filter.call(null,new_attrs,cljs.core.keys.call(null,new_attrs)));
});
replicant.core.render_default_alias = (function replicant$core$render_default_alias(tag_name,_attrs,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-replicant-error","data-replicant-error",1583668098),["Undefined alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name)].join('')], null),(function (){var iter__5523__auto__ = (function replicant$core$render_default_alias_$_iter__11199(s__11200){
return (new cljs.core.LazySeq(null,(function (){
var s__11200__$1 = s__11200;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11200__$1);
if(temp__5804__auto__){
var s__11200__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11200__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__11200__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__11202 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__11201 = (0);
while(true){
if((i__11201 < size__5522__auto__)){
var child = cljs.core._nth.call(null,c__5521__auto__,i__11201);
cljs.core.chunk_append.call(null,b__11202,(function (){var G__11203 = child;
if((!(typeof child === 'string'))){
return cljs.core.pr_str.call(null,G__11203);
} else {
return G__11203;
}
})());

var G__11205 = (i__11201 + (1));
i__11201 = G__11205;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11202),replicant$core$render_default_alias_$_iter__11199.call(null,cljs.core.chunk_rest.call(null,s__11200__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11202),null);
}
} else {
var child = cljs.core.first.call(null,s__11200__$2);
return cljs.core.cons.call(null,(function (){var G__11204 = child;
if((!(typeof child === 'string'))){
return cljs.core.pr_str.call(null,G__11204);
} else {
return G__11204;
}
})(),replicant$core$render_default_alias_$_iter__11199.call(null,cljs.core.rest.call(null,s__11200__$2)));
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
replicant.core.get_alias_headers = (function replicant$core$get_alias_headers(p__11207,headers){
var map__11208 = p__11207;
var map__11208__$1 = cljs.core.__destructure_map.call(null,map__11208);
var aliases = cljs.core.get.call(null,map__11208__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
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
try{var hh__9359__auto__ = replicant.core.get_hiccup_headers.call(null,null,f.call(null,(function (){var G__11210 = (headers[(4)]);
var G__11210__$1 = (cljs.core.truth_(id)?cljs.core.update.call(null,G__11210,new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__11206_SHARP_){
var or__5045__auto__ = p1__11206_SHARP_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return id;
}
})):G__11210);
if(cljs.core.seq.call(null,classes)){
return cljs.core.update.call(null,G__11210__$1,new cljs.core.Keyword(null,"class","class",-2030961996),replicant.core.add_classes,classes);
} else {
return G__11210__$1;
}
})(),cljs.core.seq.call(null,replicant.core.flatten_seqs.call(null,(headers[(5)])))));
if(cljs.core.truth_(hh__9359__auto__)){
var G__11211 = hh__9359__auto__;
(G__11211[(3)] = (function (){var or__5045__auto__ = (headers[(3)]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (hh__9359__auto__[(3)]);
}
})());

(G__11211[(7)] = (hh__9359__auto__[(7)]));

(G__11211[(9)] = tag_name);

(G__11211[(10)] = (headers[(7)]));

return G__11211;
} else {
return null;
}
}catch (e11209){var e = e11209;
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
replicant.core.create_node = (function replicant$core$create_node(p__11212,headers){
var map__11213 = p__11212;
var map__11213__$1 = cljs.core.__destructure_map.call(null,map__11213);
var impl = map__11213__$1;
var renderer = cljs.core.get.call(null,map__11213__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
if(cljs.core.truth_(headers)){
var temp__5804__auto___11229 = (function (){var or__5045__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,(headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5804__auto___11229)){
var ctx__10947__auto___11230 = temp__5804__auto___11229;
cljs.core.reset_BANG_.call(null,replicant.assert.current_context,ctx__10947__auto___11230);
} else {
}

cljs.core.reset_BANG_.call(null,replicant.assert.current_node,(headers[(7)]));
} else {
}

var or__5045__auto__ = (function (){var temp__5804__auto__ = (headers[(8)]);
if(cljs.core.truth_(temp__5804__auto__)){
var text = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.protocols.create_text_node.call(null,renderer,text),(function (){var text__9487__auto__ = text;
return (new Array(null,null,null,null,null,null,false,text__9487__auto__,text__9487__auto__,null,null,null));
})()], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var G__11214 = replicant.core.get_alias_headers.call(null,impl,headers);
if((G__11214 == null)){
return null;
} else {
return replicant.core.create_node.call(null,impl,G__11214);
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
var vec__11215 = replicant.core.get_mounting_attrs.call(null,headers);
var attrs = cljs.core.nth.call(null,vec__11215,(0),null);
var mounting_attrs = cljs.core.nth.call(null,vec__11215,(1),null);
var _ = replicant.core.set_attributes.call(null,renderer,node,(function (){var or__5045__auto____$2 = mounting_attrs;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return attrs;
}
})());
var vec__11218 = cljs.core.reduce.call(null,(function (p__11221,child_headers){
var vec__11222 = p__11221;
var children = cljs.core.nth.call(null,vec__11222,(0),null);
var ks = cljs.core.nth.call(null,vec__11222,(1),null);
var n = cljs.core.nth.call(null,vec__11222,(2),null);
if(cljs.core.truth_(child_headers)){
var vec__11225 = replicant.core.create_node.call(null,impl,child_headers);
var child_node = cljs.core.nth.call(null,vec__11225,(0),null);
var vdom = cljs.core.nth.call(null,vec__11225,(1),null);
var k = (vdom[(1)]);
replicant.protocols.append_child.call(null,renderer,node,child_node);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,children,vdom),(function (){var G__11228 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.call(null,G__11228,k);
} else {
return G__11228;
}
})(),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,children,null),ks,n], null);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY),(0)], null),replicant.core.get_children.call(null,headers,ns));
var children = cljs.core.nth.call(null,vec__11218,(0),null);
var ks = cljs.core.nth.call(null,vec__11218,(1),null);
var n_children = cljs.core.nth.call(null,vec__11218,(2),null);
replicant.core.register_hooks.call(null,impl,node,headers);

if(cljs.core.truth_(mounting_attrs)){
replicant.core.register_mount.call(null,impl,node,mounting_attrs,attrs);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,(function (){var headers__9494__auto__ = headers;
return (new Array((headers__9494__auto__[(0)]),(headers__9494__auto__[(3)]),(headers__9494__auto__[(2)]),attrs,cljs.core.persistent_BANG_.call(null,children),cljs.core.persistent_BANG_.call(null,ks),cljs.core.boolean$.call(null,new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__9494__auto__[(4)]))),(headers__9494__auto__[(7)]),null,null,(headers__9494__auto__[(9)]),(headers__9494__auto__[(10)]),n_children));
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
var G__11231 = (coll_n + (1));
var G__11232 = dom_n;
var G__11233 = cljs.core.next.call(null,xs__$1);
coll_n = G__11231;
dom_n = G__11232;
xs__$1 = G__11233;
continue;
} else {
if(cljs.core.truth_(f.call(null,cljs.core.first.call(null,xs__$1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll_n,dom_n], null);
} else {
var G__11234 = (coll_n + (1));
var G__11235 = (dom_n + (1));
var G__11236 = cljs.core.next.call(null,xs__$1);
coll_n = G__11234;
dom_n = G__11235;
xs__$1 = G__11236;
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
replicant.core.insert_children = (function replicant$core$insert_children(p__11237,el,children,vdom){
var map__11238 = p__11237;
var map__11238__$1 = cljs.core.__destructure_map.call(null,map__11238);
var impl = map__11238__$1;
var renderer = cljs.core.get.call(null,map__11238__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
return cljs.core.reduce.call(null,(function (p__11239,child){
var vec__11240 = p__11239;
var res = cljs.core.nth.call(null,vec__11240,(0),null);
var n = cljs.core.nth.call(null,vec__11240,(1),null);
if(cljs.core.truth_(child)){
var vec__11243 = replicant.core.create_node.call(null,impl,child);
var node = cljs.core.nth.call(null,vec__11243,(0),null);
var vdom__$1 = cljs.core.nth.call(null,vec__11243,(1),null);
replicant.protocols.append_child.call(null,renderer,el,node);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,res,vdom__$1),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,res,null),n], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vdom,(0)], null),children);
});
replicant.core.remove_child = (function replicant$core$remove_child(p__11246,unmounts,el,n,vdom){
var map__11247 = p__11246;
var map__11247__$1 = cljs.core.__destructure_map.call(null,map__11247);
var impl = map__11247__$1;
var renderer = cljs.core.get.call(null,map__11247__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
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
var vdom__$1 = (function (){var vdom__9481__auto__ = vdom;
(vdom__9481__auto__[(9)] = cljs.core._vreset_BANG_.call(null,replicant.vdom.id,(cljs.core._deref.call(null,replicant.vdom.id) + (1))));

return vdom__9481__auto__;
})();
var child = replicant.protocols.get_child.call(null,renderer,el,n);
replicant.core.update_attributes.call(null,renderer,child,attrs,(vdom__$1[(3)]));

cljs.core._vreset_BANG_.call(null,new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.conj.call(null,cljs.core._deref.call(null,new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.on_transition_end.call(null,renderer,child,(function (){
cljs.core._vreset_BANG_.call(null,new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.disj.call(null,cljs.core._deref.call(null,new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.remove_child.call(null,renderer,el,child);

var temp__5804__auto___11248 = new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((vdom__$1[(3)]));
if(cljs.core.truth_(temp__5804__auto___11248)){
var hook_11249 = temp__5804__auto___11248;
replicant.core.call_hook.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook_11249,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),child,null,vdom__$1], null));
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
return cljs.core._EQ_.call(null,(function (){var G__11250 = headers;
if((G__11250 == null)){
return null;
} else {
return (G__11250[(7)]);
}
})(),(function (){var G__11251 = vdom;
if((G__11251 == null)){
return null;
} else {
var vdom__9470__auto__ = G__11251;
var or__5045__auto__ = (vdom__9470__auto__[(11)]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (vdom__9470__auto__[(7)]);
}
}
})());
});
replicant.core.move_nodes = (function replicant$core$move_nodes(p__11254,el,headers,new_children,vdom,old_children,n,n_children){
var map__11255 = p__11254;
var map__11255__$1 = cljs.core.__destructure_map.call(null,map__11255);
var impl = map__11255__$1;
var renderer = cljs.core.get.call(null,map__11255__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var vec__11256 = (cljs.core.truth_((headers[(3)]))?replicant.core.index_of.call(null,(function (p1__11252_SHARP_){
return replicant.core.same_QMARK_.call(null,headers,p1__11252_SHARP_);
}),old_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var o_idx = cljs.core.nth.call(null,vec__11256,(0),null);
var o_dom_idx = cljs.core.nth.call(null,vec__11256,(1),null);
var vec__11259 = (cljs.core.truth_((vdom[(1)]))?replicant.core.index_of.call(null,(function (p1__11253_SHARP_){
return replicant.core.same_QMARK_.call(null,p1__11253_SHARP_,vdom);
}),new_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var n_idx = cljs.core.nth.call(null,vec__11259,(0),null);
var n_dom_idx = cljs.core.nth.call(null,vec__11259,(1),null);
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
var G__11290 = cljs.core.next.call(null,children);
var G__11291 = cljs.core.conj_BANG_.call(null,vdom__$1,null);
var G__11292 = n__$1;
var G__11293 = n_children__$2;
children = G__11290;
vdom__$1 = G__11291;
n__$1 = G__11292;
n_children__$2 = G__11293;
continue;
} else {
var temp__5802__auto__ = replicant.core.remove_child.call(null,impl,unmounts,el,n__$1,cljs.core.first.call(null,children));
if(cljs.core.truth_(temp__5802__auto__)){
var pending_vdom = temp__5802__auto__;
var G__11294 = cljs.core.next.call(null,children);
var G__11295 = cljs.core.conj_BANG_.call(null,vdom__$1,pending_vdom);
var G__11296 = (n__$1 + (1));
var G__11297 = n_children__$2;
children = G__11294;
vdom__$1 = G__11295;
n__$1 = G__11296;
n_children__$2 = G__11297;
continue;
} else {
var G__11298 = cljs.core.next.call(null,children);
var G__11299 = vdom__$1;
var G__11300 = n__$1;
var G__11301 = (n_children__$2 - (1));
children = G__11298;
vdom__$1 = G__11299;
n__$1 = G__11300;
n_children__$2 = G__11301;
continue;
}

}
}
break;
}
} else {
if(old_empty_QMARK_){
var vec__11276 = replicant.core.insert_children.call(null,impl,el,new_c,vdom);
var vdom__$1 = cljs.core.nth.call(null,vec__11276,(0),null);
var n__$1 = cljs.core.nth.call(null,vec__11276,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.persistent_BANG_.call(null,vdom__$1),new_ks,(n_children__$1 + n__$1)], null);
} else {
if(((new_nil_QMARK_) && (old_nil_QMARK_))){
var G__11302 = cljs.core.next.call(null,new_c);
var G__11303 = cljs.core.next.call(null,old_c);
var G__11304 = n;
var G__11305 = move_n;
var G__11306 = n_children__$1;
var G__11307 = changed_QMARK_;
var G__11308 = cljs.core.conj_BANG_.call(null,vdom,null);
new_c = G__11302;
old_c = G__11303;
n = G__11304;
move_n = G__11305;
n_children__$1 = G__11306;
changed_QMARK_ = G__11307;
vdom = G__11308;
continue;
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = old_vdom;
if(cljs.core.truth_(and__5043__auto__)){
return (old_vdom[(9)]);
} else {
return and__5043__auto__;
}
})())){
var vec__11279 = (cljs.core.truth_((function (){var and__5043__auto__ = new_headers;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,old_ks.call(null,(new_headers[(3)])));
} else {
return and__5043__auto__;
}
})())?(function (){var res = replicant.core.create_node.call(null,impl,new_headers);
replicant.core.insert_node.call(null,r,el,cljs.core.first.call(null,res),n,n_children__$1);

return res;
})():null);
var child = cljs.core.nth.call(null,vec__11279,(0),null);
var child_vdom = cljs.core.nth.call(null,vec__11279,(1),null);
if(cljs.core.truth_(unmounts.call(null,(old_vdom[(9)])))){
if(new_nil_QMARK_){
var G__11309 = cljs.core.next.call(null,new_c);
var G__11310 = cljs.core.next.call(null,old_c);
var G__11311 = (n + (1));
var G__11312 = move_n;
var G__11313 = n_children__$1;
var G__11314 = changed_QMARK_;
var G__11315 = cljs.core.conj_BANG_.call(null,vdom,old_vdom);
new_c = G__11309;
old_c = G__11310;
n = G__11311;
move_n = G__11312;
n_children__$1 = G__11313;
changed_QMARK_ = G__11314;
vdom = G__11315;
continue;
} else {
if(cljs.core.truth_(child)){
var G__11316 = cljs.core.next.call(null,new_c);
var G__11317 = cljs.core.next.call(null,old_c);
var G__11318 = (n + (2));
var G__11319 = move_n;
var G__11320 = (n_children__$1 + (1));
var G__11321 = true;
var G__11322 = cljs.core.conj_BANG_.call(null,vdom,child_vdom);
new_c = G__11316;
old_c = G__11317;
n = G__11318;
move_n = G__11319;
n_children__$1 = G__11320;
changed_QMARK_ = G__11321;
vdom = G__11322;
continue;
} else {
var G__11323 = new_c;
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

}
}
} else {
if(new_nil_QMARK_){
var G__11330 = cljs.core.next.call(null,new_c);
var G__11331 = cljs.core.next.call(null,old_c);
var G__11332 = n;
var G__11333 = (move_n - (1));
var G__11334 = (n_children__$1 - (1));
var G__11335 = changed_QMARK_;
var G__11336 = cljs.core.conj_BANG_.call(null,vdom,null);
new_c = G__11330;
old_c = G__11331;
n = G__11332;
move_n = G__11333;
n_children__$1 = G__11334;
changed_QMARK_ = G__11335;
vdom = G__11336;
continue;
} else {
if(cljs.core.truth_(child)){
var G__11337 = cljs.core.next.call(null,new_c);
var G__11338 = cljs.core.next.call(null,old_c);
var G__11339 = (n + (1));
var G__11340 = move_n;
var G__11341 = n_children__$1;
var G__11342 = true;
var G__11343 = cljs.core.conj_BANG_.call(null,vdom,child_vdom);
new_c = G__11337;
old_c = G__11338;
n = G__11339;
move_n = G__11340;
n_children__$1 = G__11341;
changed_QMARK_ = G__11342;
vdom = G__11343;
continue;
} else {
var G__11344 = new_c;
var G__11345 = cljs.core.next.call(null,old_c);
var G__11346 = n;
var G__11347 = (move_n - (1));
var G__11348 = (n_children__$1 - (1));
var G__11349 = changed_QMARK_;
var G__11350 = vdom;
new_c = G__11344;
old_c = G__11345;
n = G__11346;
move_n = G__11347;
n_children__$1 = G__11348;
changed_QMARK_ = G__11349;
vdom = G__11350;
continue;

}
}
}
} else {
if(new_nil_QMARK_){
if(cljs.core.contains_QMARK_.call(null,new_ks,(old_vdom[(1)]))){
var G__11351 = cljs.core.next.call(null,new_c);
var G__11352 = old_c;
var G__11353 = n;
var G__11354 = move_n;
var G__11355 = n_children__$1;
var G__11356 = true;
var G__11357 = vdom;
new_c = G__11351;
old_c = G__11352;
n = G__11353;
move_n = G__11354;
n_children__$1 = G__11355;
changed_QMARK_ = G__11356;
vdom = G__11357;
continue;
} else {
var temp__5802__auto__ = replicant.core.remove_child.call(null,impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5802__auto__)){
var unmounting_node = temp__5802__auto__;
var G__11358 = cljs.core.next.call(null,new_c);
var G__11359 = cljs.core.next.call(null,old_c);
var G__11360 = (n + (1));
var G__11361 = move_n;
var G__11362 = n_children__$1;
var G__11363 = true;
var G__11364 = cljs.core.conj_BANG_.call(null,vdom,unmounting_node);
new_c = G__11358;
old_c = G__11359;
n = G__11360;
move_n = G__11361;
n_children__$1 = G__11362;
changed_QMARK_ = G__11363;
vdom = G__11364;
continue;
} else {
var G__11365 = cljs.core.next.call(null,new_c);
var G__11366 = cljs.core.next.call(null,old_c);
var G__11367 = n;
var G__11368 = move_n;
var G__11369 = (n_children__$1 - (1));
var G__11370 = true;
var G__11371 = cljs.core.conj_BANG_.call(null,vdom,null);
new_c = G__11365;
old_c = G__11366;
n = G__11367;
move_n = G__11368;
n_children__$1 = G__11369;
changed_QMARK_ = G__11370;
vdom = G__11371;
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

var G__11372 = cljs.core.next.call(null,new_c);
var G__11373 = cljs.core.next.call(null,old_c);
var G__11374 = (n + (1));
var G__11375 = move_n;
var G__11376 = n_children__$1;
var G__11377 = (function (){var or__5045__auto__ = changed_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (!(node_unchanged_QMARK_));
}
})();
var G__11378 = cljs.core.conj_BANG_.call(null,vdom,new_vdom);
new_c = G__11372;
old_c = G__11373;
n = G__11374;
move_n = G__11375;
n_children__$1 = G__11376;
changed_QMARK_ = G__11377;
vdom = G__11378;
continue;
} else {
if(cljs.core.not.call(null,old_ks.call(null,(new_headers[(3)])))){
var vec__11282 = replicant.core.create_node.call(null,impl,new_headers);
var child = cljs.core.nth.call(null,vec__11282,(0),null);
var child_vdom = cljs.core.nth.call(null,vec__11282,(1),null);
replicant.core.insert_node.call(null,r,el,child,n,n_children__$1);

var G__11379 = cljs.core.next.call(null,new_c);
var G__11380 = (function (){var G__11285 = old_c;
if((old_vdom == null)){
return cljs.core.next.call(null,G__11285);
} else {
return G__11285;
}
})();
var G__11381 = (n + (1));
var G__11382 = move_n;
var G__11383 = (n_children__$1 + (1));
var G__11384 = true;
var G__11385 = cljs.core.conj_BANG_.call(null,vdom,child_vdom);
new_c = G__11379;
old_c = G__11380;
n = G__11381;
move_n = G__11382;
n_children__$1 = G__11383;
changed_QMARK_ = G__11384;
vdom = G__11385;
continue;
} else {
if(((old_nil_QMARK_) || (cljs.core.not.call(null,new_ks.call(null,(old_vdom[(1)])))))){
var temp__5802__auto__ = replicant.core.remove_child.call(null,impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5802__auto__)){
var unmounting_node = temp__5802__auto__;
var G__11386 = new_c;
var G__11387 = cljs.core.next.call(null,old_c);
var G__11388 = (n + (1));
var G__11389 = move_n;
var G__11390 = n_children__$1;
var G__11391 = true;
var G__11392 = cljs.core.conj_BANG_.call(null,vdom,unmounting_node);
new_c = G__11386;
old_c = G__11387;
n = G__11388;
move_n = G__11389;
n_children__$1 = G__11390;
changed_QMARK_ = G__11391;
vdom = G__11392;
continue;
} else {
var G__11393 = new_c;
var G__11394 = cljs.core.next.call(null,old_c);
var G__11395 = n;
var G__11396 = move_n;
var G__11397 = (n_children__$1 - (1));
var G__11398 = true;
var G__11399 = vdom;
new_c = G__11393;
old_c = G__11394;
n = G__11395;
move_n = G__11396;
n_children__$1 = G__11397;
changed_QMARK_ = G__11398;
vdom = G__11399;
continue;
}
} else {
var vec__11286 = replicant.core.move_nodes.call(null,impl,el,new_headers,new_c,old_vdom,old_c,n,n_children__$1);
var nc = cljs.core.nth.call(null,vec__11286,(0),null);
var oc = cljs.core.nth.call(null,vec__11286,(1),null);
var n__$1 = cljs.core.nth.call(null,vec__11286,(2),null);
var move_n__$1 = cljs.core.nth.call(null,vec__11286,(3),null);
var vdom_node = cljs.core.nth.call(null,vec__11286,(4),null);
var G__11400 = nc;
var G__11401 = oc;
var G__11402 = n__$1;
var G__11403 = move_n__$1;
var G__11404 = n_children__$1;
var G__11405 = true;
var G__11406 = (function (){var G__11289 = vdom;
if(cljs.core.truth_(vdom_node)){
return cljs.core.conj_BANG_.call(null,G__11289,vdom_node);
} else {
return G__11289;
}
})();
new_c = G__11400;
old_c = G__11401;
n = G__11402;
move_n = G__11403;
n_children__$1 = G__11404;
changed_QMARK_ = G__11405;
vdom = G__11406;
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
replicant.core.reconcile_STAR_ = (function replicant$core$reconcile_STAR_(p__11407,el,headers,vdom,index){
var map__11408 = p__11407;
var map__11408__$1 = cljs.core.__destructure_map.call(null,map__11408);
var impl = map__11408__$1;
var renderer = cljs.core.get.call(null,map__11408__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
if(cljs.core.truth_(headers)){
var temp__5804__auto___11421 = (function (){var or__5045__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,(headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5804__auto___11421)){
var ctx__10947__auto___11422 = temp__5804__auto___11421;
cljs.core.reset_BANG_.call(null,replicant.assert.current_context,ctx__10947__auto___11422);
} else {
}

cljs.core.reset_BANG_.call(null,replicant.assert.current_node,(headers[(7)]));
} else {
}

if(replicant.core.unchanged_QMARK_.call(null,headers,vdom)){
return vdom;
} else {
if(cljs.core.not_EQ_.call(null,(headers[(8)]),(vdom[(8)]))){
var vec__11409 = replicant.core.create_node.call(null,impl,headers);
var node = cljs.core.nth.call(null,vec__11409,(0),null);
var vdom__$1 = cljs.core.nth.call(null,vec__11409,(1),null);
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
var vec__11412 = (cljs.core.truth_(new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1((headers__$1[(4)])))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,true], null):replicant.core.get_children_ks.call(null,headers__$1,replicant.core.get_ns.call(null,headers__$1)));
var new_children = cljs.core.nth.call(null,vec__11412,(0),null);
var new_ks = cljs.core.nth.call(null,vec__11412,(1),null);
var inner_html_QMARK_ = cljs.core.nth.call(null,vec__11412,(2),null);
var vec__11415 = (cljs.core.truth_(new cljs.core.Keyword(null,"contenteditable","contenteditable",-770210530).cljs$core$IFn$_invoke$arity$1(vdom_attrs))?(function (){
replicant.protocols.remove_all_children.call(null,renderer,child);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null);
})()
:(cljs.core.truth_(inner_html_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vdom[(4)]),(vdom[(5)]),(vdom[(12)])], null)
));
var old_children = cljs.core.nth.call(null,vec__11415,(0),null);
var old_ks = cljs.core.nth.call(null,vec__11415,(1),null);
var old_nc = cljs.core.nth.call(null,vec__11415,(2),null);
var vec__11418 = replicant.core.update_children.call(null,impl,child,new_children,new_ks,old_children,old_ks,old_nc);
var children_changed_QMARK_ = cljs.core.nth.call(null,vec__11418,(0),null);
var children = cljs.core.nth.call(null,vec__11418,(1),null);
var child_ks = cljs.core.nth.call(null,vec__11418,(2),null);
var n_children = cljs.core.nth.call(null,vec__11418,(3),null);
var attrs_changed_QMARK___$1 = ((attrs_changed_QMARK_) || (cljs.core.not_EQ_.call(null,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((headers__$1[(4)])),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1(vdom_attrs))));
replicant.core.register_hooks.call(null,impl,child,headers__$1,vdom,(cljs.core.truth_((function (){var and__5043__auto__ = attrs_changed_QMARK___$1;
if(and__5043__auto__){
return children_changed_QMARK_;
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895),new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null):((attrs_changed_QMARK___$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null)
)));

var headers__9494__auto__ = headers__$1;
return (new Array((headers__9494__auto__[(0)]),(headers__9494__auto__[(3)]),(headers__9494__auto__[(2)]),attrs,children,child_ks,cljs.core.boolean$.call(null,new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__9494__auto__[(4)]))),(headers__9494__auto__[(7)]),null,null,(headers__9494__auto__[(9)]),(headers__9494__auto__[(10)]),n_children));

}
}
});
replicant.core.perform_post_mount_update = (function replicant$core$perform_post_mount_update(renderer,p__11423){
var vec__11424 = p__11423;
var node = cljs.core.nth.call(null,vec__11424,(0),null);
var mounting_attrs = cljs.core.nth.call(null,vec__11424,(1),null);
var attrs = cljs.core.nth.call(null,vec__11424,(2),null);
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
var len__5769__auto___11439 = arguments.length;
var i__5770__auto___11440 = (0);
while(true){
if((i__5770__auto___11440 < len__5769__auto___11439)){
args__5775__auto__.push((arguments[i__5770__auto___11440]));

var G__11441 = (i__5770__auto___11440 + (1));
i__5770__auto___11440 = G__11441;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic = (function (renderer,el,hiccup,p__11433){
var vec__11434 = p__11433;
var vdom = cljs.core.nth.call(null,vec__11434,(0),null);
var map__11437 = cljs.core.nth.call(null,vec__11434,(1),null);
var map__11437__$1 = cljs.core.__destructure_map.call(null,map__11437);
var unmounts = cljs.core.get.call(null,map__11437__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521));
var aliases = cljs.core.get.call(null,map__11437__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var impl = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"hooks","hooks",-413590103),cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"mounts","mounts",-791474425),cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"unmounts","unmounts",173366521),(function (){var or__5045__auto__ = unmounts;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
}
})(),new cljs.core.Keyword(null,"aliases","aliases",1346874714),aliases], null);
var vdom__$1 = (function (){var headers = replicant.core.get_hiccup_headers.call(null,null,hiccup);
if(cljs.core.truth_(headers)){
var temp__5804__auto___11442 = (function (){var or__5045__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,(headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5804__auto___11442)){
var ctx__10947__auto___11443 = temp__5804__auto___11442;
cljs.core.reset_BANG_.call(null,replicant.assert.current_context,ctx__10947__auto___11443);
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
return cljs.core.second.call(null,replicant.core.update_children.call(null,impl,el,(cljs.core.truth_(headers)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [headers], null):null),(function (){var G__11438 = cljs.core.PersistentHashSet.EMPTY;
if(cljs.core.truth_(k)){
return cljs.core.conj.call(null,G__11438,k);
} else {
return G__11438;
}
})(),vdom,cljs.core.set.call(null,cljs.core.keep.call(null,(function (p1__11427_SHARP_){
return (p1__11427_SHARP_[(1)]);
}),vdom)),(cljs.core.truth_(cljs.core.first.call(null,vdom))?(1):(0))));
}
})();
var hooks = cljs.core.deref.call(null,new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(impl));
var temp__5802__auto___11444 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"mounts","mounts",-791474425).cljs$core$IFn$_invoke$arity$1(impl)));
if(temp__5802__auto___11444){
var mounts_11445 = temp__5802__auto___11444;
replicant.protocols.next_frame.call(null,renderer,(function (){
cljs.core.run_BANG_.call(null,(function (p1__11428_SHARP_){
return replicant.core.perform_post_mount_update.call(null,renderer,p1__11428_SHARP_);
}),mounts_11445);

return cljs.core.run_BANG_.call(null,replicant.core.call_hook,hooks);
}));
} else {
cljs.core.run_BANG_.call(null,replicant.core.call_hook,hooks);
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hooks","hooks",-413590103),hooks,new cljs.core.Keyword(null,"vdom","vdom",953162958),vdom__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521),new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)], null);
}));

(replicant.core.reconcile.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.reconcile.cljs$lang$applyTo = (function (seq11429){
var G__11430 = cljs.core.first.call(null,seq11429);
var seq11429__$1 = cljs.core.next.call(null,seq11429);
var G__11431 = cljs.core.first.call(null,seq11429__$1);
var seq11429__$2 = cljs.core.next.call(null,seq11429__$1);
var G__11432 = cljs.core.first.call(null,seq11429__$2);
var seq11429__$3 = cljs.core.next.call(null,seq11429__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11430,G__11431,G__11432,seq11429__$3);
}));

cljs.core.add_watch.call(null,replicant.assert.error,new cljs.core.Keyword("replicant.assert","default","replicant.assert/default",-504441266),(function (___10965__auto__,___10965__auto____$1,___10965__auto____$2,error__10966__auto__){
return replicant.console_logger.report.call(null,error__10966__auto__);
}));

//# sourceMappingURL=core.js.map
