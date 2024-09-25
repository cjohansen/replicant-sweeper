// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('replicant.alias');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('replicant.assert');
goog.require('replicant.core');
goog.require('replicant.hiccup');
replicant.alias.aliases = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ret__5824__auto___12210 = (function (){
replicant.alias.defalias = (function replicant$alias$defalias(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12211 = arguments.length;
var i__5770__auto___12212 = (0);
while(true){
if((i__5770__auto___12212 < len__5769__auto___12211)){
args__5775__auto__.push((arguments[i__5770__auto___12212]));

var G__12213 = (i__5770__auto___12212 + (1));
i__5770__auto___12212 = G__12213;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return replicant.alias.defalias.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(replicant.alias.defalias.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,alias,forms){
var vec__12204 = ((typeof cljs.core.first.call(null,forms) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,forms),cljs.core.next.call(null,forms)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",forms], null));
var _docstring = cljs.core.nth.call(null,vec__12204,(0),null);
var vec__12207 = cljs.core.nth.call(null,vec__12204,(1),null);
var seq__12208 = cljs.core.seq.call(null,vec__12207);
var first__12209 = cljs.core.first.call(null,seq__12208);
var seq__12208__$1 = cljs.core.next.call(null,seq__12208);
var attr_map = first__12209;
var body = seq__12208__$1;
var alias_f = (cljs.core.truth_(replicant.assert.assert_QMARK_.call(null))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__12198__auto__","args__12198__auto__",1332618552,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,attr_map,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__12198__auto__","args__12198__auto__",1332618552,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some->","cljs.core/some->",-67411995,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword("replicant","context","replicant/context",-909059467),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"alias","alias",-2039751630),null,(1),null)),(new cljs.core.List(null,alias,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"data","data",-232669377),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__12198__auto__","args__12198__auto__",1332618552,null),null,(1),null))))),null,(1),null)))))),null,(1),null)))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,attr_map,null,(1),null)),body))));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__12199__auto__","f__12199__auto__",-575504892,null),null,(1),null)),(new cljs.core.List(null,alias_f,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("replicant.alias","aliases","replicant.alias/aliases",1389359233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,alias,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__12199__auto__","f__12199__auto__",-575504892,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
}));

(replicant.alias.defalias.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.alias.defalias.cljs$lang$applyTo = (function (seq12200){
var G__12201 = cljs.core.first.call(null,seq12200);
var seq12200__$1 = cljs.core.next.call(null,seq12200);
var G__12202 = cljs.core.first.call(null,seq12200__$1);
var seq12200__$2 = cljs.core.next.call(null,seq12200__$1);
var G__12203 = cljs.core.first.call(null,seq12200__$2);
var seq12200__$3 = cljs.core.next.call(null,seq12200__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12201,G__12202,G__12203,seq12200__$3);
}));

return null;
})()
;
(replicant.alias.defalias.cljs$lang$macro = true);

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
var G__12214 = (headers[(4)]);
var G__12214__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs))?cljs.core.assoc.call(null,G__12214,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs)):G__12214);
if(cljs.core.truth_(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.assoc.call(null,G__12214__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.set.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(attrs)));
} else {
return G__12214__$1;
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
var len__5769__auto___12223 = arguments.length;
var i__5770__auto___12224 = (0);
while(true){
if((i__5770__auto___12224 < len__5769__auto___12223)){
args__5775__auto__.push((arguments[i__5770__auto___12224]));

var G__12225 = (i__5770__auto___12224 + (1));
i__5770__auto___12224 = G__12225;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return replicant.alias.expand_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(replicant.alias.expand_1.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,p__12218){
var vec__12219 = p__12218;
var map__12222 = cljs.core.nth.call(null,vec__12219,(0),null);
var map__12222__$1 = cljs.core.__destructure_map.call(null,map__12222);
var aliases = cljs.core.get.call(null,map__12222__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
return clojure.walk.postwalk.call(null,(function (p1__12215_SHARP_){
return replicant.alias.expand_aliased_hiccup.call(null,p1__12215_SHARP_,replicant.alias.get_opts.call(null,aliases));
}),hiccup);
}));

(replicant.alias.expand_1.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(replicant.alias.expand_1.cljs$lang$applyTo = (function (seq12216){
var G__12217 = cljs.core.first.call(null,seq12216);
var seq12216__$1 = cljs.core.next.call(null,seq12216);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12217,seq12216__$1);
}));

replicant.alias.expand = (function replicant$alias$expand(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12234 = arguments.length;
var i__5770__auto___12235 = (0);
while(true){
if((i__5770__auto___12235 < len__5769__auto___12234)){
args__5775__auto__.push((arguments[i__5770__auto___12235]));

var G__12236 = (i__5770__auto___12235 + (1));
i__5770__auto___12235 = G__12236;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return replicant.alias.expand.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(replicant.alias.expand.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,p__12229){
var vec__12230 = p__12229;
var map__12233 = cljs.core.nth.call(null,vec__12230,(0),null);
var map__12233__$1 = cljs.core.__destructure_map.call(null,map__12233);
var aliases = cljs.core.get.call(null,map__12233__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
return clojure.walk.prewalk.call(null,(function (p1__12226_SHARP_){
return replicant.alias.expand_aliased_hiccup.call(null,p1__12226_SHARP_,replicant.alias.get_opts.call(null,aliases));
}),hiccup);
}));

(replicant.alias.expand.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(replicant.alias.expand.cljs$lang$applyTo = (function (seq12227){
var G__12228 = cljs.core.first.call(null,seq12227);
var seq12227__$1 = cljs.core.next.call(null,seq12227);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12228,seq12227__$1);
}));


//# sourceMappingURL=alias.js.map
