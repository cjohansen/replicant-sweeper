// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('replicant.core');
goog.require('cljs.core');
goog.require('replicant.hiccup');
goog.require('replicant.protocols');
replicant.core._STAR_dispatch_STAR_ = null;
/**
 * Returns the function to use for handling DOM events. Uses `handler` directly
 *   when it's a function or a string (assumed to be inline JavaScript, not really
 *   recommended), or a wrapper that dispatches through
 *   `replicant.core/*dispatch*`, if it is bound to a function. 
 */
replicant.core.get_event_handler = (function replicant$core$get_event_handler(handler,event){
var or__5045__auto__ = ((cljs.core.fn_QMARK_.call(null,handler))?handler:null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = ((cljs.core.ifn_QMARK_.call(null,replicant.core._STAR_dispatch_STAR_))?(function (e){
return replicant.core._STAR_dispatch_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","event","replicant/event",-1213465932),new cljs.core.Keyword("replicant.event","dom-event","replicant.event/dom-event",691159940)], null),e,handler);
}):null);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = ((typeof handler === 'string')?handler:null);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
throw cljs.core.ex_info.call(null,"Cannot use non-function event handler when replicant.core/*dispatch* is not bound to a function",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),replicant.core._STAR_dispatch_STAR_], null));
}
}
}
});
/**
 * Returns the function to use to dispatch life-cycle hooks on an element. Uses
 *   `handler` directly when it's a function, or a wrapper that dispatches through
 *   `replicant.core/*dispatch*`, if it is bound to a function.
 */
replicant.core.get_life_cycle_hook = (function replicant$core$get_life_cycle_hook(handler){
var or__5045__auto__ = ((cljs.core.fn_QMARK_.call(null,handler))?handler:null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (cljs.core.truth_((function (){var and__5043__auto__ = handler;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.ifn_QMARK_.call(null,replicant.core._STAR_dispatch_STAR_);
} else {
return and__5043__auto__;
}
})())?(function (e){
return replicant.core._STAR_dispatch_STAR_.call(null,e,handler);
}):null);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
if(cljs.core.truth_(handler)){
throw cljs.core.ex_info.call(null,"Cannot use non-function life-cycle hook when replicant.core/*dispatch* is not bound to a function",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),replicant.core._STAR_dispatch_STAR_], null));
} else {
return null;
}
}
}
});
/**
 * Register the life-cycle hook from the corresponding virtual DOM node to call in
 *   `impl`, if any. The only time the hook in `old` is used is when `new` is
 *   `nil`, which means the node is unmounting. `details` is a vector of keywords
 *   that provide some detail about why the hook is invoked.
 */
replicant.core.register_hook = (function replicant$core$register_hook(var_args){
var args__5775__auto__ = [];
var len__5769__auto___9363 = arguments.length;
var i__5770__auto___9364 = (0);
while(true){
if((i__5770__auto___9364 < len__5769__auto___9363)){
args__5775__auto__.push((arguments[i__5770__auto___9364]));

var G__9365 = (i__5770__auto___9364 + (1));
i__5770__auto___9364 = G__9365;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return replicant.core.register_hook.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(replicant.core.register_hook.cljs$core$IFn$_invoke$arity$variadic = (function (p__9357,node,new$,p__9358){
var map__9359 = p__9357;
var map__9359__$1 = cljs.core.__destructure_map.call(null,map__9359);
var hooks = cljs.core.get.call(null,map__9359__$1,new cljs.core.Keyword(null,"hooks","hooks",-413590103));
var vec__9360 = p__9358;
var old = cljs.core.nth.call(null,vec__9360,(0),null);
var details = cljs.core.nth.call(null,vec__9360,(1),null);
var temp__5804__auto__ = new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394).cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new$)?cljs.core.second.call(null,new$):cljs.core.second.call(null,old)));
if(cljs.core.truth_(temp__5804__auto__)){
var hook = temp__5804__auto__;
return cljs.core.swap_BANG_.call(null,hooks,cljs.core.conj,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook,node,new$,old,details], null));
} else {
return null;
}
}));

(replicant.core.register_hook.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.register_hook.cljs$lang$applyTo = (function (seq9353){
var G__9354 = cljs.core.first.call(null,seq9353);
var seq9353__$1 = cljs.core.next.call(null,seq9353);
var G__9355 = cljs.core.first.call(null,seq9353__$1);
var seq9353__$2 = cljs.core.next.call(null,seq9353__$1);
var G__9356 = cljs.core.first.call(null,seq9353__$2);
var seq9353__$3 = cljs.core.next.call(null,seq9353__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9354,G__9355,G__9356,seq9353__$3);
}));

replicant.core.update_styles = (function replicant$core$update_styles(impl,el,new_styles,old_styles){
var seq__9366 = cljs.core.seq.call(null,cljs.core.seq.call(null,cljs.core.into.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_styles)),cljs.core.keys.call(null,old_styles))));
var chunk__9367 = null;
var count__9368 = (0);
var i__9369 = (0);
while(true){
if((i__9369 < count__9368)){
var k = cljs.core._nth.call(null,chunk__9367,i__9369);
var new_style_9370 = k.call(null,new_styles);
if((new_style_9370 == null)){
replicant.protocols.remove_style.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,k);
} else {
if(cljs.core.not_EQ_.call(null,new_style_9370,k.call(null,old_styles))){
replicant.protocols.set_style.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,k,new_style_9370);
} else {
}
}


var G__9371 = seq__9366;
var G__9372 = chunk__9367;
var G__9373 = count__9368;
var G__9374 = (i__9369 + (1));
seq__9366 = G__9371;
chunk__9367 = G__9372;
count__9368 = G__9373;
i__9369 = G__9374;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__9366);
if(temp__5804__auto__){
var seq__9366__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9366__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__9366__$1);
var G__9375 = cljs.core.chunk_rest.call(null,seq__9366__$1);
var G__9376 = c__5568__auto__;
var G__9377 = cljs.core.count.call(null,c__5568__auto__);
var G__9378 = (0);
seq__9366 = G__9375;
chunk__9367 = G__9376;
count__9368 = G__9377;
i__9369 = G__9378;
continue;
} else {
var k = cljs.core.first.call(null,seq__9366__$1);
var new_style_9379 = k.call(null,new_styles);
if((new_style_9379 == null)){
replicant.protocols.remove_style.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,k);
} else {
if(cljs.core.not_EQ_.call(null,new_style_9379,k.call(null,old_styles))){
replicant.protocols.set_style.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,k,new_style_9379);
} else {
}
}


var G__9380 = cljs.core.next.call(null,seq__9366__$1);
var G__9381 = null;
var G__9382 = (0);
var G__9383 = (0);
seq__9366 = G__9380;
chunk__9367 = G__9381;
count__9368 = G__9382;
i__9369 = G__9383;
continue;
}
} else {
return null;
}
}
break;
}
});
replicant.core.update_classes = (function replicant$core$update_classes(impl,el,new_classes,old_classes){
var seq__9384_9392 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,new_classes),old_classes));
var chunk__9385_9393 = null;
var count__9386_9394 = (0);
var i__9387_9395 = (0);
while(true){
if((i__9387_9395 < count__9386_9394)){
var class_9396 = cljs.core._nth.call(null,chunk__9385_9393,i__9387_9395);
replicant.protocols.remove_class.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,class_9396);


var G__9397 = seq__9384_9392;
var G__9398 = chunk__9385_9393;
var G__9399 = count__9386_9394;
var G__9400 = (i__9387_9395 + (1));
seq__9384_9392 = G__9397;
chunk__9385_9393 = G__9398;
count__9386_9394 = G__9399;
i__9387_9395 = G__9400;
continue;
} else {
var temp__5804__auto___9401 = cljs.core.seq.call(null,seq__9384_9392);
if(temp__5804__auto___9401){
var seq__9384_9402__$1 = temp__5804__auto___9401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9384_9402__$1)){
var c__5568__auto___9403 = cljs.core.chunk_first.call(null,seq__9384_9402__$1);
var G__9404 = cljs.core.chunk_rest.call(null,seq__9384_9402__$1);
var G__9405 = c__5568__auto___9403;
var G__9406 = cljs.core.count.call(null,c__5568__auto___9403);
var G__9407 = (0);
seq__9384_9392 = G__9404;
chunk__9385_9393 = G__9405;
count__9386_9394 = G__9406;
i__9387_9395 = G__9407;
continue;
} else {
var class_9408 = cljs.core.first.call(null,seq__9384_9402__$1);
replicant.protocols.remove_class.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,class_9408);


var G__9409 = cljs.core.next.call(null,seq__9384_9402__$1);
var G__9410 = null;
var G__9411 = (0);
var G__9412 = (0);
seq__9384_9392 = G__9409;
chunk__9385_9393 = G__9410;
count__9386_9394 = G__9411;
i__9387_9395 = G__9412;
continue;
}
} else {
}
}
break;
}

var seq__9388 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,old_classes),new_classes));
var chunk__9389 = null;
var count__9390 = (0);
var i__9391 = (0);
while(true){
if((i__9391 < count__9390)){
var class$ = cljs.core._nth.call(null,chunk__9389,i__9391);
replicant.protocols.add_class.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,class$);


var G__9413 = seq__9388;
var G__9414 = chunk__9389;
var G__9415 = count__9390;
var G__9416 = (i__9391 + (1));
seq__9388 = G__9413;
chunk__9389 = G__9414;
count__9390 = G__9415;
i__9391 = G__9416;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__9388);
if(temp__5804__auto__){
var seq__9388__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9388__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__9388__$1);
var G__9417 = cljs.core.chunk_rest.call(null,seq__9388__$1);
var G__9418 = c__5568__auto__;
var G__9419 = cljs.core.count.call(null,c__5568__auto__);
var G__9420 = (0);
seq__9388 = G__9417;
chunk__9389 = G__9418;
count__9390 = G__9419;
i__9391 = G__9420;
continue;
} else {
var class$ = cljs.core.first.call(null,seq__9388__$1);
replicant.protocols.add_class.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,class$);


var G__9421 = cljs.core.next.call(null,seq__9388__$1);
var G__9422 = null;
var G__9423 = (0);
var G__9424 = (0);
seq__9388 = G__9421;
chunk__9389 = G__9422;
count__9390 = G__9423;
i__9391 = G__9424;
continue;
}
} else {
return null;
}
}
break;
}
});
replicant.core.add_event_listeners = (function replicant$core$add_event_listeners(impl,el,val){
var seq__9425 = cljs.core.seq.call(null,val);
var chunk__9426 = null;
var count__9427 = (0);
var i__9428 = (0);
while(true){
if((i__9428 < count__9427)){
var vec__9435 = cljs.core._nth.call(null,chunk__9426,i__9428);
var event = cljs.core.nth.call(null,vec__9435,(0),null);
var handler = cljs.core.nth.call(null,vec__9435,(1),null);
var temp__5804__auto___9441 = replicant.core.get_event_handler.call(null,handler,event);
if(cljs.core.truth_(temp__5804__auto___9441)){
var handler_9442__$1 = temp__5804__auto___9441;
replicant.protocols.set_event_handler.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,event,handler_9442__$1);
} else {
}


var G__9443 = seq__9425;
var G__9444 = chunk__9426;
var G__9445 = count__9427;
var G__9446 = (i__9428 + (1));
seq__9425 = G__9443;
chunk__9426 = G__9444;
count__9427 = G__9445;
i__9428 = G__9446;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__9425);
if(temp__5804__auto__){
var seq__9425__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9425__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__9425__$1);
var G__9447 = cljs.core.chunk_rest.call(null,seq__9425__$1);
var G__9448 = c__5568__auto__;
var G__9449 = cljs.core.count.call(null,c__5568__auto__);
var G__9450 = (0);
seq__9425 = G__9447;
chunk__9426 = G__9448;
count__9427 = G__9449;
i__9428 = G__9450;
continue;
} else {
var vec__9438 = cljs.core.first.call(null,seq__9425__$1);
var event = cljs.core.nth.call(null,vec__9438,(0),null);
var handler = cljs.core.nth.call(null,vec__9438,(1),null);
var temp__5804__auto___9451__$1 = replicant.core.get_event_handler.call(null,handler,event);
if(cljs.core.truth_(temp__5804__auto___9451__$1)){
var handler_9452__$1 = temp__5804__auto___9451__$1;
replicant.protocols.set_event_handler.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,event,handler_9452__$1);
} else {
}


var G__9453 = cljs.core.next.call(null,seq__9425__$1);
var G__9454 = null;
var G__9455 = (0);
var G__9456 = (0);
seq__9425 = G__9453;
chunk__9426 = G__9454;
count__9427 = G__9455;
i__9428 = G__9456;
continue;
}
} else {
return null;
}
}
break;
}
});
replicant.core.update_event_listeners = (function replicant$core$update_event_listeners(impl,el,new_handlers,old_handlers){
var seq__9458_9462 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_handlers)),cljs.core.keys.call(null,old_handlers)));
var chunk__9459_9463 = null;
var count__9460_9464 = (0);
var i__9461_9465 = (0);
while(true){
if((i__9461_9465 < count__9460_9464)){
var event_9466 = cljs.core._nth.call(null,chunk__9459_9463,i__9461_9465);
replicant.protocols.remove_event_handler.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,event_9466);


var G__9467 = seq__9458_9462;
var G__9468 = chunk__9459_9463;
var G__9469 = count__9460_9464;
var G__9470 = (i__9461_9465 + (1));
seq__9458_9462 = G__9467;
chunk__9459_9463 = G__9468;
count__9460_9464 = G__9469;
i__9461_9465 = G__9470;
continue;
} else {
var temp__5804__auto___9471 = cljs.core.seq.call(null,seq__9458_9462);
if(temp__5804__auto___9471){
var seq__9458_9472__$1 = temp__5804__auto___9471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9458_9472__$1)){
var c__5568__auto___9473 = cljs.core.chunk_first.call(null,seq__9458_9472__$1);
var G__9474 = cljs.core.chunk_rest.call(null,seq__9458_9472__$1);
var G__9475 = c__5568__auto___9473;
var G__9476 = cljs.core.count.call(null,c__5568__auto___9473);
var G__9477 = (0);
seq__9458_9462 = G__9474;
chunk__9459_9463 = G__9475;
count__9460_9464 = G__9476;
i__9461_9465 = G__9477;
continue;
} else {
var event_9478 = cljs.core.first.call(null,seq__9458_9472__$1);
replicant.protocols.remove_event_handler.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,event_9478);


var G__9479 = cljs.core.next.call(null,seq__9458_9472__$1);
var G__9480 = null;
var G__9481 = (0);
var G__9482 = (0);
seq__9458_9462 = G__9479;
chunk__9459_9463 = G__9480;
count__9460_9464 = G__9481;
i__9461_9465 = G__9482;
continue;
}
} else {
}
}
break;
}

return replicant.core.add_event_listeners.call(null,impl,el,cljs.core.remove.call(null,(function (p1__9457_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.val.call(null,p1__9457_SHARP_),cljs.core.get.call(null,old_handlers,cljs.core.key.call(null,p1__9457_SHARP_)));
}),new_handlers));
});
replicant.core.xlinkns = "http://www.w3.org/1999/xlink";
replicant.core.xmlns = "http://www.w3.org/XML/1998/namespace";
replicant.core.update_attr = (function replicant$core$update_attr(impl,el,attr,new$,old){
var G__9483 = attr;
var G__9483__$1 = (((G__9483 instanceof cljs.core.Keyword))?G__9483.fqn:null);
switch (G__9483__$1) {
case "style":
return replicant.core.update_styles.call(null,impl,el,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(new$),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(old));

break;
case "classes":
return replicant.core.update_classes.call(null,impl,el,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(new$),new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(old));

break;
case "on":
return replicant.core.update_event_listeners.call(null,impl,el,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(new$),new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(old));

break;
default:
var temp__5802__auto__ = attr.call(null,new$);
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
if(cljs.core.not_EQ_.call(null,v,attr.call(null,old))){
var an = cljs.core.name.call(null,attr);
return replicant.protocols.set_attribute.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,an,v,(function (){var G__9484 = cljs.core.PersistentArrayMap.EMPTY;
var G__9484__$1 = (cljs.core.truth_(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x","m","l"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x","m","l"], null)]).call(null,cljs.core.take.call(null,(3),an)))?cljs.core.assoc.call(null,G__9484,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xmlns):G__9484);
if(cljs.core.truth_(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x","l","i","n","k",":"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x","l","i","n","k",":"], null)]).call(null,cljs.core.take.call(null,(6),an)))){
return cljs.core.assoc.call(null,G__9484__$1,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xlinkns);
} else {
return G__9484__$1;
}
})());
} else {
return null;
}
} else {
return replicant.protocols.remove_attribute.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,cljs.core.name.call(null,attr));
}

}
});
replicant.core.update_attributes = (function replicant$core$update_attributes(impl,el,new_attrs,old_attrs){
var seq__9486_9490 = cljs.core.seq.call(null,cljs.core.into.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_attrs)),cljs.core.keys.call(null,old_attrs)));
var chunk__9487_9491 = null;
var count__9488_9492 = (0);
var i__9489_9493 = (0);
while(true){
if((i__9489_9493 < count__9488_9492)){
var attr_9494 = cljs.core._nth.call(null,chunk__9487_9491,i__9489_9493);
replicant.core.update_attr.call(null,impl,el,attr_9494,new_attrs,old_attrs);


var G__9495 = seq__9486_9490;
var G__9496 = chunk__9487_9491;
var G__9497 = count__9488_9492;
var G__9498 = (i__9489_9493 + (1));
seq__9486_9490 = G__9495;
chunk__9487_9491 = G__9496;
count__9488_9492 = G__9497;
i__9489_9493 = G__9498;
continue;
} else {
var temp__5804__auto___9499 = cljs.core.seq.call(null,seq__9486_9490);
if(temp__5804__auto___9499){
var seq__9486_9500__$1 = temp__5804__auto___9499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9486_9500__$1)){
var c__5568__auto___9501 = cljs.core.chunk_first.call(null,seq__9486_9500__$1);
var G__9502 = cljs.core.chunk_rest.call(null,seq__9486_9500__$1);
var G__9503 = c__5568__auto___9501;
var G__9504 = cljs.core.count.call(null,c__5568__auto___9501);
var G__9505 = (0);
seq__9486_9490 = G__9502;
chunk__9487_9491 = G__9503;
count__9488_9492 = G__9504;
i__9489_9493 = G__9505;
continue;
} else {
var attr_9506 = cljs.core.first.call(null,seq__9486_9500__$1);
replicant.core.update_attr.call(null,impl,el,attr_9506,new_attrs,old_attrs);


var G__9507 = cljs.core.next.call(null,seq__9486_9500__$1);
var G__9508 = null;
var G__9509 = (0);
var G__9510 = (0);
seq__9486_9490 = G__9507;
chunk__9487_9491 = G__9508;
count__9488_9492 = G__9509;
i__9489_9493 = G__9510;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"changed?","changed?",-437828330),cljs.core.not_EQ_.call(null,new_attrs,old_attrs)], null);
});
replicant.core.strip_nil_vals = (function replicant$core$strip_nil_vals(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.val),m));
});
replicant.core.update_existing = (function replicant$core$update_existing(var_args){
var args__5775__auto__ = [];
var len__5769__auto___9514 = arguments.length;
var i__5770__auto___9515 = (0);
while(true){
if((i__5770__auto___9515 < len__5769__auto___9514)){
args__5775__auto__.push((arguments[i__5770__auto___9515]));

var G__9516 = (i__5770__auto___9515 + (1));
i__5770__auto___9515 = G__9516;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return replicant.core.update_existing.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(replicant.core.update_existing.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,args){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return cljs.core.apply.call(null,cljs.core.update,m,k,args);
} else {
return m;
}
}));

(replicant.core.update_existing.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(replicant.core.update_existing.cljs$lang$applyTo = (function (seq9511){
var G__9512 = cljs.core.first.call(null,seq9511);
var seq9511__$1 = cljs.core.next.call(null,seq9511);
var G__9513 = cljs.core.first.call(null,seq9511__$1);
var seq9511__$2 = cljs.core.next.call(null,seq9511__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9512,G__9513,seq9511__$2);
}));

replicant.core.prep_attributes = (function replicant$core$prep_attributes(attrs){
return replicant.core.update_existing.call(null,replicant.core.update_existing.call(null,replicant.core.strip_nil_vals.call(null,cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394),new cljs.core.Keyword("replicant.core","ns","replicant.core/ns",-681953193))),new cljs.core.Keyword(null,"style","style",-496642736),replicant.core.strip_nil_vals),new cljs.core.Keyword(null,"on","on",173873944),replicant.core.strip_nil_vals);
});
replicant.core.namespace_hiccup = (function replicant$core$namespace_hiccup(hiccup,el_ns){
if(typeof hiccup === 'string'){
return hiccup;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,hiccup))){
return cljs.core.assoc_in.call(null,hiccup,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword("replicant.core","ns","replicant.core/ns",-681953193)], null),el_ns);
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,hiccup),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant.core","ns","replicant.core/ns",-681953193),el_ns], null)], null),cljs.core.rest.call(null,hiccup));

}
}
});
/**
 * Normalize hiccup form. Parses out class names and ids from the tag and returns
 *   a map of:
 * 
 *   - `:tag-name` - A string
 *   - `:attrs` - Parsed attributes
 *   - `:children` - A flattened list of children
 *   - `:ns` - Namespace for element (SVG)
 * 
 *   Some attributes receive special care:
 * 
 *   - `:classes` is a list of classes, extracted by parsing out dotted classes
 *  from the hiccup tag (e.g. "heading" in `:h1.heading`), as well as strings,
 *  keywords, or a collection of either from both `:class` and `:className`.
 *   - `:style` is a map of styles, even when the input hiccup provided a string
 *   - `:innerHTML` when this attribute is present, `:children` will be ignored
 * 
 *   ```clj
 *   (inflate-hiccup [:h1.heading "Hello"])
 *   ;;=>
 *   ;; {:tag-name "h1",
 *   ;;  :attrs {:classes ("heading")},
 *   ;;  :children ["Heading"]}
 *   ```
 */
replicant.core.inflate_hiccup = (function replicant$core$inflate_hiccup(hiccup){
var inflated = replicant.hiccup.inflate.call(null,hiccup);
var el_ns = (function (){var or__5045__auto__ = new cljs.core.Keyword("replicant.core","ns","replicant.core/ns",-681953193).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(inflated));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core._EQ_.call(null,"svg",new cljs.core.Keyword(null,"tag-name","tag-name",-1615615357).cljs$core$IFn$_invoke$arity$1(inflated))){
return "http://www.w3.org/2000/svg";
} else {
return null;
}
}
})();
var G__9518 = cljs.core.update.call(null,inflated,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),replicant.core.prep_attributes);
var G__9518__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(inflated)))?cljs.core.dissoc.call(null,G__9518,new cljs.core.Keyword(null,"children","children",-940561982)):G__9518);
var G__9518__$2 = (cljs.core.truth_(el_ns)?cljs.core.assoc.call(null,G__9518__$1,new cljs.core.Keyword(null,"ns","ns",441598760),el_ns):G__9518__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = el_ns;
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inflated);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.update.call(null,G__9518__$2,new cljs.core.Keyword(null,"children","children",-940561982),(function (xs){
return cljs.core.map.call(null,(function (p1__9517_SHARP_){
return replicant.core.namespace_hiccup.call(null,p1__9517_SHARP_,el_ns);
}),xs);
}));
} else {
return G__9518__$2;
}
});
replicant.core.append_children = (function replicant$core$append_children(impl,el,children){
var seq__9519_9523 = cljs.core.seq.call(null,children);
var chunk__9520_9524 = null;
var count__9521_9525 = (0);
var i__9522_9526 = (0);
while(true){
if((i__9522_9526 < count__9521_9525)){
var child_9527 = cljs.core._nth.call(null,chunk__9520_9524,i__9522_9526);
replicant.protocols.append_child.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,child_9527);


var G__9528 = seq__9519_9523;
var G__9529 = chunk__9520_9524;
var G__9530 = count__9521_9525;
var G__9531 = (i__9522_9526 + (1));
seq__9519_9523 = G__9528;
chunk__9520_9524 = G__9529;
count__9521_9525 = G__9530;
i__9522_9526 = G__9531;
continue;
} else {
var temp__5804__auto___9532 = cljs.core.seq.call(null,seq__9519_9523);
if(temp__5804__auto___9532){
var seq__9519_9533__$1 = temp__5804__auto___9532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9519_9533__$1)){
var c__5568__auto___9534 = cljs.core.chunk_first.call(null,seq__9519_9533__$1);
var G__9535 = cljs.core.chunk_rest.call(null,seq__9519_9533__$1);
var G__9536 = c__5568__auto___9534;
var G__9537 = cljs.core.count.call(null,c__5568__auto___9534);
var G__9538 = (0);
seq__9519_9523 = G__9535;
chunk__9520_9524 = G__9536;
count__9521_9525 = G__9537;
i__9522_9526 = G__9538;
continue;
} else {
var child_9539 = cljs.core.first.call(null,seq__9519_9533__$1);
replicant.protocols.append_child.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,child_9539);


var G__9540 = cljs.core.next.call(null,seq__9519_9533__$1);
var G__9541 = null;
var G__9542 = (0);
var G__9543 = (0);
seq__9519_9523 = G__9540;
chunk__9520_9524 = G__9541;
count__9521_9525 = G__9542;
i__9522_9526 = G__9543;
continue;
}
} else {
}
}
break;
}

return el;
});
/**
 * Create DOM node according to virtual DOM in `hiccup`. Register relevant
 *   life-cycle hooks from the new node or its descendants in `impl`. Returns
 *   the newly created node.
 */
replicant.core.create_node = (function replicant$core$create_node(impl,hiccup){
if(replicant.hiccup.hiccup_QMARK_.call(null,hiccup)){
var map__9545 = replicant.core.inflate_hiccup.call(null,hiccup);
var map__9545__$1 = cljs.core.__destructure_map.call(null,map__9545);
var tag_name = cljs.core.get.call(null,map__9545__$1,new cljs.core.Keyword(null,"tag-name","tag-name",-1615615357));
var attrs = cljs.core.get.call(null,map__9545__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children = cljs.core.get.call(null,map__9545__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var ns = cljs.core.get.call(null,map__9545__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var children__$1 = cljs.core.mapv.call(null,(function (p1__9544_SHARP_){
return replicant.core.create_node.call(null,impl,p1__9544_SHARP_);
}),children);
var node = replicant.protocols.create_element.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),tag_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
replicant.core.update_attributes.call(null,impl,node,attrs,null);

replicant.core.append_children.call(null,impl,node,children__$1);

replicant.core.register_hook.call(null,impl,node,hiccup);

return node;
} else {
return replicant.protocols.create_text_node.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup));
}
});
/**
 * Two elements are considered the "same" if they are both hiccup elements with
 *   the same tag name and the same key (or both have no key) - or they are both
 *   strings.
 * 
 *   Sameness in this case indicates that the node can be used for reconciliation
 *   instead of creating a new node from scratch.
 */
replicant.core.same_QMARK_ = (function replicant$core$same_QMARK_(a,b){
return ((((typeof a === 'string') && (typeof b === 'string'))) || (((cljs.core._EQ_.call(null,replicant.hiccup.get_tag_name.call(null,a),replicant.hiccup.get_tag_name.call(null,b))) && (cljs.core._EQ_.call(null,cljs.core.get_in.call(null,a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),cljs.core.get_in.call(null,b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null)))))));
});
/**
 * Returns `true` when nodes have changed in such a way that a new node should be
 *   created. `changed?` is not the strict complement of `same?`, because it does
 *   not consider any two strings the same - only the exact same string.
 */
replicant.core.changed_QMARK_ = (function replicant$core$changed_QMARK_(new$,old){
return ((cljs.core.not_EQ_.call(null,cljs.core.type.call(null,old),cljs.core.type.call(null,new$))) || (((((typeof old === 'string') && (cljs.core.not_EQ_.call(null,new$,old)))) || (cljs.core.not_EQ_.call(null,replicant.hiccup.get_tag_name.call(null,old),replicant.hiccup.get_tag_name.call(null,new$))))));
});
replicant.core.update_children = (function replicant$core$update_children(impl,el,new$,old){
var r = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl);
var get_child = (function (p1__9546_SHARP_){
return replicant.protocols.get_child.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,p1__9546_SHARP_);
});
var new_c = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(new$);
var old_c = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(old);
var n = (0);
var move_n = (0);
var n_children = cljs.core.count.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(old));
var changed_QMARK_ = false;
while(true){
var new_hiccup = cljs.core.first.call(null,new_c);
var old_hiccup = cljs.core.first.call(null,old_c);
if((((new_c == null)) && ((old_c == null)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"changed?","changed?",-437828330),changed_QMARK_], null);
} else {
if((new_c == null)){
var child = replicant.protocols.get_child.call(null,r,el,n);
replicant.protocols.remove_child.call(null,r,el,child);

replicant.core.register_hook.call(null,impl,child,null,old_hiccup);

var G__9549 = null;
var G__9550 = cljs.core.next.call(null,old_c);
var G__9551 = (n + (1));
var G__9552 = move_n;
var G__9553 = (n_children - (1));
var G__9554 = true;
new_c = G__9549;
old_c = G__9550;
n = G__9551;
move_n = G__9552;
n_children = G__9553;
changed_QMARK_ = G__9554;
continue;
} else {
if((old_c == null)){
var child = replicant.core.create_node.call(null,impl,new_hiccup);
replicant.protocols.append_child.call(null,r,el,child);

var G__9555 = cljs.core.next.call(null,new_c);
var G__9556 = null;
var G__9557 = (n + (1));
var G__9558 = move_n;
var G__9559 = (n_children + (1));
var G__9560 = true;
new_c = G__9555;
old_c = G__9556;
n = G__9557;
move_n = G__9558;
n_children = G__9559;
changed_QMARK_ = G__9560;
continue;
} else {
if(replicant.core.same_QMARK_.call(null,new_hiccup,old_hiccup)){
var node_changed_QMARK_ = cljs.core.not_EQ_.call(null,new_hiccup,old_hiccup);
replicant.core.reconcile_STAR_.call(null,impl,el,new_hiccup,old_hiccup,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),n], null));

if((((!(node_changed_QMARK_))) && ((n < move_n)))){
replicant.core.register_hook.call(null,impl,get_child.call(null,n),new_hiccup,old_hiccup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","move-node","replicant/move-node",-1189251602)], null));
} else {
}

var G__9561 = cljs.core.next.call(null,new_c);
var G__9562 = cljs.core.next.call(null,old_c);
var G__9563 = (n + (1));
var G__9564 = move_n;
var G__9565 = n_children;
var G__9566 = ((changed_QMARK_) || (node_changed_QMARK_));
new_c = G__9561;
old_c = G__9562;
n = G__9563;
move_n = G__9564;
n_children = G__9565;
changed_QMARK_ = G__9566;
continue;
} else {
var old_upto = cljs.core.take_while.call(null,((function (new_c,old_c,n,move_n,n_children,changed_QMARK_,new_hiccup,old_hiccup,r,get_child){
return (function (p1__9547_SHARP_){
return (!(replicant.core.same_QMARK_.call(null,new_hiccup,p1__9547_SHARP_)));
});})(new_c,old_c,n,move_n,n_children,changed_QMARK_,new_hiccup,old_hiccup,r,get_child))
,old_c);
var o_idx = cljs.core.count.call(null,old_upto);
var new_upto = cljs.core.take_while.call(null,((function (new_c,old_c,n,move_n,n_children,changed_QMARK_,old_upto,o_idx,new_hiccup,old_hiccup,r,get_child){
return (function (p1__9548_SHARP_){
return (!(replicant.core.same_QMARK_.call(null,old_hiccup,p1__9548_SHARP_)));
});})(new_c,old_c,n,move_n,n_children,changed_QMARK_,old_upto,o_idx,new_hiccup,old_hiccup,r,get_child))
,new_c);
var n_idx = cljs.core.count.call(null,new_upto);
if(cljs.core._EQ_.call(null,o_idx,cljs.core.count.call(null,old_c))){
var child = replicant.core.create_node.call(null,impl,new_hiccup);
if((n_children <= n)){
replicant.protocols.append_child.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,child);
} else {
replicant.protocols.insert_before.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,child,get_child.call(null,n));
}

var G__9567 = cljs.core.next.call(null,new_c);
var G__9568 = old_c;
var G__9569 = (n + (1));
var G__9570 = move_n;
var G__9571 = (n_children + (1));
var G__9572 = true;
new_c = G__9567;
old_c = G__9568;
n = G__9569;
move_n = G__9570;
n_children = G__9571;
changed_QMARK_ = G__9572;
continue;
} else {
if((o_idx < n_idx)){
var idx = ((n + n_idx) + (1));
var child = get_child.call(null,n);
if((idx < n_children)){
replicant.protocols.insert_before.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,child,get_child.call(null,idx));
} else {
replicant.protocols.append_child.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,child);
}

replicant.core.register_hook.call(null,impl,child,cljs.core.nth.call(null,new_c,n_idx),old_hiccup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","move-node","replicant/move-node",-1189251602)], null));

var G__9573 = new_c;
var G__9574 = cljs.core.concat.call(null,cljs.core.take.call(null,n_idx,cljs.core.next.call(null,old_c)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,old_c)], null),cljs.core.drop.call(null,(n_idx + (1)),old_c));
var G__9575 = n;
var G__9576 = (idx - (1));
var G__9577 = n_children;
var G__9578 = true;
new_c = G__9573;
old_c = G__9574;
n = G__9575;
move_n = G__9576;
n_children = G__9577;
changed_QMARK_ = G__9578;
continue;
} else {
var idx = (n + o_idx);
var child = get_child.call(null,idx);
var corresponding_old_hiccup = cljs.core.nth.call(null,old_c,o_idx);
replicant.protocols.insert_before.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,child,get_child.call(null,n));

replicant.core.reconcile_STAR_.call(null,impl,el,new_hiccup,corresponding_old_hiccup,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),n], null));

if(cljs.core._EQ_.call(null,new_hiccup,corresponding_old_hiccup)){
replicant.core.register_hook.call(null,impl,child,new_hiccup,corresponding_old_hiccup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","move-node","replicant/move-node",-1189251602)], null));
} else {
}

var G__9579 = cljs.core.next.call(null,new_c);
var G__9580 = cljs.core.concat.call(null,old_upto,cljs.core.drop.call(null,(o_idx + (1)),old_c));
var G__9581 = (n + (1));
var G__9582 = ((n + o_idx) + (1));
var G__9583 = n_children;
var G__9584 = true;
new_c = G__9579;
old_c = G__9580;
n = G__9581;
move_n = G__9582;
n_children = G__9583;
changed_QMARK_ = G__9584;
continue;

}
}

}
}
}
}
break;
}
});
replicant.core.reconcile_STAR_ = (function replicant$core$reconcile_STAR_(impl,el,new$,old,p__9585){
var map__9586 = p__9585;
var map__9586__$1 = cljs.core.__destructure_map.call(null,map__9586);
var index = cljs.core.get.call(null,map__9586__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if(cljs.core._EQ_.call(null,new$,old)){
return null;
} else {
if((new$ == null)){
var child = replicant.protocols.get_child.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,index);
replicant.protocols.remove_child.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,child);

return replicant.core.register_hook.call(null,impl,child,new$,old);
} else {
if(replicant.core.changed_QMARK_.call(null,new$,old)){
var node = replicant.core.create_node.call(null,impl,new$);
return replicant.protocols.replace_child.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,node,replicant.protocols.get_child.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,index));
} else {
if((!(typeof new$ === 'string'))){
var old_STAR_ = replicant.core.inflate_hiccup.call(null,old);
var new_STAR_ = replicant.core.inflate_hiccup.call(null,new$);
var child = replicant.protocols.get_child.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl),el,index);
var post_attrs = replicant.core.update_attributes.call(null,impl,child,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_STAR_),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(old_STAR_));
var post_children = replicant.core.update_children.call(null,impl,child,new_STAR_,old_STAR_);
var attrs_changed_QMARK_ = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"changed?","changed?",-437828330).cljs$core$IFn$_invoke$arity$1(post_attrs);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,new$)),new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,old)));
}
})();
return replicant.core.register_hook.call(null,impl,child,new$,old,cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(attrs_changed_QMARK_)?new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895):null),(cljs.core.truth_(new cljs.core.Keyword(null,"changed?","changed?",-437828330).cljs$core$IFn$_invoke$arity$1(post_children))?new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229):null)], null)));
} else {
return null;
}
}
}
}
});
/**
 * Call the lifecycle hooks gathered during reconciliation.
 */
replicant.core.call_hooks = (function replicant$core$call_hooks(p__9587){
var vec__9588 = p__9587;
var hook = cljs.core.nth.call(null,vec__9588,(0),null);
var node = cljs.core.nth.call(null,vec__9588,(1),null);
var new$ = cljs.core.nth.call(null,vec__9588,(2),null);
var old = cljs.core.nth.call(null,vec__9588,(3),null);
var details = cljs.core.nth.call(null,vec__9588,(4),null);
var f = replicant.core.get_life_cycle_hook.call(null,hook);
return f.call(null,(function (){var G__9591 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("replicant","event","replicant/event",-1213465932),new cljs.core.Keyword("replicant.event","life-cycle","replicant.event/life-cycle",-436446242),new cljs.core.Keyword("replicant","life-cycle","replicant/life-cycle",1802888458),(((old == null))?new cljs.core.Keyword("replicant","mount","replicant/mount",-3811720):(((new$ == null))?new cljs.core.Keyword("replicant","unmount","replicant/unmount",-1954993863):new cljs.core.Keyword("replicant","update","replicant/update",1503983686)
)),new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node], null);
if(cljs.core.truth_(details)){
return cljs.core.assoc.call(null,G__9591,new cljs.core.Keyword("replicant","details","replicant/details",-1846218867),details);
} else {
return G__9591;
}
})());
});
/**
 * Reconcile the DOM in `el` by diffing the `new` hiccup with the `old` hiccup. If
 *   there is no `old` hiccup, `reconcile` will create the DOM as per `new`.
 *   Assumes that the DOM in `el` is in sync with `old` - if not, this will
 *   certainly not produce the desired result.
 */
replicant.core.reconcile = (function replicant$core$reconcile(var_args){
var args__5775__auto__ = [];
var len__5769__auto___9604 = arguments.length;
var i__5770__auto___9605 = (0);
while(true){
if((i__5770__auto___9605 < len__5769__auto___9604)){
args__5775__auto__.push((arguments[i__5770__auto___9605]));

var G__9606 = (i__5770__auto___9605 + (1));
i__5770__auto___9605 = G__9606;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic = (function (renderer,el,new$,p__9596){
var vec__9597 = p__9596;
var old = cljs.core.nth.call(null,vec__9597,(0),null);
var impl = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"hooks","hooks",-413590103),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)], null);
if((old == null)){
replicant.protocols.append_child.call(null,renderer,el,replicant.core.create_node.call(null,impl,new$));
} else {
replicant.core.reconcile_STAR_.call(null,impl,el,new$,old,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),(0)], null));
}

var hooks = cljs.core.deref.call(null,new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(impl));
var seq__9600_9607 = cljs.core.seq.call(null,hooks);
var chunk__9601_9608 = null;
var count__9602_9609 = (0);
var i__9603_9610 = (0);
while(true){
if((i__9603_9610 < count__9602_9609)){
var hook_9611 = cljs.core._nth.call(null,chunk__9601_9608,i__9603_9610);
replicant.core.call_hooks.call(null,hook_9611);


var G__9612 = seq__9600_9607;
var G__9613 = chunk__9601_9608;
var G__9614 = count__9602_9609;
var G__9615 = (i__9603_9610 + (1));
seq__9600_9607 = G__9612;
chunk__9601_9608 = G__9613;
count__9602_9609 = G__9614;
i__9603_9610 = G__9615;
continue;
} else {
var temp__5804__auto___9616 = cljs.core.seq.call(null,seq__9600_9607);
if(temp__5804__auto___9616){
var seq__9600_9617__$1 = temp__5804__auto___9616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9600_9617__$1)){
var c__5568__auto___9618 = cljs.core.chunk_first.call(null,seq__9600_9617__$1);
var G__9619 = cljs.core.chunk_rest.call(null,seq__9600_9617__$1);
var G__9620 = c__5568__auto___9618;
var G__9621 = cljs.core.count.call(null,c__5568__auto___9618);
var G__9622 = (0);
seq__9600_9607 = G__9619;
chunk__9601_9608 = G__9620;
count__9602_9609 = G__9621;
i__9603_9610 = G__9622;
continue;
} else {
var hook_9623 = cljs.core.first.call(null,seq__9600_9617__$1);
replicant.core.call_hooks.call(null,hook_9623);


var G__9624 = cljs.core.next.call(null,seq__9600_9617__$1);
var G__9625 = null;
var G__9626 = (0);
var G__9627 = (0);
seq__9600_9607 = G__9624;
chunk__9601_9608 = G__9625;
count__9602_9609 = G__9626;
i__9603_9610 = G__9627;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hooks","hooks",-413590103),hooks], null);
}));

(replicant.core.reconcile.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.reconcile.cljs$lang$applyTo = (function (seq9592){
var G__9593 = cljs.core.first.call(null,seq9592);
var seq9592__$1 = cljs.core.next.call(null,seq9592);
var G__9594 = cljs.core.first.call(null,seq9592__$1);
var seq9592__$2 = cljs.core.next.call(null,seq9592__$1);
var G__9595 = cljs.core.first.call(null,seq9592__$2);
var seq9592__$3 = cljs.core.next.call(null,seq9592__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9593,G__9594,G__9595,seq9592__$3);
}));


//# sourceMappingURL=core.js.map
