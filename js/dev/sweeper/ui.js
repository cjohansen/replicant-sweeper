// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('sweeper.ui');
goog.require('cljs.core');
goog.require('replicant.dom');
goog.require('sweeper.game');
if((typeof sweeper !== 'undefined') && (typeof sweeper.ui !== 'undefined') && (typeof sweeper.ui.app_data !== 'undefined')){
} else {
sweeper.ui.app_data = cljs.core.atom.call(null,sweeper.game.create_game.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(16),new cljs.core.Keyword(null,"rows","rows",850049680),(16),new cljs.core.Keyword(null,"mines","mines",-1960796490),(48)], null)));
}
if((typeof sweeper !== 'undefined') && (typeof sweeper.ui !== 'undefined') && (typeof sweeper.ui.app_history !== 'undefined')){
} else {
sweeper.ui.app_history = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,sweeper.ui.app_data)], null));
}
if((typeof sweeper !== 'undefined') && (typeof sweeper.ui !== 'undefined') && (typeof sweeper.ui.el !== 'undefined')){
} else {
sweeper.ui.el = document.getElementById("board");
}
sweeper.ui.undo = (function sweeper$ui$undo(){
cljs.core.swap_BANG_.call(null,sweeper.ui.app_history,cljs.core.pop);

return cljs.core.reset_BANG_.call(null,sweeper.ui.app_data,cljs.core.last.call(null,cljs.core.deref.call(null,sweeper.ui.app_history)));
});
sweeper.ui.tile_view = (function sweeper$ui$tile_view(tile){
if(cljs.core.truth_(new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(tile))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile","tile",758132866),(cljs.core.truth_(new cljs.core.Keyword(null,"mine?","mine?",155874651).cljs$core$IFn$_invoke$arity$1(tile))?new cljs.core.Keyword(null,"mine","mine",-130428525):null)], null)], null),((((0) < new cljs.core.Keyword(null,"threat-count","threat-count",637469945).cljs$core$IFn$_invoke$arity$1(tile)))?new cljs.core.Keyword(null,"threat-count","threat-count",637469945).cljs$core$IFn$_invoke$arity$1(tile):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"tile",new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reveal-tile","reveal-tile",-1568041876),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tile)], null)], null),new cljs.core.Keyword(null,"ContextMenu","ContextMenu",992765842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark-tile","mark-tile",1762241975),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tile)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"lid"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"maybe?","maybe?",1688174259).cljs$core$IFn$_invoke$arity$1(tile))?"?":null)], null)], null);
}
});
sweeper.ui.line_view = (function sweeper$ui$line_view(tiles){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),cljs.core.map.call(null,sweeper.ui.tile_view,tiles)], null);
});
sweeper.ui.board_view = (function sweeper$ui$board_view(game){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"board"], null),cljs.core.map.call(null,sweeper.ui.line_view,cljs.core.partition.call(null,new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(game)))], null);
});
replicant.dom.set_dispatch_BANG_.call(null,(function (re,_e,actions){
cljs.core.prn.call(null,"Dispatch",re);

var seq__12292 = cljs.core.seq.call(null,actions);
var chunk__12293 = null;
var count__12294 = (0);
var i__12295 = (0);
while(true){
if((i__12295 < count__12294)){
var vec__12304 = cljs.core._nth.call(null,chunk__12293,i__12295);
var action = cljs.core.nth.call(null,vec__12304,(0),null);
var id = cljs.core.nth.call(null,vec__12304,(1),null);
cljs.core.prn.call(null,"Processing action",action,id);

var G__12307_12312 = action;
var G__12307_12313__$1 = (((G__12307_12312 instanceof cljs.core.Keyword))?G__12307_12312.fqn:null);
switch (G__12307_12313__$1) {
case "reveal-tile":
cljs.core.swap_BANG_.call(null,sweeper.ui.app_data,sweeper.game.reveal_tile,id);

break;
case "mark-tile":
cljs.core.swap_BANG_.call(null,sweeper.ui.app_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240),id,new cljs.core.Keyword(null,"maybe?","maybe?",1688174259)], null),true);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12307_12313__$1)].join('')));

}


var G__12315 = seq__12292;
var G__12316 = chunk__12293;
var G__12317 = count__12294;
var G__12318 = (i__12295 + (1));
seq__12292 = G__12315;
chunk__12293 = G__12316;
count__12294 = G__12317;
i__12295 = G__12318;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12292);
if(temp__5804__auto__){
var seq__12292__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12292__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__12292__$1);
var G__12319 = cljs.core.chunk_rest.call(null,seq__12292__$1);
var G__12320 = c__5568__auto__;
var G__12321 = cljs.core.count.call(null,c__5568__auto__);
var G__12322 = (0);
seq__12292 = G__12319;
chunk__12293 = G__12320;
count__12294 = G__12321;
i__12295 = G__12322;
continue;
} else {
var vec__12308 = cljs.core.first.call(null,seq__12292__$1);
var action = cljs.core.nth.call(null,vec__12308,(0),null);
var id = cljs.core.nth.call(null,vec__12308,(1),null);
cljs.core.prn.call(null,"Processing action",action,id);

var G__12311_12323 = action;
var G__12311_12324__$1 = (((G__12311_12323 instanceof cljs.core.Keyword))?G__12311_12323.fqn:null);
switch (G__12311_12324__$1) {
case "reveal-tile":
cljs.core.swap_BANG_.call(null,sweeper.ui.app_data,sweeper.game.reveal_tile,id);

break;
case "mark-tile":
cljs.core.swap_BANG_.call(null,sweeper.ui.app_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240),id,new cljs.core.Keyword(null,"maybe?","maybe?",1688174259)], null),true);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12311_12324__$1)].join('')));

}


var G__12326 = cljs.core.next.call(null,seq__12292__$1);
var G__12327 = null;
var G__12328 = (0);
var G__12329 = (0);
seq__12292 = G__12326;
chunk__12293 = G__12327;
count__12294 = G__12328;
i__12295 = G__12329;
continue;
}
} else {
return null;
}
}
break;
}
}));
sweeper.ui.render = (function sweeper$ui$render(data){
var start = (new Date());
replicant.dom.render.call(null,sweeper.ui.el,sweeper.ui.board_view.call(null,data));

return cljs.core.println.call(null,"Rendered in",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((new Date()) - start)),"ms"].join(''));
});
sweeper.ui.start = (function sweeper$ui$start(){
cljs.core.add_watch.call(null,sweeper.ui.app_data,new cljs.core.Keyword(null,"history","history",-247395220),(function (_key,_ref,_old,new$){
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,cljs.core.deref.call(null,sweeper.ui.app_history)),new$)){
} else {
cljs.core.swap_BANG_.call(null,sweeper.ui.app_history,cljs.core.conj,new$);
}

return sweeper.ui.render.call(null,new$);
}));

return sweeper.ui.render.call(null,cljs.core.deref.call(null,sweeper.ui.app_data));
});

//# sourceMappingURL=ui.js.map
