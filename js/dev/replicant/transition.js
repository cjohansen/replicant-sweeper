// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('replicant.transition');
goog.require('cljs.core');
replicant.transition.get_transition_stats = (function replicant$transition$get_transition_stats(transition_duration_s){
var str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(transition_duration_s);
var n = (0);
var duration = (0);
while(true){
var s = str.indexOf("s");
var ms = str.indexOf("ms");
var comma = str.indexOf(",");
if((((s < (0))) && ((ms < (0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.unchecked_int.call(null,duration)], null);
} else {
var G__12508 = (((comma < (0)))?"":str.substring((comma + (1))).trimLeft());
var G__12509 = (n + (1));
var G__12510 = (function (){var x__5130__auto__ = duration;
var y__5131__auto__ = (((((s < ms)) || ((ms < (0)))))?((1000) * cljs.core.parse_double.call(null,str.substring((0),s))):cljs.core.parse_long.call(null,str.substring((0),ms)));
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
str = G__12508;
n = G__12509;
duration = G__12510;
continue;
}
break;
}
});

//# sourceMappingURL=transition.js.map
