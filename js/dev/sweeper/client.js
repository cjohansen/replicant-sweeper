// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('sweeper.client');
goog.require('cljs.core');
goog.require('replicant.dom');
goog.require('sweeper.game');
goog.require('sweeper.ui');
if((typeof sweeper !== 'undefined') && (typeof sweeper.client !== 'undefined') && (typeof sweeper.client.app_data !== 'undefined')){
} else {
sweeper.client.app_data = cljs.core.atom.call(null,sweeper.game.create_game.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(16),new cljs.core.Keyword(null,"rows","rows",850049680),(16),new cljs.core.Keyword(null,"mines","mines",-1960796490),(48)], null)));
}
if((typeof sweeper !== 'undefined') && (typeof sweeper.client !== 'undefined') && (typeof sweeper.client.app_history !== 'undefined')){
} else {
sweeper.client.app_history = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,sweeper.client.app_data)], null));
}
if((typeof sweeper !== 'undefined') && (typeof sweeper.client !== 'undefined') && (typeof sweeper.client.el !== 'undefined')){
} else {
sweeper.client.el = document.getElementById("board");
}
sweeper.client.undo = (function sweeper$client$undo(){
cljs.core.swap_BANG_.call(null,sweeper.client.app_history,cljs.core.pop);

return cljs.core.reset_BANG_.call(null,sweeper.client.app_data,cljs.core.last.call(null,cljs.core.deref.call(null,sweeper.client.app_history)));
});
replicant.dom.set_dispatch_BANG_.call(null,(function (re,actions){
cljs.core.println.call(null,"Dispatch",cljs.core.pr_str.call(null,re));

var seq__11300 = cljs.core.seq.call(null,actions);
var chunk__11301 = null;
var count__11302 = (0);
var i__11303 = (0);
while(true){
if((i__11303 < count__11302)){
var vec__11312 = cljs.core._nth.call(null,chunk__11301,i__11303);
var action = cljs.core.nth.call(null,vec__11312,(0),null);
var id = cljs.core.nth.call(null,vec__11312,(1),null);
cljs.core.println.call(null,"Processing action",cljs.core.pr_str.call(null,action),cljs.core.pr_str.call(null,id));

var G__11315_11320 = action;
var G__11315_11321__$1 = (((G__11315_11320 instanceof cljs.core.Keyword))?G__11315_11320.fqn:null);
switch (G__11315_11321__$1) {
case "action/reveal-tile":
cljs.core.swap_BANG_.call(null,sweeper.client.app_data,sweeper.game.reveal_tile,id);

break;
case "action/mark-tile":
cljs.core.swap_BANG_.call(null,sweeper.client.app_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240),id,new cljs.core.Keyword(null,"maybe?","maybe?",1688174259)], null),true);

break;
case "action/prevent-default":
new cljs.core.Keyword("replicant","dom-event","replicant/dom-event",-1613182512).cljs$core$IFn$_invoke$arity$1(re).preventDefault();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11315_11321__$1)].join('')));

}


var G__11323 = seq__11300;
var G__11324 = chunk__11301;
var G__11325 = count__11302;
var G__11326 = (i__11303 + (1));
seq__11300 = G__11323;
chunk__11301 = G__11324;
count__11302 = G__11325;
i__11303 = G__11326;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11300);
if(temp__5804__auto__){
var seq__11300__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11300__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__11300__$1);
var G__11327 = cljs.core.chunk_rest.call(null,seq__11300__$1);
var G__11328 = c__5568__auto__;
var G__11329 = cljs.core.count.call(null,c__5568__auto__);
var G__11330 = (0);
seq__11300 = G__11327;
chunk__11301 = G__11328;
count__11302 = G__11329;
i__11303 = G__11330;
continue;
} else {
var vec__11316 = cljs.core.first.call(null,seq__11300__$1);
var action = cljs.core.nth.call(null,vec__11316,(0),null);
var id = cljs.core.nth.call(null,vec__11316,(1),null);
cljs.core.println.call(null,"Processing action",cljs.core.pr_str.call(null,action),cljs.core.pr_str.call(null,id));

var G__11319_11331 = action;
var G__11319_11332__$1 = (((G__11319_11331 instanceof cljs.core.Keyword))?G__11319_11331.fqn:null);
switch (G__11319_11332__$1) {
case "action/reveal-tile":
cljs.core.swap_BANG_.call(null,sweeper.client.app_data,sweeper.game.reveal_tile,id);

break;
case "action/mark-tile":
cljs.core.swap_BANG_.call(null,sweeper.client.app_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240),id,new cljs.core.Keyword(null,"maybe?","maybe?",1688174259)], null),true);

break;
case "action/prevent-default":
new cljs.core.Keyword("replicant","dom-event","replicant/dom-event",-1613182512).cljs$core$IFn$_invoke$arity$1(re).preventDefault();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11319_11332__$1)].join('')));

}


var G__11334 = cljs.core.next.call(null,seq__11300__$1);
var G__11335 = null;
var G__11336 = (0);
var G__11337 = (0);
seq__11300 = G__11334;
chunk__11301 = G__11335;
count__11302 = G__11336;
i__11303 = G__11337;
continue;
}
} else {
return null;
}
}
break;
}
}));
sweeper.client.render = (function sweeper$client$render(data){
var start = (new Date());
replicant.dom.render.call(null,sweeper.client.el,sweeper.ui.render.call(null,sweeper.ui.prepare_ui_data.call(null,data)));

return cljs.core.println.call(null,"Rendered in",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((new Date()) - start)),"ms"].join(''));
});
sweeper.client.start = (function sweeper$client$start(){
cljs.core.add_watch.call(null,sweeper.client.app_data,new cljs.core.Keyword(null,"history","history",-247395220),(function (_key,_ref,_old,new$){
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,cljs.core.deref.call(null,sweeper.client.app_history)),new$)){
} else {
cljs.core.swap_BANG_.call(null,sweeper.client.app_history,cljs.core.conj,new$);
}

return sweeper.client.render.call(null,new$);
}));

return sweeper.client.render.call(null,cljs.core.deref.call(null,sweeper.client.app_data));
});

//# sourceMappingURL=client.js.map
