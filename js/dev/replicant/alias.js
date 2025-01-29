// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('replicant.alias');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('replicant.assert');
goog.require('replicant.core');
goog.require('replicant.hiccup');
goog.require('replicant.hiccup_headers');
replicant.alias.aliases = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ret__5824__auto___11165 = (function (){
/**
 * Define a function to use as an alias function. Creates a function that wraps
 *   returned hiccup with debugging meta data when Replicant asserts are
 *   enabled (e.g. during development). When asserts are not enabled (default for
 *   production builds), creates a regular function with no added overhead.
 * 
 *   `aliasfn` is most commonly used through `defalias`
 */
replicant.alias.aliasfn = (function replicant$alias$aliasfn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___11166 = arguments.length;
var i__5770__auto___11167 = (0);
while(true){
if((i__5770__auto___11167 < len__5769__auto___11166)){
args__5775__auto__.push((arguments[i__5770__auto___11167]));

var G__11168 = (i__5770__auto___11167 + (1));
i__5770__auto___11167 = G__11168;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return replicant.alias.aliasfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(replicant.alias.aliasfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,alias,forms){
var vec__11159 = ((typeof cljs.core.first.call(null,forms) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,forms),cljs.core.next.call(null,forms)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",forms], null));
var _docstring = cljs.core.nth.call(null,vec__11159,(0),null);
var vec__11162 = cljs.core.nth.call(null,vec__11159,(1),null);
var seq__11163 = cljs.core.seq.call(null,vec__11162);
var first__11164 = cljs.core.first.call(null,seq__11163);
var seq__11163__$1 = cljs.core.next.call(null,seq__11163);
var attr_map = first__11164;
var body = seq__11163__$1;
var n_args = cljs.core.count.call(null,attr_map);
var attr_map__$1 = ((cljs.core._EQ_.call(null,(0),n_args))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null):((cljs.core._EQ_.call(null,(1),n_args))?cljs.core.conj.call(null,attr_map,new cljs.core.Symbol(null,"_","_",-1201019570,null)):attr_map
));
if(cljs.core.truth_(replicant.assert.assert_QMARK_.call(null))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__11153__auto__","args__11153__auto__",-1556496580,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,attr_map__$1,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__11153__auto__","args__11153__auto__",-1556496580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__11154__auto__","res__11154__auto__",-525192536,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__11154__auto__","res__11154__auto__",-525192536,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__11154__auto__","res__11154__auto__",-525192536,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword("replicant","context","replicant/context",-909059467),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"alias","alias",-2039751630),null,(1),null)),(new cljs.core.List(null,alias,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"data","data",-232669377),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__11153__auto__","args__11153__auto__",-1556496580,null),null,(1),null))))),null,(1),null)))))),null,(1),null)))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),null,(1),null)),(new cljs.core.List(null,alias,null,(1),null)))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,attr_map__$1,null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),null,(1),null)),(new cljs.core.List(null,alias,null,(1),null)))))),null,(1),null)))));
}
}));

(replicant.alias.aliasfn.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.alias.aliasfn.cljs$lang$applyTo = (function (seq11155){
var G__11156 = cljs.core.first.call(null,seq11155);
var seq11155__$1 = cljs.core.next.call(null,seq11155);
var G__11157 = cljs.core.first.call(null,seq11155__$1);
var seq11155__$2 = cljs.core.next.call(null,seq11155__$1);
var G__11158 = cljs.core.first.call(null,seq11155__$2);
var seq11155__$3 = cljs.core.next.call(null,seq11155__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11156,G__11157,G__11158,seq11155__$3);
}));

return null;
})()
;
(replicant.alias.aliasfn.cljs$lang$macro = true);

/**
 * Register an alias. Associates the alias key `k` with the function `f`:
 * 
 * ```clj
 * (replicant.alias/register! :ui/a custom-link)
 * ```
 */
replicant.alias.register_BANG_ = (function replicant$alias$register_BANG_(k,f){
return cljs.core.swap_BANG_.call(null,replicant.alias.aliases,cljs.core.assoc,k,f);
});
var ret__5824__auto___11175 = (function (){
/**
 * Creates a function to render `alias` (a namespaced keyword), and registers
 *   it in the global registry. See `aliasfn` for details about the created function.
 *   The global registry is available through `replicant.alias/get-registered-aliases`.
 */
replicant.alias.defalias = (function replicant$alias$defalias(var_args){
var args__5775__auto__ = [];
var len__5769__auto___11176 = arguments.length;
var i__5770__auto___11177 = (0);
while(true){
if((i__5770__auto___11177 < len__5769__auto___11176)){
args__5775__auto__.push((arguments[i__5770__auto___11177]));

var G__11178 = (i__5770__auto___11177 + (1));
i__5770__auto___11177 = G__11178;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__11169__auto__","f__11169__auto__",74162470,null),null,(1),null)),(new cljs.core.List(null,alias_f,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"alias__11170__auto__","alias__11170__auto__",-1781791028,null),null,(1),null)),(new cljs.core.List(null,alias_kw,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("replicant.alias","register!","replicant.alias/register!",1762236575,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"alias__11170__auto__","alias__11170__auto__",-1781791028,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__11169__auto__","f__11169__auto__",74162470,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,alias,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"alias__11170__auto__","alias__11170__auto__",-1781791028,null),null,(1),null))))),null,(1),null)))));
}));

(replicant.alias.defalias.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.alias.defalias.cljs$lang$applyTo = (function (seq11171){
var G__11172 = cljs.core.first.call(null,seq11171);
var seq11171__$1 = cljs.core.next.call(null,seq11171);
var G__11173 = cljs.core.first.call(null,seq11171__$1);
var seq11171__$2 = cljs.core.next.call(null,seq11171__$1);
var G__11174 = cljs.core.first.call(null,seq11171__$2);
var seq11171__$3 = cljs.core.next.call(null,seq11171__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11172,G__11173,G__11174,seq11171__$3);
}));

return null;
})()
;
(replicant.alias.defalias.cljs$lang$macro = true);

/**
 * Returns globally registered aliases
 */
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
var G__11179 = (headers[(4)]);
var G__11179__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs))?cljs.core.assoc.call(null,G__11179,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs)):G__11179);
if(cljs.core.truth_(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.assoc.call(null,G__11179__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.set.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(attrs)));
} else {
return G__11179__$1;
}
})()], null),replicant.core.flatten_seqs.call(null,(headers[(5)])));
}
} else {
return null;
}
});
replicant.alias.alias_hiccup_QMARK_ = (function replicant$alias$alias_hiccup_QMARK_(x){
return ((replicant.hiccup.hiccup_QMARK_.call(null,x)) && (cljs.core.qualified_keyword_QMARK_.call(null,cljs.core.first.call(null,x))));
});
replicant.alias.expand_aliased_hiccup = (function replicant$alias$expand_aliased_hiccup(x,opt){
if(replicant.alias.alias_hiccup_QMARK_.call(null,x)){
var headers = replicant.core.get_hiccup_headers.call(null,null,x);
var defined_QMARK_ = cljs.core.get.call(null,new cljs.core.Keyword(null,"aliases","aliases",1346874714).cljs$core$IFn$_invoke$arity$1(opt),(headers[(0)]));
if(((cljs.core.not.call(null,defined_QMARK_)) && (cljs.core.get.call(null,opt,new cljs.core.Keyword(null,"ignore-missing-alias?","ignore-missing-alias?",1175846938),true) === false))){
throw cljs.core.ex_info.call(null,["Tried to expand undefined alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((headers[(0)]))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alias","alias",-2039751630),(headers[(0)])], null));
} else {
}

var G__11180 = headers;
var G__11180__$1 = (cljs.core.truth_(cljs.core.get.call(null,new cljs.core.Keyword(null,"aliases","aliases",1346874714).cljs$core$IFn$_invoke$arity$1(opt),(headers[(0)])))?replicant.core.get_alias_headers.call(null,opt,G__11180):G__11180);
return replicant.alias.__GT_hiccup.call(null,G__11180__$1);

} else {
return x;
}
});
replicant.alias.get_opts = (function replicant$alias$get_opts(opt){
return cljs.core.update.call(null,opt,new cljs.core.Keyword(null,"aliases","aliases",1346874714),(function (p1__11181_SHARP_){
var or__5045__auto__ = p1__11181_SHARP_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return replicant.alias.get_registered_aliases.call(null);
}
}));
});
/**
 * Expand the first level of aliases in `hiccup`. The result may contain aliases
 *   if returned by the top-level aliases. If using aliases that are not in the
 *   global registry, pass `:aliases` in `opt`.
 */
replicant.alias.expand_1 = (function replicant$alias$expand_1(var_args){
var args__5775__auto__ = [];
var len__5769__auto___11189 = arguments.length;
var i__5770__auto___11190 = (0);
while(true){
if((i__5770__auto___11190 < len__5769__auto___11189)){
args__5775__auto__.push((arguments[i__5770__auto___11190]));

var G__11191 = (i__5770__auto___11190 + (1));
i__5770__auto___11190 = G__11191;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return replicant.alias.expand_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(replicant.alias.expand_1.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,p__11185){
var vec__11186 = p__11185;
var opt = cljs.core.nth.call(null,vec__11186,(0),null);
var opt__$1 = replicant.alias.get_opts.call(null,opt);
return clojure.walk.postwalk.call(null,(function (p1__11182_SHARP_){
return replicant.alias.expand_aliased_hiccup.call(null,p1__11182_SHARP_,opt__$1);
}),hiccup);
}));

(replicant.alias.expand_1.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(replicant.alias.expand_1.cljs$lang$applyTo = (function (seq11183){
var G__11184 = cljs.core.first.call(null,seq11183);
var seq11183__$1 = cljs.core.next.call(null,seq11183);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11184,seq11183__$1);
}));

/**
 * Recursively expand all aliases in `hiccup`. The result will not contain
 *   aliases. If using aliases that are not in the global registry, pass `:aliases`
 *   in `opt`.
 */
replicant.alias.expand = (function replicant$alias$expand(var_args){
var args__5775__auto__ = [];
var len__5769__auto___11199 = arguments.length;
var i__5770__auto___11200 = (0);
while(true){
if((i__5770__auto___11200 < len__5769__auto___11199)){
args__5775__auto__.push((arguments[i__5770__auto___11200]));

var G__11201 = (i__5770__auto___11200 + (1));
i__5770__auto___11200 = G__11201;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return replicant.alias.expand.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(replicant.alias.expand.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,p__11195){
var vec__11196 = p__11195;
var opt = cljs.core.nth.call(null,vec__11196,(0),null);
var opt__$1 = replicant.alias.get_opts.call(null,opt);
return clojure.walk.prewalk.call(null,(function (p1__11192_SHARP_){
return replicant.alias.expand_aliased_hiccup.call(null,p1__11192_SHARP_,opt__$1);
}),hiccup);
}));

(replicant.alias.expand.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(replicant.alias.expand.cljs$lang$applyTo = (function (seq11193){
var G__11194 = cljs.core.first.call(null,seq11193);
var seq11193__$1 = cljs.core.next.call(null,seq11193);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11194,seq11193__$1);
}));


//# sourceMappingURL=alias.js.map
