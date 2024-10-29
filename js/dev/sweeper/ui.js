// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('sweeper.ui');
goog.require('cljs.core');
goog.require('replicant.alias');
sweeper.ui.tile = (function sweeper$ui$tile(p__12449){
var map__12450 = p__12449;
var map__12450__$1 = cljs.core.__destructure_map.call(null,map__12450);
var actions = cljs.core.get.call(null,map__12450__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var text = cljs.core.get.call(null,map__12450__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var covered_QMARK_ = cljs.core.get.call(null,map__12450__$1,new cljs.core.Keyword(null,"covered?","covered?",-1727828138));
var class$ = cljs.core.get.call(null,map__12450__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile","div.tile",378522273),(function (){var G__12451 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null);
if(cljs.core.truth_(cljs.core.not_empty.call(null,actions))){
return cljs.core.assoc.call(null,G__12451,new cljs.core.Keyword(null,"on","on",173873944),actions);
} else {
return G__12451;
}
})(),(cljs.core.truth_(covered_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.lid","div.lid",-26287838),text], null):text)], null);
});
sweeper.ui.prepare_tile = (function sweeper$ui$prepare_tile(p__12452){
var map__12453 = p__12452;
var map__12453__$1 = cljs.core.__destructure_map.call(null,map__12453);
var id = cljs.core.get.call(null,map__12453__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var maybe_QMARK_ = cljs.core.get.call(null,map__12453__$1,new cljs.core.Keyword(null,"maybe?","maybe?",1688174259));
var mine_QMARK_ = cljs.core.get.call(null,map__12453__$1,new cljs.core.Keyword(null,"mine?","mine?",155874651));
var revealed_QMARK_ = cljs.core.get.call(null,map__12453__$1,new cljs.core.Keyword(null,"revealed?","revealed?",726959164));
var threat_count = cljs.core.get.call(null,map__12453__$1,new cljs.core.Keyword(null,"threat-count","threat-count",637469945));
var G__12454 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"covered?","covered?",-1727828138),cljs.core.not.call(null,revealed_QMARK_)], null);
var G__12454__$1 = ((cljs.core.not.call(null,revealed_QMARK_))?cljs.core.assoc.call(null,G__12454,new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("action","reveal-tile","action/reveal-tile",1866012226),id], null)], null),new cljs.core.Keyword(null,"contextmenu","contextmenu",-15887481),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("action","prevent-default","action/prevent-default",-1016251699)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("action","mark-tile","action/mark-tile",-1271584275),id], null)], null)], null)):G__12454);
var G__12454__$2 = (cljs.core.truth_((function (){var and__5043__auto__ = revealed_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return ((0) < threat_count);
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.call(null,G__12454__$1,new cljs.core.Keyword(null,"text","text",-1790561697),threat_count):G__12454__$1);
var G__12454__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not.call(null,revealed_QMARK_);
if(and__5043__auto__){
return maybe_QMARK_;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.call(null,G__12454__$2,new cljs.core.Keyword(null,"text","text",-1790561697),"?"):G__12454__$2);
if(cljs.core.truth_((function (){var and__5043__auto__ = revealed_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return mine_QMARK_;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.call(null,G__12454__$3,new cljs.core.Keyword(null,"class","class",-2030961996),"mine");
} else {
return G__12454__$3;
}
});
sweeper.ui.prepare_ui_data = (function sweeper$ui$prepare_ui_data(p__12455){
var map__12456 = p__12455;
var map__12456__$1 = cljs.core.__destructure_map.call(null,map__12456);
var cols = cljs.core.get.call(null,map__12456__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var tiles = cljs.core.get.call(null,map__12456__$1,new cljs.core.Keyword(null,"tiles","tiles",178505240));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lines","lines",-700165781),(function (){var iter__5523__auto__ = (function sweeper$ui$prepare_ui_data_$_iter__12457(s__12458){
return (new cljs.core.LazySeq(null,(function (){
var s__12458__$1 = s__12458;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__12458__$1);
if(temp__5804__auto__){
var s__12458__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12458__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__12458__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__12460 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__12459 = (0);
while(true){
if((i__12459 < size__5522__auto__)){
var ts = cljs.core._nth.call(null,c__5521__auto__,i__12459);
cljs.core.chunk_append.call(null,b__12460,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tiles","tiles",178505240),(function (){var iter__5523__auto__ = ((function (i__12459,ts,c__5521__auto__,size__5522__auto__,b__12460,s__12458__$2,temp__5804__auto__,map__12456,map__12456__$1,cols,tiles){
return (function sweeper$ui$prepare_ui_data_$_iter__12457_$_iter__12461(s__12462){
return (new cljs.core.LazySeq(null,((function (i__12459,ts,c__5521__auto__,size__5522__auto__,b__12460,s__12458__$2,temp__5804__auto__,map__12456,map__12456__$1,cols,tiles){
return (function (){
var s__12462__$1 = s__12462;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__12462__$1);
if(temp__5804__auto____$1){
var s__12462__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12462__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first.call(null,s__12462__$2);
var size__5522__auto____$1 = cljs.core.count.call(null,c__5521__auto____$1);
var b__12464 = cljs.core.chunk_buffer.call(null,size__5522__auto____$1);
if((function (){var i__12463 = (0);
while(true){
if((i__12463 < size__5522__auto____$1)){
var tile = cljs.core._nth.call(null,c__5521__auto____$1,i__12463);
cljs.core.chunk_append.call(null,b__12464,sweeper.ui.prepare_tile.call(null,tile));

var G__12469 = (i__12463 + (1));
i__12463 = G__12469;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12464),sweeper$ui$prepare_ui_data_$_iter__12457_$_iter__12461.call(null,cljs.core.chunk_rest.call(null,s__12462__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12464),null);
}
} else {
var tile = cljs.core.first.call(null,s__12462__$2);
return cljs.core.cons.call(null,sweeper.ui.prepare_tile.call(null,tile),sweeper$ui$prepare_ui_data_$_iter__12457_$_iter__12461.call(null,cljs.core.rest.call(null,s__12462__$2)));
}
} else {
return null;
}
break;
}
});})(i__12459,ts,c__5521__auto__,size__5522__auto__,b__12460,s__12458__$2,temp__5804__auto__,map__12456,map__12456__$1,cols,tiles))
,null,null));
});})(i__12459,ts,c__5521__auto__,size__5522__auto__,b__12460,s__12458__$2,temp__5804__auto__,map__12456,map__12456__$1,cols,tiles))
;
return iter__5523__auto__.call(null,ts);
})()], null));

var G__12470 = (i__12459 + (1));
i__12459 = G__12470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12460),sweeper$ui$prepare_ui_data_$_iter__12457.call(null,cljs.core.chunk_rest.call(null,s__12458__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12460),null);
}
} else {
var ts = cljs.core.first.call(null,s__12458__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tiles","tiles",178505240),(function (){var iter__5523__auto__ = ((function (ts,s__12458__$2,temp__5804__auto__,map__12456,map__12456__$1,cols,tiles){
return (function sweeper$ui$prepare_ui_data_$_iter__12457_$_iter__12465(s__12466){
return (new cljs.core.LazySeq(null,(function (){
var s__12466__$1 = s__12466;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__12466__$1);
if(temp__5804__auto____$1){
var s__12466__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12466__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__12466__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__12468 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__12467 = (0);
while(true){
if((i__12467 < size__5522__auto__)){
var tile = cljs.core._nth.call(null,c__5521__auto__,i__12467);
cljs.core.chunk_append.call(null,b__12468,sweeper.ui.prepare_tile.call(null,tile));

var G__12471 = (i__12467 + (1));
i__12467 = G__12471;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12468),sweeper$ui$prepare_ui_data_$_iter__12457_$_iter__12465.call(null,cljs.core.chunk_rest.call(null,s__12466__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12468),null);
}
} else {
var tile = cljs.core.first.call(null,s__12466__$2);
return cljs.core.cons.call(null,sweeper.ui.prepare_tile.call(null,tile),sweeper$ui$prepare_ui_data_$_iter__12457_$_iter__12465.call(null,cljs.core.rest.call(null,s__12466__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(ts,s__12458__$2,temp__5804__auto__,map__12456,map__12456__$1,cols,tiles))
;
return iter__5523__auto__.call(null,ts);
})()], null),sweeper$ui$prepare_ui_data_$_iter__12457.call(null,cljs.core.rest.call(null,s__12458__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.partition.call(null,cols,tiles));
})()], null);
});
sweeper.ui.render = (function sweeper$ui$render(p__12472){
var map__12473 = p__12472;
var map__12473__$1 = cljs.core.__destructure_map.call(null,map__12473);
var lines = cljs.core.get.call(null,map__12473__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",905832129),(function (){var iter__5523__auto__ = (function sweeper$ui$render_$_iter__12474(s__12475){
return (new cljs.core.LazySeq(null,(function (){
var s__12475__$1 = s__12475;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__12475__$1);
if(temp__5804__auto__){
var s__12475__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12475__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__12475__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__12477 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__12476 = (0);
while(true){
if((i__12476 < size__5522__auto__)){
var line = cljs.core._nth.call(null,c__5521__auto__,i__12476);
cljs.core.chunk_append.call(null,b__12477,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.line","div.line",-1849347203),(function (){var iter__5523__auto__ = ((function (i__12476,line,c__5521__auto__,size__5522__auto__,b__12477,s__12475__$2,temp__5804__auto__,map__12473,map__12473__$1,lines){
return (function sweeper$ui$render_$_iter__12474_$_iter__12478(s__12479){
return (new cljs.core.LazySeq(null,((function (i__12476,line,c__5521__auto__,size__5522__auto__,b__12477,s__12475__$2,temp__5804__auto__,map__12473,map__12473__$1,lines){
return (function (){
var s__12479__$1 = s__12479;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__12479__$1);
if(temp__5804__auto____$1){
var s__12479__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12479__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first.call(null,s__12479__$2);
var size__5522__auto____$1 = cljs.core.count.call(null,c__5521__auto____$1);
var b__12481 = cljs.core.chunk_buffer.call(null,size__5522__auto____$1);
if((function (){var i__12480 = (0);
while(true){
if((i__12480 < size__5522__auto____$1)){
var t = cljs.core._nth.call(null,c__5521__auto____$1,i__12480);
cljs.core.chunk_append.call(null,b__12481,sweeper.ui.tile.call(null,t));

var G__12486 = (i__12480 + (1));
i__12480 = G__12486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12481),sweeper$ui$render_$_iter__12474_$_iter__12478.call(null,cljs.core.chunk_rest.call(null,s__12479__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12481),null);
}
} else {
var t = cljs.core.first.call(null,s__12479__$2);
return cljs.core.cons.call(null,sweeper.ui.tile.call(null,t),sweeper$ui$render_$_iter__12474_$_iter__12478.call(null,cljs.core.rest.call(null,s__12479__$2)));
}
} else {
return null;
}
break;
}
});})(i__12476,line,c__5521__auto__,size__5522__auto__,b__12477,s__12475__$2,temp__5804__auto__,map__12473,map__12473__$1,lines))
,null,null));
});})(i__12476,line,c__5521__auto__,size__5522__auto__,b__12477,s__12475__$2,temp__5804__auto__,map__12473,map__12473__$1,lines))
;
return iter__5523__auto__.call(null,new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(line));
})()], null));

var G__12487 = (i__12476 + (1));
i__12476 = G__12487;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12477),sweeper$ui$render_$_iter__12474.call(null,cljs.core.chunk_rest.call(null,s__12475__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12477),null);
}
} else {
var line = cljs.core.first.call(null,s__12475__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.line","div.line",-1849347203),(function (){var iter__5523__auto__ = ((function (line,s__12475__$2,temp__5804__auto__,map__12473,map__12473__$1,lines){
return (function sweeper$ui$render_$_iter__12474_$_iter__12482(s__12483){
return (new cljs.core.LazySeq(null,(function (){
var s__12483__$1 = s__12483;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__12483__$1);
if(temp__5804__auto____$1){
var s__12483__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12483__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__12483__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__12485 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__12484 = (0);
while(true){
if((i__12484 < size__5522__auto__)){
var t = cljs.core._nth.call(null,c__5521__auto__,i__12484);
cljs.core.chunk_append.call(null,b__12485,sweeper.ui.tile.call(null,t));

var G__12488 = (i__12484 + (1));
i__12484 = G__12488;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12485),sweeper$ui$render_$_iter__12474_$_iter__12482.call(null,cljs.core.chunk_rest.call(null,s__12483__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12485),null);
}
} else {
var t = cljs.core.first.call(null,s__12483__$2);
return cljs.core.cons.call(null,sweeper.ui.tile.call(null,t),sweeper$ui$render_$_iter__12474_$_iter__12482.call(null,cljs.core.rest.call(null,s__12483__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(line,s__12475__$2,temp__5804__auto__,map__12473,map__12473__$1,lines))
;
return iter__5523__auto__.call(null,new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(line));
})()], null),sweeper$ui$render_$_iter__12474.call(null,cljs.core.rest.call(null,s__12475__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,lines);
})()], null);
});

//# sourceMappingURL=ui.js.map
