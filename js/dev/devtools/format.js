// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_12732 = (function (value){
var x__5393__auto__ = (((value == null))?null:value);
var m__5394__auto__ = (devtools.format._header[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,value);
} else {
var m__5392__auto__ = (devtools.format._header["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_12732.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_12733 = (function (value){
var x__5393__auto__ = (((value == null))?null:value);
var m__5394__auto__ = (devtools.format._has_body[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,value);
} else {
var m__5392__auto__ = (devtools.format._has_body["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_12733.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_12734 = (function (value){
var x__5393__auto__ = (((value == null))?null:value);
var m__5394__auto__ = (devtools.format._body[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,value);
} else {
var m__5392__auto__ = (devtools.format._body["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_12734.call(null,value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12735 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12735["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12736 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12736["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12737 = temp__5802__auto____$2;
return (o12737["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12738 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12738["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12739 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12739["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12740 = temp__5802__auto____$2;
return (o12740["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12741 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12741["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12742 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12742["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12743 = temp__5802__auto____$2;
return (o12743["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12744 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12744["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12745 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12745["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12746 = temp__5802__auto____$2;
return (o12746["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12747 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12747["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12748 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12748["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12749 = temp__5802__auto____$2;
return (o12749["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12750 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12750["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12751 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12751["markup"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12752 = temp__5802__auto____$2;
return (o12752["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12753 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12753["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12754 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12754["markup"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12755 = temp__5802__auto____$2;
return (o12755["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12757 = arguments.length;
var i__5770__auto___12758 = (0);
while(true){
if((i__5770__auto___12758 < len__5769__auto___12757)){
args__5775__auto__.push((arguments[i__5770__auto___12758]));

var G__12759 = (i__5770__auto___12758 + (1));
i__5770__auto___12758 = G__12759;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq12756){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12756));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12761 = arguments.length;
var i__5770__auto___12762 = (0);
while(true){
if((i__5770__auto___12762 < len__5769__auto___12761)){
args__5775__auto__.push((arguments[i__5770__auto___12762]));

var G__12763 = (i__5770__auto___12762 + (1));
i__5770__auto___12762 = G__12763;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq12760){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12760));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12765 = arguments.length;
var i__5770__auto___12766 = (0);
while(true){
if((i__5770__auto___12766 < len__5769__auto___12765)){
args__5775__auto__.push((arguments[i__5770__auto___12766]));

var G__12767 = (i__5770__auto___12766 + (1));
i__5770__auto___12766 = G__12767;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq12764){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12764));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12769 = arguments.length;
var i__5770__auto___12770 = (0);
while(true){
if((i__5770__auto___12770 < len__5769__auto___12769)){
args__5775__auto__.push((arguments[i__5770__auto___12770]));

var G__12771 = (i__5770__auto___12770 + (1));
i__5770__auto___12770 = G__12771;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq12768){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12768));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12773 = arguments.length;
var i__5770__auto___12774 = (0);
while(true){
if((i__5770__auto___12774 < len__5769__auto___12773)){
args__5775__auto__.push((arguments[i__5770__auto___12774]));

var G__12775 = (i__5770__auto___12774 + (1));
i__5770__auto___12774 = G__12775;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq12772){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12772));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12777 = arguments.length;
var i__5770__auto___12778 = (0);
while(true){
if((i__5770__auto___12778 < len__5769__auto___12777)){
args__5775__auto__.push((arguments[i__5770__auto___12778]));

var G__12779 = (i__5770__auto___12778 + (1));
i__5770__auto___12778 = G__12779;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq12776){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12776));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12781 = arguments.length;
var i__5770__auto___12782 = (0);
while(true){
if((i__5770__auto___12782 < len__5769__auto___12781)){
args__5775__auto__.push((arguments[i__5770__auto___12782]));

var G__12783 = (i__5770__auto___12782 + (1));
i__5770__auto___12782 = G__12783;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq12780){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12780));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12791 = arguments.length;
var i__5770__auto___12792 = (0);
while(true){
if((i__5770__auto___12792 < len__5769__auto___12791)){
args__5775__auto__.push((arguments[i__5770__auto___12792]));

var G__12793 = (i__5770__auto___12792 + (1));
i__5770__auto___12792 = G__12793;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__12787){
var vec__12788 = p__12787;
var state_override = cljs.core.nth.call(null,vec__12788,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__12784_SHARP_){
return cljs.core.merge.call(null,p1__12784_SHARP_,state_override);
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq12785){
var G__12786 = cljs.core.first.call(null,seq12785);
var seq12785__$1 = cljs.core.next.call(null,seq12785);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12786,seq12785__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12795 = arguments.length;
var i__5770__auto___12796 = (0);
while(true){
if((i__5770__auto___12796 < len__5769__auto___12795)){
args__5775__auto__.push((arguments[i__5770__auto___12796]));

var G__12797 = (i__5770__auto___12796 + (1));
i__5770__auto___12796 = G__12797;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq12794){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12794));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12800 = arguments.length;
var i__5770__auto___12801 = (0);
while(true){
if((i__5770__auto___12801 < len__5769__auto___12800)){
args__5775__auto__.push((arguments[i__5770__auto___12801]));

var G__12802 = (i__5770__auto___12801 + (1));
i__5770__auto___12801 = G__12802;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq12798){
var G__12799 = cljs.core.first.call(null,seq12798);
var seq12798__$1 = cljs.core.next.call(null,seq12798);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12799,seq12798__$1);
}));


//# sourceMappingURL=format.js.map
