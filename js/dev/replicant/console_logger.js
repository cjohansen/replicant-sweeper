// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('replicant.console_logger');
goog.require('cljs.core');
goog.require('clojure.walk');
replicant.console_logger.log = (function replicant$console_logger$log(x){
return console.log(x);
});
replicant.console_logger.print_heading = (function replicant$console_logger$print_heading(x){
return console.group(x);
});
replicant.console_logger.close_group = (function replicant$console_logger$close_group(){
return console.groupEnd();
});
replicant.console_logger.pprstr = (function replicant$console_logger$pprstr(x){
return cljs.core.pr_str.call(null,x);
});
replicant.console_logger.scrub_sexp = (function replicant$console_logger$scrub_sexp(sexp){
return clojure.walk.prewalk.call(null,(function (x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p1__9438_SHARP_){
return new cljs.core.Keyword("replicant","internal","replicant/internal",-1504696787).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.val.call(null,p1__9438_SHARP_)));
}),x));
} else {
return x;
}
}),sexp);
});
replicant.console_logger.abbreviate_sexp = (function replicant$console_logger$abbreviate_sexp(hiccup){
var scrubbed = replicant.console_logger.scrub_sexp.call(null,hiccup);
var len = ((cljs.core.pr_str.call(null,scrubbed)).length);
if((len < (100))){
return scrubbed;
} else {
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,(2),scrubbed)),new cljs.core.Symbol(null,"...","...",-1926939749,null));
}
});
replicant.console_logger.report = (function replicant$console_logger$report(p__9439){
var map__9440 = p__9439;
var map__9440__$1 = cljs.core.__destructure_map.call(null,map__9440);
var title = cljs.core.get.call(null,map__9440__$1,new cljs.core.Keyword(null,"title","title",636505583));
var message = cljs.core.get.call(null,map__9440__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var hiccup = cljs.core.get.call(null,map__9440__$1,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238));
var fname = cljs.core.get.call(null,map__9440__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var alias = cljs.core.get.call(null,map__9440__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var data = cljs.core.get.call(null,map__9440__$1,new cljs.core.Keyword(null,"data","data",-232669377));
replicant.console_logger.print_heading.call(null,["Replicant warning: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join(''));

replicant.console_logger.log.call(null,message);

if(cljs.core.truth_(fname)){
replicant.console_logger.log.call(null,["Function: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join(''));
} else {
}

if(cljs.core.truth_(alias)){
replicant.console_logger.log.call(null,["Alias: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''));
} else {
}

if(cljs.core.truth_(data)){
var formatted_9441 = replicant.console_logger.pprstr.call(null,data);
if((((formatted_9441).length) < (80))){
replicant.console_logger.log.call(null,["Input data: ",formatted_9441].join(''));
} else {
replicant.console_logger.log.call(null,"Input data:");

replicant.console_logger.log.call(null,formatted_9441);
}
} else {
}

replicant.console_logger.log.call(null,"Offending hiccup: ");

replicant.console_logger.log.call(null,replicant.console_logger.pprstr.call(null,replicant.console_logger.abbreviate_sexp.call(null,hiccup)));

return replicant.console_logger.close_group.call(null);
});

//# sourceMappingURL=console_logger.js.map
