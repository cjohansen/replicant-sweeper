// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('sweeper.ui');
goog.require('cljs.core');
goog.require('replicant.alias');
var f__12344__auto___12455 = cljs.core.with_meta.call(null,(function() { 
var G__12457__delegate = function (args__12331__auto__){
var vec__12449 = args__12331__auto__;
var map__12452 = cljs.core.nth.call(null,vec__12449,(0),null);
var map__12452__$1 = cljs.core.__destructure_map.call(null,map__12452);
var actions = cljs.core.get.call(null,map__12452__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var text = cljs.core.get.call(null,map__12452__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var covered_QMARK_ = cljs.core.get.call(null,map__12452__$1,new cljs.core.Keyword(null,"covered?","covered?",-1727828138));
var class$ = cljs.core.get.call(null,map__12452__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _ = cljs.core.nth.call(null,vec__12449,(1),null);
var res__12332__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile","div.tile",378522273),(function (){var G__12453 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null);
if(cljs.core.truth_(cljs.core.not_empty.call(null,actions))){
return cljs.core.assoc.call(null,G__12453,new cljs.core.Keyword(null,"on","on",173873944),actions);
} else {
return G__12453;
}
})(),(cljs.core.truth_(covered_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.lid","div.lid",-26287838),text], null):text)], null);
var G__12454 = res__12332__auto__;
if(cljs.core.vector_QMARK_.call(null,res__12332__auto__)){
return cljs.core.with_meta.call(null,G__12454,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("sweeper.ui","cell","sweeper.ui/cell",1714510963),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first.call(null,args__12331__auto__)], null)], null));
} else {
return G__12454;
}
};
var G__12457 = function (var_args){
var args__12331__auto__ = null;
if (arguments.length > 0) {
var G__12458__i = 0, G__12458__a = new Array(arguments.length -  0);
while (G__12458__i < G__12458__a.length) {G__12458__a[G__12458__i] = arguments[G__12458__i + 0]; ++G__12458__i;}
  args__12331__auto__ = new cljs.core.IndexedSeq(G__12458__a,0,null);
} 
return G__12457__delegate.call(this,args__12331__auto__);};
G__12457.cljs$lang$maxFixedArity = 0;
G__12457.cljs$lang$applyTo = (function (arglist__12459){
var args__12331__auto__ = cljs.core.seq(arglist__12459);
return G__12457__delegate(args__12331__auto__);
});
G__12457.cljs$core$IFn$_invoke$arity$variadic = G__12457__delegate;
return G__12457;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("sweeper.ui","cell","sweeper.ui/cell",1714510963)], null));
var alias__12345__auto___12456 = new cljs.core.Keyword("sweeper.ui","cell","sweeper.ui/cell",1714510963);
cljs.core.swap_BANG_.call(null,replicant.alias.aliases,cljs.core.assoc,alias__12345__auto___12456,f__12344__auto___12455);

sweeper.ui.cell = alias__12345__auto___12456;
var f__12344__auto___12464 = cljs.core.with_meta.call(null,(function() { 
var G__12466__delegate = function (args__12331__auto__){
var vec__12460 = args__12331__auto__;
var _ = cljs.core.nth.call(null,vec__12460,(0),null);
var xs = cljs.core.nth.call(null,vec__12460,(1),null);
var res__12332__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",905832129),xs], null);
var G__12463 = res__12332__auto__;
if(cljs.core.vector_QMARK_.call(null,res__12332__auto__)){
return cljs.core.with_meta.call(null,G__12463,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("sweeper.ui","board","sweeper.ui/board",1311838346),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first.call(null,args__12331__auto__)], null)], null));
} else {
return G__12463;
}
};
var G__12466 = function (var_args){
var args__12331__auto__ = null;
if (arguments.length > 0) {
var G__12467__i = 0, G__12467__a = new Array(arguments.length -  0);
while (G__12467__i < G__12467__a.length) {G__12467__a[G__12467__i] = arguments[G__12467__i + 0]; ++G__12467__i;}
  args__12331__auto__ = new cljs.core.IndexedSeq(G__12467__a,0,null);
} 
return G__12466__delegate.call(this,args__12331__auto__);};
G__12466.cljs$lang$maxFixedArity = 0;
G__12466.cljs$lang$applyTo = (function (arglist__12468){
var args__12331__auto__ = cljs.core.seq(arglist__12468);
return G__12466__delegate(args__12331__auto__);
});
G__12466.cljs$core$IFn$_invoke$arity$variadic = G__12466__delegate;
return G__12466;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("sweeper.ui","board","sweeper.ui/board",1311838346)], null));
var alias__12345__auto___12465 = new cljs.core.Keyword("sweeper.ui","board","sweeper.ui/board",1311838346);
cljs.core.swap_BANG_.call(null,replicant.alias.aliases,cljs.core.assoc,alias__12345__auto___12465,f__12344__auto___12464);

sweeper.ui.board = alias__12345__auto___12465;
var f__12344__auto___12473 = cljs.core.with_meta.call(null,(function() { 
var G__12475__delegate = function (args__12331__auto__){
var vec__12469 = args__12331__auto__;
var _ = cljs.core.nth.call(null,vec__12469,(0),null);
var xs = cljs.core.nth.call(null,vec__12469,(1),null);
var res__12332__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.line","div.line",-1849347203),xs], null);
var G__12472 = res__12332__auto__;
if(cljs.core.vector_QMARK_.call(null,res__12332__auto__)){
return cljs.core.with_meta.call(null,G__12472,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("sweeper.ui","line","sweeper.ui/line",1951680910),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first.call(null,args__12331__auto__)], null)], null));
} else {
return G__12472;
}
};
var G__12475 = function (var_args){
var args__12331__auto__ = null;
if (arguments.length > 0) {
var G__12476__i = 0, G__12476__a = new Array(arguments.length -  0);
while (G__12476__i < G__12476__a.length) {G__12476__a[G__12476__i] = arguments[G__12476__i + 0]; ++G__12476__i;}
  args__12331__auto__ = new cljs.core.IndexedSeq(G__12476__a,0,null);
} 
return G__12475__delegate.call(this,args__12331__auto__);};
G__12475.cljs$lang$maxFixedArity = 0;
G__12475.cljs$lang$applyTo = (function (arglist__12477){
var args__12331__auto__ = cljs.core.seq(arglist__12477);
return G__12475__delegate(args__12331__auto__);
});
G__12475.cljs$core$IFn$_invoke$arity$variadic = G__12475__delegate;
return G__12475;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("sweeper.ui","line","sweeper.ui/line",1951680910)], null));
var alias__12345__auto___12474 = new cljs.core.Keyword("sweeper.ui","line","sweeper.ui/line",1951680910);
cljs.core.swap_BANG_.call(null,replicant.alias.aliases,cljs.core.assoc,alias__12345__auto___12474,f__12344__auto___12473);

sweeper.ui.line = alias__12345__auto___12474;
sweeper.ui.prepare_tile = (function sweeper$ui$prepare_tile(p__12478){
var map__12479 = p__12478;
var map__12479__$1 = cljs.core.__destructure_map.call(null,map__12479);
var id = cljs.core.get.call(null,map__12479__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var maybe_QMARK_ = cljs.core.get.call(null,map__12479__$1,new cljs.core.Keyword(null,"maybe?","maybe?",1688174259));
var mine_QMARK_ = cljs.core.get.call(null,map__12479__$1,new cljs.core.Keyword(null,"mine?","mine?",155874651));
var revealed_QMARK_ = cljs.core.get.call(null,map__12479__$1,new cljs.core.Keyword(null,"revealed?","revealed?",726959164));
var threat_count = cljs.core.get.call(null,map__12479__$1,new cljs.core.Keyword(null,"threat-count","threat-count",637469945));
var G__12480 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"covered?","covered?",-1727828138),cljs.core.not.call(null,revealed_QMARK_)], null);
var G__12480__$1 = ((cljs.core.not.call(null,revealed_QMARK_))?cljs.core.assoc.call(null,G__12480,new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("action","reveal-tile","action/reveal-tile",1866012226),id], null)], null),new cljs.core.Keyword(null,"contextmenu","contextmenu",-15887481),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("action","prevent-default","action/prevent-default",-1016251699)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("action","mark-tile","action/mark-tile",-1271584275),id], null)], null)], null)):G__12480);
var G__12480__$2 = (cljs.core.truth_((function (){var and__5043__auto__ = revealed_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return ((0) < threat_count);
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.call(null,G__12480__$1,new cljs.core.Keyword(null,"text","text",-1790561697),threat_count):G__12480__$1);
var G__12480__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not.call(null,revealed_QMARK_);
if(and__5043__auto__){
return maybe_QMARK_;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.call(null,G__12480__$2,new cljs.core.Keyword(null,"text","text",-1790561697),"?"):G__12480__$2);
if(cljs.core.truth_((function (){var and__5043__auto__ = revealed_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return mine_QMARK_;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.call(null,G__12480__$3,new cljs.core.Keyword(null,"class","class",-2030961996),"mine");
} else {
return G__12480__$3;
}
});
sweeper.ui.render = (function sweeper$ui$render(p__12481){
var map__12482 = p__12481;
var map__12482__$1 = cljs.core.__destructure_map.call(null,map__12482);
var cols = cljs.core.get.call(null,map__12482__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var tiles = cljs.core.get.call(null,map__12482__$1,new cljs.core.Keyword(null,"tiles","tiles",178505240));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sweeper.ui.board,(function (){var iter__5523__auto__ = (function sweeper$ui$render_$_iter__12483(s__12484){
return (new cljs.core.LazySeq(null,(function (){
var s__12484__$1 = s__12484;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__12484__$1);
if(temp__5804__auto__){
var s__12484__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12484__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__12484__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__12486 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__12485 = (0);
while(true){
if((i__12485 < size__5522__auto__)){
var ts = cljs.core._nth.call(null,c__5521__auto__,i__12485);
cljs.core.chunk_append.call(null,b__12486,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sweeper.ui.line,(function (){var iter__5523__auto__ = ((function (i__12485,ts,c__5521__auto__,size__5522__auto__,b__12486,s__12484__$2,temp__5804__auto__,map__12482,map__12482__$1,cols,tiles){
return (function sweeper$ui$render_$_iter__12483_$_iter__12487(s__12488){
return (new cljs.core.LazySeq(null,((function (i__12485,ts,c__5521__auto__,size__5522__auto__,b__12486,s__12484__$2,temp__5804__auto__,map__12482,map__12482__$1,cols,tiles){
return (function (){
var s__12488__$1 = s__12488;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__12488__$1);
if(temp__5804__auto____$1){
var s__12488__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12488__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first.call(null,s__12488__$2);
var size__5522__auto____$1 = cljs.core.count.call(null,c__5521__auto____$1);
var b__12490 = cljs.core.chunk_buffer.call(null,size__5522__auto____$1);
if((function (){var i__12489 = (0);
while(true){
if((i__12489 < size__5522__auto____$1)){
var tile = cljs.core._nth.call(null,c__5521__auto____$1,i__12489);
cljs.core.chunk_append.call(null,b__12490,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sweeper.ui.cell,sweeper.ui.prepare_tile.call(null,tile)], null));

var G__12495 = (i__12489 + (1));
i__12489 = G__12495;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12490),sweeper$ui$render_$_iter__12483_$_iter__12487.call(null,cljs.core.chunk_rest.call(null,s__12488__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12490),null);
}
} else {
var tile = cljs.core.first.call(null,s__12488__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sweeper.ui.cell,sweeper.ui.prepare_tile.call(null,tile)], null),sweeper$ui$render_$_iter__12483_$_iter__12487.call(null,cljs.core.rest.call(null,s__12488__$2)));
}
} else {
return null;
}
break;
}
});})(i__12485,ts,c__5521__auto__,size__5522__auto__,b__12486,s__12484__$2,temp__5804__auto__,map__12482,map__12482__$1,cols,tiles))
,null,null));
});})(i__12485,ts,c__5521__auto__,size__5522__auto__,b__12486,s__12484__$2,temp__5804__auto__,map__12482,map__12482__$1,cols,tiles))
;
return iter__5523__auto__.call(null,ts);
})()], null));

var G__12496 = (i__12485 + (1));
i__12485 = G__12496;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12486),sweeper$ui$render_$_iter__12483.call(null,cljs.core.chunk_rest.call(null,s__12484__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12486),null);
}
} else {
var ts = cljs.core.first.call(null,s__12484__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sweeper.ui.line,(function (){var iter__5523__auto__ = ((function (ts,s__12484__$2,temp__5804__auto__,map__12482,map__12482__$1,cols,tiles){
return (function sweeper$ui$render_$_iter__12483_$_iter__12491(s__12492){
return (new cljs.core.LazySeq(null,(function (){
var s__12492__$1 = s__12492;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__12492__$1);
if(temp__5804__auto____$1){
var s__12492__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12492__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__12492__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__12494 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__12493 = (0);
while(true){
if((i__12493 < size__5522__auto__)){
var tile = cljs.core._nth.call(null,c__5521__auto__,i__12493);
cljs.core.chunk_append.call(null,b__12494,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sweeper.ui.cell,sweeper.ui.prepare_tile.call(null,tile)], null));

var G__12497 = (i__12493 + (1));
i__12493 = G__12497;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12494),sweeper$ui$render_$_iter__12483_$_iter__12491.call(null,cljs.core.chunk_rest.call(null,s__12492__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12494),null);
}
} else {
var tile = cljs.core.first.call(null,s__12492__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sweeper.ui.cell,sweeper.ui.prepare_tile.call(null,tile)], null),sweeper$ui$render_$_iter__12483_$_iter__12491.call(null,cljs.core.rest.call(null,s__12492__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(ts,s__12484__$2,temp__5804__auto__,map__12482,map__12482__$1,cols,tiles))
;
return iter__5523__auto__.call(null,ts);
})()], null),sweeper$ui$render_$_iter__12483.call(null,cljs.core.rest.call(null,s__12484__$2)));
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

//# sourceMappingURL=ui.js.map
