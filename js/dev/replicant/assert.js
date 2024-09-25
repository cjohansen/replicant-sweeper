// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('replicant.assert');
goog.require('cljs.core');
goog.require('replicant.console_logger');
goog.require('replicant.hiccup');
replicant.assert.current_context = cljs.core.atom.call(null,null);
replicant.assert.current_node = cljs.core.atom.call(null,null);
replicant.assert.error = cljs.core.atom.call(null,null);
replicant.assert.assert_QMARK_ = (function replicant$assert$assert_QMARK_(){
return null;
});
var ret__5824__auto___10979 = replicant.assert.enter_node = (function replicant$assert$enter_node(_AMPERSAND_form,_AMPERSAND_env,headers){
if(cljs.core.truth_(replicant.assert.assert_QMARK_.call(null))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,headers,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"ctx__10978__auto__","ctx__10978__auto__",341976644,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword("replicant","context","replicant/context",-909059467),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("replicant.hiccup","attrs","replicant.hiccup/attrs",1209511026,null),null,(1),null)),(new cljs.core.List(null,headers,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword("replicant","context","replicant/context",-909059467),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("replicant.hiccup","sexp","replicant.hiccup/sexp",1704158409,null),null,(1),null)),(new cljs.core.List(null,headers,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reset!","cljs.core/reset!",657404621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("replicant.assert","current-context","replicant.assert/current-context",571969225,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ctx__10978__auto__","ctx__10978__auto__",341976644,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reset!","cljs.core/reset!",657404621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("replicant.assert","current-node","replicant.assert/current-node",1498009235,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("replicant.hiccup","sexp","replicant.hiccup/sexp",1704158409,null),null,(1),null)),(new cljs.core.List(null,headers,null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return null;
}
});
(replicant.assert.enter_node.cljs$lang$macro = true);

var ret__5824__auto___10993 = (function (){
replicant.assert.assert = (function replicant$assert$assert(var_args){
var args__5775__auto__ = [];
var len__5769__auto___10994 = arguments.length;
var i__5770__auto___10995 = (0);
while(true){
if((i__5770__auto___10995 < len__5769__auto___10994)){
args__5775__auto__.push((arguments[i__5770__auto___10995]));

var G__10996 = (i__5770__auto___10995 + (1));
i__5770__auto___10995 = G__10996;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((5) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((5)),(0),null)):null);
return replicant.assert.assert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5776__auto__);
});

(replicant.assert.assert.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,title,message,p__10989){
var vec__10990 = p__10989;
var hiccup = cljs.core.nth.call(null,vec__10990,(0),null);
if(cljs.core.truth_(replicant.assert.assert_QMARK_.call(null))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn__10980__auto__","fn__10980__auto__",-1425466039,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("replicant.assert","current-context","replicant.assert/current-context",571969225,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"alias__10981__auto__","alias__10981__auto__",-623623071,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"alias","alias",-2039751630),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("replicant.assert","current-context","replicant.assert/current-context",571969225,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fd__10982__auto__","fd__10982__auto__",-1628868375,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"data","data",-232669377),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("replicant.assert","current-context","replicant.assert/current-context",571969225,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reset!","cljs.core/reset!",657404621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("replicant.assert","error","replicant.assert/error",-1901066831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"title","title",636505583),null,(1),null)),(new cljs.core.List(null,title,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,message,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,hiccup,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("replicant.assert","current-node","replicant.assert/current-node",1498009235,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fn__10980__auto__","fn__10980__auto__",-1425466039,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fname","fname",1500291491),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fn__10980__auto__","fn__10980__auto__",-1425466039,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"alias__10981__auto__","alias__10981__auto__",-623623071,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"alias","alias",-2039751630),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"alias__10981__auto__","alias__10981__auto__",-623623071,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fd__10982__auto__","fd__10982__auto__",-1628868375,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"data","data",-232669377),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fd__10982__auto__","fd__10982__auto__",-1628868375,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return null;
}
}));

(replicant.assert.assert.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(replicant.assert.assert.cljs$lang$applyTo = (function (seq10983){
var G__10984 = cljs.core.first.call(null,seq10983);
var seq10983__$1 = cljs.core.next.call(null,seq10983);
var G__10985 = cljs.core.first.call(null,seq10983__$1);
var seq10983__$2 = cljs.core.next.call(null,seq10983__$1);
var G__10986 = cljs.core.first.call(null,seq10983__$2);
var seq10983__$3 = cljs.core.next.call(null,seq10983__$2);
var G__10987 = cljs.core.first.call(null,seq10983__$3);
var seq10983__$4 = cljs.core.next.call(null,seq10983__$3);
var G__10988 = cljs.core.first.call(null,seq10983__$4);
var seq10983__$5 = cljs.core.next.call(null,seq10983__$4);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10984,G__10985,G__10986,G__10987,G__10988,seq10983__$5);
}));

return null;
})()
;
(replicant.assert.assert.cljs$lang$macro = true);

var ret__5824__auto___10999 = replicant.assert.configure = (function replicant$assert$configure(_AMPERSAND_form,_AMPERSAND_env){
if(cljs.core.truth_(replicant.assert.assert_QMARK_.call(null))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","add-watch","cljs.core/add-watch",622836799,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("replicant.assert","error","replicant.assert/error",-1901066831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("replicant.assert","default","replicant.assert/default",-504441266),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___10997__auto__","___10997__auto__",-1864150688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"___10997__auto__","___10997__auto__",-1864150688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"___10997__auto__","___10997__auto__",-1864150688,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"error__10998__auto__","error__10998__auto__",-843855700,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("replicant.console-logger","report","replicant.console-logger/report",1551984535,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"error__10998__auto__","error__10998__auto__",-843855700,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return null;
}
});
(replicant.assert.configure.cljs$lang$macro = true);

replicant.assert.add_reporter = (function replicant$assert$add_reporter(k,f){
cljs.core.remove_watch.call(null,replicant.assert.error,new cljs.core.Keyword("replicant.assert","default","replicant.assert/default",-504441266));

return cljs.core.add_watch.call(null,replicant.assert.error,k,(function (_,___$1,___$2,error){
return f.call(null,error);
}));
});
replicant.assert.remove_reporter = (function replicant$assert$remove_reporter(k){
return cljs.core.remove_watch.call(null,replicant.assert.error,k);
});

//# sourceMappingURL=assert.js.map
