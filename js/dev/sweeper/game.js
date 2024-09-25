// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('sweeper.game');
goog.require('cljs.core');
sweeper.game.create_game = (function sweeper$game$create_game(p__12427){
var map__12428 = p__12427;
var map__12428__$1 = cljs.core.__destructure_map.call(null,map__12428);
var rows = cljs.core.get.call(null,map__12428__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var cols = cljs.core.get.call(null,map__12428__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var mines = cljs.core.get.call(null,map__12428__$1,new cljs.core.Keyword(null,"mines","mines",-1960796490));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cols,new cljs.core.Keyword(null,"rows","rows",850049680),rows,new cljs.core.Keyword(null,"playing-time","playing-time",1335382619),(0),new cljs.core.Keyword(null,"tiles","tiles",178505240),cljs.core.mapv.call(null,cljs.core.identity,cljs.core.map_indexed.call(null,(function (p1__12426_SHARP_,p2__12425_SHARP_){
return cljs.core.assoc.call(null,p2__12425_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),p1__12426_SHARP_);
}),cljs.core.shuffle.call(null,cljs.core.concat.call(null,cljs.core.repeat.call(null,mines,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mine?","mine?",155874651),true,new cljs.core.Keyword(null,"revealed?","revealed?",726959164),false], null)),cljs.core.repeat.call(null,((rows * cols) - mines),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"revealed?","revealed?",726959164),false], null))))))], null);
});
sweeper.game.on_w_edge_QMARK_ = (function sweeper$game$on_w_edge_QMARK_(game,tile){
return cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,tile,new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(game)));
});
sweeper.game.on_e_edge_QMARK_ = (function sweeper$game$on_e_edge_QMARK_(game,tile){
return cljs.core._EQ_.call(null,(new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(game) - (1)),cljs.core.mod.call(null,tile,new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(game)));
});
sweeper.game.idx = (function sweeper$game$idx(game,tile){
if((!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(game),tile)))){
return null;
} else {
return tile;
}
});
sweeper.game.nw = (function sweeper$game$nw(game,tile){
if(sweeper.game.on_w_edge_QMARK_.call(null,game,tile)){
return null;
} else {
return sweeper.game.idx.call(null,game,((tile - new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(game)) - (1)));
}
});
sweeper.game.n = (function sweeper$game$n(game,tile){
return sweeper.game.idx.call(null,game,(tile - new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(game)));
});
sweeper.game.ne = (function sweeper$game$ne(game,tile){
if(sweeper.game.on_e_edge_QMARK_.call(null,game,tile)){
return null;
} else {
return sweeper.game.idx.call(null,game,((tile - new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(game)) + (1)));
}
});
sweeper.game.e = (function sweeper$game$e(game,tile){
if(sweeper.game.on_e_edge_QMARK_.call(null,game,tile)){
return null;
} else {
return sweeper.game.idx.call(null,game,(tile + (1)));
}
});
sweeper.game.se = (function sweeper$game$se(game,tile){
if(sweeper.game.on_e_edge_QMARK_.call(null,game,tile)){
return null;
} else {
return sweeper.game.idx.call(null,game,((tile + new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(game)) + (1)));
}
});
sweeper.game.s = (function sweeper$game$s(game,tile){
return sweeper.game.idx.call(null,game,(tile + new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(game)));
});
sweeper.game.sw = (function sweeper$game$sw(game,tile){
if(sweeper.game.on_w_edge_QMARK_.call(null,game,tile)){
return null;
} else {
return sweeper.game.idx.call(null,game,((tile + new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(game)) - (1)));
}
});
sweeper.game.w = (function sweeper$game$w(game,tile){
if(sweeper.game.on_w_edge_QMARK_.call(null,game,tile)){
return null;
} else {
return sweeper.game.idx.call(null,game,(tile - (1)));
}
});
sweeper.game.directions = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [sweeper.game.nw,sweeper.game.n,sweeper.game.ne,sweeper.game.e,sweeper.game.se,sweeper.game.s,sweeper.game.sw,sweeper.game.w], null);
sweeper.game.neighbours = (function sweeper$game$neighbours(game,tile){
return cljs.core.keep.call(null,(function (p1__12429_SHARP_){
return cljs.core.get_in.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240),p1__12429_SHARP_.call(null,game,tile)], null));
}),sweeper.game.directions);
});
sweeper.game.get_mine_count = (function sweeper$game$get_mine_count(game,tile){
return cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"mine?","mine?",155874651),sweeper.game.neighbours.call(null,game,tile)));
});
sweeper.game.mine_QMARK_ = (function sweeper$game$mine_QMARK_(game,tile){
return new cljs.core.Keyword(null,"mine?","mine?",155874651).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240),tile], null)));
});
sweeper.game.safe_QMARK_ = (function sweeper$game$safe_QMARK_(game){
var tiles = new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(game);
var mines = cljs.core.filter.call(null,new cljs.core.Keyword(null,"mine?","mine?",155874651),tiles);
return ((cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"revealed?","revealed?",726959164),mines)))) && (cljs.core._EQ_.call(null,(cljs.core.count.call(null,tiles) - cljs.core.count.call(null,mines)),cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"revealed?","revealed?",726959164),tiles)))));
});
sweeper.game.game_over_QMARK_ = (function sweeper$game$game_over_QMARK_(game){
var or__5045__auto__ = new cljs.core.Keyword(null,"safe?","safe?",1351599959).cljs$core$IFn$_invoke$arity$1(game);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"dead?","dead?",990391228).cljs$core$IFn$_invoke$arity$1(game);
}
});
sweeper.game.add_threat_count = (function sweeper$game$add_threat_count(game,tile){
return cljs.core.assoc_in.call(null,game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240),tile,new cljs.core.Keyword(null,"threat-count","threat-count",637469945)], null),sweeper.game.get_mine_count.call(null,game,tile));
});
sweeper.game.reveal_adjacent_safe_tiles = (function sweeper$game$reveal_adjacent_safe_tiles(game,tile){
if(cljs.core.truth_(sweeper.game.mine_QMARK_.call(null,game,tile))){
return game;
} else {
var game__$1 = cljs.core.assoc_in.call(null,sweeper.game.add_threat_count.call(null,game,tile),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240),tile,new cljs.core.Keyword(null,"revealed?","revealed?",726959164)], null),true);
if(cljs.core._EQ_.call(null,(0),cljs.core.get_in.call(null,game__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240),tile,new cljs.core.Keyword(null,"threat-count","threat-count",637469945)], null)))){
return cljs.core.reduce.call(null,(function (game__$2,pos){
var adjacent = cljs.core.get_in.call(null,game__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240),pos], null));
if((((!((adjacent == null)))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(adjacent))))){
return sweeper.game.reveal_adjacent_safe_tiles.call(null,game__$2,pos);
} else {
return game__$2;
}
}),game__$1,cljs.core.keep.call(null,(function (p1__12430_SHARP_){
return p1__12430_SHARP_.call(null,game__$1,tile);
}),sweeper.game.directions));
} else {
return game__$1;
}
}
});
sweeper.game.attempt_winning = (function sweeper$game$attempt_winning(game){
if(sweeper.game.safe_QMARK_.call(null,game)){
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"safe?","safe?",1351599959),true);
} else {
return game;
}
});
sweeper.game.reveal_mine = (function sweeper$game$reveal_mine(tile){
if(cljs.core.truth_(new cljs.core.Keyword(null,"mine?","mine?",155874651).cljs$core$IFn$_invoke$arity$1(tile))){
return cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"revealed?","revealed?",726959164),true);
} else {
return tile;
}
});
sweeper.game.reveal_mines = (function sweeper$game$reveal_mines(game){
return cljs.core.update_in.call(null,game,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240)], null),(function (p1__12431_SHARP_){
return cljs.core.map.call(null,sweeper.game.reveal_mine,p1__12431_SHARP_);
}));
});
sweeper.game.reveal_tile = (function sweeper$game$reveal_tile(game,tile){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dead?","dead?",990391228).cljs$core$IFn$_invoke$arity$1(game))){
return game;
} else {
var updated = (((cljs.core.get_in.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240),tile], null)) == null))?game:cljs.core.assoc_in.call(null,game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240),tile,new cljs.core.Keyword(null,"revealed?","revealed?",726959164)], null),true));
if(cljs.core.truth_(sweeper.game.mine_QMARK_.call(null,updated,tile))){
return sweeper.game.reveal_mines.call(null,cljs.core.assoc.call(null,updated,new cljs.core.Keyword(null,"dead?","dead?",990391228),true));
} else {
return sweeper.game.attempt_winning.call(null,sweeper.game.reveal_adjacent_safe_tiles.call(null,sweeper.game.add_threat_count.call(null,updated,tile),tile));
}
}
});

//# sourceMappingURL=game.js.map
