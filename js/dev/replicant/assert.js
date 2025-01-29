// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('replicant.assert');
goog.require('cljs.core');
goog.require('replicant.console_logger');
goog.require('replicant.hiccup_headers');
replicant.assert.current_context = cljs.core.atom.call(null,null);
replicant.assert.current_node = cljs.core.atom.call(null,null);
replicant.assert.error = cljs.core.atom.call(null,null);
replicant.assert.assert_QMARK_ = (function replicant$assert$assert_QMARK_(){
return null;
});
replicant.assert.log_QMARK_ = (function replicant$assert$log_QMARK_(){
return null;
});
var ret__5824__auto___9559 = replicant.assert.log_error = (function replicant$assert$log_error(_AMPERSAND_form,_AMPERSAND_env,s){
if(cljs.core.truth_(replicant.assert.log_QMARK_.call(null))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","console.error","js/console.error",1736729603,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null)))));
}
} else {
return null;
}
});
(replicant.assert.log_error.cljs$lang$macro = true);

var ret__5824__auto___9561 = replicant.assert.enter_node = (function replicant$assert$enter_node(_AMPERSAND_form,_AMPERSAND_env,headers){
if(cljs.core.truth_(replicant.assert.assert_QMARK_.call(null))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,headers,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ctx__9560__auto__","ctx__9560__auto__",294713389,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword("replicant","context","replicant/context",-909059467),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("replicant.hiccup-headers","attrs","replicant.hiccup-headers/attrs",-1829276357,null),null,(1),null)),(new cljs.core.List(null,headers,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword("replicant","context","replicant/context",-909059467),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("replicant.hiccup-headers","sexp","replicant.hiccup-headers/sexp",1005814672,null),null,(1),null)),(new cljs.core.List(null,headers,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reset!","cljs.core/reset!",657404621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("replicant.assert","current-context","replicant.assert/current-context",571969225,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ctx__9560__auto__","ctx__9560__auto__",294713389,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reset!","cljs.core/reset!",657404621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("replicant.assert","current-node","replicant.assert/current-node",1498009235,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("replicant.hiccup-headers","sexp","replicant.hiccup-headers/sexp",1005814672,null),null,(1),null)),(new cljs.core.List(null,headers,null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return null;
}
});
(replicant.assert.enter_node.cljs$lang$macro = true);

var ret__5824__auto___9575 = (function (){
replicant.assert.assert = (function replicant$assert$assert(var_args){
var args__5775__auto__ = [];
var len__5769__auto___9576 = arguments.length;
var i__5770__auto___9577 = (0);
while(true){
if((i__5770__auto___9577 < len__5769__auto___9576)){
args__5775__auto__.push((arguments[i__5770__auto___9577]));

var G__9578 = (i__5770__auto___9577 + (1));
i__5770__auto___9577 = G__9578;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((5) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((5)),(0),null)):null);
return replicant.assert.assert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5776__auto__);
});

(replicant.assert.assert.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,title,message,p__9571){
var vec__9572 = p__9571;
var hiccup = cljs.core.nth.call(null,vec__9572,(0),null);
if(cljs.core.truth_(replicant.assert.assert_QMARK_.call(null))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn__9562__auto__","fn__9562__auto__",1189496843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("replicant.assert","current-context","replicant.assert/current-context",571969225,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"alias__9563__auto__","alias__9563__auto__",-1694008635,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"alias","alias",-2039751630),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("replicant.assert","current-context","replicant.assert/current-context",571969225,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fd__9564__auto__","fd__9564__auto__",1520784167,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"data","data",-232669377),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("replicant.assert","current-context","replicant.assert/current-context",571969225,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reset!","cljs.core/reset!",657404621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("replicant.assert","error","replicant.assert/error",-1901066831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"title","title",636505583),null,(1),null)),(new cljs.core.List(null,title,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,message,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,hiccup,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("replicant.assert","current-node","replicant.assert/current-node",1498009235,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fn__9562__auto__","fn__9562__auto__",1189496843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fname","fname",1500291491),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fn__9562__auto__","fn__9562__auto__",1189496843,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"alias__9563__auto__","alias__9563__auto__",-1694008635,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"alias","alias",-2039751630),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"alias__9563__auto__","alias__9563__auto__",-1694008635,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fd__9564__auto__","fd__9564__auto__",1520784167,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"data","data",-232669377),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fd__9564__auto__","fd__9564__auto__",1520784167,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return null;
}
}));

(replicant.assert.assert.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(replicant.assert.assert.cljs$lang$applyTo = (function (seq9565){
var G__9566 = cljs.core.first.call(null,seq9565);
var seq9565__$1 = cljs.core.next.call(null,seq9565);
var G__9567 = cljs.core.first.call(null,seq9565__$1);
var seq9565__$2 = cljs.core.next.call(null,seq9565__$1);
var G__9568 = cljs.core.first.call(null,seq9565__$2);
var seq9565__$3 = cljs.core.next.call(null,seq9565__$2);
var G__9569 = cljs.core.first.call(null,seq9565__$3);
var seq9565__$4 = cljs.core.next.call(null,seq9565__$3);
var G__9570 = cljs.core.first.call(null,seq9565__$4);
var seq9565__$5 = cljs.core.next.call(null,seq9565__$4);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9566,G__9567,G__9568,G__9569,G__9570,seq9565__$5);
}));

return null;
})()
;
(replicant.assert.assert.cljs$lang$macro = true);

var ret__5824__auto___9581 = replicant.assert.configure = (function replicant$assert$configure(_AMPERSAND_form,_AMPERSAND_env){
if(cljs.core.truth_(replicant.assert.assert_QMARK_.call(null))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","add-watch","cljs.core/add-watch",622836799,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("replicant.assert","error","replicant.assert/error",-1901066831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("replicant.assert","default","replicant.assert/default",-504441266),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___9579__auto__","___9579__auto__",-1907813556,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"___9579__auto__","___9579__auto__",-1907813556,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"___9579__auto__","___9579__auto__",-1907813556,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"error__9580__auto__","error__9580__auto__",-1383580414,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("replicant.console-logger","report","replicant.console-logger/report",1551984535,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"error__9580__auto__","error__9580__auto__",-1383580414,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return null;
}
});
(replicant.assert.configure.cljs$lang$macro = true);

/**
 * Add assert error exporter. `k` is a keyword, `f` is a function that will be
 *   called with an assert error, a map of
 *   `{:title :message :hiccup :fname :alias :data}`.
 */
replicant.assert.add_reporter = (function replicant$assert$add_reporter(k,f){
cljs.core.remove_watch.call(null,replicant.assert.error,new cljs.core.Keyword("replicant.assert","default","replicant.assert/default",-504441266));

return cljs.core.add_watch.call(null,replicant.assert.error,k,(function (_,___$1,___$2,error){
return f.call(null,error);
}));
});
goog.exportSymbol('replicant.assert.add_reporter', replicant.assert.add_reporter);
/**
 * Remove a previoulsy added reporter, using the same `k` that was used to
 *   register it. To remove the default reporter, use `:replicant.assert/default`
 *   as `k`.
 */
replicant.assert.remove_reporter = (function replicant$assert$remove_reporter(k){
return cljs.core.remove_watch.call(null,replicant.assert.error,k);
});
goog.exportSymbol('replicant.assert.remove_reporter', replicant.assert.remove_reporter);

//# sourceMappingURL=assert.js.map
