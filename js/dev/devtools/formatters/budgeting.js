// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__9794__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__9794__auto__["add"]).call(o__9794__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__9794__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__9794__auto__["delete"]).call(o__9794__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__9794__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__9794__auto__["has"]).call(o__9794__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__12313 = data;
var target__9799__auto__ = G__12313;
if(cljs.core.truth_(target__9799__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12313)].join(''),"\n","target__9799__auto__"].join('')));
}

(target__9799__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__12313;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_12318 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_12318);
} else {
var seq__12314_12319 = cljs.core.seq.call(null,json_ml);
var chunk__12315_12320 = null;
var count__12316_12321 = (0);
var i__12317_12322 = (0);
while(true){
if((i__12317_12322 < count__12316_12321)){
var item_12323 = cljs.core._nth.call(null,chunk__12315_12320,i__12317_12322);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_12323,new_depth_budget_12318);


var G__12324 = seq__12314_12319;
var G__12325 = chunk__12315_12320;
var G__12326 = count__12316_12321;
var G__12327 = (i__12317_12322 + (1));
seq__12314_12319 = G__12324;
chunk__12315_12320 = G__12325;
count__12316_12321 = G__12326;
i__12317_12322 = G__12327;
continue;
} else {
var temp__5804__auto___12328 = cljs.core.seq.call(null,seq__12314_12319);
if(temp__5804__auto___12328){
var seq__12314_12329__$1 = temp__5804__auto___12328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12314_12329__$1)){
var c__5568__auto___12330 = cljs.core.chunk_first.call(null,seq__12314_12329__$1);
var G__12331 = cljs.core.chunk_rest.call(null,seq__12314_12329__$1);
var G__12332 = c__5568__auto___12330;
var G__12333 = cljs.core.count.call(null,c__5568__auto___12330);
var G__12334 = (0);
seq__12314_12319 = G__12331;
chunk__12315_12320 = G__12332;
count__12316_12321 = G__12333;
i__12317_12322 = G__12334;
continue;
} else {
var item_12335 = cljs.core.first.call(null,seq__12314_12329__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_12335,new_depth_budget_12318);


var G__12336 = cljs.core.next.call(null,seq__12314_12329__$1);
var G__12337 = null;
var G__12338 = (0);
var G__12339 = (0);
seq__12314_12319 = G__12336;
chunk__12315_12320 = G__12337;
count__12316_12321 = G__12338;
i__12317_12322 = G__12339;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5802__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5802__auto__)){
var initial_hierarchy_depth_budget = temp__5802__auto__;
var remaining_depth_budget = (function (){var or__5045__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map
