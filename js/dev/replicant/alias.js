// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('replicant.alias');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('replicant.assert');
goog.require('replicant.core');
goog.require('replicant.hiccup');
replicant.alias.aliases = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ret__5824__auto___12382 = (function (){
replicant.alias.aliasfn = (function replicant$alias$aliasfn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12383 = arguments.length;
var i__5770__auto___12384 = (0);
while(true){
if((i__5770__auto___12384 < len__5769__auto___12383)){
args__5775__auto__.push((arguments[i__5770__auto___12384]));

var G__12385 = (i__5770__auto___12384 + (1));
i__5770__auto___12384 = G__12385;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return replicant.alias.aliasfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(replicant.alias.aliasfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,alias,forms){
var vec__12376 = ((typeof cljs.core.first.call(null,forms) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,forms),cljs.core.next.call(null,forms)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",forms], null));
var _docstring = cljs.core.nth.call(null,vec__12376,(0),null);
var vec__12379 = cljs.core.nth.call(null,vec__12376,(1),null);
var seq__12380 = cljs.core.seq.call(null,vec__12379);
var first__12381 = cljs.core.first.call(null,seq__12380);
var seq__12380__$1 = cljs.core.next.call(null,seq__12380);
var attr_map = first__12381;
var body = seq__12380__$1;
var alias_kw = cljs.core.keyword.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),cljs.core.name.call(null,alias));
if(cljs.core.truth_(replicant.assert.assert_QMARK_.call(null))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__12371__auto__","args__12371__auto__",-721657712,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,attr_map,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__12371__auto__","args__12371__auto__",-721657712,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some->","cljs.core/some->",-67411995,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword("replicant","context","replicant/context",-909059467),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"alias","alias",-2039751630),null,(1),null)),(new cljs.core.List(null,alias_kw,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"data","data",-232669377),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__12371__auto__","args__12371__auto__",-721657712,null),null,(1),null))))),null,(1),null)))))),null,(1),null)))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),null,(1),null)),(new cljs.core.List(null,alias_kw,null,(1),null)))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,attr_map,null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),null,(1),null)),(new cljs.core.List(null,alias_kw,null,(1),null)))))),null,(1),null)))));
}
}));

(replicant.alias.aliasfn.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.alias.aliasfn.cljs$lang$applyTo = (function (seq12372){
var G__12373 = cljs.core.first.call(null,seq12372);
var seq12372__$1 = cljs.core.next.call(null,seq12372);
var G__12374 = cljs.core.first.call(null,seq12372__$1);
var seq12372__$2 = cljs.core.next.call(null,seq12372__$1);
var G__12375 = cljs.core.first.call(null,seq12372__$2);
var seq12372__$3 = cljs.core.next.call(null,seq12372__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12373,G__12374,G__12375,seq12372__$3);
}));

return null;
})()
;
(replicant.alias.aliasfn.cljs$lang$macro = true);

var ret__5824__auto___12392 = (function (){
replicant.alias.defalias = (function replicant$alias$defalias(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12393 = arguments.length;
var i__5770__auto___12394 = (0);
while(true){
if((i__5770__auto___12394 < len__5769__auto___12393)){
args__5775__auto__.push((arguments[i__5770__auto___12394]));

var G__12395 = (i__5770__auto___12394 + (1));
i__5770__auto___12394 = G__12395;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return replicant.alias.defalias.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(replicant.alias.defalias.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,alias,forms){
var alias_f = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("replicant.alias","aliasfn","replicant.alias/aliasfn",636525104,null),null,(1),null)),(new cljs.core.List(null,alias,null,(1),null)),forms)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__12386__auto__","f__12386__auto__",-533269312,null),null,(1),null)),(new cljs.core.List(null,alias_f,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"alias__12387__auto__","alias__12387__auto__",1190932201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,alias_f,null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("replicant.alias","aliases","replicant.alias/aliases",1389359233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"alias__12387__auto__","alias__12387__auto__",1190932201,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__12386__auto__","f__12386__auto__",-533269312,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,alias,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"alias__12387__auto__","alias__12387__auto__",1190932201,null),null,(1),null))))),null,(1),null)))));
}));

(replicant.alias.defalias.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.alias.defalias.cljs$lang$applyTo = (function (seq12388){
var G__12389 = cljs.core.first.call(null,seq12388);
var seq12388__$1 = cljs.core.next.call(null,seq12388);
var G__12390 = cljs.core.first.call(null,seq12388__$1);
var seq12388__$2 = cljs.core.next.call(null,seq12388__$1);
var G__12391 = cljs.core.first.call(null,seq12388__$2);
var seq12388__$3 = cljs.core.next.call(null,seq12388__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12389,G__12390,G__12391,seq12388__$3);
}));

return null;
})()
;
(replicant.alias.defalias.cljs$lang$macro = true);

var ret__5824__auto___12399 = replicant.alias.key_hiccup = (function replicant$alias$key_hiccup(_AMPERSAND_form,_AMPERSAND_env,hiccup,aliases){
return hiccup;

});
(replicant.alias.key_hiccup.cljs$lang$macro = true);

replicant.alias.get_aliases = (function replicant$alias$get_aliases(){
return cljs.core.deref.call(null,replicant.alias.aliases);
});
replicant.alias.alias_hiccup_QMARK_ = (function replicant$alias$alias_hiccup_QMARK_(x){
return ((replicant.core.hiccup_QMARK_.call(null,x)) && (cljs.core.qualified_keyword_QMARK_.call(null,cljs.core.first.call(null,x))));
});
replicant.alias.__GT_hiccup = (function replicant$alias$__GT_hiccup(headers){
if(cljs.core.truth_(headers)){
var or__5045__auto__ = (headers[(8)]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,(headers[(0)])),(function (){var attrs = replicant.core.get_attrs.call(null,headers);
var G__12400 = (headers[(4)]);
var G__12400__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs))?cljs.core.assoc.call(null,G__12400,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs)):G__12400);
if(cljs.core.truth_(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.assoc.call(null,G__12400__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.set.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(attrs)));
} else {
return G__12400__$1;
}
})()], null),replicant.core.flatten_seqs.call(null,(headers[(5)])));
}
} else {
return null;
}
});
replicant.alias.expand_aliased_hiccup = (function replicant$alias$expand_aliased_hiccup(x,opt){
if(replicant.alias.alias_hiccup_QMARK_.call(null,x)){
return replicant.alias.__GT_hiccup.call(null,replicant.core.get_alias_headers.call(null,opt,replicant.core.get_hiccup_headers.call(null,null,x)));
} else {
return x;
}
});
replicant.alias.get_opts = (function replicant$alias$get_opts(aliases){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),(function (){var or__5045__auto__ = aliases;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return replicant.alias.get_aliases.call(null);
}
})()], null);
});
replicant.alias.expand_1 = (function replicant$alias$expand_1(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12409 = arguments.length;
var i__5770__auto___12410 = (0);
while(true){
if((i__5770__auto___12410 < len__5769__auto___12409)){
args__5775__auto__.push((arguments[i__5770__auto___12410]));

var G__12411 = (i__5770__auto___12410 + (1));
i__5770__auto___12410 = G__12411;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return replicant.alias.expand_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(replicant.alias.expand_1.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,p__12404){
var vec__12405 = p__12404;
var map__12408 = cljs.core.nth.call(null,vec__12405,(0),null);
var map__12408__$1 = cljs.core.__destructure_map.call(null,map__12408);
var aliases = cljs.core.get.call(null,map__12408__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
return clojure.walk.postwalk.call(null,(function (p1__12401_SHARP_){
return replicant.alias.expand_aliased_hiccup.call(null,p1__12401_SHARP_,replicant.alias.get_opts.call(null,aliases));
}),hiccup);
}));

(replicant.alias.expand_1.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(replicant.alias.expand_1.cljs$lang$applyTo = (function (seq12402){
var G__12403 = cljs.core.first.call(null,seq12402);
var seq12402__$1 = cljs.core.next.call(null,seq12402);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12403,seq12402__$1);
}));

replicant.alias.expand = (function replicant$alias$expand(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12420 = arguments.length;
var i__5770__auto___12421 = (0);
while(true){
if((i__5770__auto___12421 < len__5769__auto___12420)){
args__5775__auto__.push((arguments[i__5770__auto___12421]));

var G__12422 = (i__5770__auto___12421 + (1));
i__5770__auto___12421 = G__12422;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return replicant.alias.expand.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(replicant.alias.expand.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,p__12415){
var vec__12416 = p__12415;
var map__12419 = cljs.core.nth.call(null,vec__12416,(0),null);
var map__12419__$1 = cljs.core.__destructure_map.call(null,map__12419);
var aliases = cljs.core.get.call(null,map__12419__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
return clojure.walk.prewalk.call(null,(function (p1__12412_SHARP_){
return replicant.alias.expand_aliased_hiccup.call(null,p1__12412_SHARP_,replicant.alias.get_opts.call(null,aliases));
}),hiccup);
}));

(replicant.alias.expand.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(replicant.alias.expand.cljs$lang$applyTo = (function (seq12413){
var G__12414 = cljs.core.first.call(null,seq12413);
var seq12413__$1 = cljs.core.next.call(null,seq12413);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12414,seq12413__$1);
}));


//# sourceMappingURL=alias.js.map
