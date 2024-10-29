// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('replicant.alias');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('replicant.assert');
goog.require('replicant.core');
goog.require('replicant.hiccup');
replicant.alias.aliases = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ret__5824__auto___12397 = (function (){
replicant.alias.aliasfn = (function replicant$alias$aliasfn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12398 = arguments.length;
var i__5770__auto___12399 = (0);
while(true){
if((i__5770__auto___12399 < len__5769__auto___12398)){
args__5775__auto__.push((arguments[i__5770__auto___12399]));

var G__12400 = (i__5770__auto___12399 + (1));
i__5770__auto___12399 = G__12400;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return replicant.alias.aliasfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(replicant.alias.aliasfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,alias,forms){
var vec__12391 = ((typeof cljs.core.first.call(null,forms) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,forms),cljs.core.next.call(null,forms)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",forms], null));
var _docstring = cljs.core.nth.call(null,vec__12391,(0),null);
var vec__12394 = cljs.core.nth.call(null,vec__12391,(1),null);
var seq__12395 = cljs.core.seq.call(null,vec__12394);
var first__12396 = cljs.core.first.call(null,seq__12395);
var seq__12395__$1 = cljs.core.next.call(null,seq__12395);
var attr_map = first__12396;
var body = seq__12395__$1;
var n_args = cljs.core.count.call(null,attr_map);
var attr_map__$1 = ((cljs.core._EQ_.call(null,(0),n_args))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null):((cljs.core._EQ_.call(null,(1),n_args))?cljs.core.conj.call(null,attr_map,new cljs.core.Symbol(null,"_","_",-1201019570,null)):attr_map
));
if(cljs.core.truth_(replicant.assert.assert_QMARK_.call(null))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__12385__auto__","args__12385__auto__",-2139395336,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,attr_map__$1,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__12385__auto__","args__12385__auto__",-2139395336,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__12386__auto__","res__12386__auto__",-2057776483,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__12386__auto__","res__12386__auto__",-2057776483,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__12386__auto__","res__12386__auto__",-2057776483,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword("replicant","context","replicant/context",-909059467),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"alias","alias",-2039751630),null,(1),null)),(new cljs.core.List(null,alias,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"data","data",-232669377),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__12385__auto__","args__12385__auto__",-2139395336,null),null,(1),null))))),null,(1),null)))))),null,(1),null)))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),null,(1),null)),(new cljs.core.List(null,alias,null,(1),null)))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,attr_map__$1,null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),null,(1),null)),(new cljs.core.List(null,alias,null,(1),null)))))),null,(1),null)))));
}
}));

(replicant.alias.aliasfn.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.alias.aliasfn.cljs$lang$applyTo = (function (seq12387){
var G__12388 = cljs.core.first.call(null,seq12387);
var seq12387__$1 = cljs.core.next.call(null,seq12387);
var G__12389 = cljs.core.first.call(null,seq12387__$1);
var seq12387__$2 = cljs.core.next.call(null,seq12387__$1);
var G__12390 = cljs.core.first.call(null,seq12387__$2);
var seq12387__$3 = cljs.core.next.call(null,seq12387__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12388,G__12389,G__12390,seq12387__$3);
}));

return null;
})()
;
(replicant.alias.aliasfn.cljs$lang$macro = true);

var ret__5824__auto___12407 = (function (){
replicant.alias.defalias = (function replicant$alias$defalias(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12408 = arguments.length;
var i__5770__auto___12409 = (0);
while(true){
if((i__5770__auto___12409 < len__5769__auto___12408)){
args__5775__auto__.push((arguments[i__5770__auto___12409]));

var G__12410 = (i__5770__auto___12409 + (1));
i__5770__auto___12409 = G__12410;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return replicant.alias.defalias.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(replicant.alias.defalias.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,alias,forms){
var alias_kw = cljs.core.keyword.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),cljs.core.name.call(null,alias));
var alias_f = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("replicant.alias","aliasfn","replicant.alias/aliasfn",636525104,null),null,(1),null)),(new cljs.core.List(null,alias_kw,null,(1),null)),forms)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__12401__auto__","f__12401__auto__",-1185815981,null),null,(1),null)),(new cljs.core.List(null,alias_f,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"alias__12402__auto__","alias__12402__auto__",-1892056400,null),null,(1),null)),(new cljs.core.List(null,alias_kw,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("replicant.alias","aliases","replicant.alias/aliases",1389359233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"alias__12402__auto__","alias__12402__auto__",-1892056400,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__12401__auto__","f__12401__auto__",-1185815981,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,alias,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"alias__12402__auto__","alias__12402__auto__",-1892056400,null),null,(1),null))))),null,(1),null)))));
}));

(replicant.alias.defalias.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.alias.defalias.cljs$lang$applyTo = (function (seq12403){
var G__12404 = cljs.core.first.call(null,seq12403);
var seq12403__$1 = cljs.core.next.call(null,seq12403);
var G__12405 = cljs.core.first.call(null,seq12403__$1);
var seq12403__$2 = cljs.core.next.call(null,seq12403__$1);
var G__12406 = cljs.core.first.call(null,seq12403__$2);
var seq12403__$3 = cljs.core.next.call(null,seq12403__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12404,G__12405,G__12406,seq12403__$3);
}));

return null;
})()
;
(replicant.alias.defalias.cljs$lang$macro = true);

replicant.alias.get_registered_aliases = (function replicant$alias$get_registered_aliases(){
return cljs.core.deref.call(null,replicant.alias.aliases);
});
replicant.alias.__GT_hiccup = (function replicant$alias$__GT_hiccup(headers){
if(cljs.core.truth_(headers)){
var or__5045__auto__ = (headers[(8)]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,(headers[(0)])),(function (){var attrs = replicant.core.get_attrs.call(null,headers);
var G__12411 = (headers[(4)]);
var G__12411__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs))?cljs.core.assoc.call(null,G__12411,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs)):G__12411);
if(cljs.core.truth_(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.assoc.call(null,G__12411__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.set.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(attrs)));
} else {
return G__12411__$1;
}
})()], null),replicant.core.flatten_seqs.call(null,(headers[(5)])));
}
} else {
return null;
}
});
replicant.alias.alias_hiccup_QMARK_ = (function replicant$alias$alias_hiccup_QMARK_(x){
return ((replicant.core.hiccup_QMARK_.call(null,x)) && (cljs.core.qualified_keyword_QMARK_.call(null,cljs.core.first.call(null,x))));
});
replicant.alias.expand_aliased_hiccup = (function replicant$alias$expand_aliased_hiccup(x,opt){
if(replicant.alias.alias_hiccup_QMARK_.call(null,x)){
var headers = replicant.core.get_hiccup_headers.call(null,null,x);
var defined_QMARK_ = cljs.core.get.call(null,new cljs.core.Keyword(null,"aliases","aliases",1346874714).cljs$core$IFn$_invoke$arity$1(opt),(headers[(9)]));
if(((cljs.core.not.call(null,defined_QMARK_)) && (cljs.core.get.call(null,opt,new cljs.core.Keyword(null,"ignore-missing-alias?","ignore-missing-alias?",1175846938),true) === false))){
throw cljs.core.ex_info.call(null,["Tried to expand undefined alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((headers[(9)]))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alias","alias",-2039751630),(headers[(9)])], null));
} else {
}

var G__12412 = headers;
var G__12412__$1 = (cljs.core.truth_(cljs.core.get.call(null,new cljs.core.Keyword(null,"aliases","aliases",1346874714).cljs$core$IFn$_invoke$arity$1(opt),(headers[(9)])))?replicant.core.get_alias_headers.call(null,opt,G__12412):G__12412);
return replicant.alias.__GT_hiccup.call(null,G__12412__$1);

} else {
return x;
}
});
replicant.alias.get_opts = (function replicant$alias$get_opts(opt){
return cljs.core.update.call(null,opt,new cljs.core.Keyword(null,"aliases","aliases",1346874714),(function (p1__12413_SHARP_){
var or__5045__auto__ = p1__12413_SHARP_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return replicant.alias.get_registered_aliases.call(null);
}
}));
});
replicant.alias.expand_1 = (function replicant$alias$expand_1(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12422 = arguments.length;
var i__5770__auto___12423 = (0);
while(true){
if((i__5770__auto___12423 < len__5769__auto___12422)){
args__5775__auto__.push((arguments[i__5770__auto___12423]));

var G__12424 = (i__5770__auto___12423 + (1));
i__5770__auto___12423 = G__12424;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return replicant.alias.expand_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(replicant.alias.expand_1.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,p__12417){
var vec__12418 = p__12417;
var map__12421 = cljs.core.nth.call(null,vec__12418,(0),null);
var map__12421__$1 = cljs.core.__destructure_map.call(null,map__12421);
var opt = map__12421__$1;
var aliases = cljs.core.get.call(null,map__12421__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var opt__$1 = replicant.alias.get_opts.call(null,opt);
return clojure.walk.postwalk.call(null,(function (p1__12414_SHARP_){
return replicant.alias.expand_aliased_hiccup.call(null,p1__12414_SHARP_,opt__$1);
}),hiccup);
}));

(replicant.alias.expand_1.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(replicant.alias.expand_1.cljs$lang$applyTo = (function (seq12415){
var G__12416 = cljs.core.first.call(null,seq12415);
var seq12415__$1 = cljs.core.next.call(null,seq12415);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12416,seq12415__$1);
}));

replicant.alias.expand = (function replicant$alias$expand(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12433 = arguments.length;
var i__5770__auto___12434 = (0);
while(true){
if((i__5770__auto___12434 < len__5769__auto___12433)){
args__5775__auto__.push((arguments[i__5770__auto___12434]));

var G__12435 = (i__5770__auto___12434 + (1));
i__5770__auto___12434 = G__12435;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return replicant.alias.expand.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(replicant.alias.expand.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,p__12428){
var vec__12429 = p__12428;
var map__12432 = cljs.core.nth.call(null,vec__12429,(0),null);
var map__12432__$1 = cljs.core.__destructure_map.call(null,map__12432);
var opt = map__12432__$1;
var aliases = cljs.core.get.call(null,map__12432__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var opt__$1 = replicant.alias.get_opts.call(null,opt);
return clojure.walk.prewalk.call(null,(function (p1__12425_SHARP_){
return replicant.alias.expand_aliased_hiccup.call(null,p1__12425_SHARP_,opt__$1);
}),hiccup);
}));

(replicant.alias.expand.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(replicant.alias.expand.cljs$lang$applyTo = (function (seq12426){
var G__12427 = cljs.core.first.call(null,seq12426);
var seq12426__$1 = cljs.core.next.call(null,seq12426);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12427,seq12426__$1);
}));


//# sourceMappingURL=alias.js.map
