// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('replicant.hiccup');
goog.require('cljs.core');
/**
 * Returns `true` if `sexp` is a vector with a keyword in the first position.
 */
replicant.hiccup.hiccup_QMARK_ = (function replicant$hiccup$hiccup_QMARK_(sexp){
return ((cljs.core.vector_QMARK_.call(null,sexp)) && ((((!(cljs.core.map_entry_QMARK_.call(null,sexp)))) && ((cljs.core.first.call(null,sexp) instanceof cljs.core.Keyword)))));
});
/**
 * Ensure that `hiccup` has an attribute map, and call `update` on it with `args`.
 * 
 *   ```clj
 *   (update-attrs [:h1 "Hello"] assoc :title "Hi")
 *   ;;=> [:h1 {:title "Hi"} "Hello"]
 * 
 *   (update-attrs [:h1 {:title "Hello"} "Hello"] dissoc :title)
 *   ;;=> [:h1 {} "Hello"]
 *   ```
 */
replicant.hiccup.update_attrs = (function replicant$hiccup$update_attrs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___9272 = arguments.length;
var i__5770__auto___9273 = (0);
while(true){
if((i__5770__auto___9273 < len__5769__auto___9272)){
args__5775__auto__.push((arguments[i__5770__auto___9273]));

var G__9274 = (i__5770__auto___9273 + (1));
i__5770__auto___9273 = G__9274;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return replicant.hiccup.update_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(replicant.hiccup.update_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,args){
if(cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,hiccup))){
return cljs.core.apply.call(null,cljs.core.update,hiccup,(1),args);
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,hiccup),cljs.core.apply.call(null,cljs.core.first.call(null,args),cljs.core.PersistentArrayMap.EMPTY,cljs.core.rest.call(null,args))], null),cljs.core.rest.call(null,hiccup));
}
}));

(replicant.hiccup.update_attrs.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(replicant.hiccup.update_attrs.cljs$lang$applyTo = (function (seq9270){
var G__9271 = cljs.core.first.call(null,seq9270);
var seq9270__$1 = cljs.core.next.call(null,seq9270);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9271,seq9270__$1);
}));

/**
 * Set attribute `attr` on the `hiccup` node to `v`. Updates the attribute map
 *   if it exists, otherwise inserts one.
 * 
 *   ```clj
 *   (set-attr [:h1 "Hello"] :title "Hi")
 *   ;;=> [:h1 {:title "Hi"} "Hello"]
 * 
 *   (set-attr [:h1 {:title "Hello"} "Hello"] :title "Hi")
 *   ;;=> [:h1 {:title "Hi"} "Hello"]
 *   ```
 */
replicant.hiccup.set_attr = (function replicant$hiccup$set_attr(hiccup,attr,v){
return replicant.hiccup.update_attrs.call(null,hiccup,cljs.core.assoc,attr,v);
});

//# sourceMappingURL=hiccup.js.map
