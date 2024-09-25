// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('sweeper.ui');
goog.require('cljs.core');
goog.require('replicant.alias');
var f__12327__auto___12446 = cljs.core.with_meta.call(null,(function() { 
var G__12448__delegate = function (args__12315__auto__){
var vec__12434 = args__12315__auto__;
var map__12437 = cljs.core.nth.call(null,vec__12434,(0),null);
var map__12437__$1 = cljs.core.__destructure_map.call(null,map__12437);
var a = map__12437__$1;
var actions = cljs.core.get.call(null,map__12437__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var text = cljs.core.get.call(null,map__12437__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var covered_QMARK_ = cljs.core.get.call(null,map__12437__$1,new cljs.core.Keyword(null,"covered?","covered?",-1727828138));
var class$ = cljs.core.get.call(null,map__12437__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var b = cljs.core.nth.call(null,vec__12434,(1),null);
var G__12438 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile","div.tile",378522273),(function (){var G__12439 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null);
if(cljs.core.truth_(cljs.core.not_empty.call(null,actions))){
return cljs.core.assoc.call(null,G__12439,new cljs.core.Keyword(null,"on","on",173873944),actions);
} else {
return G__12439;
}
})(),(cljs.core.truth_(covered_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.lid","div.lid",-26287838),text], null):text)], null);
if((G__12438 == null)){
return null;
} else {
return cljs.core.with_meta.call(null,G__12438,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("sweeper.ui","cell","sweeper.ui/cell",1714510963),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first.call(null,args__12315__auto__)], null)], null));
}
};
var G__12448 = function (var_args){
var args__12315__auto__ = null;
if (arguments.length > 0) {
var G__12449__i = 0, G__12449__a = new Array(arguments.length -  0);
while (G__12449__i < G__12449__a.length) {G__12449__a[G__12449__i] = arguments[G__12449__i + 0]; ++G__12449__i;}
  args__12315__auto__ = new cljs.core.IndexedSeq(G__12449__a,0,null);
} 
return G__12448__delegate.call(this,args__12315__auto__);};
G__12448.cljs$lang$maxFixedArity = 0;
G__12448.cljs$lang$applyTo = (function (arglist__12450){
var args__12315__auto__ = cljs.core.seq(arglist__12450);
return G__12448__delegate(args__12315__auto__);
});
G__12448.cljs$core$IFn$_invoke$arity$variadic = G__12448__delegate;
return G__12448;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("sweeper.ui","cell","sweeper.ui/cell",1714510963)], null));
var alias__12328__auto___12447 = new cljs.core.Keyword("replicant","alias","replicant/alias",563629492).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.with_meta.call(null,(function() { 
var G__12451__delegate = function (args__12315__auto__){
var vec__12440 = args__12315__auto__;
var map__12443 = cljs.core.nth.call(null,vec__12440,(0),null);
var map__12443__$1 = cljs.core.__destructure_map.call(null,map__12443);
var a = map__12443__$1;
var actions = cljs.core.get.call(null,map__12443__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var text = cljs.core.get.call(null,map__12443__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var covered_QMARK_ = cljs.core.get.call(null,map__12443__$1,new cljs.core.Keyword(null,"covered?","covered?",-1727828138));
var class$ = cljs.core.get.call(null,map__12443__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var b = cljs.core.nth.call(null,vec__12440,(1),null);
var G__12444 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile","div.tile",378522273),(function (){var G__12445 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null);
if(cljs.core.truth_(cljs.core.not_empty.call(null,actions))){
return cljs.core.assoc.call(null,G__12445,new cljs.core.Keyword(null,"on","on",173873944),actions);
} else {
return G__12445;
}
})(),(cljs.core.truth_(covered_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.lid","div.lid",-26287838),text], null):text)], null);
if((G__12444 == null)){
return null;
} else {
return cljs.core.with_meta.call(null,G__12444,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("sweeper.ui","cell","sweeper.ui/cell",1714510963),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first.call(null,args__12315__auto__)], null)], null));
}
};
var G__12451 = function (var_args){
var args__12315__auto__ = null;
if (arguments.length > 0) {
var G__12452__i = 0, G__12452__a = new Array(arguments.length -  0);
while (G__12452__i < G__12452__a.length) {G__12452__a[G__12452__i] = arguments[G__12452__i + 0]; ++G__12452__i;}
  args__12315__auto__ = new cljs.core.IndexedSeq(G__12452__a,0,null);
} 
return G__12451__delegate.call(this,args__12315__auto__);};
G__12451.cljs$lang$maxFixedArity = 0;
G__12451.cljs$lang$applyTo = (function (arglist__12453){
var args__12315__auto__ = cljs.core.seq(arglist__12453);
return G__12451__delegate(args__12315__auto__);
});
G__12451.cljs$core$IFn$_invoke$arity$variadic = G__12451__delegate;
return G__12451;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("sweeper.ui","cell","sweeper.ui/cell",1714510963)], null))));
cljs.core.swap_BANG_.call(null,replicant.alias.aliases,cljs.core.assoc,alias__12328__auto___12447,f__12327__auto___12446);

sweeper.ui.cell = alias__12328__auto___12447;
var f__12327__auto___12462 = cljs.core.with_meta.call(null,(function() { 
var G__12464__delegate = function (args__12315__auto__){
var vec__12454 = args__12315__auto__;
var _ = cljs.core.nth.call(null,vec__12454,(0),null);
var xs = cljs.core.nth.call(null,vec__12454,(1),null);
var G__12457 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",905832129),xs], null);
if((G__12457 == null)){
return null;
} else {
return cljs.core.with_meta.call(null,G__12457,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("sweeper.ui","board","sweeper.ui/board",1311838346),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first.call(null,args__12315__auto__)], null)], null));
}
};
var G__12464 = function (var_args){
var args__12315__auto__ = null;
if (arguments.length > 0) {
var G__12465__i = 0, G__12465__a = new Array(arguments.length -  0);
while (G__12465__i < G__12465__a.length) {G__12465__a[G__12465__i] = arguments[G__12465__i + 0]; ++G__12465__i;}
  args__12315__auto__ = new cljs.core.IndexedSeq(G__12465__a,0,null);
} 
return G__12464__delegate.call(this,args__12315__auto__);};
G__12464.cljs$lang$maxFixedArity = 0;
G__12464.cljs$lang$applyTo = (function (arglist__12466){
var args__12315__auto__ = cljs.core.seq(arglist__12466);
return G__12464__delegate(args__12315__auto__);
});
G__12464.cljs$core$IFn$_invoke$arity$variadic = G__12464__delegate;
return G__12464;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("sweeper.ui","board","sweeper.ui/board",1311838346)], null));
var alias__12328__auto___12463 = new cljs.core.Keyword("replicant","alias","replicant/alias",563629492).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.with_meta.call(null,(function() { 
var G__12467__delegate = function (args__12315__auto__){
var vec__12458 = args__12315__auto__;
var _ = cljs.core.nth.call(null,vec__12458,(0),null);
var xs = cljs.core.nth.call(null,vec__12458,(1),null);
var G__12461 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",905832129),xs], null);
if((G__12461 == null)){
return null;
} else {
return cljs.core.with_meta.call(null,G__12461,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("sweeper.ui","board","sweeper.ui/board",1311838346),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first.call(null,args__12315__auto__)], null)], null));
}
};
var G__12467 = function (var_args){
var args__12315__auto__ = null;
if (arguments.length > 0) {
var G__12468__i = 0, G__12468__a = new Array(arguments.length -  0);
while (G__12468__i < G__12468__a.length) {G__12468__a[G__12468__i] = arguments[G__12468__i + 0]; ++G__12468__i;}
  args__12315__auto__ = new cljs.core.IndexedSeq(G__12468__a,0,null);
} 
return G__12467__delegate.call(this,args__12315__auto__);};
G__12467.cljs$lang$maxFixedArity = 0;
G__12467.cljs$lang$applyTo = (function (arglist__12469){
var args__12315__auto__ = cljs.core.seq(arglist__12469);
return G__12467__delegate(args__12315__auto__);
});
G__12467.cljs$core$IFn$_invoke$arity$variadic = G__12467__delegate;
return G__12467;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("sweeper.ui","board","sweeper.ui/board",1311838346)], null))));
cljs.core.swap_BANG_.call(null,replicant.alias.aliases,cljs.core.assoc,alias__12328__auto___12463,f__12327__auto___12462);

sweeper.ui.board = alias__12328__auto___12463;
var f__12327__auto___12478 = cljs.core.with_meta.call(null,(function() { 
var G__12480__delegate = function (args__12315__auto__){
var vec__12470 = args__12315__auto__;
var _ = cljs.core.nth.call(null,vec__12470,(0),null);
var xs = cljs.core.nth.call(null,vec__12470,(1),null);
var G__12473 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.line","div.line",-1849347203),xs], null);
if((G__12473 == null)){
return null;
} else {
return cljs.core.with_meta.call(null,G__12473,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("sweeper.ui","line","sweeper.ui/line",1951680910),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first.call(null,args__12315__auto__)], null)], null));
}
};
var G__12480 = function (var_args){
var args__12315__auto__ = null;
if (arguments.length > 0) {
var G__12481__i = 0, G__12481__a = new Array(arguments.length -  0);
while (G__12481__i < G__12481__a.length) {G__12481__a[G__12481__i] = arguments[G__12481__i + 0]; ++G__12481__i;}
  args__12315__auto__ = new cljs.core.IndexedSeq(G__12481__a,0,null);
} 
return G__12480__delegate.call(this,args__12315__auto__);};
G__12480.cljs$lang$maxFixedArity = 0;
G__12480.cljs$lang$applyTo = (function (arglist__12482){
var args__12315__auto__ = cljs.core.seq(arglist__12482);
return G__12480__delegate(args__12315__auto__);
});
G__12480.cljs$core$IFn$_invoke$arity$variadic = G__12480__delegate;
return G__12480;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("sweeper.ui","line","sweeper.ui/line",1951680910)], null));
var alias__12328__auto___12479 = new cljs.core.Keyword("replicant","alias","replicant/alias",563629492).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.with_meta.call(null,(function() { 
var G__12483__delegate = function (args__12315__auto__){
var vec__12474 = args__12315__auto__;
var _ = cljs.core.nth.call(null,vec__12474,(0),null);
var xs = cljs.core.nth.call(null,vec__12474,(1),null);
var G__12477 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.line","div.line",-1849347203),xs], null);
if((G__12477 == null)){
return null;
} else {
return cljs.core.with_meta.call(null,G__12477,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("sweeper.ui","line","sweeper.ui/line",1951680910),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first.call(null,args__12315__auto__)], null)], null));
}
};
var G__12483 = function (var_args){
var args__12315__auto__ = null;
if (arguments.length > 0) {
var G__12484__i = 0, G__12484__a = new Array(arguments.length -  0);
while (G__12484__i < G__12484__a.length) {G__12484__a[G__12484__i] = arguments[G__12484__i + 0]; ++G__12484__i;}
  args__12315__auto__ = new cljs.core.IndexedSeq(G__12484__a,0,null);
} 
return G__12483__delegate.call(this,args__12315__auto__);};
G__12483.cljs$lang$maxFixedArity = 0;
G__12483.cljs$lang$applyTo = (function (arglist__12485){
var args__12315__auto__ = cljs.core.seq(arglist__12485);
return G__12483__delegate(args__12315__auto__);
});
G__12483.cljs$core$IFn$_invoke$arity$variadic = G__12483__delegate;
return G__12483;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("sweeper.ui","line","sweeper.ui/line",1951680910)], null))));
cljs.core.swap_BANG_.call(null,replicant.alias.aliases,cljs.core.assoc,alias__12328__auto___12479,f__12327__auto___12478);

sweeper.ui.line = alias__12328__auto___12479;
sweeper.ui.prepare_tile = (function sweeper$ui$prepare_tile(p__12486){
var map__12487 = p__12486;
var map__12487__$1 = cljs.core.__destructure_map.call(null,map__12487);
var id = cljs.core.get.call(null,map__12487__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var maybe_QMARK_ = cljs.core.get.call(null,map__12487__$1,new cljs.core.Keyword(null,"maybe?","maybe?",1688174259));
var mine_QMARK_ = cljs.core.get.call(null,map__12487__$1,new cljs.core.Keyword(null,"mine?","mine?",155874651));
var revealed_QMARK_ = cljs.core.get.call(null,map__12487__$1,new cljs.core.Keyword(null,"revealed?","revealed?",726959164));
var threat_count = cljs.core.get.call(null,map__12487__$1,new cljs.core.Keyword(null,"threat-count","threat-count",637469945));
var G__12488 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"covered?","covered?",-1727828138),cljs.core.not.call(null,revealed_QMARK_)], null);
var G__12488__$1 = ((cljs.core.not.call(null,revealed_QMARK_))?cljs.core.assoc.call(null,G__12488,new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("action","reveal-tile","action/reveal-tile",1866012226),id], null)], null),new cljs.core.Keyword(null,"contextmenu","contextmenu",-15887481),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("action","prevent-default","action/prevent-default",-1016251699)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("action","mark-tile","action/mark-tile",-1271584275),id], null)], null)], null)):G__12488);
var G__12488__$2 = (cljs.core.truth_((function (){var and__5043__auto__ = revealed_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return ((0) < threat_count);
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.call(null,G__12488__$1,new cljs.core.Keyword(null,"text","text",-1790561697),threat_count):G__12488__$1);
var G__12488__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not.call(null,revealed_QMARK_);
if(and__5043__auto__){
return maybe_QMARK_;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.call(null,G__12488__$2,new cljs.core.Keyword(null,"text","text",-1790561697),"?"):G__12488__$2);
if(cljs.core.truth_((function (){var and__5043__auto__ = revealed_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return mine_QMARK_;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.call(null,G__12488__$3,new cljs.core.Keyword(null,"class","class",-2030961996),"mine");
} else {
return G__12488__$3;
}
});
sweeper.ui.render = (function sweeper$ui$render(p__12489){
var map__12490 = p__12489;
var map__12490__$1 = cljs.core.__destructure_map.call(null,map__12490);
var cols = cljs.core.get.call(null,map__12490__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var tiles = cljs.core.get.call(null,map__12490__$1,new cljs.core.Keyword(null,"tiles","tiles",178505240));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sweeper.ui.board,(function (){var iter__5523__auto__ = (function sweeper$ui$render_$_iter__12491(s__12492){
return (new cljs.core.LazySeq(null,(function (){
var s__12492__$1 = s__12492;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__12492__$1);
if(temp__5804__auto__){
var s__12492__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12492__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__12492__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__12494 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__12493 = (0);
while(true){
if((i__12493 < size__5522__auto__)){
var ts = cljs.core._nth.call(null,c__5521__auto__,i__12493);
cljs.core.chunk_append.call(null,b__12494,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sweeper.ui.line,(function (){var iter__5523__auto__ = ((function (i__12493,ts,c__5521__auto__,size__5522__auto__,b__12494,s__12492__$2,temp__5804__auto__,map__12490,map__12490__$1,cols,tiles){
return (function sweeper$ui$render_$_iter__12491_$_iter__12495(s__12496){
return (new cljs.core.LazySeq(null,((function (i__12493,ts,c__5521__auto__,size__5522__auto__,b__12494,s__12492__$2,temp__5804__auto__,map__12490,map__12490__$1,cols,tiles){
return (function (){
var s__12496__$1 = s__12496;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__12496__$1);
if(temp__5804__auto____$1){
var s__12496__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12496__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first.call(null,s__12496__$2);
var size__5522__auto____$1 = cljs.core.count.call(null,c__5521__auto____$1);
var b__12498 = cljs.core.chunk_buffer.call(null,size__5522__auto____$1);
if((function (){var i__12497 = (0);
while(true){
if((i__12497 < size__5522__auto____$1)){
var tile = cljs.core._nth.call(null,c__5521__auto____$1,i__12497);
cljs.core.chunk_append.call(null,b__12498,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sweeper.ui.cell,sweeper.ui.prepare_tile.call(null,tile)], null));

var G__12503 = (i__12497 + (1));
i__12497 = G__12503;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12498),sweeper$ui$render_$_iter__12491_$_iter__12495.call(null,cljs.core.chunk_rest.call(null,s__12496__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12498),null);
}
} else {
var tile = cljs.core.first.call(null,s__12496__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sweeper.ui.cell,sweeper.ui.prepare_tile.call(null,tile)], null),sweeper$ui$render_$_iter__12491_$_iter__12495.call(null,cljs.core.rest.call(null,s__12496__$2)));
}
} else {
return null;
}
break;
}
});})(i__12493,ts,c__5521__auto__,size__5522__auto__,b__12494,s__12492__$2,temp__5804__auto__,map__12490,map__12490__$1,cols,tiles))
,null,null));
});})(i__12493,ts,c__5521__auto__,size__5522__auto__,b__12494,s__12492__$2,temp__5804__auto__,map__12490,map__12490__$1,cols,tiles))
;
return iter__5523__auto__.call(null,ts);
})()], null));

var G__12504 = (i__12493 + (1));
i__12493 = G__12504;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12494),sweeper$ui$render_$_iter__12491.call(null,cljs.core.chunk_rest.call(null,s__12492__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12494),null);
}
} else {
var ts = cljs.core.first.call(null,s__12492__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sweeper.ui.line,(function (){var iter__5523__auto__ = ((function (ts,s__12492__$2,temp__5804__auto__,map__12490,map__12490__$1,cols,tiles){
return (function sweeper$ui$render_$_iter__12491_$_iter__12499(s__12500){
return (new cljs.core.LazySeq(null,(function (){
var s__12500__$1 = s__12500;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__12500__$1);
if(temp__5804__auto____$1){
var s__12500__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12500__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__12500__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__12502 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__12501 = (0);
while(true){
if((i__12501 < size__5522__auto__)){
var tile = cljs.core._nth.call(null,c__5521__auto__,i__12501);
cljs.core.chunk_append.call(null,b__12502,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sweeper.ui.cell,sweeper.ui.prepare_tile.call(null,tile)], null));

var G__12505 = (i__12501 + (1));
i__12501 = G__12505;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12502),sweeper$ui$render_$_iter__12491_$_iter__12499.call(null,cljs.core.chunk_rest.call(null,s__12500__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12502),null);
}
} else {
var tile = cljs.core.first.call(null,s__12500__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sweeper.ui.cell,sweeper.ui.prepare_tile.call(null,tile)], null),sweeper$ui$render_$_iter__12491_$_iter__12499.call(null,cljs.core.rest.call(null,s__12500__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(ts,s__12492__$2,temp__5804__auto__,map__12490,map__12490__$1,cols,tiles))
;
return iter__5523__auto__.call(null,ts);
})()], null),sweeper$ui$render_$_iter__12491.call(null,cljs.core.rest.call(null,s__12492__$2)));
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
