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

var seq__12554 = cljs.core.seq.call(null,actions);
var chunk__12555 = null;
var count__12556 = (0);
var i__12557 = (0);
while(true){
if((i__12557 < count__12556)){
var vec__12566 = cljs.core._nth.call(null,chunk__12555,i__12557);
var action = cljs.core.nth.call(null,vec__12566,(0),null);
var id = cljs.core.nth.call(null,vec__12566,(1),null);
cljs.core.println.call(null,"Processing action",cljs.core.pr_str.call(null,action),cljs.core.pr_str.call(null,id));

var G__12569_12574 = action;
var G__12569_12575__$1 = (((G__12569_12574 instanceof cljs.core.Keyword))?G__12569_12574.fqn:null);
switch (G__12569_12575__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12569_12575__$1)].join('')));

}


var G__12577 = seq__12554;
var G__12578 = chunk__12555;
var G__12579 = count__12556;
var G__12580 = (i__12557 + (1));
seq__12554 = G__12577;
chunk__12555 = G__12578;
count__12556 = G__12579;
i__12557 = G__12580;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12554);
if(temp__5804__auto__){
var seq__12554__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12554__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__12554__$1);
var G__12581 = cljs.core.chunk_rest.call(null,seq__12554__$1);
var G__12582 = c__5568__auto__;
var G__12583 = cljs.core.count.call(null,c__5568__auto__);
var G__12584 = (0);
seq__12554 = G__12581;
chunk__12555 = G__12582;
count__12556 = G__12583;
i__12557 = G__12584;
continue;
} else {
var vec__12570 = cljs.core.first.call(null,seq__12554__$1);
var action = cljs.core.nth.call(null,vec__12570,(0),null);
var id = cljs.core.nth.call(null,vec__12570,(1),null);
cljs.core.println.call(null,"Processing action",cljs.core.pr_str.call(null,action),cljs.core.pr_str.call(null,id));

var G__12573_12585 = action;
var G__12573_12586__$1 = (((G__12573_12585 instanceof cljs.core.Keyword))?G__12573_12585.fqn:null);
switch (G__12573_12586__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12573_12586__$1)].join('')));

}


var G__12588 = cljs.core.next.call(null,seq__12554__$1);
var G__12589 = null;
var G__12590 = (0);
var G__12591 = (0);
seq__12554 = G__12588;
chunk__12555 = G__12589;
count__12556 = G__12590;
i__12557 = G__12591;
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
replicant.dom.render.call(null,sweeper.client.el,sweeper.ui.render.call(null,data));

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
