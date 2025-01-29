// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('sweeper.ui');
goog.require('cljs.core');
goog.require('replicant.alias');
sweeper.ui.tile = (function sweeper$ui$tile(p__11215){
var map__11216 = p__11215;
var map__11216__$1 = cljs.core.__destructure_map.call(null,map__11216);
var actions = cljs.core.get.call(null,map__11216__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var text = cljs.core.get.call(null,map__11216__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var covered_QMARK_ = cljs.core.get.call(null,map__11216__$1,new cljs.core.Keyword(null,"covered?","covered?",-1727828138));
var class$ = cljs.core.get.call(null,map__11216__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tile","div.tile",378522273),(function (){var G__11217 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null);
if(cljs.core.truth_(cljs.core.not_empty.call(null,actions))){
return cljs.core.assoc.call(null,G__11217,new cljs.core.Keyword(null,"on","on",173873944),actions);
} else {
return G__11217;
}
})(),(cljs.core.truth_(covered_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.lid","div.lid",-26287838),text], null):text)], null);
});
sweeper.ui.prepare_tile = (function sweeper$ui$prepare_tile(p__11218){
var map__11219 = p__11218;
var map__11219__$1 = cljs.core.__destructure_map.call(null,map__11219);
var id = cljs.core.get.call(null,map__11219__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var maybe_QMARK_ = cljs.core.get.call(null,map__11219__$1,new cljs.core.Keyword(null,"maybe?","maybe?",1688174259));
var mine_QMARK_ = cljs.core.get.call(null,map__11219__$1,new cljs.core.Keyword(null,"mine?","mine?",155874651));
var revealed_QMARK_ = cljs.core.get.call(null,map__11219__$1,new cljs.core.Keyword(null,"revealed?","revealed?",726959164));
var threat_count = cljs.core.get.call(null,map__11219__$1,new cljs.core.Keyword(null,"threat-count","threat-count",637469945));
var G__11220 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"covered?","covered?",-1727828138),cljs.core.not.call(null,revealed_QMARK_)], null);
var G__11220__$1 = ((cljs.core.not.call(null,revealed_QMARK_))?cljs.core.assoc.call(null,G__11220,new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("action","reveal-tile","action/reveal-tile",1866012226),id], null)], null),new cljs.core.Keyword(null,"contextmenu","contextmenu",-15887481),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("action","prevent-default","action/prevent-default",-1016251699)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("action","mark-tile","action/mark-tile",-1271584275),id], null)], null)], null)):G__11220);
var G__11220__$2 = (cljs.core.truth_((function (){var and__5043__auto__ = revealed_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return ((0) < threat_count);
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.call(null,G__11220__$1,new cljs.core.Keyword(null,"text","text",-1790561697),threat_count):G__11220__$1);
var G__11220__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not.call(null,revealed_QMARK_);
if(and__5043__auto__){
return maybe_QMARK_;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.call(null,G__11220__$2,new cljs.core.Keyword(null,"text","text",-1790561697),"?"):G__11220__$2);
if(cljs.core.truth_((function (){var and__5043__auto__ = revealed_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return mine_QMARK_;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.call(null,G__11220__$3,new cljs.core.Keyword(null,"class","class",-2030961996),"mine");
} else {
return G__11220__$3;
}
});
sweeper.ui.prepare_ui_data = (function sweeper$ui$prepare_ui_data(p__11221){
var map__11222 = p__11221;
var map__11222__$1 = cljs.core.__destructure_map.call(null,map__11222);
var cols = cljs.core.get.call(null,map__11222__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var tiles = cljs.core.get.call(null,map__11222__$1,new cljs.core.Keyword(null,"tiles","tiles",178505240));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lines","lines",-700165781),(function (){var iter__5523__auto__ = (function sweeper$ui$prepare_ui_data_$_iter__11223(s__11224){
return (new cljs.core.LazySeq(null,(function (){
var s__11224__$1 = s__11224;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11224__$1);
if(temp__5804__auto__){
var s__11224__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11224__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__11224__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__11226 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__11225 = (0);
while(true){
if((i__11225 < size__5522__auto__)){
var ts = cljs.core._nth.call(null,c__5521__auto__,i__11225);
cljs.core.chunk_append.call(null,b__11226,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tiles","tiles",178505240),(function (){var iter__5523__auto__ = ((function (i__11225,ts,c__5521__auto__,size__5522__auto__,b__11226,s__11224__$2,temp__5804__auto__,map__11222,map__11222__$1,cols,tiles){
return (function sweeper$ui$prepare_ui_data_$_iter__11223_$_iter__11227(s__11228){
return (new cljs.core.LazySeq(null,((function (i__11225,ts,c__5521__auto__,size__5522__auto__,b__11226,s__11224__$2,temp__5804__auto__,map__11222,map__11222__$1,cols,tiles){
return (function (){
var s__11228__$1 = s__11228;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__11228__$1);
if(temp__5804__auto____$1){
var s__11228__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11228__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first.call(null,s__11228__$2);
var size__5522__auto____$1 = cljs.core.count.call(null,c__5521__auto____$1);
var b__11230 = cljs.core.chunk_buffer.call(null,size__5522__auto____$1);
if((function (){var i__11229 = (0);
while(true){
if((i__11229 < size__5522__auto____$1)){
var tile = cljs.core._nth.call(null,c__5521__auto____$1,i__11229);
cljs.core.chunk_append.call(null,b__11230,sweeper.ui.prepare_tile.call(null,tile));

var G__11235 = (i__11229 + (1));
i__11229 = G__11235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11230),sweeper$ui$prepare_ui_data_$_iter__11223_$_iter__11227.call(null,cljs.core.chunk_rest.call(null,s__11228__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11230),null);
}
} else {
var tile = cljs.core.first.call(null,s__11228__$2);
return cljs.core.cons.call(null,sweeper.ui.prepare_tile.call(null,tile),sweeper$ui$prepare_ui_data_$_iter__11223_$_iter__11227.call(null,cljs.core.rest.call(null,s__11228__$2)));
}
} else {
return null;
}
break;
}
});})(i__11225,ts,c__5521__auto__,size__5522__auto__,b__11226,s__11224__$2,temp__5804__auto__,map__11222,map__11222__$1,cols,tiles))
,null,null));
});})(i__11225,ts,c__5521__auto__,size__5522__auto__,b__11226,s__11224__$2,temp__5804__auto__,map__11222,map__11222__$1,cols,tiles))
;
return iter__5523__auto__.call(null,ts);
})()], null));

var G__11236 = (i__11225 + (1));
i__11225 = G__11236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11226),sweeper$ui$prepare_ui_data_$_iter__11223.call(null,cljs.core.chunk_rest.call(null,s__11224__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11226),null);
}
} else {
var ts = cljs.core.first.call(null,s__11224__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tiles","tiles",178505240),(function (){var iter__5523__auto__ = ((function (ts,s__11224__$2,temp__5804__auto__,map__11222,map__11222__$1,cols,tiles){
return (function sweeper$ui$prepare_ui_data_$_iter__11223_$_iter__11231(s__11232){
return (new cljs.core.LazySeq(null,(function (){
var s__11232__$1 = s__11232;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__11232__$1);
if(temp__5804__auto____$1){
var s__11232__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11232__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__11232__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__11234 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__11233 = (0);
while(true){
if((i__11233 < size__5522__auto__)){
var tile = cljs.core._nth.call(null,c__5521__auto__,i__11233);
cljs.core.chunk_append.call(null,b__11234,sweeper.ui.prepare_tile.call(null,tile));

var G__11237 = (i__11233 + (1));
i__11233 = G__11237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11234),sweeper$ui$prepare_ui_data_$_iter__11223_$_iter__11231.call(null,cljs.core.chunk_rest.call(null,s__11232__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11234),null);
}
} else {
var tile = cljs.core.first.call(null,s__11232__$2);
return cljs.core.cons.call(null,sweeper.ui.prepare_tile.call(null,tile),sweeper$ui$prepare_ui_data_$_iter__11223_$_iter__11231.call(null,cljs.core.rest.call(null,s__11232__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(ts,s__11224__$2,temp__5804__auto__,map__11222,map__11222__$1,cols,tiles))
;
return iter__5523__auto__.call(null,ts);
})()], null),sweeper$ui$prepare_ui_data_$_iter__11223.call(null,cljs.core.rest.call(null,s__11224__$2)));
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
sweeper.ui.render = (function sweeper$ui$render(p__11238){
var map__11239 = p__11238;
var map__11239__$1 = cljs.core.__destructure_map.call(null,map__11239);
var lines = cljs.core.get.call(null,map__11239__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",905832129),(function (){var iter__5523__auto__ = (function sweeper$ui$render_$_iter__11240(s__11241){
return (new cljs.core.LazySeq(null,(function (){
var s__11241__$1 = s__11241;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11241__$1);
if(temp__5804__auto__){
var s__11241__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11241__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__11241__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__11243 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__11242 = (0);
while(true){
if((i__11242 < size__5522__auto__)){
var line = cljs.core._nth.call(null,c__5521__auto__,i__11242);
cljs.core.chunk_append.call(null,b__11243,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.line","div.line",-1849347203),(function (){var iter__5523__auto__ = ((function (i__11242,line,c__5521__auto__,size__5522__auto__,b__11243,s__11241__$2,temp__5804__auto__,map__11239,map__11239__$1,lines){
return (function sweeper$ui$render_$_iter__11240_$_iter__11244(s__11245){
return (new cljs.core.LazySeq(null,((function (i__11242,line,c__5521__auto__,size__5522__auto__,b__11243,s__11241__$2,temp__5804__auto__,map__11239,map__11239__$1,lines){
return (function (){
var s__11245__$1 = s__11245;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__11245__$1);
if(temp__5804__auto____$1){
var s__11245__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11245__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first.call(null,s__11245__$2);
var size__5522__auto____$1 = cljs.core.count.call(null,c__5521__auto____$1);
var b__11247 = cljs.core.chunk_buffer.call(null,size__5522__auto____$1);
if((function (){var i__11246 = (0);
while(true){
if((i__11246 < size__5522__auto____$1)){
var t = cljs.core._nth.call(null,c__5521__auto____$1,i__11246);
cljs.core.chunk_append.call(null,b__11247,sweeper.ui.tile.call(null,t));

var G__11252 = (i__11246 + (1));
i__11246 = G__11252;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11247),sweeper$ui$render_$_iter__11240_$_iter__11244.call(null,cljs.core.chunk_rest.call(null,s__11245__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11247),null);
}
} else {
var t = cljs.core.first.call(null,s__11245__$2);
return cljs.core.cons.call(null,sweeper.ui.tile.call(null,t),sweeper$ui$render_$_iter__11240_$_iter__11244.call(null,cljs.core.rest.call(null,s__11245__$2)));
}
} else {
return null;
}
break;
}
});})(i__11242,line,c__5521__auto__,size__5522__auto__,b__11243,s__11241__$2,temp__5804__auto__,map__11239,map__11239__$1,lines))
,null,null));
});})(i__11242,line,c__5521__auto__,size__5522__auto__,b__11243,s__11241__$2,temp__5804__auto__,map__11239,map__11239__$1,lines))
;
return iter__5523__auto__.call(null,new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(line));
})()], null));

var G__11253 = (i__11242 + (1));
i__11242 = G__11253;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11243),sweeper$ui$render_$_iter__11240.call(null,cljs.core.chunk_rest.call(null,s__11241__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11243),null);
}
} else {
var line = cljs.core.first.call(null,s__11241__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.line","div.line",-1849347203),(function (){var iter__5523__auto__ = ((function (line,s__11241__$2,temp__5804__auto__,map__11239,map__11239__$1,lines){
return (function sweeper$ui$render_$_iter__11240_$_iter__11248(s__11249){
return (new cljs.core.LazySeq(null,(function (){
var s__11249__$1 = s__11249;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__11249__$1);
if(temp__5804__auto____$1){
var s__11249__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11249__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__11249__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__11251 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__11250 = (0);
while(true){
if((i__11250 < size__5522__auto__)){
var t = cljs.core._nth.call(null,c__5521__auto__,i__11250);
cljs.core.chunk_append.call(null,b__11251,sweeper.ui.tile.call(null,t));

var G__11254 = (i__11250 + (1));
i__11250 = G__11254;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11251),sweeper$ui$render_$_iter__11240_$_iter__11248.call(null,cljs.core.chunk_rest.call(null,s__11249__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11251),null);
}
} else {
var t = cljs.core.first.call(null,s__11249__$2);
return cljs.core.cons.call(null,sweeper.ui.tile.call(null,t),sweeper$ui$render_$_iter__11240_$_iter__11248.call(null,cljs.core.rest.call(null,s__11249__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(line,s__11241__$2,temp__5804__auto__,map__11239,map__11239__$1,lines))
;
return iter__5523__auto__.call(null,new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(line));
})()], null),sweeper$ui$render_$_iter__11240.call(null,cljs.core.rest.call(null,s__11241__$2)));
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
