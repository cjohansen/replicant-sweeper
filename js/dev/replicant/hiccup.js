// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('replicant.hiccup');
goog.require('cljs.core');
goog.require('clojure.string');
replicant.hiccup.hiccup_QMARK_ = (function replicant$hiccup$hiccup_QMARK_(sexp){
return ((cljs.core.vector_QMARK_.call(null,sexp)) && ((((!(cljs.core.map_entry_QMARK_.call(null,sexp)))) && ((((cljs.core.first.call(null,sexp) instanceof cljs.core.Keyword)) || (cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,sexp))))))));
});
replicant.hiccup.get_classes = (function replicant$hiccup$get_classes(classes){
return cljs.core.set.call(null,(((classes instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,classes)], null):((typeof classes === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classes], null):((cljs.core.empty_QMARK_.call(null,classes))?cljs.core.PersistentVector.EMPTY:((cljs.core.coll_QMARK_.call(null,classes))?cljs.core.map.call(null,(function (p1__9313_SHARP_){
if((p1__9313_SHARP_ instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,p1__9313_SHARP_);
} else {
return p1__9313_SHARP_;
}
}),classes):(((classes == null))?cljs.core.PersistentVector.EMPTY:(function(){throw cljs.core.ex_info.call(null,"Received class name that is neither string, keyword, or a collection of those",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null))})()
))))));
});
replicant.hiccup.parse_hiccup_symbol = (function replicant$hiccup$parse_hiccup_symbol(sym,attrs){
var vec__9315 = cljs.core.re_find.call(null,/#([^\.#]+)/,sym);
var _ = cljs.core.nth.call(null,vec__9315,(0),null);
var id = cljs.core.nth.call(null,vec__9315,(1),null);
var vec__9318 = clojure.string.split.call(null,clojure.string.replace.call(null,sym,/#([^#\.]+)/,""),/\./);
var seq__9319 = cljs.core.seq.call(null,vec__9318);
var first__9320 = cljs.core.first.call(null,seq__9319);
var seq__9319__$1 = cljs.core.next.call(null,seq__9319);
var el = first__9320;
var classes = seq__9319__$1;
var classes__$1 = cljs.core.remove.call(null,cljs.core.empty_QMARK_,cljs.core.mapcat.call(null,(function (p1__9314_SHARP_){
return clojure.string.split.call(null,p1__9314_SHARP_,/ +/);
}),cljs.core.concat.call(null,replicant.hiccup.get_classes.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs)),replicant.hiccup.get_classes.call(null,new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(attrs)),classes)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case.call(null,el),(function (){var G__9321 = cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"className","className",-1983287057));
var G__9321__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,G__9321,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__9321);
if(cljs.core.seq.call(null,classes__$1)){
return cljs.core.assoc.call(null,G__9321__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),classes__$1);
} else {
return G__9321__$1;
}
})()], null);
});
replicant.hiccup.get_tag_name = (function replicant$hiccup$get_tag_name(hiccup){
if(((cljs.core.coll_QMARK_.call(null,hiccup)) && ((cljs.core.first.call(null,hiccup) instanceof cljs.core.Keyword)))){
return cljs.core.re_find.call(null,/^[a-z0-9]+/,clojure.string.lower_case.call(null,cljs.core.name.call(null,cljs.core.first.call(null,hiccup))));
} else {
return null;
}
});
replicant.hiccup.explode_styles = (function replicant$hiccup$explode_styles(s){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__9322_SHARP_){
var vec__9323 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,p1__9322_SHARP_,/:/));
var k = cljs.core.nth.call(null,vec__9323,(0),null);
var v = cljs.core.nth.call(null,vec__9323,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}),clojure.string.split.call(null,s,/;/)));
});
replicant.hiccup.skip_pixelize_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 26, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),null,new cljs.core.Keyword(null,"box-flex-group","box-flex-group",-1468550335),null,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),null,new cljs.core.Keyword(null,"column-count","column-count",1235131236),null,new cljs.core.Keyword(null,"flex-negative","flex-negative",-1543996476),null,new cljs.core.Keyword(null,"tab-size","tab-size",-1265790523),null,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),null,new cljs.core.Keyword(null,"flex-order","flex-order",-621251126),null,new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),null,new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),null,new cljs.core.Keyword(null,"flex","flex",-1425124628),null,new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),null,new cljs.core.Keyword(null,"stop-opacity","stop-opacity",-2018003729),null,new cljs.core.Keyword(null,"orphans","orphans",1913357231),null,new cljs.core.Keyword(null,"widows","widows",1989591025),null,new cljs.core.Keyword(null,"z-index","z-index",1892827090),null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null,new cljs.core.Keyword(null,"opacity","opacity",397153780),null,new cljs.core.Keyword(null,"box-ordinal-group","box-ordinal-group",201694774),null,new cljs.core.Keyword(null,"order","order",-1254677256),null,new cljs.core.Keyword(null,"animation-iteration-count","animation-iteration-count",-1410888227),null,new cljs.core.Keyword(null,"line-clamp","line-clamp",-1079334403),null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),null,new cljs.core.Keyword(null,"flex-positive","flex-positive",-239614242),null,new cljs.core.Keyword(null,"box-flex","box-flex",-831196194),null], null), null);
replicant.hiccup.prep_styles = (function replicant$hiccup$prep_styles(styles){
return cljs.core.reduce.call(null,(function (m,p__9326){
var vec__9327 = p__9326;
var attr = cljs.core.nth.call(null,vec__9327,(0),null);
var v = cljs.core.nth.call(null,vec__9327,(1),null);
if(typeof v === 'number'){
if(cljs.core.truth_(replicant.hiccup.skip_pixelize_attrs.call(null,attr))){
return cljs.core.update.call(null,m,attr,cljs.core.str);
} else {
return cljs.core.update.call(null,m,attr,cljs.core.str,"px");
}
} else {
return m;
}
}),styles,styles);
});
replicant.hiccup.prep_hiccup_attrs = (function replicant$hiccup$prep_hiccup_attrs(attrs){
var G__9330 = attrs;
var G__9330__$1 = ((typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs) === 'string')?cljs.core.update.call(null,G__9330,new cljs.core.Keyword(null,"style","style",-496642736),replicant.hiccup.explode_styles):G__9330);
if(cljs.core.truth_(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.update.call(null,G__9330__$1,new cljs.core.Keyword(null,"style","style",-496642736),replicant.hiccup.prep_styles);
} else {
return G__9330__$1;
}
});
replicant.hiccup.flatten_seqs = (function replicant$hiccup$flatten_seqs(xs){
var res = cljs.core.PersistentVector.EMPTY;
var G__9334 = xs;
var vec__9335 = G__9334;
var seq__9336 = cljs.core.seq.call(null,vec__9335);
var first__9337 = cljs.core.first.call(null,seq__9336);
var seq__9336__$1 = cljs.core.next.call(null,seq__9336);
var x = first__9337;
var xs__$1 = seq__9336__$1;
var res__$1 = res;
var G__9334__$1 = G__9334;
while(true){
var res__$2 = res__$1;
var vec__9341 = G__9334__$1;
var seq__9342 = cljs.core.seq.call(null,vec__9341);
var first__9343 = cljs.core.first.call(null,seq__9342);
var seq__9342__$1 = cljs.core.next.call(null,seq__9342);
var x__$1 = first__9343;
var xs__$2 = seq__9342__$1;
if((((xs__$2 == null)) && ((x__$1 == null)))){
return cljs.core.not_empty.call(null,res__$2);
} else {
if(cljs.core.seq_QMARK_.call(null,x__$1)){
var G__9344 = cljs.core.into.call(null,res__$2,replicant.hiccup.flatten_seqs.call(null,x__$1));
var G__9345 = xs__$2;
res__$1 = G__9344;
G__9334__$1 = G__9345;
continue;
} else {
var G__9346 = cljs.core.conj.call(null,res__$2,x__$1);
var G__9347 = xs__$2;
res__$1 = G__9346;
G__9334__$1 = G__9347;
continue;

}
}
break;
}
});
replicant.hiccup.inflate = (function replicant$hiccup$inflate(sexp){
var tag_name = cljs.core.first.call(null,sexp);
var args = cljs.core.rest.call(null,sexp);
var args__$1 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))?args:cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),args));
if(cljs.core.fn_QMARK_.call(null,tag_name)){
return cljs.core.apply.call(null,tag_name,cljs.core.rest.call(null,sexp));
} else {
var vec__9348 = replicant.hiccup.parse_hiccup_symbol.call(null,cljs.core.name.call(null,tag_name),cljs.core.first.call(null,args__$1));
var tag_name__$1 = cljs.core.nth.call(null,vec__9348,(0),null);
var attrs = cljs.core.nth.call(null,vec__9348,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag-name","tag-name",-1615615357),tag_name__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),replicant.hiccup.prep_hiccup_attrs.call(null,attrs),new cljs.core.Keyword(null,"children","children",-940561982),replicant.hiccup.flatten_seqs.call(null,cljs.core.rest.call(null,args__$1))], null);
}
});

//# sourceMappingURL=hiccup.js.map
